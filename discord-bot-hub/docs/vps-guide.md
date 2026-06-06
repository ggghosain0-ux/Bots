# VPS Guide

This repository is designed for Ubuntu and Debian-based VPS systems.

## Requirements

- Ubuntu 20.04 or newer
- Node.js 20.x
- npm
- PM2
- Git

## Recommended VPS Setup

- Use at least 1 CPU and 1GB RAM for a single bot.
- Use 2GB+ RAM for multiple bots or music/AI features.
- Configure swap if your VPS has limited memory.

## Running the Installer

From the repository root:

```bash
bash install.sh
```

The installer will also enable UFW and allow SSH.

## PM2 Management

Useful commands after installation:

- `pm2 status`
- `pm2 restart <bot-name>`
- `pm2 stop <bot-name>`
- `pm2 delete <bot-name>`
- `pm2 logs <bot-name>`

## Security Notes

- Keep your `.env` files private.
- Do not commit `.env` to Git.
- Use strong bot tokens and database credentials.
