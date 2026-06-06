# Utility Bot

Premium Discord utility bot with server information, translation, weather, polls, and tools.

## Features

- Server info and user info commands
- Avatar, poll, and reminder commands
- Calculator and translation tools
- Weather and time lookup
- Modular, multi-server ready

## Installation

1. Upload the `utility-bot` folder to your VPS.
2. Run `bash install.sh`.
3. Fill in the interactive environment fields.

## Configuration

- Edit `.env` to set bot credentials.
- Use `config/config.json` for command and localization settings.

## Troubleshooting

- Use `pm2 logs utility-bot` for any runtime errors.
- Ensure the bot has Send Messages and Embed Links permissions.

## Update Guide

- Pull updates.
- Run `npm install`.
- Restart with `pm2 restart utility-bot`.

## Commands

- `/ping`
- `/serverinfo`
- `/translate`
- `!weather`
