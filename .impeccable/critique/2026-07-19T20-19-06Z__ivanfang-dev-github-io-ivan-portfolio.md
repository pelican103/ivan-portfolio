---
target: live portfolio site (ivanfang-dev.github.io/ivan-portfolio)
total_score: 28
p0_count: 0
p1_count: 3
timestamp: 2026-07-19T20-19-06Z
slug: ivanfang-dev-github-io-ivan-portfolio
---
# Critique — ivanfang-dev.github.io/ivan-portfolio

⚠️ DEGRADED: single-context (harness policy restricts sub-agent spawning to explicit user request)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Scroll progress bar, scrollspy, PDF loading states all present |
| 2 | Match System / Real World | 3 | "ANU (Unity Game)" cryptic; "SQL (Postgres)" listed as a language |
| 3 | User Control and Freedom | 3 | Fake 800ms loader and typewriter cannot be skipped |
| 4 | Consistency and Standards | 3 | "Resume" is a nav item, hero CTA, and section; Contact reachable only via button |
| 5 | Error Prevention | 3 | PDF fallback exists; little else applicable |
| 6 | Recognition Rather Than Recall | 3 | Easter egg affordance invisible until hover; otherwise labeled |
| 7 | Flexibility and Efficiency | 2 | Forced waits (loader, typewriter); no shortcuts |
| 8 | Aesthetic and Minimalist Design | 2 | Full resume duplicated 3× (sections + embedded PDF); 18-chip skill soup; eyebrow scaffold on every section |
| 9 | Error Recovery | 3 | PDF error state with download fallback |
| 10 | Help and Documentation | 3 | n/a for a portfolio; labels adequate |
| **Total** | | **28/40** | **Good (usable) — but fails its actual brief: memorability** |

## Anti-Patterns Verdict
Reads as a competently executed template: Inter + Apple ink palette (#1d1d1f "Apple-grade ink") + uppercase tracked eyebrow above every section + identical card grid + tech pill chips + typewriter tagline + scroll progress bar + "Built with ❤️ React/Tailwind/Framer Motion" footer. Guessable from the category alone → first-order reflex failure.
Detector (5 findings): Inter ×2 (index.css:1,22), side-tab borders (ExplosiveImage.tsx:96 border-l-4/border-r-4), animate-bounce (ExplosiveImage.tsx:94).

## Priority Issues
- **[P1] Resume-shaped website**: nav = resume sections; content = resume bullets; then the literal PDF resume is embedded via react-pdf. Zero differentiation; recruiter remembers nothing.
- **[P1] First 5 seconds wasted**: artificial 800ms spinner (App.tsx:13), 0.5s stagger delay, then a 60ms/char typewriter whose first payload is "I love anything software 💙💛". No proof of work in the first fold. Amazon internship — the strongest signal — is buried 4 screens deep.
- **[P1] Projects are bullet cards, not case studies**: flagship (LionCity Tutors, 300+ real users) visually identical to a class assignment whose bullet is "Gained hands-on experience".
- **[P2] Generic visual identity**: Inter/Apple palette/eyebrows; UCLA blue used timidly (buttons only); no motif, no wordmark.
- **[P2] Performance**: 764KB main JS + 1.0MB pdf.js worker to re-render content already on the page; 1.5MB + 2.2MB PNGs for the About photo pair; render-blocking Google Fonts @import with 7 weights.
- **[P3] Craft nits**: "1 more clicks!" grammar; --color-ink-faint #86868b ≈ 3.5:1 on white (used at 14px, fails AA); hero clamp max 11rem exceeds sane display ceiling.

## Persona Red Flags
- **Jordan (recruiter, first visit)**: waits through loader+typewriter; first fold answers nothing; would close at the embedded PDF ("I could have just opened the resume").
- **Casey (mobile, interrupted)**: ~1.8MB JS + multi-MB PNGs on hotel wifi; typewriter delays the only content in the fold.
- **Riley (stress tester)**: click-counter grammar bug; skills chips imply parity between C++ and HTML/CSS; "1:1 clone of UCLA's official UI" reads as a liability, not a flex.

## What's Working
- Real craft in the codebase: reduced-motion handling, focus-visible styles, code-point-safe typewriter, thoughtful clip-path reveal comments. The engineering hygiene exceeds the design's ambition.
- The About voice ("sunny shores of Singapore", doomscrolling) and the confetti photo easter egg — the only genuinely personal, memorable moments on the site.
- Strong raw material: Amazon SDE '26, founder of a live product with 300+ users, design-system refactor internship, 3.76 GPA + scholarship. The content problem is presentation, not substance.
