# Music Bot

Premium Discord music bot with queue management, playlists, and 24/7 playback options.

## Features

- Play and pause music
- Resume, skip, and skip-to
- Queue and shuffle commands
- Loop modes and playlist support
- Volume control and 24/7 mode

## Installation

1. Upload the `music-bot` folder to your VPS.
2. Run `bash install.sh`.
3. Complete the interactive configuration.

## Configuration

- Set your token and database path in `.env`.
- Adjust music settings in `config/config.json`.

## Troubleshooting

- Use `pm2 logs music-bot` to inspect playback errors.
- Verify the bot has Connect, Speak, and Use Voice Activity permissions.

## Update Guide

- Pull changes.
- Run `npm install`.
- Restart with `pm2 restart music-bot`.

## Commands

- `/ping`
- `/play`
- `!play`
