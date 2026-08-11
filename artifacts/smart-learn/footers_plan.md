# Goal Description

Create and publish a comprehensive suite of **9 distinct Footer sections** for the SmartLearn Moodle Theme gallery. Instead of just changing colors, these footers provide completely different UX and information architectures tailored to different types of Moodle installations (Universities, Corporate, Commercial Academies).

All footers will strictly adhere to the newly established Color Inheritance rules (no hardcoded colors) and will cover every interactive state.

## User Review Required

> [!IMPORTANT]
> This plan has been fully updated based on the ChatGPT review notes! 
> - The 9 footers each have completely unique Information Architectures.
> - #4 (Modern Signature) is highly distinguished from #5 (CTA).
> - #9 (App/Student) is configured so elements can easily be conditionally hidden.
> - Verification includes deep testing of all states (hover, focus, borders, etc).
> 
> Please review. If everything is perfect, I will begin execution!

## Proposed Changes

We will create a new generator script (`scripts/generate_footers.cjs`) that will construct and export these 9 sections. We will organize them into 3 distinct families.

### Family 1: Institutional 🏛️

**1. The Classic Academic (`footer-academic.json`)**
- **Architecture**: Traditional columns.
- **Layout**: Logo + description, 4 columns of standard links (About, Courses, Resources, Contact), bottom legal bar.
- **Styling**: Spacious, clean, `sl-bg-main`.

**2. The Minimal Footer (`footer-minimal.json`)**
- **Architecture**: Centered navigation.
- **Layout**: Centered logo, a single row of core links, massive whitespace, elegant typography.
- **Styling**: `sl-bg-main`, highly minimal, low visual noise.

**3. The Mega Footer (`footer-mega.json`)**
- **Architecture**: Category discovery.
- **Layout**: Acts as a secondary navigation system. Features a massive category grid (Development, Business, Design, etc.) alongside popular courses and learning paths.
- **Styling**: `sl-bg-card` for structure, dense but strictly organized.

### Family 2: Modern / Marketing 🚀

**4. The Modern Signature (`footer-modern-signature.json`)**
- **Architecture**: Brand/visual experience.
- **Layout**: The "wow" footer. Distinctive SmartLearn branding, animated visual composition, sophisticated navigation, interesting interactions. Very different from a standard CTA.
- **Styling**: Highly premium, leverages `sl-bg-primary-subtle` and dynamic borders, hover animations, scroll reveals.

**5. The CTA Footer (`footer-cta.json`)**
- **Architecture**: Conversion-focused.
- **Layout**: Deliberately simple top half functioning as a massive conversion banner ("Ready to start learning? [Explore Courses]"). Bottom half is basic standard navigation.
- **Styling**: Top half uses a primary gradient built from theme variables.

**6. The Glass Footer (`footer-glass.json`)**
- **Architecture**: Immersive container.
- **Layout**: Floating style container, doesn't stretch edge-to-edge.
- **Styling**: `backdrop-filter: blur(16px)` over a subtle glowing mesh background. Pairs perfectly with glass heroes.

**7. The Bento Footer (`footer-bento.json`)**
- **Architecture**: Spatial/grid navigation.
- **Layout**: Instead of traditional columns, uses a Bento box grid grouping links, contact info, and social.
- **Styling**: Individual cards using `sl-bg-card` with distinct hover effects.

### Family 3: LMS-specific 🎓

**8. The Contact & Support Footer (`footer-support.json`)**
- **Architecture**: Help-first navigation.
- **Layout**: Massive focus on "Need help? We're here." Groups Help Center, FAQ, Tech Support, and operating hours (Mon-Fri) as the primary focus.
- **Styling**: Utilitarian, highly readable, `sl-bg-main`.

**9. The App & Student Footer (`footer-student-app.json`)**
- **Architecture**: Authenticated/student utility.
- **Layout**: Features App Store / Google Play download buttons, language/currency selectors, and quick-access student links. Designed to be highly modular—if an admin doesn't provide app links, those blocks will cleanly collapse rather than leaving fake placeholders.
- **Styling**: Functional, clean, uses `sl-text-muted` heavily.

## Verification Plan

### Automated Tests
- Run `node scripts/generate_footers.cjs` to create all 9 JSON files.
- Validate `catalog.json` for proper syntax.

### Manual Verification (The Deep State Check)
- Verify ABSOLUTELY NO hardcoded `#FFFFFF`, `#000000`, or `rgba()` backgrounds are used across all files.
- **[CRITICAL]** Verify that hover, focus, active, border, icon, shadow, gradient, glass, and text states also inherit correctly from SmartLearn tokens in both light and dark modes. (e.g., hover icons and glass borders must dynamically adapt).
- Ensure the Bento and Glass footers adapt perfectly to light mode.
