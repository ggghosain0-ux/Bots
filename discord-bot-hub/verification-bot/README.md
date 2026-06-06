# Verification Bot

Premium Discord verification bot with button and CAPTCHA verification plus auto role assignment.

## Features

- Button verification panels
- CAPTCHA challenge flows
- Auto role assignment on verification
- Anti-bot protection
- Logging for verification events

## Installation

1. Upload the `verification-bot` folder to your VPS.
2. Run `bash install.sh`.
3. Provide your token and server info.

## Configuration

- Update `.env` for your bot details.
- Use `config/config.json` to define verification roles and channels.

## Troubleshooting

- Check `pm2 logs verification-bot` if verification fails.
- Confirm the bot has Manage Roles and Send Messages permissions.

## Update Guide

- Pull updates.
- Run `npm install`.
- Restart with `pm2 restart verification-bot`.

## Commands

- `/ping`
- `/verify`
- `!verify`
