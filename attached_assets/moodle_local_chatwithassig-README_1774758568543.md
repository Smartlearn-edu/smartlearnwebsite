# 🤖 Chat with Assignment AI (local_chatwithassignment)

<p align="center">
  <img src="https://img.shields.io/badge/Moodle-4.0+-orange.svg" alt="Moodle 4.0+">
  <img src="https://img.shields.io/badge/Maturity-Alpha-red.svg" alt="Alpha">
  <img src="https://img.shields.io/badge/License-GPLv3-blue.svg" alt="License">
</p>

## 📖 Overview

**Chat with Assignment AI** is an innovative Moodle local plugin that dramatically transforms how students engage with assignment feedback. By leveraging the **Moodle Core AI Subsystem**, it integrates an intelligent, personalized AI tutor directly into the assignment grading interface.

Instead of passively reading feedback (or ignoring it completely), students can have a dynamic conversation about their grade, rubric scores, and teacher comments in real-time.

---

## ✨ Key Features

- **🗣️ Interactive Grade Discussions:** Students can ask specific questions about their submission, feedback, or rubric criteria via a modern chat interface.
- **🧠 Intelligent Context Engine:** Sends precise grading data to the AI (Assignment details, Student grade, Rubric criteria, Teacher responses, and Submission content).
- **🎛️ Adjustable Context Levels:** Teachers or admins can control exactly what data is shared with the AI (Levels 1 to 5), balancing detail with token/API cost.
- **💸 Cost-Saving Settings:** Option to send assignment context only on the **first message**, significantly reducing AI API costs for follow-up questions.
- **🎓 Custom Prompt Instructions:** Teachers can guide the AI's persona (e.g., "Act as a constructive tutor" or "Encourage reflection").
- **🛡️ Privacy & GDPR Compliant:** Fully implements Moodle's privacy API. Students can clearly see and clear their chat history anytime.

---

## 🛠️ How It Works (The 5 Context Levels)

Administrators and teachers can choose from 5 levels of context sharing to determine how much information the AI accesses:

| Level | Name | What the AI Analyzes | Cost Impact |
|:---:|:---|:---|:---|
| **1** | **None** | Only the student's question | Very Low |
| **2** | **Minimal** | Final assignment grade | Low |
| **3** | **Summary** | Grade + Rubric criterion scores | Medium |
| **4** | **Standard** | Full rubric details + Teacher feedback & comments | High |
| **5** | **Full** | Everything above **+** Student's Online Text submission | Highest |

---

## 🚀 Installation & Setup

### Prerequisites
- Moodle **4.0** or later.
- `mod_assign` enabled.
- Moodle Core **AI Provider** fully configured (`\core_ai\aiactions\generate_text`).

### Installation Steps

1. **Download or Clone:**
   ```bash
   git clone https://github.com/your-repo/moodle_locaal_chatwithassignment.git local/chatwithassignment
   ```
2. **Move to Moodle:** Copy the `chatwithassignment` directory into your Moodle's `local/` directory.
3. **Upgrade Database:** Go to `Site Administration > Notifications` and complete the installation process.
4. **Configure AI Provider:** Make sure your AI subsystem in Moodle is configured properly in `Site Administration > AI > AI Providers`.

---

## 🎓 Usage Options

### For Teachers 👩‍🏫
On any Moodle assignment, access the **AI Chat Settings** area to:
- Enable/Disable the AI Chat for that specific assignment.
- Select the Context Level to share.
- Specify custom AI Instructions (e.g., *"Focus on helping the student improve their grammar without giving them the direct answer."*).

### For Students 👨‍🎓
Once enabled and after the assignment is graded, a new **"Ask AI About My Grade"** button appears. Clicking it opens a beautiful, modern chat pane where they can immediately ask:
- *"Why did I lose points on the grammar section?"*
- *"Can you explain the teacher's comment about 'weak conclusion'?"*
- *"How can I improve this for the next assignment?"*

---

## 🔒 Privacy & Data
This plugin adheres to the Moodle GDPR framework. 
Student conversation histories are securely stored (`mdl_local_cwa_messages`) with options for:
- One-click clear chat history by the student.
- Full portability and deletion under Moodle Privacy data requests.

---

## 📝 Roadmap
- [ ] Export conversation history as PDF.
- [ ] Auto-generate teacher FAQs from common student questions.
- [ ] Analytics dashboard for tracking feedback engagement.
- [ ] Multi-language voice inputs (Web Speech API).

---

## 🤝 Contributing
Contributions are welcome! Please feel free to open a Pull Request or create an Issue to discuss features or report bugs. 

## 📄 License
This plugin is licensed under the [GNU GPL v3 or later](http://www.gnu.org/copyleft/gpl.html).
