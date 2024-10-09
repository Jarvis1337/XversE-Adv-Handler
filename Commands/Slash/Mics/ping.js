const { CommandInteraction } = require("discord.js");
const Jarvisx1337 = require("../../../index");

module.exports = {
  name: "ping",
  description: "Get the Ping for XversE in your Server!",
  userPermissions: 'SEND_MESSAGES',
  botPermissions: 'EMBED_LINKS',
  cooldown: 10,
  type: "CHAT_INPUT",
  
  /**
   * @param {Jarvisx1337} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  Xexecute: async (client, interaction, args) => {
    // Code
    await interaction.followUp(`Ping :: \`${client.ws.ping}\``);
  },
};
