# Smart Learn auth.md

> Authentication and Agent Registration Guide for Smart Learn APIs and Services.

## Overview
Smart Learn provides public resources and automated endpoints for Moodle LMS architecture, plugin discovery, and technical consultation.

## Agent Audience & Access Policy
- **Public Discovery & APIs**: The plugin catalog (`/catalog.json`), API catalog (`/.well-known/api-catalog`), MCP server card (`/.well-known/mcp/server-card.json`), and Agent Skills discovery (`/.well-known/agent-skills/index.json`) are public and do not require API keys or credentials.
- **Inquiries & Contact**: Autonomous agents can programmatically submit inquiries via `POST /api/contact` anonymously with JSON payload:
  ```json
  {
    "name": "Agent / User Name",
    "email": "contact@example.com",
    "message": "Inquiry details..."
  }
  ```
- **Protected / Administrative Endpoints**: Restricted administration endpoints require Bearer token authorization in the HTTP request header (`Authorization: Bearer <token>`).
