module.exports = {
  data: {
    name: "ping",
    description: "Ping the bot",
  },
  Xexecute: async (client, interaction) => {
    await interaction.reply(`Pong! ${client.ws.ping}`);
  },
};
