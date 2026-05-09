# Implementation Plan: Adding Blog & Docs Sections

Adding a **Blog** and **Documentation** section is the absolute best way to build Domain Authority and rank on Google for terms like *"Moodle Expert"*. 

However, because your current site is a Single Page Application (SPA) built with Vite and React, adding a blog introduces some architectural challenges—specifically around SEO.

Here is the proposed strategy and the key decisions we need to make together tomorrow:

## 1. Content Management Strategy (How will you write posts?)
We need to decide where your articles will live. There are two main approaches for a React site:

*   **Option A: Local Markdown/MDX Files (Recommended for Devs):** You write your blog posts and docs as `.md` or `.mdx` files directly in your code editor. We build a script that reads these files and turns them into beautiful React pages. It's fast, free, and developer-friendly.
*   **Option B: Database Driven (Via your API):** Since you already have a Node.js API with a Postgres database, we could build a small admin dashboard where you write posts, save them to the database, and the frontend fetches them. 

## 2. The SEO Challenge (How will Google read them?)
The whole point of a blog is for Google to index individual articles (e.g., `home.smartlearn.education/blog/installing-moodle`). Because your site is a React SPA, Google struggles to read dynamically loaded content. Our "Static HTML Fallback" trick works for a single homepage, but it doesn't scale to 50 blog posts.

*   **Option 1: Implement Vite SSG (Static Site Generation):** We configure a plugin like `vite-ssg` that pre-builds every single blog post into an actual HTML file during your `./deploy.sh` step. This is the ultimate SEO solution while keeping your current React code exactly as it is.
*   **Option 2: Server-Side Meta Tags:** We update your Nginx/Node.js server to detect when a bot visits a blog URL, and the server quickly injects the correct title and summary into the HTML before sending it. 

## 3. UI/UX Implementation
Regardless of the backend choices, here is what we will build on the frontend:
1.  **New Routes:** Add `/blog`, `/blog/:slug`, `/docs`, and `/docs/:slug` to your React Router.
2.  **Typography Plugin:** Integrate `@tailwindcss/typography` so your markdown articles look beautiful, readable, and highly professional out-of-the-box.
3.  **Navigation:** Update the top navbar to include prominent links to "Blog" and "Docs".

---

> [!IMPORTANT]
> **Open Questions for Tomorrow**
> 1. Do you prefer writing your blog posts as Markdown files in VS Code, or do you want a database-driven approach?
> 2. Are you comfortable with us implementing Static Site Generation (SSG) to ensure your blog actually ranks on Google?
> 
> Review this plan when you're ready, and we will hit the ground running tomorrow!
