# Enable Markdown for Agents via Cloudflare

Cloudflare's **Markdown for Agents** feature allows AI agents and LLMs to request your website's content in clean, raw Markdown instead of HTML. This saves tokens, improves AI comprehension, and fulfills Agentic Browsing SEO requirements (like those found on PageSpeed Insights or WebMCP validators).

Because your site is managed through Cloudflare, **zero application code changes are required.**

Follow these steps to enable it:

### Step 1: Navigate to your Domain
1. Log into your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. On the left-hand sidebar, click on **Domains** (the globe icon).
3. Select your website domain (e.g., `smartlearn.education`).

### Step 2: Enable the Feature
1. Once inside your domain's dashboard, look at the left-hand sidebar.
2. Scroll down and click on **AI** (or **AI Crawl Control**).
3. Look for the card labeled **Markdown for Agents**.
4. Click the toggle switch to turn it **On**.

### Step 3: Validation
Once enabled, Cloudflare intercepts any request containing the `Accept: text/markdown` header and automatically converts the HTML to Markdown at the edge.

You can verify it is working by running this command in your terminal:

```bash
# Test the site directly
curl https://home.smartlearn.education/ -H "Accept: text/markdown"
```

Or, run it through the official validation scanner:

```bash
curl -X POST https://isitagentready.com/api/scan \
-H "Content-Type: application/json" \
-d '{"url": "https://home.smartlearn.education"}'
```

If it works, the scanner will return `"status": "pass"` for the `markdownNegotiation` check.
