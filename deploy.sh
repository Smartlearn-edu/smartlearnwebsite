
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

# Load .env if present so DATABASE_URL etc. are available
if [ -f "$DEPLOY_DIR/.env" ]; then
  export $(grep -v '^#' "$DEPLOY_DIR/.env" | xargs)
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

# ─── 3. Build frontend ────────────────────────────────────────────────────────
echo "▶ Building frontend..."
BASE_PATH=/ PORT="$API_PORT" pnpm --filter @workspace/smart-learn run build
echo "✓ Frontend built → $FRONTEND_BUILD_DIR"
echo ""

# ─── 4. Build API server ──────────────────────────────────────────────────────
echo "▶ Building API server..."
pnpm --filter @workspace/api-server run build
echo "✓ API server built → $API_BUILD_DIR"
echo ""

# ─── 5. Restart API via PM2 ──────────────────────────────────────────────────
echo "▶ Restarting API server..."
if pm2 describe "$PM2_APP_NAME" > /dev/null 2>&1; then
  pm2 restart "$PM2_APP_NAME"
  echo "✓ PM2 process '$PM2_APP_NAME' restarted"
else
  echo "  PM2 process '$PM2_APP_NAME' not found — starting it now..."
  pm2 start "$API_BUILD_DIR/index.mjs" \
    --name "$PM2_APP_NAME" \
    --env production
  pm2 save
  echo "✓ PM2 process '$PM2_APP_NAME' started and saved"
fi
echo ""

echo "========================================"
echo "  ✅ Deploy complete!"
echo "  Frontend: $FRONTEND_BUILD_DIR"
echo "  API:      running via PM2 on port $API_PORT"
echo "========================================"
echo ""
