const { EmbedBuilder } = require('discord.js');
const embed = new EmbedBuilder()
    .setTitle('Welcome!')
    .setDescription(`We're glad to have you here, ${member.user}! 🎉`)
    .setColor(0x00FF00);
channel.send({ embeds: [embed] });
