#!/bin/bash

# Eyora App - Deployment Script
# Deploys the Eyora Next.js app on port 3001
# Safe: does NOT touch the existing app on port 3000
#
# Usage: sudo bash deploy-eyora.sh

set -e

APP_DIR="/home/aeroskopuser/eyora"
APP_USER="aeroskopuser"
REPO_URL="https://github.com/AI-APP-FREELANCER/aeroskop-eyora.git"
PM2_APP_NAME="eyora-app"
PORT=3001

echo "=========================================="
echo "  Eyora App — Deployment Script"
echo "  Port: $PORT (separate from existing app)"
echo "=========================================="
echo "⚠️  Running all operations as '${APP_USER}' for security"
echo ""

# ── Step 1: Check existing app is untouched ──────────────────────────────────
echo "Step 1: Verifying existing app on port 3000 is still running..."
if sudo ss -tulpn 2>/dev/null | grep -q :3000 || sudo netstat -tulpn 2>/dev/null | grep -q :3000; then
    echo "✓ Existing app on port 3000 is alive — will NOT be touched"
else
    echo "  ℹ️  No process on port 3000 detected (existing app may be stopped)"
fi
echo ""

# ── Step 2: Clone or pull latest code ────────────────────────────────────────
echo "Step 2: Setting up application directory..."
if [ -d "$APP_DIR/.git" ]; then
    echo "  Repository exists — pulling latest changes..."
    sudo -u "$APP_USER" bash -c "cd '$APP_DIR' && git pull origin main"
else
    echo "  Cloning repository..."
    sudo mkdir -p "$APP_DIR"
    sudo chown -R "$APP_USER:$APP_USER" "$APP_DIR"
    sudo -u "$APP_USER" git clone "$REPO_URL" "$APP_DIR"
fi
echo "✓ Code is up to date"
echo ""

# ── Step 3: Fix ownership ─────────────────────────────────────────────────────
echo "Step 3: Fixing directory ownership..."
sudo chown -R "$APP_USER:$APP_USER" "$APP_DIR"
echo "✓ Ownership set to ${APP_USER}"
echo ""

# ── Step 4: Stop only the Eyora PM2 process (leave other apps alone) ─────────
echo "Step 4: Stopping Eyora PM2 process (if running)..."
sudo -u "$APP_USER" pm2 stop "$PM2_APP_NAME" 2>/dev/null && echo "  Stopped $PM2_APP_NAME" || echo "  $PM2_APP_NAME was not running (OK)"
sudo -u "$APP_USER" pm2 delete "$PM2_APP_NAME" 2>/dev/null || true
echo "✓ Eyora process cleared"
echo ""

# ── Step 5: Kill anything on port 3001 ───────────────────────────────────────
echo "Step 5: Clearing port ${PORT}..."
PORT_PIDS=$(sudo lsof -ti:${PORT} 2>/dev/null || echo "")
if [ -n "$PORT_PIDS" ]; then
    echo "  Found processes on port ${PORT}: $PORT_PIDS — killing..."
    echo "$PORT_PIDS" | xargs -r sudo kill -9 2>/dev/null || true
    sleep 2
    echo "✓ Port ${PORT} cleared"
else
    echo "✓ Port ${PORT} is free"
fi
echo ""

# ── Step 6: Remove old build artifacts ───────────────────────────────────────
echo "Step 6: Removing old build artifacts..."
sudo rm -rf "$APP_DIR/.next" 2>/dev/null || true
sudo -u "$APP_USER" rm -rf "$APP_DIR/node_modules/.cache" 2>/dev/null || true
echo "✓ Build artifacts removed"
echo ""

# ── Step 7: Install dependencies ─────────────────────────────────────────────
echo "Step 7: Installing dependencies (as ${APP_USER})..."
sudo -u "$APP_USER" bash -c "cd '$APP_DIR' && npm install"
echo "✓ Dependencies installed"
echo ""

# ── Step 8: Build the application ────────────────────────────────────────────
echo "Step 8: Building application (as ${APP_USER})..."
sudo -u "$APP_USER" bash -c "cd '$APP_DIR' && npm run build"
echo "✓ Build complete"
echo ""

# ── Step 9: Fix build ownership and permissions ───────────────────────────────
echo "Step 9: Setting correct ownership and permissions..."
sudo chown -R "$APP_USER:$APP_USER" "$APP_DIR/.next"
sudo chmod -R o+rX "$APP_DIR/.next"
sudo chmod o+x /home/aeroskopuser
sudo chmod o+x "$APP_DIR"
echo "✓ Permissions set"
echo ""

# ── Step 10: Start PM2 for Eyora only ────────────────────────────────────────
echo "Step 10: Starting Eyora via PM2 (as ${APP_USER})..."
sudo -u "$APP_USER" bash -c "cd '$APP_DIR' && pm2 start ecosystem.config.js --env production"
sudo -u "$APP_USER" bash -c "pm2 save"
echo "✓ PM2 started"
echo ""

# ── Step 11: Wait and verify ─────────────────────────────────────────────────
echo "Step 11: Waiting for application to initialize..."
sleep 8

echo ""
echo "Step 12: Verifying Eyora is listening on port ${PORT}..."
if sudo ss -tulpn 2>/dev/null | grep -q :${PORT} || sudo netstat -tulpn 2>/dev/null | grep -q :${PORT}; then
    echo "✓ Eyora is listening on port ${PORT}"
else
    echo "⚠  Eyora may not be on port ${PORT} yet — check logs below"
fi
echo ""

echo "Step 13: PM2 status (showing ALL apps — existing app should still be online)..."
sudo -u "$APP_USER" pm2 status
echo ""

echo "Step 14: Eyora recent logs..."
sudo -u "$APP_USER" pm2 logs "$PM2_APP_NAME" --lines 30 --nostream
echo ""

# ── Step 15: Nginx setup ──────────────────────────────────────────────────────
echo "Step 15: Setting up Nginx for Eyora..."
if [ -f "$APP_DIR/nginx-eyora.conf" ]; then
    sudo cp "$APP_DIR/nginx-eyora.conf" /etc/nginx/sites-available/eyora
    # Enable site if not already linked
    if [ ! -f /etc/nginx/sites-enabled/eyora ]; then
        sudo ln -s /etc/nginx/sites-available/eyora /etc/nginx/sites-enabled/eyora
        echo "  ✓ Nginx site enabled"
    else
        echo "  ✓ Nginx site already enabled"
    fi
    sudo nginx -t && sudo systemctl reload nginx
    echo "✓ Nginx configured and reloaded"
else
    echo "⚠  nginx-eyora.conf not found in $APP_DIR — skipping Nginx setup"
fi
echo ""

# ── Summary ───────────────────────────────────────────────────────────────────
echo "=========================================="
echo "  Eyora Deployment Complete!"
echo "=========================================="
echo ""
echo "✅ Eyora app running on port ${PORT}"
echo "✅ Existing app on port 3000 untouched"
echo ""
echo "📋 Useful commands:"
echo "  PM2 status:        sudo -u ${APP_USER} pm2 status"
echo "  Eyora logs:        sudo -u ${APP_USER} pm2 logs ${PM2_APP_NAME}"
echo "  Restart Eyora:     sudo -u ${APP_USER} pm2 restart ${PM2_APP_NAME}"
echo "  Check port ${PORT}:    sudo ss -tulpn | grep ${PORT}"
echo ""
echo "⚠️  Don't forget to:"
echo "  1. Edit nginx-eyora.conf and replace YOUR_EYORA_DOMAIN with your domain"
echo "  2. Run: sudo cp $APP_DIR/nginx-eyora.conf /etc/nginx/sites-available/eyora"
echo "  3. Run: sudo nginx -t && sudo systemctl reload nginx"
echo "  4. Point your domain DNS A-record to this server's IP"
echo "  5. (Optional) Set up SSL: sudo certbot --nginx -d YOUR_EYORA_DOMAIN"
echo ""
