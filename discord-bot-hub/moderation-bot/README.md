# Moderation Bot

Premium Discord moderation bot with auto-moderation, anti-raid, and logging features.

## Features

- Ban, Kick, Mute, Timeout
- Warn system and warning history
- Anti spam, anti-link, anti-raid
- Anti mention spam
- Auto moderation rules
- Join and leave logs
- Moderator dashboard commands
- Slash and prefix support

## Installation

1. Upload the `moderation-bot` folder to your VPS.
2. Run `bash install.sh` inside the folder.
3. Follow the wizard to create `.env`.
4. Use `pm2 status moderation-bot` to verify the service.

## Configuration

- Edit `.env` after installation to update settings.
- Use `config/config.json` to change logging and moderation defaults.

## VPS Guide

- The installer detects Ubuntu and installs Node.js, npm, PM2, and Git.
- PM2 is configured to auto-start the bot after reboot.

## Troubleshooting

- Check logs with `pm2 logs moderation-bot`.
- Ensure the bot token is valid and the bot has server permissions.
- Confirm database path in `.env` matches your selected storage.

## Update Guide

- Pull the latest source code.
- Run `npm install`.
- Restart with `pm2 restart moderation-bot`.

## Commands

- `/ping` - health check
- `/ban` - ban a user
- `!ban @user` - prefix ban command

## Command List

- `/ping`
- `/ban`
- `/warn`
- `/mute`
- `/clear`
