const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Check bot latency'),
  async execute({ interaction, message }) {
    const reply = 'Pong!';
    if (interaction) {
      await interaction.reply(reply);
    } else if (message) {
      await message.channel.send(reply);
    }
  }
};
