import discord
from discord.ext import commands

intents = discord.Intents.default()
intents.members = True
intents.message_content = False
TOKEN = "Your Bot Token !" # Type yout Bot Token Here

bot = commands.Bot(command_prefix='!', intents=intents)

WELCOME_CHANNEL_ID = 1222264449018884778  # Channel ID 

@bot.event
async def on_ready():
    print(f'Logged in as {bot.user}!')

@bot.event
async def on_member_join(member):
    channel = bot.get_channel(WELCOME_CHANNEL_ID)
    if channel:
        await channel.send(f'Welcome to the server, {member.mention}! 🎉')

@bot.event
async def on_member_remove(member):
    channel = bot.get_channel(WELCOME_CHANNEL_ID)
    if channel:
        await channel.send(f'Sad to see you go, {member.name}. 😢')

bot.run(TOKEN)
