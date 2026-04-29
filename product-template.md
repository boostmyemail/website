# New Product Template
# Copy this file to src/content/products/your-product-slug.md
# The filename (without .md) becomes the URL: /products/your-product-slug/

---
# REQUIRED FIELDS

# The product name as it appears on the page and in browser tabs
title: "Your Product Title"

# One-line description shown as a subhead on the product page and in cards
tagline: "A clear, specific sentence about what this product does for the buyer."

# Numeric price used for sorting (no $ sign)
price: 297

# Display price shown on cards and the product page header
# Examples: "$297", "$150/hr", "$2,999", "Free"
price_label: "$297"

# Product type — controls the category badge on cards
# Options: done-for-you | consulting | digital
category: "digital"

# Label for the CTA button on the product page and cards
# Examples: "Book a call", "Buy now", "Get it", "Book a block"
cta_label: "Buy now"

# Where the CTA button links to — Calendly, Stripe Payment Link, or any URL
cta_url: "https://calendly.com/boostmyemail"

# OPTIONAL FIELDS

# Set to true to show this product in the Featured Products section on the homepage
# Omit or set to false to keep it off the homepage
featured: false

# Short label shown as a badge on the card next to the category badge
# Examples: "Most Popular", "New", "Coming Soon"
# Omit if not needed
# badge: "New"

# List the platforms this product is scoped to, if applicable
# Shows as a small note on cards and a callout box on the product page
# Omit if the product is platform-agnostic
# available_for: ["HubSpot", "Customer.io"]

# Controls the order products appear in listings and on the homepage
# Lower numbers appear first. Omit if order doesn't matter.
sort_order: 10

---

<!-- 
  Write the product description below in Markdown.
  This becomes the body of the product page between the header and the closing CTA.

  Suggested structure:
  - One or two sentences of context / who this is for
  - ## What's included  (or "What you get", "How it works", etc.)
  - ### Subsection for each major deliverable
  - A closing line pointing to the fractional engagement if relevant
  
  Supported formatting:
  - ## H2 and ### H3 headings
  - **bold** and _italic_
  - Bullet lists and numbered lists
  - > Blockquotes
  - Horizontal rules with ---
  - [Links](https://example.com)
-->

A short paragraph here explaining what this product is and who it's for. Keep it plain — write the way you talk.

## What's included

### Deliverable One

Describe it specifically. What do they actually get? How is it delivered? How long does it take?

### Deliverable Two

Same pattern. Be specific about the output, not just the category of work.

## How it works

1. Step one
2. Step two
3. Step three — what they walk away with

---

_Optional closing line. For example: "Want someone to implement this for you? [See the fractional engagement →](/work-with-me/)"_
