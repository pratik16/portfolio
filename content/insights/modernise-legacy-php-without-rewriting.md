---
title: "How to modernise a legacy PHP application without rewriting everything"
description: "A rewrite is usually the most expensive way to solve a problem an incremental migration would have handled. Here is the approach that took a ten-year-old PHP platform to a modern architecture while it stayed in production."
date: "2026-08-14"
readingTime: "9 min read"
topics: ["Legacy modernisation", "PHP", "Laravel", "Architecture"]
draft: false
---

Every few years a business arrives at the same conversation. The application that runs the company is old. Changes take too long. It has become slow. Someone has quoted for a full rewrite, and the number is frightening.

The rewrite is almost always the wrong answer, and the reason is not sentimentality about old code.

## Why rewrites fail more often than they should

A working system that has been in production for years contains something valuable that is very easy to underestimate: every business rule the company has ever needed, including the ones nobody wrote down.

Those rules did not arrive by design. They accumulated. A special case for one large customer. A tax calculation that changed in 2019. A workflow exception that exists because of how the warehouse actually operates rather than how the process diagram says it does.

A rewrite means rediscovering all of it. Not from documentation, because there is none, but from reading old code and from customers complaining about things that used to work.

Meanwhile you have committed to a period — usually much longer than estimated — where the business gets no new features, because the whole engineering budget is going into building something it already has.

Rewrites are occasionally right. The case has to be *made*, though, not assumed. And the case is much rarer than the industry's enthusiasm for it suggests.

## Separate the two problems first

Most legacy systems present with two symptoms at once: they are slow, and they are hard to change. These feel like one problem. They are usually not, and treating them separately is the single most useful move available.

**Slowness** is typically caused by queries and data access — schema and indexing decisions that were fine at a tenth of the current data volume.

**Difficulty changing** is caused by structure — business logic spread across the codebase without clear boundaries.

They are separable, which means you do not have to wait for an architectural programme to finish before the application gets faster. On a ten-year-old PHP platform I worked on for three years, this distinction mattered enormously. The assumption going in was that the ageing framework was the performance problem. It was not. Profiling showed the worst endpoints were slow because of query patterns, joins that had grown with the product, and indexes that no longer matched how the data was actually read.

Fixing that produced improvements of up to 80% on many API endpoints — *before* any architectural migration. The users felt the difference within weeks, not years.

## Measure before you touch anything

This is worth saying plainly because it is skipped so often: profile the system before deciding what to fix.

The bottleneck is very rarely where the team assumes. Everyone has a theory — the framework, the server, "the database" in general terms — and the theory is usually wrong in an expensive way. Optimising code that is not the bottleneck produces no improvement and considerable cost.

Find the slowest real user journeys. Profile them. Look at what the queries actually do, not what they were intended to do. `EXPLAIN` is free and frequently humbling.

## Migrate incrementally, behind stable interfaces

Once you do move to a modern architecture, do it one module at a time, with the product live throughout.

The approach that works:

1. **Pick a module with clear boundaries.** Something with relatively few tendrils into the rest of the system. Not the most important module — the most *separable* one.
2. **Define the interface first.** The rest of the application talks to the new module through a stable contract. It does not know or care what is behind it.
3. **Build the replacement behind that interface.** New code, modern framework, proper structure.
4. **Cut over that module only.** Everything else keeps running exactly as it was.
5. **Repeat.**

The property that makes this work is that **the risk at any single moment stays small**. A big-bang cutover concentrates all of a project's risk into one weekend. Incremental migration spreads it across many small, individually recoverable steps.

It also means value arrives continuously. Each migrated module is faster and easier to work on the day it ships, rather than in eighteen months when the whole thing is finally done.

## Backward compatibility is a feature, not a constraint

If your system has users, it has behaviour someone depends on. Some of that behaviour is documented, some is not, and some is arguably a bug that a customer has built their process around.

Preserving it deliberately is what allows modernisation to happen without breaking the business. This is not an argument for keeping bad behaviour forever — it is an argument for changing it as a *decision* rather than as a side effect of a rewrite.

On the platform I mentioned, backward compatibility was maintained throughout the entire migration. Customers experienced the modernisation as the application getting faster. That is the correct outcome.

## Do not recreate the problem

The reason the legacy system became hard to change was, usually, that it grew without boundaries. If you migrate to a modern framework and carry the same lack of structure across, you have spent a lot of money to arrive back where you started with newer syntax.

The parts you rebuild should have genuine boundaries — clear responsibilities, dependencies that point in one direction, and code that a new developer can read without a guided tour. SOLID principles are useful here not as doctrine but as a check: if a class is hard to describe in one sentence, it is probably doing several things.

Coding standards and code review matter more during a migration than at any other time, because you are setting the pattern that the remaining migration will follow.

## What this looks like in practice

For a typical engagement, the honest sequence is:

- **Assess.** What is actually there, what is actually wrong, and what would each option cost. Sometimes the finding is that the system is fundamentally sound and one specific thing is broken. That is a good outcome and it is worth paying a small amount to discover.
- **Recover performance.** Usually the fastest visible win, and it buys time and goodwill for the structural work.
- **Migrate incrementally.** Module by module, in production, with backward compatibility maintained.
- **Leave it maintainable.** So that this is not the same conversation again in five years.

## The question worth asking

Before commissioning a rewrite, ask the person proposing it a simple question: *what specifically is wrong, and how do you know?*

If the answer is a measurement — profiled endpoints, a specific architectural constraint, a framework genuinely out of support with no upgrade path — that is a real case worth taking seriously.

If the answer is that the code is old and the new framework would be nicer to work in, that is a preference, and it is about to be a very expensive one.

---

*Working through this on your own system? [Get in touch](/contact) — a technical assessment is usually the cheapest way to turn a vague worry into a specific set of costed options.*
