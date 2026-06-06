# Economy Bot

Premium Discord economy bot with rewards, banking, shop, and leaderboard features.

## Features

- Daily, weekly, monthly rewards
- Wallet and bank system
- Deposit, withdraw, rob, work, beg
- Gambling and shop system
- Item system and leaderboards
- Economy logs and multi-server support

## Installation

1. Upload the `economy-bot` folder to your VPS.
2. Run `bash install.sh` inside the folder.
3. Provide credentials in the interactive wizard.
4. Check status with `pm2 status economy-bot`.

## Configuration

- Edit `.env` and `config/config.json` to customize currency, cooldowns, and shop items.

## VPS Guide

- The installer supports Ubuntu and installs PM2 for auto restart.
- The bot process is saved and configured to restart on reboot.

## Troubleshooting

- Use `pm2 logs economy-bot` for log output.
- Ensure the bot has server permissions and database access.

## Update Guide

- Pull source updates.
- Run `npm install`.
- Restart with `pm2 restart economy-bot`.

## Commands

- `/ping`
- `/daily`
- `!daily`
- `!wallet`
