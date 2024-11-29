const { Client, GatewayIntentBits } = require('discord.js');

const TOKEN = 'Your Bot Token!'; // Type your Bot Token Here
const WELCOME_CHANNEL_ID = '1222264449018884778'; // Channel ID

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
    ],
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', (member) => {
    const channel = member.guild.channels.cache.get(WELCOME_CHANNEL_ID);
    if (channel) {
        channel.send(`Welcome to the server, ${member.user}! 🎉`);
    }
});

client.on('guildMemberRemove', (member) => {
    const channel = member.guild.channels.cache.get(WELCOME_CHANNEL_ID);
    if (channel) {
        channel.send(`Sad to see you go, ${member.user.username}. 😢`);
    }
});

client.login(TOKEN);
