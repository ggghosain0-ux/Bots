# Installation Guide

This guide describes how to install any bot in the Discord Bot Hub repository.

## Master Installer

1. Upload the repository to your VPS.
2. Run `bash install.sh` from the repository root.
3. Choose the bot you want from the interactive menu.
4. Follow the prompts to provide your Discord token, IDs, prefix, database type, database URL, and support server link.

## Individual Bot Installers

Each bot also supports its own installer:

```bash
cd <bot-folder>
bash install.sh
```

That script will:

- Update Ubuntu packages
- Install Git, curl, build tools, Node.js, npm, and PM2
- Ask for environment values
- Install dependencies with `npm install`
- Configure UFW firewall
- Start the bot using PM2
- Save PM2 process state for reboot recovery
