# 🔒 Protected PDF — Moodle Activity Plugin

**`mod_protectedpdf`** is a Moodle activity module that lets teachers upload PDF files that are automatically **watermarked with student information** upon download — deterring unauthorized sharing while keeping the original file safe on the server.

---

## ✨ Features

- 📄 **Upload any PDF** as a course activity resource
- 🖊️ **Auto-watermarking** — each download is stamped with the student's **full name** and **email address**
- 🔐 **Access control** — only enrolled, authenticated users with the `view` capability can download
- 📋 **Completion tracking** — supports Moodle's activity completion (tracks views)
- 💾 **Backup & restore** — fully compatible with Moodle 2 backup/restore
- 🔄 **FPDI-powered** — uses FPDI to overlay watermarks on the original PDF pages (graceful fallback when FPDI is unavailable)

---

## 📋 Requirements

| Requirement | Version |
|---|---|
| Moodle | 3.10 or higher (`2020110900+`) |
| PHP | 7.4 or higher |
| TCPDF | Bundled with Moodle |
| FPDI (recommended) | `setasign/fpdi ^2.6` via Composer |

> **Note:** FPDI is required for full watermarking functionality. Without it, only a notice page is generated instead of the original PDF with a watermark footer.

---

## 🚀 Installation

### 1. Copy plugin files

Place the plugin directory into your Moodle installation:

```
{moodle_root}/mod/protectedpdf/
```

### 2. Install the FPDI dependency (recommended)

From inside the plugin directory, run:

```bash
composer install
```

This installs `setasign/fpdi ^2.6`, which is required for overlaying watermarks on existing PDF pages.

### 3. Run Moodle upgrade

Log in as a **Site Administrator** and navigate to:

```
Site administration → Notifications
```

Moodle will detect the new plugin and install the database table automatically.

---

## 🎓 Usage

### For Teachers / Admins

1. Navigate to a course and **Turn editing on**.
2. Click **Add an activity or resource**.
3. Choose **Protected PDF** from the activity list.
4. Fill in the **Name** and optional **Description**.
5. Upload your PDF file under the **Content** section.
6. Save and return to the course.

### For Students

1. Click the **Protected PDF** activity link in the course.
2. The activity page displays a short notice explaining the watermark policy.
3. Click the **Download PDF** button.
4. The file is served as a dynamically generated PDF with a watermark footer:
   > `Downloaded by: John Doe (john.doe@example.com)`

---

## 🛠️ How It Works

```
Student clicks "Download PDF"
        │
        ▼
download.php verifies login and capability
        │
        ▼
Retrieves stored PDF from Moodle file system
        │
        ▼
FPDI imports each page of the original PDF
        │
        ▼
TCPDF adds watermark footer (name + email) to every page
        │
        ▼
Outputs combined PDF as a forced download
```

If FPDI is **not** available, a fallback cover-page PDF is generated with a notice explaining the limitation.

---

## 🔑 Capabilities

| Capability | Default Roles | Description |
|---|---|---|
| `mod/protectedpdf:addinstance` | Teacher, Manager | Add a new Protected PDF to a course |
| `mod/protectedpdf:view` | Student, Teacher, Manager | View and download the watermarked PDF |

---

## 📁 File Structure

```
mod/protectedpdf/
├── backup/                  # Backup & restore handlers
├── classes/
│   └── event/               # Moodle event classes (course_module_viewed)
├── db/
│   ├── access.php           # Capability definitions
│   └── install.xml          # Database schema
├── lang/
│   └── en/
│       └── protectedpdf.php # English language strings
├── pix/                     # Plugin icon
├── vendor/                  # Composer dependencies (FPDI)
├── composer.json            # Composer configuration
├── download.php             # Watermark generation & PDF delivery
├── index.php                # List all instances in a course
├── lib.php                  # Moodle API functions
├── locallib.php             # Internal helper functions
├── mod_form.php             # Activity settings form
├── version.php              # Plugin version metadata
└── view.php                 # Activity view page
```

---

## 🔒 Privacy

This plugin does **not store** any personal data. Student name and email are read from the active session at download time and embedded into the generated PDF only — no logging or persistent tracking occurs.

See `lang/en/protectedpdf.php` for the full privacy metadata string.

---

## 📝 Changelog

### v1.0 (2024-12-13)
- Initial stable release
- PDF upload and storage via Moodle file API
- FPDI-based watermark overlay per page
- Graceful fallback when FPDI is unavailable
- Moodle completion tracking and event logging
- Full backup/restore support

---

## 📄 License

This plugin is free software: you can redistribute it and/or modify it under the terms of the **GNU General Public License** as published by the Free Software Foundation, either version 3 of the License, or any later version.

See [https://www.gnu.org/licenses/gpl-3.0.html](https://www.gnu.org/licenses/gpl-3.0.html) for details.
