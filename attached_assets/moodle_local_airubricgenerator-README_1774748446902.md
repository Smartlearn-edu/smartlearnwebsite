# AI Rubric Generator for Moodle

The **AI Rubric Generator** is a Moodle local plugin that leverages specific AI providers (via Moodle's Core AI subsystem) to automatically generate, refine, and test grading rubrics for assignments.

## Features

### Rubric Generator
*   **Context-Aware Generation**: Generates rubrics based on the assignment description, name, and instructions.
*   **Customizable Parameters**: Define the number of criteria, levels, tone (Academic, Professional, Encouraging, etc.), and educational framework (Bloom's, SOLO, etc.).
*   **Refinement Workflow**: Review and refine the generated rubric using natural language prompts before saving.
*   **Pre-Pilot Testing**: Upload sample student submissions (text or PDF) to "test drive" the rubric and see how the AI would grade them using your draft criteria.
*   **Export**: Export generated rubrics to Word or PDF for offline review.

### Description Generator *(New in v0.4.0)*
*   **Course-Aware Generation**: Generates assignment descriptions based on your course structure (sections and activities).
*   **Two Generation Modes**:
    *   **Full Course**: Uses all course sections and activities (ideal for final projects).
    *   **Selected Sections**: Choose specific sections to include (ideal for midterms, chapter assignments).
*   **Assignment Type Templates**: Pre-built templates for different assignment types:
    *   Final Project, Midterm, Chapter Assignment, Practical Exercise
    *   Research Paper, Presentation, Group Project, Case Study
*   **Customizable Tone**: Use the same tone options as the rubric generator.
*   **One-Click Apply**: Apply the generated description directly to your assignment.

## Requirements

*   **Moodle 4.5** or later (Requires `core_ai` subsystem).
*   An enabled and configured AI provider in Moodle (e.g., OpenAI, Gemini, etc.) that supports text generation.

## Installation

1.  Download or clone this plugin into your Moodle `local/` directory:
    ```bash
    cd /path/to/moodle/local
    git clone https://github.com/yourusername/moodle_local_rubricgenerator rubricgenerator
    ```
2.  Log in to your Moodle site as an administrator and visit `/admin/index.php`.
3.  Follow the prompts to install the plugin.
4.  Configure the plugin settings at:
    `Site administration > Plugins > Local plugins > AI Rubric Generator`.

## Usage

### Generating a Rubric

1.  Go to an Assignment activity.
2.  In the assignment administration menu (or "More" menu), click **Generate Rubric with AI**.
3.  Configure your desired rubric options (criteria count, tone, framework).
4.  Click **Generate**.
5.  Review the Draft Rubric. You can:
    *   **Refine**: Type changes like "Make the scoring stricter" and click Refine.
    *   **Test**: Upload a sample PDF or paste text to see a predicted grade.
    *   **Save**: Save the rubric to the assignment grading methods.

### Generating an Assignment Description

1.  Go to an Assignment activity.
2.  In the assignment administration menu (or "More" menu), click **Generate Description with AI**.
3.  Choose your generation mode:
    *   **Full Course**: For final projects covering all course material.
    *   **Selected Sections**: For midterms or chapter-specific assignments (select the relevant sections).
4.  Select an **Assignment Type Template** (Final Project, Midterm, Chapter Assignment, etc.).
5.  Configure additional options (tone, learning objectives, submission requirements).
6.  Click **Generate Description**.
7.  Review the generated description. You can:
    *   **Apply to Assignment**: Directly update the assignment's description.
    *   **Copy to Clipboard**: Manually paste elsewhere.
    *   **Generate Again**: Try a different configuration.

## Important Notes

*   **PDF Processing**: The "Test Your Rubric" feature uses client-side PDF text extraction. Ensure users have modern browsers with JavaScript enabled.
*   **AI Costs**: Using this plugin consumes tokens from your configured AI provider.

## License

GNU GPL v3 or later.
Copyright (C) 2026 Mohammad Nabil
