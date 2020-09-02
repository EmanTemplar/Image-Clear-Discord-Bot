# Discord Bot to keep Text Channels in Servers Clear. 
Objective is to create a functional bot that can be started and stopped in multiple channels of a Discord Server to be able to keep text channels, text only.

## Commands:
The symbol for all commands is "$"

- "$imageclear" will start the loop to clear all images/links/embeds/attachments every 3 seconds (or specified amount of time)
- "$imagedel" will delte all images in the text channel once
- "$textclear" will start the loop to clear all text messages every 3 seconds (or specific amount of time)
- "$textdel" will delete all text in the text channel once
- "$stop" will stop all loops

### Setting up for personal use:
You need to add a '.env' file to act as the token login for the bot. This file will contain the following parameters (ignore parantheses for content);

DISCORD_TOKEN:(insert bot token here)
OWNER=(ID token of server owner)
PREFIX=(choose prefix that you want to use across the bot, default is "$")