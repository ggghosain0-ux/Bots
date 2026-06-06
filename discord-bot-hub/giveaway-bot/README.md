# Giveaway Bot

Premium Discord giveaway bot with scheduling, bonus entries, and rerolls.

## Features

- Create and end giveaways
- Schedule timed giveaways
- Multiple winners support
- Bonus entries and role entries
- Reroll winners and archive logs

## Installation

1. Upload the `giveaway-bot` folder to your VPS.
2. Run `bash install.sh`.
3. Provide the bot and server configuration.

## Configuration

- Edit `.env` to store your token and database details.
- Use `config/config.json` to define default giveaway duration and entry settings.

## Troubleshooting

- Use `pm2 logs giveaway-bot` for detailed errors.
- Ensure the bot has Manage Messages and Embed Links permissions.

## Update Guide

- Pull updates.
- Run `npm install`.
- Restart with `pm2 restart giveaway-bot`.

## Commands

- `/ping`
- `/giveaway`
- `!giveaway`
