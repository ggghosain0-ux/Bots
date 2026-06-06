# Leveling Bot

Premium Discord leveling bot with message and voice XP, rank cards, and role rewards.

## Features

- XP accumulation for messages and voice activity
- Rank cards and customizable designs
- Leaderboards and ranking channels
- Role rewards on level up
- Multi-server support with modular settings

## Installation

1. Upload the `leveling-bot` folder to your VPS.
2. Run `bash install.sh`.
3. Follow the interactive setup prompts.

## Configuration

- Edit `.env` for token and database information.
- Customize `config/config.json` to adjust XP rates and rewards.

## Troubleshooting

- Use `pm2 logs leveling-bot` for runtime diagnostics.
- Ensure the bot has Manage Roles and View Channels permissions.

## Update Guide

- Pull updates and run `npm install`.
- Restart with `pm2 restart leveling-bot`.

## Commands

- `/ping`
- `/rank`
- `!rank`
