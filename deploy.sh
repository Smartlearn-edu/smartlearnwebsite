
#!/usr/bin/env bash
# Smart Learn — VPS deploy script
# Place this file at the root of your cloned repo on your VPS.
# Usage: ./deploy.sh
# First-time setup: chmod +x deploy.sh

set -e  # exit on any error

# ─── Configuration ────────────────────────────────────────────────────────────
DEPLOY_DIR="$(cd "$(dirname "$0")" && pwd)"  # directory where this script lives
API_PORT="${PORT:-8080}"
FRONTEND_BUILD_DIR="$DEPLOY_DIR/artifacts/smart-learn/dist/public"
API_BUILD_DIR="$DEPLOY_DIR/artifacts/api-server/dist"
PM2_APP_NAME="smartlearn-api"
NGINX_FRONTEND="/www/wwwroot/home.smartlearn.education/frontend"

# Load .env if present so DATABASE_URL etc. are available
if [ -f "$DEPLOY_DIR/.env" ]; then
  set -a
  source "$DEPLOY_DIR/.env"
  set +a
fi

echo ""
echo "========================================"
echo "  Smart Learn — Deploy"
echo "  $(date '+%Y-%m-%d %H:%M:%S')"
echo "========================================"
echo ""

# ─── 1. Pull latest code ──────────────────────────────────────────────────────
echo "▶ Pulling latest code from GitHub..."
cd "$DEPLOY_DIR"
git pull
echo "✓ Code updated"
echo ""

# ─── 2. Install / update dependencies ────────────────────────────────────────
echo "▶ Installing dependencies..."
pnpm install --frozen-lockfile
echo "✓ Dependencies ready"
echo ""

# ─── 3. Push DB schema (create/migrate tables) ───────────────────────────────
echo "▶ Pushing DB schema..."
pnpm --filter @workspace/db run push
echo "✓ DB schema up to date"
echo ""

# ─── 3. Build frontend ────────────────────────────────────────────────────────
echo "▶ Building frontend..."
cd "$DEPLOY_DIR/artifacts/smart-learn" && PORT=8080 BASE_PATH=/ pnpm run build && cd "$DEPLOY_DIR"
echo "✓ Frontend built → $FRONTEND_BUILD_DIR"
echo ""

# ─── 3b. Copy frontend files to Nginx directory ───────────────────────────────
echo "▶ Copying frontend files to Nginx directory..."

# Preserve user-uploaded plugin images before wiping
PLUGIN_BACKUP="/tmp/sl_plugins_backup_$$"
if [ -d "$NGINX_FRONTEND/plugins" ]; then
  echo "  → Backing up plugin images..."
  cp -r "$NGINX_FRONTEND/plugins" "$PLUGIN_BACKUP"
fi

rm -rf "$NGINX_FRONTEND"/*
cp -r "$FRONTEND_BUILD_DIR/." "$NGINX_FRONTEND/"

# Restore plugin images
if [ -d "$PLUGIN_BACKUP" ]; then
  echo "  → Restoring plugin images..."
  cp -r "$PLUGIN_BACKUP" "$NGINX_FRONTEND/plugins"
  rm -rf "$PLUGIN_BACKUP"
fi

echo "✓ Frontend files copied → $NGINX_FRONTEND"
echo ""

# ─── 4. Build API server ──────────────────────────────────────────────────────
echo "▶ Building API server..."
cd "$DEPLOY_DIR/artifacts/api-server" && pnpm run build && cd "$DEPLOY_DIR"
echo "✓ API server built → $API_BUILD_DIR"
echo ""

# ─── 5. Restart API via PM2 ──────────────────────────────────────────────────
echo "▶ Restarting API server..."
pm2 delete "$PM2_APP_NAME" 2>/dev/null || true
pm2 start ecosystem.config.cjs
pm2 save
echo "✓ PM2 process '$PM2_APP_NAME' started with fresh env"
echo ""

echo "========================================"
echo "  ✅ Deploy complete!"
echo "  Frontend: $NGINX_FRONTEND"
echo "  API:      running via PM2 on port $API_PORT"
echo "========================================"
echo ""
