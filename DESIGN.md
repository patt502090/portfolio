# Design

## Overview

The portfolio uses a restrained light interface with a cool technical anchor color, controlled red accents for achievement proof, and real project imagery as the visual engine. The mood is "engineering dossier on a clean lab bench": clear, inspectable, high-trust.

## Color

Use OKLCH tokens only.

- Background: `oklch(1 0 0)`
- Surface: `oklch(0.985 0.004 210)`
- Ink: `oklch(0.18 0.025 235)`
- Muted: `oklch(0.42 0.025 235)`
- Line: `oklch(0.9 0.012 220)`
- Primary: `oklch(0.54 0.115 202)`
- Primary dark: `oklch(0.34 0.1 210)`
- Accent: `oklch(0.48 0.17 25)`
- Mint: `oklch(0.76 0.12 170)`

## Typography

Use Manrope for body text and Sora for display headings. Keep letter spacing at zero. Headings should be balanced, direct, and capped below oversized hero scales.

## Layout

One-page scroll with a fixed navigation bar, a strong hero, wide project case-study rows, a compact achievement timeline, a structured skills matrix, and a filterable evidence gallery. Cards may be used for repeated items only. Page sections should remain unframed and full-width.

## Components

- Fixed navigation with text links and direct resume CTA.
- Project case studies with one decisive image, role, impact bullets, tech tags, and external links.
- Achievement timeline with source, date, outcome, and supporting media.
- Gallery filters with image lightbox.
- Contact block with email, GitHub, LinkedIn, and resume download.

## Motion

Use subtle scroll reveals, hover feedback, and lightbox transitions. Motion must never hide content by default, and reduced-motion users should receive instant or minimal transitions.
