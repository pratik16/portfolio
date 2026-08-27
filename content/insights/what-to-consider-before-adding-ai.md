---
title: "What Australian businesses should consider before adding AI"
description: "Notes from building and running a production AI platform — on picking the right problem, what it actually costs, where your data goes, and how to tell a demo from a product."
date: "2026-06-18"
readingTime: "8 min read"
topics: ["AI", "LLM", "Architecture", "Business"]
draft: false
---

I run a live AI platform. PotatoAIHub does chat, image and video generation across several model providers, and I built and operate all of it. That experience has made me considerably more useful to clients asking about AI, and considerably less excitable about it.

Here is what I think is worth knowing before spending money.

## Start from the task, not the technology

The most common way an AI project goes wrong is that it begins with "where could we use AI?" rather than "which specific, repeated, expensive task do we want handled?"

Projects that start from the technology produce demonstrations. Projects that start from a task produce value.

Good candidates share a shape. They are:

- **Repetitive** — happening many times a week, not occasionally.
- **Language-shaped** — reading, summarising, classifying, extracting, drafting.
- **Currently expensive** — a person is doing it, and their time is worth more elsewhere.
- **Tolerant of review** — a human can sanity-check the output before it matters.

"Our support team reads 200 emails a day and routes them to the right department" is a good candidate. "We should have an AI strategy" is not a candidate at all.

## Your data is messier than the demo

This is where most enthusiasm meets reality.

Every AI feature works beautifully on clean, representative examples. Your business does not have clean, representative examples. It has documents scanned at an angle, product names spelled four different ways, and PDFs that are pictures of text.

**Test against your real data early, before committing significant money.** Take a genuine sample — including the awkward cases, not just the tidy ones — and see what actually happens. This is a small piece of work that routinely saves a large one.

If a viability test on real data fails, that is a cheap and extremely valuable result.

## Cost is an architectural concern

Every AI request costs money. That sounds obvious and it changes the design more than people expect.

A feature that costs a few cents per request is fine at a hundred requests a day and a serious problem at fifty thousand. That threshold needs thinking about *before* building, not after the first invoice.

Practical things that matter:

- **Not every step needs a model.** In most workflows, the majority of steps are ordinary logic — validation, routing, formatting, database lookups. Use AI for the steps that genuinely need judgement, and code for everything else. It is cheaper, faster and far more predictable.
- **Model choice is a real decision.** The largest model is not required for classification. Matching the model to the difficulty of the task is often the single biggest cost lever available.
- **Cache what repeats.** Identical or near-identical requests are common in business workflows and do not need paying for twice.

## Long-running work breaks normal web assumptions

This one is architectural and it catches teams out.

A normal web request completes in milliseconds. Image and video generation take considerably longer than any request should be held open for. If that is not designed for from the start, you get timeouts, retries that duplicate paid work, and an interface that appears frozen.

The answer is asynchronous processing: the request is queued, the interface stays responsive, and the result is delivered when it is ready. Retrofitting this into a system that assumed synchronous responses is significantly harder than building it that way initially.

## Providers fail, and they change

Any external API can be slow, rate-limited or down. AI providers additionally deprecate models, change pricing, and adjust behaviour in ways that alter your output without your code changing.

Two things follow:

**Do not integrate one provider directly throughout your application.** Put model providers behind a single internal interface. The application talks to your abstraction; each provider's differences stay contained in one place. Adding or swapping a model then becomes an integration rather than a refactor. This is exactly how PotatoAIHub is built, and it is why supporting several providers is manageable rather than chaotic.

**Decide what happens when a provider fails.** Fall back to another model? Queue and retry? Fail visibly? All are reasonable — but it should be a decision, not something you discover during an outage.

## Where your data goes deserves a deliberate answer

For an Australian business this is a genuine question and it deserves better than being discovered after the fact.

Worth settling before anything is built:

- What data actually leaves your systems?
- Which providers see it, and where are they hosted?
- What do they retain, and for how long?
- Is any of it subject to obligations — privacy, health records, contractual terms with your own customers?
- What could be processed locally instead?

There are usually good options: sending less data, stripping identifiers before the request, or handling sensitive categories with a local model. They are much easier to design in than to add later.

## Automating the decision is not the same as automating the work

Worth being precise about, because the two get conflated and they carry very different risk.

**Automating the work** means AI prepares something and a person approves it. Drafts an email, summarises a case file, suggests a category. Low risk, immediate value, and the person stays accountable.

**Automating the decision** means the output takes effect with nobody looking. Much higher value when it works, much higher exposure when it does not.

Most businesses should start with the first. Move to the second only where you have measured how the system performs on real data over real time — and even then, deliberately.

## Sometimes the answer is no

An honest one to finish on.

A meaningful proportion of the AI ideas I am asked about would be better served by a database query, a fixed rules engine, or fixing a process that is broken for non-technical reasons. Those solutions are cheaper, faster, more reliable and easier to explain to an auditor.

AI is genuinely useful for a specific class of problem: work that involves understanding unstructured language, where the rules are too numerous or too fuzzy to write down. Outside that class it is usually an expensive way to solve something that had a simpler answer.

Working out which situation you are in is a legitimate first piece of work, and it does not require committing to a build.

---

*Thinking about adding AI to your product or operations? [Get in touch](/contact) — including if what you want is a straight answer on whether it is worth doing at all.*
