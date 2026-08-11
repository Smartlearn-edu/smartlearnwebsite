# Goal Description

Create and publish a comprehensive suite of **10 distinct Footer sections** for the SmartLearn Moodle Theme gallery. Instead of just changing colors, these footers provide completely different UX and navigation experiences tailored to different types of Moodle installations (Universities, Corporate, Commercial Academies).

All footers will strictly adhere to the newly established Color Inheritance rules (no hardcoded colors).

## User Review Required

> [!IMPORTANT]
> You previously mentioned avoiding Newsletter forms, but the ChatGPT list includes one. I have included it in the plan below as a pure HTML form placeholder (which admins can wire up later). Let me know if you want to completely remove it!
>
> Please review this new 10-footer plan. If you approve, I will write the generator script and build them all!

## Proposed Changes

We will create a new generator script (`scripts/generate_footers.cjs`) that will construct and export these 10 sections. We will organize them into 3 distinct families.

### Family 1: Institutional 🏛️

**1. The Classic Academic (`footer-academic.json`)**
- **Best for**: Universities, schools.
- **Layout**: Logo + description, 4 columns of standard links (About, Courses, Resources, Contact), bottom legal bar.
- **Styling**: Spacious, clean, `sl-bg-main`.

**2. The Minimal Footer (`footer-minimal.json`)**
- **Best for**: Clean, distraction-free sites.
- **Layout**: Centered logo, a single row of core links, massive whitespace, elegant typography.
- **Styling**: `sl-bg-main`, highly minimal.

**3. The Mega Footer (`footer-mega.json`)**
- **Best for**: Massive Moodle sites with hundreds of courses.
- **Layout**: Acts as a secondary navigation system. Features a massive category grid (Development, Business, Design, etc.) alongside popular courses and learning paths.
- **Styling**: `sl-bg-card` for structure, dense but organized.

### Family 2: Modern / Marketing 🚀

**4. The Modern Signature (`footer-modern-signature.json`)**
- **Best for**: The flagship SmartLearn installation.
- **Layout**: An extremely impressive signature footer. Features a subtle gradient animation, a large CTA, beautiful hover interactions, and comprehensive legal links.
- **Styling**: Highly premium, leverages `sl-bg-primary-subtle` and dynamic borders.

**5. The CTA Footer (`footer-cta.json`)**
- **Best for**: Public-facing commercial academies.
- **Layout**: Top half is a massive conversion banner ("Ready to start learning? [Explore Courses]"). Bottom half is standard navigation.
- **Styling**: Top half uses a primary gradient built from theme variables.

**6. The Glass Footer (`footer-glass.json`)**
- **Best for**: Creative academies (pairs with Glass Hero).
- **Layout**: Floating style container, doesn't stretch edge-to-edge.
- **Styling**: `backdrop-filter: blur(16px)` over a subtle glowing mesh background.

**7. The Bento Footer (`footer-bento.json`)**
- **Best for**: Visually impressive, modern tech sites.
- **Layout**: Instead of columns, uses a Bento box grid for links, contact, and social.
- **Styling**: Individual cards using `sl-bg-card` with hover effects.

**8. The Community Footer (`footer-community.json`)**
- **Best for**: Commercial course platforms.
- **Layout**: Focuses entirely on community building and social proof ("12,000+ learners"). Includes a newsletter subscription placeholder.
- **Styling**: High contrast, engaging.

### Family 3: LMS-specific 🎓

**9. The Contact & Support Footer (`footer-support.json`)**
- **Best for**: Corporate Moodle installations.
- **Layout**: Massive focus on "Need help? We're here." Includes Help Center, FAQ, Tech Support, and operating hours (Mon-Fri).
- **Styling**: Utilitarian, highly readable, `sl-bg-main`.

**10. The App & Student Footer (`footer-student-app.json`)**
- **Best for**: Global EdTech platforms with mobile apps.
- **Layout**: App Store / Google Play download buttons, language/currency selectors, and quick-access student links (My Courses, Grades, Certificates).
- **Styling**: Functional, clean, uses `sl-text-muted` heavily.

## Verification Plan

### Automated Tests
- Run `node scripts/generate_footers.cjs` to create all 10 JSON files.
- Validate `catalog.json` for proper syntax.

### Manual Verification
- Verify ABSOLUTELY NO hardcoded `#FFFFFF`, `#000000`, or `rgba()` backgrounds are used across all 10 files.
- Ensure the Bento and Glass footers adapt perfectly to light mode.
