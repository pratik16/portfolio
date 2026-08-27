---
title: "Why your Laravel API slows down as your database grows"
description: "An API that was fast at launch and is slow two years later almost never has a traffic problem. It has a data problem, and the causes are predictable enough to list."
date: "2026-07-22"
readingTime: "8 min read"
topics: ["Performance", "Laravel", "PostgreSQL", "APIs"]
draft: false
---

There is a specific and very common failure pattern in business applications: the software was fast when it launched, it is slow now, and nothing about the code has obviously changed.

The instinct is to blame traffic and buy a bigger server. That occasionally helps a little. Usually it buys a few months and a larger bill, because the actual cause was never traffic.

It was data volume. And the causes are predictable enough to work through as a list.

## The N+1 query, still undefeated

This remains the single most common cause of a slow Laravel endpoint, and ORMs make it almost invisible.

```php
$invoices = Invoice::all();

foreach ($invoices as $invoice) {
    echo $invoice->client->name;  // one query, per invoice
}
```

With 20 invoices in development this runs in no time at all and looks perfectly correct. With 40,000 invoices in production it issues 40,001 queries.

The fix is eager loading:

```php
$invoices = Invoice::with('client')->get();  // two queries, total
```

The reason this survives code review so reliably is that the broken version is *shorter and more readable*. Nothing in the code signals a problem. You have to know to look for it.

Install a query log or a debug bar in development and watch the query count on your heaviest endpoints. An endpoint issuing hundreds of queries is telling you something specific.

## Indexes that made sense once

Indexes get added when a table is created and then rarely revisited. Meanwhile the application changes how it reads the data.

A few patterns worth checking:

- **Foreign keys without indexes.** Many frameworks do not create them automatically. Every join through an unindexed foreign key gets more expensive as both tables grow.
- **Composite indexes in the wrong order.** An index on `(status, created_at)` helps a query filtering by `status`. It does very little for one filtering only by `created_at`. Column order is not cosmetic.
- **Indexes the query planner cannot use.** Wrapping a column in a function — `WHERE DATE(created_at) = ?` — usually discards the index entirely. Compare against a range instead.

Run `EXPLAIN` (or `EXPLAIN ANALYZE` in PostgreSQL) against your slowest queries. A sequential scan on a large table is the database telling you plainly what is wrong.

## `SELECT *` on tables that have grown sideways

Tables accumulate columns. A record that had eight columns at launch now has thirty, including a few `text` columns holding serialised blobs or notes.

`Invoice::all()` pulls every one of those columns across the wire for every row, then hydrates them all into model objects, to display four fields in a list.

```php
Invoice::select('id', 'number', 'total', 'status')->get();
```

On a wide table with many rows this is not a marginal gain. It is often the difference between a fast endpoint and a slow one, and it costs nothing to do.

## Counting things the expensive way

Pagination is a frequent and well-hidden offender. `paginate()` runs a `COUNT(*)` over the full filtered result set on every request so it can report the total number of pages.

On a large table with a non-trivial `WHERE` clause, that count can cost more than fetching the actual page of results.

If the interface only needs "next" and "previous", `simplePaginate()` skips the count entirely. If a total genuinely is needed, consider whether an approximate count or a cached one would do.

## Doing in PHP what the database does better

As applications grow, logic tends to migrate into the application layer, where it is easier to write and test. Sometimes that is exactly right. Sometimes it means pulling 50,000 rows into memory to sum a column.

Aggregation, filtering and sorting are what a database is for, and it will do them faster than PHP will — on indexed columns, without loading the rows into memory at all.

The signal to watch for: a request that loads a large collection and then reduces it to a single number.

## Growth changes which query plan is correct

This one is genuinely counter-intuitive, and it is the reason performance degrades *gradually* rather than all at once.

Query planners choose a strategy based on statistics about the data. When a table is small, a sequential scan is often genuinely the fastest option. As it grows, the correct plan changes — and if statistics are stale, or if the query is shaped so the planner cannot use an index, it may keep choosing the strategy that used to be right.

This is why a query that was fine for eighteen months becomes a problem in a single month. Nothing changed in the code. The data crossed a threshold.

## Measure first, always

The most important point, and the one most often skipped.

Every item above is a *candidate*, not a diagnosis. The bottleneck is very rarely where the team assumes it is. Optimising the wrong thing is a reliable way to spend money and change nothing.

On a legacy platform I spent three years on, the working assumption was that the ageing framework was responsible for the slowness. Profiling showed otherwise — it was query patterns and schema decisions that had been perfectly reasonable at a smaller data volume. Addressing those produced improvements of up to 80% on many endpoints, without changing the application architecture at all.

That result was only available because the profiling happened before the plan, not after it.

## A practical order of work

1. **Find the slowest real user journeys.** Not synthetic benchmarks — the endpoints people actually wait on.
2. **Log the query count and query time per request.** An endpoint issuing 200 queries has a structural problem, not a tuning problem.
3. **`EXPLAIN` the worst queries.** Look for sequential scans on large tables and unexpected join orders.
4. **Fix causes, not symptoms.** Caching something slow makes it fast until the cache misses, at which point you have the original problem plus a cache to reason about.
5. **Re-measure.** Confirm the change did what you expected. Sometimes it does not.

## When it is genuinely architectural

Occasionally the honest answer is that the data model no longer fits how the product is used, and no amount of indexing will rescue it. Multi-tenant systems that outgrew a shared-table design are a common example.

That is a real finding, and it points to schema redesign or a migration. But it is a conclusion to *reach* through measurement, not a place to start — because it is a far more expensive answer than the ones above, and most of the time one of those turns out to be sufficient.

---

*If your API has quietly become slow and nobody is certain why, [get in touch](/contact). Working out what is actually happening is usually a short piece of work with a clear answer at the end.*
