#!/usr/bin/env bash
set -e
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

show_header() {
  cat <<'EOF'
=================================
DISCORD BOT HUB INSTALLER
=================================
EOF
}

install_core_dependencies() {
  echo "\n[1/6] Updating operating system packages..."
  sudo apt update -y && sudo apt upgrade -y

  echo "\n[2/6] Installing required system tools..."
  sudo apt install -y curl git build-essential ufw

  echo "\n[3/6] Ensuring Node.js and npm are installed..."
  if ! command -v node >/dev/null 2>&1; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt install -y nodejs
  fi

  echo "\n[4/6] Installing PM2 globally..."
  sudo npm install -g pm2

  echo "\n[5/6] Verifying install tools..."
  node -v
  npm -v
  pm2 -v
  git --version

  echo "\n[6/6] Core dependencies installed."
}

configure_firewall() {
  echo "\n[7/7] Configuring UFW firewall..."
  sudo ufw allow OpenSSH
  sudo ufw --force enable
  sudo ufw status verbose
}

show_menu() {
  show_header
  echo "1. Moderation Bot"
  echo "2. Economy Bot"
  echo "3. Ticket Bot"
  echo "4. Giveaway Bot"
  echo "5. Leveling Bot"
  echo "6. Music Bot"
  echo "7. AI Chat Bot"
  echo "8. Verification Bot"
  echo "9. Utility Bot"
  echo "10. Marketplace Bot"
  echo "0. Exit"
  echo
  read -rp "Select Bot: " BOT_SELECTION
}

run_bot_install() {
  case "$BOT_SELECTION" in
    1) BOT_DIR="moderation-bot" ;;
    2) BOT_DIR="economy-bot" ;;
    3) BOT_DIR="ticket-bot" ;;
    4) BOT_DIR="giveaway-bot" ;;
    5) BOT_DIR="leveling-bot" ;;
    6) BOT_DIR="music-bot" ;;
    7) BOT_DIR="ai-chat-bot" ;;
    8) BOT_DIR="verification-bot" ;;
    9) BOT_DIR="utility-bot" ;;
    10) BOT_DIR="marketplace-bot" ;;
    0) echo "Exiting installer." ; exit 0 ;;
    *) echo "Invalid selection." ; return 1 ;;
  esac

  if [[ ! -f "$ROOT_DIR/$BOT_DIR/install.sh" ]]; then
    echo "Bot installer not found: $BOT_DIR"
    exit 1
  fi

  echo "\nInstalling $BOT_DIR..."
  cd "$ROOT_DIR/$BOT_DIR"
  chmod +x install.sh
  ./install.sh
}

main() {
  install_core_dependencies
  configure_firewall

  while true; do
    show_menu
    run_bot_install && break
  done

  echo "\nInstallation complete. Use the bot README for additional configuration and commands."
}

main "$@"
