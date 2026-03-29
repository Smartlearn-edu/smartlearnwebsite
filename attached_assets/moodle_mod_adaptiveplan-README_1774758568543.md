# Moodle Adaptive Study Plan (`mod_adaptiveplan`)

The **Adaptive Study Plan** is a Moodle activity module that uses AI to generate personalized, adaptive study schedules for students based on course content, their prior knowledge, and their available time.

## 🌟 Features

- **AI-Powered Planning**: Automatically scans course modules and creates an optimized learning path.
- **Onboarding Questionnaire**: Students can input their available study hours, prior knowledge, and planning preferences.
- **Dynamic Checklists**: Breaks down study items into actionable sub-activities.
- **Smart Time Estimation**: Intelligently extracts time estimations from various course activity metadata.
- **AI Chat Coach**: Students can chat with their AI plan coach to negotiate deadlines or adjust the plan.

---

## ⏱️ How to Specify Activity Durations (Estimated Time)

The plugin scanner uses multiple smart fallback methods to detect the estimated completion time for every course activity. 

*(Yes! To confirm your notes: using `Duration (15:41)` in the description works perfectly! Here are all the supported formats:)*

### 1. In the Activity Name
The scanner can automatically extract time from the activity title:
- **Format:** `(MM:SS)` ➡️ *Example: "Intro to Physics Video (15:41)"* (It will automatically round 15:41 up to 16 mins)
- **Format:** `(X min)` ➡️ *Example: "Reading Material (20 min)"*

### 2. In the Activity Description / Intro text
You can place any of the following patterns anywhere in the activity description:
- **`Duration (MM:SS)`** ➡️ *Example: `Duration (15:41)`*
- **`Time: X min`** ➡️ *Example: `Time: 15 min`*
- **`Estimated Time: X`** ➡️ *Example: `Estimated Time: 20`*
- **`#Estimated Time=X#`** ➡️ *Example: `#Estimated Time=45#`*
- **`Pages: X`** ➡️ *Example: `Pages: 10`* (Extracts expected page count)

### 3. Using Moodle Tags
You can add tags to any Moodle activity that follow these patterns:
- Tag: `Estimated Time: 15`
- Tag: `#Estimated Time=15#`

### 4. Automatic Moodle Settings & Custom Fields
- **Quizzes:** Automatically syncs with the Moodle standard Quiz "Time limit" setting. No manual tags needed!
- **Custom Fields:** If you create a site-wide or course custom field with the shortname `estimated_time`, the scanner will map it automatically.

---

## 🚀 How to Setup and Use

1. **Install the plugin:** Install it via the Moodle plugin installer.
2. **Add to course:** Turn on edit mode in your course and click **Add an activity or resource**.
3. **Select 'Adaptive Study Plan'.**
4. **Configure Settings:** 
   - Provide custom AI prompt instructions if needed.
   - Choose which onboarding questions to show students (Hours available, Prior Knowledge, Planning Preferences).
   - Save and Display.
5. **Student View:** When students open the activity, they will complete the onboarding questions. Then, the AI will generate their comprehensive, calendar-integrated study roadmap.

---

## 🛠️ Technical Details & API

This plugin relies on the Moodle Core AI API (`\core_ai\manager`) and requires an active AI provider configured in your Moodle site administration settings.
