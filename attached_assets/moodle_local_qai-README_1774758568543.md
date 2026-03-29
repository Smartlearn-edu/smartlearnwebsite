<div align="center">
  <h1>🤖 Moodle Quiz AI Chat (<code>local_qai</code>)</h1>
  <p><strong>Transform Your Moodle Quizzes into Interactive Learning Experiences with Context-Aware AI Tutors.</strong></p>

  <p>
    <img src="https://img.shields.io/badge/Moodle-4.0+-f98012?style=for-the-badge&logo=moodle&logoColor=white" alt="Moodle 4.0+" />
    <img src="https://img.shields.io/badge/Plugin_Type-Local-blue?style=for-the-badge" alt="Local Plugin" />
    <img src="https://img.shields.io/badge/Status-Alpha-red?style=for-the-badge" alt="Alpha Status" />
    <img src="https://img.shields.io/badge/Version-1.3.0-success?style=for-the-badge" alt="Version 1.3.0" />
  </p>
</div>

<hr>

## ✨ Overview

The **Quiz AI Chat** plugin (`local_qai`) empowers students to gain a deeper understanding of their learning materials by bringing an intelligent AI assistant directly into the Moodle Quiz interface.

Instead of just seeing a score, students can dive deep into *why* they got a question wrong, or discuss their overall performance—guided by an AI tutor explicitly configured by the teacher. 

## 🚀 Key Features

### 🎯 1. Question-Specific AI Explanations
Students will see an **"Ask AI to Explain"** button natively embedded inside individual quiz questions during their attempt or review process. 
* Contextualizes the exact question they are struggling with.
* Helps clear up misunderstandings right when they happen.

### 📊 2. Overall Quiz Performance Discussions
A dedicated **"Ask AI about Quiz"** feature gives a macroscopic view.
* Students can ask general questions about their performance.
* Helps connect concepts across multiple questions.

### 🎛️ 3. Powerful Teacher Controls
Teachers manage exactly what the AI knows via the **AI Chat Settings** integrated straight into individual Quiz settings:
* **Per-Quiz Toggle:** Enable or disable question-level and quiz-level buttons on a per-quiz basis.
* **Custom AI Prompts:** Craft unique behavioral prompts for how the AI should respond for every specific quiz.

### 🧠 4. Dynamic Context Levels (Token Optimized)
Balance helpfulness with AI API costs by choosing the exact **AI Context Level** sent to the model:
* **Level 5 (Full Detail):** Sends full questions, choices, student answers, correct answers, feedback, and scores.
* **Level 4 (Standard):** Questions, student answers, correct answers, scores. 
* **Level 3 (Summary):** Total score and question summary *(Recommended)*
* **Level 2 (Minimal):** Question text and correct/incorrect status only.
* **Level 1 (None):** AI has no initial quiz context—a fully free-flowing conversation.

### 💰 5. Cost-Saving Mechanisms
* **"Send first only" Mode:** Quiz data is attached to the very first prompt. Follow-up messages in the same conversation do not re-send the entire quiz context, massively saving on redundant AI token costs.

---

## 🛠️ Installation

### Prerequisites
- Moodle Version **4.0** or newer.
- Requires standard `mod_quiz` to be installed and active (it is by default).

### Steps
1. Download or clone this repository.
2. Place the `qai` directory inside your Moodle's `local/` directory:
   ```bash
   moodle/local/qai
   ```
3. Log in to your Moodle site as an administrator.
4. Moodle will automatically detect the new plugin and prompt you to upgrade your database. Follow the on-screen instructions.
5. Alternatively, run the CLI upgrade script:
   ```bash
   php admin/cli/upgrade.php
   ```

---

## ⚙️ Configuration & Usage

This plugin relies on **Per-Quiz Settings** rather than global Admin configurations.

1. Navigate to a course and open a **Quiz**.
2. From the Quiz Administration menu, click on **AI Chat Settings** (Look for the ⚙️ gear icon).
3. Here, you can define:
   - Button visibility for students.
   - The AI Context Level (1 through 5).
   - Whether to append prompt contexts continuously or just on the first message (Token optimizer).
   - The custom Instructions/Prompts tailored for Question and Quiz-level inquiries.
4. Save your changes!

*Note: The Chat UI relies on Moodle's modern AMD modules, ensuring a fast, lightweight, and asynchronous experience for the end user.*

---

## 💻 Tech Stack & Architecture
- **Moodle Hooks/Navigation Engine:** Extends quiz navigation asynchronously.
- **AMD / JavaScript:** Modern vanilla JavaScript UI.
- **Database:** Uses custom `local_qai_quiz_settings` tables linked via foreign keys to core Moodle tables.

---

<div align="center">
  <p>Built for the modern Moodle ecosystem, targeting Moodle 5.0 concepts.</p>
</div>
