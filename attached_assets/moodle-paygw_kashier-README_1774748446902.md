# Kashier Payment Gateway for Moodle

A modern, secure payment gateway integration for Moodle LMS, allowing administrators to seamlessly accept global payments via the [Kashier](https://kashier.io/) payment processor using Moodle's native Payment API.

![Kashier Integration](https://raw.githubusercontent.com/moodle/moodle/main/pix/moodlelogo.svg) 

## ✨ Features

- **Native Moodle Integration**: Built completely around the modern Moodle `core_payment` subsystem (Moodle 3.10+).
- **Hosted Checkout**: Securely redirects users to Kashier's responsive payment page to minimize your server's PCI-DSS compliance scope.
- **Automated Webhooks**: Automatically captures server-to-server webhook notifications directly from Kashier. The plugin hashes and verifies the `x-kashier-signature` to ensure 100% secure order fulfillment without relying on the user's browser redirecting back.
- **Sandbox Testing Environment**: Built-in test toggle for easy end-to-end integration testing before going live.
- **Multiple Currencies**: Natively supports processing in EGP, USD, EUR, and GBP.

## 📋 Requirements

- **Moodle version:** 4.0 or higher
- **PHP version:** 7.4 or higher
- A valid [Kashier Merchant Account](https://merchant.kashier.io/) (Sandbox or Live)

---

## 🚀 Installation

### Manual Installation
1. Clone or download the repository contents.
2. Ensure the resulting directory is named **`kashier`**.
3. Upload or move the `kashier` directory into your Moodle installation's gateway directory:  
   `[MOODLE_ROOT]/payment/gateway/kashier/`
4. Log into your Moodle site as an administrator.
5. You will be prompted to upgrade your Moodle database. Alternatively, run the CLI upgrade script:
   ```bash
   php admin/cli/upgrade.php
   ```

---

## ⚙️ Configuration

1. As an administrator, navigate to:  
   **Site administration** > **Plugins** > **Payment gateways** > **Payment gateways**.
2. Locate **Kashier** in the list of gateways and enable it.
3. Click on the **Settings** link next to the Kashier gateway.
4. Fill in the exact API details provided by your Kashier Merchant Dashboard:
   - **Merchant ID**: Found in your Kashier profile settings.
   - **API Key**: Found in your API keys dashboard.
   - **Secret Key**: Used to generate secure transaction sessions and verify webhooks.
5. Toggle **Test Mode** on if you are integrating with Sandbox keys, or toggle off when you are ready to collect real payments.

---

## 🪝 Webhooks & Callbacks

When Kashier processes a successful payment, it issues a secure POST request directly to your server. The `paygw_kashier` plugin handles this **automatically** by appending the webhook URL dynamically to every checkout session based on your Moodle's `$CFG->wwwroot`.

You do **not** need to manually configure the webhook endpoint within the Kashier backend interface, as Moodle registers its destination for every individual transaction dynamically.

---

## 📝 License

This software is licensed under the [GNU General Public License v3 or later](https://www.gnu.org/copyleft/gpl.html).

> **Copyright (c) 2026** Mohammad Nabil • Smartlearn Education  
> ✉️ [mohammad@smartlearn.education](mailto:mohammad@smartlearn.education)
