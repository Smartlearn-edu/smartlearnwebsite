---
name: smartlearn-plugin-descriptions
description: >-
  Guides the agent on how to write and format highly attractive, sales-driven plugin descriptions for the Smartlearn website without breaking the site layout. Includes custom markdown syntax for glowing boxes and images.
---

# Smartlearn Plugin Descriptions

## Overview
This skill provides instructions on how to properly format and write sales copy for Moodle plugins on the Smartlearn website. The frontend uses a custom Markdown parser (`PluginDetailPage.tsx`), so you must follow these specific syntax rules to ensure the design renders beautifully without conflicting with the main site CSS.

## Copywriting Guidelines
- **Be Punchy & Sales-Driven:** Avoid boring "Problem vs. Solution" layouts. Focus on the "Wow" factor.
- **Role-Based Benefits:** Break down features by user role (e.g., Admin, Teacher, Student, Mentor) so the value is immediately clear to the buyer.
- **Short Paragraphs:** Keep paragraphs very short (1-3 sentences) for readability.

## Markdown Formatting Rules

The frontend parser automatically applies Tailwind CSS styling to specific markdown elements. **Do NOT inject raw HTML or custom CSS classes**, as this can conflict with the global site layout. Rely entirely on the parser's built-in features:

### 1. Glowing Highlight Boxes
To create a stunning, purple glowing box with a "Sparkles" icon (perfect for powerful quotes or key takeaways), start the paragraph with `> `.

**Example:**
```text
> Your LMS already contains thousands of valuable insights... but Moodle makes them almost impossible to find.
```

### 2. Images
Always interleave images between sections to show the product in action. Images must be referenced using absolute paths relative to the `public` directory.

**Example:**
```text
![Admin Overview](/plugins/local_smartdashboard/admin.png)
```
*(Ensure the images actually exist in the `public/plugins/<plugin_name>/` folder).*

### 3. Headings
Use `###` for section headings. The parser automatically converts these into styled `<h3>` tags with custom fonts and colors.

**Example:**
```text
### 👑 For Administrators & Managers: Total Control
```

### 4. Bold Text
Use `**text**` for bold emphasis. The parser will automatically apply the correct font-weight and white text color.

**Example:**
```text
Instead of digging through Moodle... **Moodle comes to you.**
```

### 5. Lists
Use standard `- ` for bullet points. They will be rendered with custom checkmark icons by the parser.

**Example:**
```text
- Save hours every week
- Detect struggling students before they disappear
```

## Workflow

When asked to write or update a plugin description for the Smartlearn website:
1. Review the plugin's features (e.g., from its `README.md`).
2. Draft punchy, sales-focused copy.
3. Apply the custom markdown formatting rules listed above (`> `, `###`, `![alt](url)`).
4. Save the final copy to an artifact so the user can easily copy and paste it into their Admin Panel.

## Common Mistakes
- **Using raw HTML/Tailwind:** Do not write `<div className="...">`. The custom parser in `PluginDetailPage.tsx` is specifically designed to handle the styling securely.
- **Using standard blockquotes:** Remember that `> ` in this specific project renders as a custom glowing UI box, not a standard blockquote. Use it strategically for highlights!
