---
name: Hyfic
description: A living pixel world with compact typography and useful little apps.
colors:
  teal: '#127862'
  teal-deep: '#0d6250'
  teal-soft: '#edf6f1'
  teal-border: '#cbe1d8'
  pixel-ground: '#86c8af'
  coastal-sky: '#4895fa'
  ink: '#24312d'
  muted: '#65736c'
  paper: '#ffffff'
  line: '#e3e9e5'
  footer-paper: '#f8faf7'
  button-paper: '#fafbf9'
  finance-preview: '#f0e9f6'
  journal-preview: '#eff0f0'
  via-preview: '#e7effb'
  journal-action: '#3a4939'
  journal-paper: '#fafbf8'
  journal-hero: '#eaece4'
  via-action: '#315fa1'
  via-hero: '#e8f0fb'
  finance-purple: '#7854ad'
  finance-lavender: '#b392ef'
  finance-blush: '#f69dcc'
typography:
  display:
    fontFamily: 'Pixeloid Sans, sans-serif'
    fontSize: '54px'
    fontWeight: 400
    lineHeight: '72px'
    letterSpacing: '0'
  headline:
    fontFamily: 'Onest Variable, sans-serif'
    fontSize: '40px'
    fontWeight: 450
    lineHeight: 1.18
    letterSpacing: '-0.035em'
  title:
    fontFamily: 'Onest Variable, sans-serif'
    fontSize: '18px'
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: '-0.025em'
  body:
    fontFamily: 'Onest Variable, sans-serif'
    fontSize: '16px'
    fontWeight: 400
    lineHeight: 1.55
  wordmark:
    fontFamily: 'Pixeloid Sans, sans-serif'
    fontSize: '36px'
    fontWeight: 400
    lineHeight: 1
    letterSpacing: '0'
  app-body:
    fontFamily: 'Figtree Variable, sans-serif'
    fontSize: '16px'
    fontWeight: 400
    lineHeight: 1.6
  app-wordmark:
    fontFamily: 'Kanit, sans-serif'
    fontSize: '25px'
    fontWeight: 600
  journal-display:
    fontFamily: 'Literata Variable, Georgia, serif'
    fontSize: 'clamp(47px, 5.2vw, 64px)'
    fontWeight: 400
    lineHeight: 1.14
    letterSpacing: '-0.04em'
  finance-body:
    fontFamily: 'Instrument Sans, sans-serif'
    fontSize: '16px'
    fontWeight: 400
    lineHeight: 1.6
rounded:
  button: '8px'
  preview: '10px'
  card-art: '12px'
  finance-hero: '20px'
  finance-button: '99px'
spacing:
  mobile-gutter: '23px'
  desktop-gutter: '40px'
  project-gap: '26px'
components:
  button-light:
    backgroundColor: '{colors.button-paper}'
    textColor: '{colors.ink}'
    rounded: '{rounded.button}'
    padding: '11px 17px'
  button-translucent:
    backgroundColor: '#ffffffa6'
    textColor: '{colors.teal-deep}'
    rounded: '{rounded.button}'
    padding: '11px 17px'
  button-journal:
    backgroundColor: '{colors.journal-action}'
    textColor: '{colors.paper}'
    rounded: '{rounded.button}'
    padding: '13px 21px'
  button-via:
    backgroundColor: '{colors.via-action}'
    textColor: '{colors.paper}'
    rounded: '{rounded.button}'
    padding: '13px 21px'
  button-finance:
    backgroundColor: '{colors.paper}'
    textColor: '#242228'
    rounded: '{rounded.finance-button}'
    padding: '10px 23px'
---

# Design System: Hyfic

## Overview

**Creative North Star: "A maker's living pixel world"**

Hyfic is a playful, professional home for a curious maker. The pinned cofounder.co reference establishes expansive pixel scenery, compact typography and plain controls; it overrides seed aeda37f1. A sleeping Snorlax brings the warmth, while white space and a restrained teal interface keep the work clear.

The collection holds independent app identities. Log Horizon is quiet, leafy, and literary; OpenVia is a clear blue Mac utility; Manvalan Finance retains its existing pastel financial-app presentation. The homepage pairs Onest with a Pixeloid display face and plain Pixeloid Regular wordmark. Approved app routes retain their existing Figtree, Literata, Instrument Sans and Kanit treatments.

**Key Characteristics:**

- Living pixel scenery with a sleeping Snorlax and open white space.
- Pixeloid display type and wordmark with Onest for reading and controls.
- Teal, white and neutral homepage controls without decorative arrows.
- Independent app identities and restrained product-preview depth.

## Colors

Teal is the single homepage interface accent, balanced by near-white surfaces and neutral ink. The landscape retains its natural colors. Frontmatter records homepage primitives and the preserved app accents; route styles remain authoritative for finer details.

### Primary

- **Teal, Teal Deep, Teal Soft, Teal Border:** Homepage links, focus states, postcard panel and quiet action surfaces.
- **Pixel Ground:** The teal footer edge, with lighter and deeper tones of the same hue.
- **Coastal Sky:** The hero’s blue fallback and mobile sky; scenery supplies its own natural colors.

### Secondary

- **Journal Action, Journal Paper, Journal Hero:** Muted green actions, near-white reading space, and a soft green-grey introduction for Log Horizon.
- **Via Action, Via Hero:** Clear blue actions and pale blue introduction for OpenVia.
- **Finance Purple, Finance Lavender, Finance Blush:** Preserved Manvalan accents for focus, gradient scenery, and illustrations. They belong to the finance route rather than the global Hyfic interface.

### Neutral

- **Ink, Muted, Paper, Line:** Homepage text hierarchy, white canvas, and quiet dividers.
- **Footer Paper, Button Paper:** The near-white footer and action surfaces.
- **Finance Preview, Journal Preview, Via Preview:** Distinct pastel project-art backdrops.

**The Independent Worlds Rule.** Preserve each app’s palette inside its route; the shared Hyfic identity appears as attribution and a way home.

## Typography

The homepage uses self-hosted Pixeloid Sans Regular for its hero headline, scene caption and plain lowercase wordmark. The homepage logo has no bolt or separate accent color. Onest remains the reading and control face. Pixeloid is by GGBotNet under the SIL Open Font License; use whole-pixel sizes and no negative tracking.

The pixel hero headline uses 54px/72px on desktop and 27px/36px on mobile. The wordmark uses 36px, reduced to 27px in the mobile header. Supporting copy stays compact (13–15px), project titles use moderate emphasis, and sentence-case labels are small (10–12px). Buttons use 14px type on desktop and smaller labels in the mobile hero.

Log Horizon retains Literata headings and Figtree body text. OpenVia retains its Figtree utility typography and firmer hero weight (500). App-footer Hyfic lettering remains Kanit; Manvalan Finance retains Instrument Sans and its independent type scale.

**The Wordmark Rule.** Keep the homepage wordmark plain Pixeloid Regular, inheriting the surrounding text color. Preserve the approved Kanit attribution on app routes.

## Layout

The homepage uses a centered content container (1240px), a full-bleed landscape hero, compact overlaid navigation and left-aligned copy. The video stays bright without a broad dark overlay; a small text shadow supports white hero copy. Three project links form an open gallery; captions sit outside the rounded artwork without enclosing card chrome.

At 1000px gutters narrow to 28px; below 700px the gallery and maker section stack, actions wrap, and homepage gutters use the mobile token. The 790px mobile hero places an 800 × 450px scenery stage at the bottom right beneath a clear blue text area, preserving Snorlax. Desktop hero height is viewport-aware; very wide layouts adapt at 1600px. The footer is an airy two-column layout with contact and project links opposite a scenic postcard. It stacks on mobile and ends in irregular teal pixel ground.

Log Horizon and OpenVia use centered introductions and app navigation (1100px maximum), with feature/FAQ content (1040px maximum). Feature columns and split FAQ layouts collapse below 700px. The journal’s wide screenshot is intentionally centered and clipped on mobile; OpenVia’s illustrated window fits within mobile gutters. App footers stack below 600px. The OpenVia preview has additional compact spacing below 480px.

Manvalan Finance keeps its independent stylesheet, inset rounded gradient hero, floating phone composition, dark capsule navigation, feature illustrations, and responsive rules. Its source is `public/manavalan-finance/index.html` with assets and styles in `public/manavalan-finance/`; do not port it into the global layout merely for consistency.

## Elevation & Depth

White sections remain flat and spacious. The landscape supplies scenic depth; ambient shadows belong to product previews and small controls. Header text links share a translucent surface with a fine internal divider and backdrop blur. The light call button sits beside the group. The footer postcard uses a translucent teal panel; the old blue invitation and clouds are removed.

### Shadow Vocabulary

- **Journal preview** (`0 18px 45px #32382a19`): soft separation around the large diary screenshot.
- **Mac window** (`0 22px 65px #233a6326`): stronger ambient lift for the illustrated utility window.
- **Finance phone** (`0 18px 42px #51415f26`): the preserved landing page’s device elevation.
- **Selected utility tab** (`0 2px 6px #2c4d7112`): a small lift in the interactive routing example.

**The Preview Depth Rule.** Concentrate ambient elevation in product previews; ordinary text sections and project descriptions remain unboxed.

## Shapes

Homepage actions use gently rounded rectangles, project artwork uses soft clipped corners, and a stepped pixel edge ends the hero. The plain pixel wordmark carries the homepage identity. Homepage links and buttons have no decorative arrows. Manvalan’s capsule buttons and larger inset hero corners remain part of its preserved identity.

## Components

### Buttons

Compact, plain-label homepage buttons use the frontmatter variants with a 44px desktop minimum height. Hover brightens the surface, adds a brief light sweep and raises it 1px; pressing lowers and compresses it. Keep the grouped desktop navigation and separate call button aligned at 44px. Focus uses a clearly offset teal outline, white over the hero. The translucent hero variant lets the landscape show through.

Journal and OpenVia actions retain their own palette on the existing base form: 15px labels, 49px minimum height, a small hover lift (2px), and background transitions (0.18s). Their offset focus outline remains green. Finance buttons remain pill-shaped, use Instrument Sans, and shift their pale surface and ambient shadow on hover; their focus and animation rules remain in the finance stylesheet.

### Cards / Containers

Each project link has pastel preview art, its app icon and title, a brief description, and a small platform label. Hover straightens and raises the phone or diary, raises the utility preview, and nudges the app name and icon. Do not underline project titles. Keep the entire text-and-art unit unboxed.

### Navigation

The homepage has a white Pixeloid Regular wordmark, two text links grouped in one translucent bar with a subtle divider, and a separate light call button. Mobile hides the person link, keeping projects and the call available. App navigation uses the app icon/name on the left and restrained feature/FAQ/release links on the right; the first feature link is hidden on mobile. Keep the smaller Kanit Hyfic attribution in app footers. Finance retains its dark centered navigation capsule.

### FAQ

Native disclosure rows use fine bottom borders, a medium-weight question, and a plus that becomes a minus when open. Answers retain comfortable line height and modest body sizing. Preserve visible focus on the entire summary control.

### Routing example

OpenVia’s example selector is a compact, segmented control on a pale blue-grey tray. The selected segment is white with a slight shadow and darker blue text. The result updates in place with a polite live announcement. It is a demonstration and does not launch a browser. The larger Mac window is an illustration, including its apparent fields and dropdowns; it is not a form.

### Pixel world and motion

The original coastal illustration is the poster for an eight-second, silent 2560 × 1440 video loop at 24fps. WebM and MP4 are encoded independently from lossless source frames. Clouds drift, the whole sea ripples and reflects light, the canopy and foreground plants sway, birds cross the bay, and Snorlax breathes with an occasional ear twitch. No 720p intermediate or lossy transcode is used. The artwork remains continuous rather than compositing a cutout. A visible pause/play control freezes the scene; video pauses offscreen and in hidden tabs. Reduced motion keeps the poster without loading video. Regenerate with scripts/render-scene.py. Preserve the right-aligned desktop crop and the mobile scenery stage.

Homepage preview transitions stay brief; reduced motion disables them. Existing app button transitions, utility-state changes and finance illustration scenes retain their route-specific behavior and reduced-motion support. Smooth scrolling becomes immediate when reduced motion is requested.

## Do's and Don'ts

### Do:

- Do use plain Pixeloid Regular on the homepage and preserve each app route’s approved wordmark treatment.
- Do keep the sleeping Snorlax, crisp pixels, compact controls and generous open space.
- Do preserve all three approved app detail designs and their independent typography.
- Do retain visible keyboard focus, pause control, static fallback and reduced-motion support.
- Do identify illustrative previews and example interactions clearly.

### Don't:

- Don't introduce unrelated blue or cyan interface accents, homepage Figtree/Kanit, a colored logo bolt, or decorative arrows.
- Don't replace the selected pixel world with a generic agency or dashboard aesthetic.
- Don't apply homepage typography or colors over the independent app routes.
- Don't turn product-preview controls into apparent working form inputs.
- Don't darken the whole hero; preserve the approved video and use local text treatment for readability.
