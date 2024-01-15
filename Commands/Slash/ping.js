module.exports = {
  data: {
    name: "ping",
    description: "Ping the bot",
  },
  Xexecute: async (interaction, args) => {
    await interaction.reply(`Pong! ${client.ws.ping}`);
  },
};
