# Marketplace Bot

Premium Discord marketplace bot with digital product management, coupons, and auto delivery.

## Features

- Digital product store and categories
- Order processing and download links
- Coupon system and discounts
- QR payment support and customer logs
- Auto delivery and purchase history

## Installation

1. Upload the `marketplace-bot` folder to your VPS.
2. Run `bash install.sh`.
3. Enter your bot credentials and database path.

## Configuration

- Update `.env` for token and database settings.
- Customize `config/config.json` for store categories and payment channels.

## Troubleshooting

- Use `pm2 logs marketplace-bot` for runtime issues.
- Confirm the bot has Manage Messages and Send Messages permissions.

## Update Guide

- Pull updates.
- Run `npm install`.
- Restart with `pm2 restart marketplace-bot`.

## Commands

- `/ping`
- `/buy`
- `!store`
