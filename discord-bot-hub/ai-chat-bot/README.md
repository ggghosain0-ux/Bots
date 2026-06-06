# AI Chat Bot

Premium Discord AI chat bot with conversational AI, summaries, translation, and moderation assistance.

## Features

- AI conversations and chat prompts
- AI help commands and summaries
- AI translation support
- AI image prompt generator
- AI moderation messages

## Installation

1. Upload the `ai-chat-bot` folder to your VPS.
2. Run `bash install.sh`.
3. Enter your bot and AI API credentials.

## Configuration

- Set `.env` values for your bot and AI provider.
- Customize `config/config.json` for response formatting and moderation filters.

## Troubleshooting

- Use `pm2 logs ai-chat-bot` for runtime errors.
- Ensure your AI API key is valid and rate limits are respected.

## Update Guide

- Pull updates.
- Run `npm install`.
- Restart with `pm2 restart ai-chat-bot`.

## Commands

- `/ping`
- `/ask`
- `!ask`
