---
title: "How I'm Taking Big Bets With AI and Email Marketing at Glide"
date: 2026-09-01
description: "Most AI use cases in email marketing chase volume and efficiency. I'm building something different for Glide: workflows that write emails entirely from what a specific contact has done and what they're trying to accomplish."
---

I am taking some big, unproven bets on new programs with my clients. Most of the AI use cases I see promote volume and efficiency. My hope is different: create something differentiated, something far more creative and effective than what was done before.

## The Gap Nobody's Filling

I'm testing this with Glide right now, after looking at a lot of competitors in the no-code and vibe-coding space. Personalization in B2B and SaaS almost always means one of two things: segmentation, or behavioral triggers. If I take a certain action, an email fires off telling me to do something.

There isn't much that gives me content built around my own account.

The closest thing is a tool like Grammarly, that sends you a usage recap. They pipe your product data into an HTML template and ship it to you, which is genuinely useful. But no one is getting into the specific mindset of an individual customer and crafting content around it. Feasibly, from a workflow standpoint, that's buildable.

So that's what I set out to do: build workflows that are written entirely from what a specific contact has done and what they're trying to accomplish, and see if that changes engagement, and eventually, revenue.

## The Approach

Workflow tools like this are usually expensive to build. I'm fortunate that Glide lets me build this directly inside their app (thinly veiled product pitch), and what's come out of it has been genuinely exciting.

I mapped the whole thing out as a flowchart. At a high level, the app pulls a contact's engagement data from HubSpot, their product usage data from PostHog, and any other internal context worth including, then pieces all of it together into a single email.

Before any of that can happen, though, the system needs a foundation: tone-of-voice guidelines for how emails should sound, and a set of content "angles" with their own principles. For example, if someone comes in to build a no-code app in Glide, they likely have an adjacent use case they haven't considered yet, something we can proactively suggest. A restaurant owner building a menu app might also benefit from inventory management. That suggestion is unique to them.

## The Research Layer

Underneath the tone guidelines sits a retrieval research file. When a contact matches the criteria for an email, the engine has to research them first. It looks at what they've told us they want to build in Glide (since we ask at signup, and an agent builds it from there), pulls segmentation data from their HubSpot profile (industry, company size, business type), and layers in usage signals from PostHog.

Separate agents pull all of that together into a single "story" of the contact. That story gets referenced every time we generate a new email for them.

## Writing the Email

Once the story exists, an agent selects the angle to run. Right now, while we're still building this out, it's always angle one. The engine hands the copywriter agent the principles for that angle along with the contact's story, and the copywriter agent drafts the email.

The rules are specific: whether to hedge on assumptions about what someone's built, no em dashes, no filler, how tight the subject line needs to be. Because AI is notoriously bad at sticking to rules like these, a QA agent reviews the draft against them. If it fails, it gets flagged and sent back to the copywriter agent to fix.

## The Testing Grind

Most of my time so far has gone into testing. I run a batch of 10 or 20 contacts through the system, review what comes out, and look for patterns in what it's getting wrong. In one early batch, the subject lines came out in title case instead of sentence case, every word capitalized. That became a new rule.

Eventually, once we're confident enough in the output, we let it run without human approval. That's a significant shift: up to this point, a human has reviewed nearly everything. But for PLG companies with high signup volume, manual review doesn't scale. At some point you have to trust the machine enough to let it run on its own.

## Being Honest About the Machine

Every email includes a short disclaimer at the bottom: we're building systems to understand your business better than anyone else, and because AI is generating a lot of this content, it might get something wrong, so tell us if anything's off.

That disclosure matters because this message is coming from a brand, not a person. We're not faking a human-to-human relationship. This is a system, and I want that to read as effort, not as a gimmick: we built something to understand exactly what you're trying to do, so we can help you get there faster.

## Closing the Loop

Once an email is written and approved, a separate agent loads the output back into HubSpot properties (each paragraph, the subject line, and a handful of supporting fields). The app also logs which contact has received which angle, so nothing gets duplicated.

## Where This Stands

We're still mid-build. We launched the first email a week ago, and early engagement, especially in B2B PLG SaaS, has been strong. I'm eager to push more volume through it.

As an email marketer, I think this is the kind of bet we need to be willing to make. Differentiating means taking on bigger, slower bets to get the quality right, not just shipping faster with AI. I'm not vibe coding any of this. I'm using every AI tool available to figure out what actually works, and using that to build something better than what anyone else in this space is doing. That's where we're at. We'll see how it goes.

---

*Michael Roberts is the founder of Boost My Email, a fractional email marketing consultancy for B2B SaaS companies. He helps teams build email programs that actually move metrics.*
