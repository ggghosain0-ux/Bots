# Ticket Bot

Premium Discord ticket system with panels, buttons, transcripts, and staff routing.

## Features

- Ticket panels and buttons
- Claim and close ticket workflows
- Transcript generation
- Ticket categories and staff roles
- Ticket logs and moderation support

## Installation

1. Upload the `ticket-bot` folder to your VPS.
2. Run `bash install.sh`.
3. Set environment values via the interactive wizard.
4. Confirm with `pm2 status ticket-bot`.

## Configuration

- Update `.env` for bot settings.
- Customize `config/config.json` to set category channels, roles, and logs.

## Troubleshooting

- Use `pm2 logs ticket-bot` to inspect errors.
- Ensure the bot has Manage Channels and Send Messages permission.

## Update Guide

- Pull updates and run `npm install`.
- Restart with `pm2 restart ticket-bot`.

## Commands

- `/ping`
- `/ticket`
- `!ticket`
