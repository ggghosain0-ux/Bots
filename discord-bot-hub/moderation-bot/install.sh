#!/usr/bin/env bash
set -e
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

ensure_system() {
  echo "[1/7] Checking operating system packages..."
  sudo apt update -y && sudo apt upgrade -y

  echo "[2/7] Installing Git, curl, and build tools..."
  sudo apt install -y git curl build-essential ufw

  echo "[3/7] Installing Node.js and npm..."
  if ! command -v node >/dev/null 2>&1; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt install -y nodejs
  fi

  echo "[4/7] Installing PM2..."
  sudo npm install -g pm2
}

create_env() {
  echo "[5/7] Generating environment configuration..."
  cp -n .env.example .env || true
  read -rp "Discord Bot Token: " DISCORD_TOKEN
  read -rp "Client ID: " CLIENT_ID
  read -rp "Guild ID: " GUILD_ID
  read -rp "Owner ID: " OWNER_ID
  read -rp "Command Prefix: " PREFIX
  read -rp "Database Type (sqlite/mysql/mongodb): " DATABASE_TYPE
  read -rp "Database URL: " DATABASE_URL
  read -rp "Support Server Link: " SUPPORT_SERVER
  cat > .env <<EOF
DISCORD_TOKEN="$DISCORD_TOKEN"
CLIENT_ID="$CLIENT_ID"
GUILD_ID="$GUILD_ID"
OWNER_ID="$OWNER_ID"
PREFIX="$PREFIX"
DATABASE_TYPE="$DATABASE_TYPE"
DATABASE_URL="$DATABASE_URL"
SUPPORT_SERVER="$SUPPORT_SERVER"
EOF
}

install_dependencies() {
  echo "[6/7] Installing bot dependencies..."
  npm install
}

configure_firewall() {
  echo "[7/8] Configuring UFW firewall..."
  sudo ufw allow OpenSSH
  sudo ufw --force enable
  sudo ufw status verbose
}

configure_pm2() {
  echo "[8/8] Configuring PM2 for the bot..."
  pm2 start src/index.js --name moderation-bot
  pm2 save
  pm2 startup systemd -u "$USER" --hp "$HOME"
}

main() {
  ensure_system
  create_env
  install_dependencies
  configure_firewall
  configure_pm2
  echo "\nModeration Bot installed successfully!"
  echo "Commands:"
  echo "  pm2 status moderation-bot"
  echo "  pm2 restart moderation-bot"
  echo "  pm2 stop moderation-bot"
  echo "  pm2 delete moderation-bot"
  echo "  pm2 logs moderation-bot"
}

main "$@"
