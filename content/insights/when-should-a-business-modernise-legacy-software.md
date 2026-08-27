---
title: "When should a business actually modernise its legacy software?"
description: "Old software is not automatically a problem worth spending on. Six signals that mean it is — and the ones that only feel urgent."
date: "2026-05-12"
readingTime: "7 min read"
topics: ["Legacy modernisation", "Business", "Architecture"]
draft: false
---

"Legacy" gets used as an insult by developers and heard as an alarm by business owners. Both are unhelpful.

A ten-year-old system that runs reliably, that people know how to use, and that nobody needs to change much is not a problem. It is an asset that has finished depreciating. Replacing it because it is old is spending money to solve a discomfort rather than a business issue.

So the question worth asking is not *is our software old?* It is *is our software costing us something we can name?*

Here are the signals that genuinely mean yes.

## 1. Change has become slow and unpredictable

The clearest signal is not how the code looks. It is how long a small change takes, and how confident anyone is about it.

If a modest feature takes weeks, or if nobody can say with confidence what else it might break, you are paying a tax on every improvement to your business. That tax compounds, because it also stops you attempting things — the change nobody proposes because it would be too painful is an invisible cost, and often the largest one.

**Worth measuring:** how long did your last five small changes actually take, against what you would have expected?

## 2. It is slowing down as you grow

Performance degradation that tracks your data volume is a real signal, because it gets worse on its own.

It also has an unusual property among legacy problems: it is often fixable without major structural work. Slowness usually comes from queries and data access rather than architecture, and can frequently be addressed directly. On a decade-old platform I worked on, query and schema optimisation produced improvements of up to 80% on many API endpoints without touching the application architecture.

So this signal means *investigate*, not automatically *rebuild*.

## 3. Only one person understands it — or nobody does

Key-person risk on a system that runs your business is a genuine commercial exposure, not just an engineering inconvenience.

If the person who built it has left and what remains is difficult for anyone else to work on, you are one resignation or one illness away from being unable to change something you depend on.

This is a strong signal, and worth acting on before it becomes urgent, because it becomes urgent at the worst possible moment by definition.

## 4. You are running unsupported versions

This one is more concrete than most.

If your PHP version, framework version or database is out of support, you are no longer receiving security patches. Newly discovered vulnerabilities in your stack simply stay open.

It also compounds quietly — every year you wait, the upgrade path gets longer and the number of breaking changes to work through increases. The cost of this work only goes up.

**A useful check:** find out what versions you are actually running and what their support status is. It is a short question with a factual answer, and the answer is sometimes alarming.

## 5. It is blocking something the business wants to do

The most commercially legitimate signal of all.

You want to offer customers a mobile app, but there is no API to build against. You want to integrate with a supplier's system, but there is nowhere sensible to connect. You want to sell to larger clients, but they require security or audit capabilities the system cannot provide.

When the software is the reason a business opportunity is unavailable, the cost of not modernising becomes quantifiable — and it is usually the argument that makes the investment obviously worthwhile.

## 6. Deployment is a manual, nervous event

If releasing changes requires a specific person, a documented ritual and a quiet evening, that friction is shaping your business more than it appears.

It means you release rarely. Releasing rarely means each release contains more changes. More changes per release means higher risk. Higher risk justifies releasing rarely. The loop is self-reinforcing and it slows everything down.

This is also among the cheapest things on this list to fix, and the improvement is felt immediately by everyone.

## Signals that feel urgent but usually are not

Worth naming, because they consume budget that has better uses.

**"The technology is unfashionable."** PHP and Laravel run an enormous share of the commercial web and are actively developed. A stack being unexciting to developers is not a business risk.

**"A developer says the code is bad."** Sometimes true and important. But every developer finds unfamiliar code unpleasant, and the instinct to rewrite is close to universal. Ask what specifically is wrong and what it costs the business — a good engineer can answer that clearly.

**"A competitor rebuilt theirs."** You do not know whether that went well. A striking number of rewrites are quietly regretted.

## What to do with a real signal

If several of the above apply, the next step is not a rewrite quote. It is an assessment.

A technical assessment establishes what you actually have — architecture, code quality, performance, security exposure, real risks — and turns it into a small number of costed options. It is a modest piece of work and it changes the conversation from a vague worry into a decision you can make.

Frequently the finding is narrower and cheaper than feared: one specific bottleneck, one version upgrade, one module worth rebuilding while the rest is left alone.

And occasionally the honest finding is that the system is fine and the money is better spent elsewhere. That is a good outcome too, and it is worth paying a small amount to know it.

---

*Not sure which of these describes your situation? [Get in touch](/contact) — a short conversation will usually establish whether there is a real problem here worth spending on.*
