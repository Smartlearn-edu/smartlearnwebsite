# 🎯 Gap Close — `mod_gapclose`

> **A smart remedial quiz activity for Moodle 4.0+**  
> Automatically collects every question a student answered incorrectly across all quizzes in a course and presents them in a single, focused review session.

---

## 📖 Overview

**Gap Close** is a Moodle activity plugin (`mod_gapclose`) designed to help students identify and close knowledge gaps. Instead of manually hunting through past quiz results, this plugin automatically scans all quizzes in the course, finds every question the student got wrong in their latest attempt, and assembles them into one targeted review session — powered by Moodle's native Question Engine.

---

## ✨ Features

- 🔍 **Automatic gap detection** — scans all visible quizzes and finds incorrectly answered questions from the student's latest finished attempt
- 🧩 **Seamless Question Engine integration** — uses `question_engine` with `interactive` behaviour for immediate feedback
- 🔄 **Resumable sessions** — attempts are saved and can be resumed; students can also restart to re-scan for new gaps
- 🧹 **Smart filtering** — skips hidden quizzes, quizzes with no finished attempts, and questions that were removed from a quiz after the attempt
- 📦 **No gradebook overhead** — purely a learning tool with no grade impact
- 🛡️ **Role-aware** — teachers/managers add the activity; students interact with it

---

## 📋 Requirements

| Requirement | Version |
|-------------|---------|
| Moodle      | **4.0 or later** (uses `question_references` & `question_versions` tables) |
| PHP         | 7.4+ |
| Plugin type | Activity module (`mod`) |

---

## 🗂️ Project Structure

```
gapclose/
├── db/
│   ├── access.php       # Capability definitions
│   ├── install.php      # Post-install hook
│   ├── install.xml      # Database schema
│   └── upgrade.php      # Upgrade steps
├── lang/
│   └── en/
│       └── gapclose.php # English language strings
├── pix/
│   └── icon.png         # Activity icon
├── lib.php              # Core Moodle API functions
├── mod_form.php         # Activity settings form
├── index.php            # Course-level activity listing
├── view.php             # Main activity logic & UI
└── version.php          # Plugin version metadata
```

---

## 🗄️ Database Tables

| Table | Purpose |
|-------|---------|
| `mdl_gapclose` | Stores each activity instance (name, intro, timestamps) |
| `mdl_gapclose_attempts` | Tracks student sessions; links to `question_usages` via `uniqueid` |

---

## 🚀 Installation

1. Download or clone this repository into your Moodle `mod/` directory:
   ```bash
   git clone https://github.com/your-org/moodle_mod_gapcloser.git /path/to/moodle/mod/gapclose
   ```
   > ⚠️ The folder **must** be named `gapclose` (not `mod_gapclose`).

2. Log in to your Moodle site as an administrator.

3. Navigate to **Site Administration → Notifications** and complete the plugin installation.

4. The plugin is now available as an activity in any course.

---

## 🧑‍🏫 Usage

### For Teachers / Admins

1. Go to any course and turn on **Edit mode**.
2. Click **Add an activity or resource** and select **Gap Close**.
3. Give the activity a name and optional description, then save.

### For Students

1. Open the **Gap Close** activity in a course.
2. Click **Start Review Session** — the plugin will automatically gather all questions you answered incorrectly in the course's quizzes.
3. If you have no incorrect answers, you'll see 🎉 *"Great job! No incorrect answers to review."*
4. Answer the questions with live feedback.
5. Click **Restart** at any time to re-scan for fresh gaps (e.g. after taking new quizzes).

---

## ⚙️ Question Selection Logic

The plugin applies the following rules when building a review session:

| Rule | Detail |
|------|--------|
| Visible quizzes only | Hidden quizzes are excluded |
| Latest finished attempt | Only the most recent completed attempt per quiz is considered |
| Score threshold | Questions where `fraction < 0.9999` (effectively < 100%) are included |
| NULL handling | `NULL` fractions are treated as `0` (wrong) |
| Current quiz structure | Questions removed from the quiz after the attempt are excluded |
| Hidden question bank items | Excluded |

---

## 🔐 Capabilities

| Capability | Roles | Description |
|------------|-------|-------------|
| `mod/gapclose:addinstance` | Manager, Editing Teacher | Add a Gap Close activity to a course |
| `mod/gapclose:view` | Student, Teacher, Editing Teacher, Manager | View and interact with the activity |

---

## 🏷️ Version Info

| Field | Value |
|-------|-------|
| Plugin | `mod_gapclose` |
| Version | `1.0.0` (build `2026011903`) |
| Maturity | Alpha |
| Requires Moodle | 4.0+ (`2022041900`) |
| License | [GNU GPL v3 or later](http://www.gnu.org/copyleft/gpl.html) |

---

## 🤝 Contributing

Pull requests are welcome! Please follow [Moodle's coding style guidelines](https://moodledev.io/general/development/policies/codingstyle) and test against Moodle 4.0+.

---

## 📄 License

This plugin is free software: you can redistribute it and/or modify it under the terms of the **GNU General Public License** as published by the Free Software Foundation, either version 3 of the License, or any later version.

See [http://www.gnu.org/licenses/](http://www.gnu.org/licenses/) for details.
