# Discord Welcomer Bot

This project contains two implementations of a Discord Welcomer Bot, written in **Python** and **JavaScript (Node.js)**. The bot greets new members when they join a server, optionally says goodbye when they leave, and can be easily customized for your server's needs.

---

## Features

- Welcomes new members to the server with a personalized message.
- (Optional) Sends a farewell message when members leave the server.
- Can assign default roles to new members (optional).
- Highly customizable for both Python and JavaScript implementations.

---

## Prerequisites

- **Python 3.8+** (for the Python bot).
- **Node.js 16.9.0+** (for the JavaScript bot).
- A bot application with a token from the [Discord Developer Portal](https://discord.com/developers/applications).
- **Enable Privileged Gateway Intents**:
  - Go to the [Discord Developer Portal](https://discord.com/developers/applications).
  - Select your application.
  - Navigate to the **Bot** tab.
  - Scroll down to **Privileged Gateway Intents** and enable **Server Members Intent**.

---

## Installation

    git clone https://github.com/aradashkan/discord-welcomer-bot.git
    cd discord-welcomer-bot

### Python Implementation

1. **Install Dependencies**:
   ```
   pip install discord.py

### Node.js Implementation

1. **Install Dependencies**:
   ```
   npm install discord.js

