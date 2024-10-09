const { Message } = require("discord.js");
const Jarvisx1337 = require("../../../index");

module.exports = {
  name: "ping",
  aliases: ["latancy"],
  description: "Get the Ping for XversE in your Server!",
  userPermissions: 'SEND_MESSAGES',
  botPermissions: 'EMBED_LINKS',
  cooldown: 10,

  /**
   * @param {Jarvisx1337} client
   * @param {Message} message
   * @param {String[]} args
   */
  Xexecute: async (client, message, args) => {
    // Code
    message.reply(`Ping :: \`${client.ws.ping}\``);
  },
};