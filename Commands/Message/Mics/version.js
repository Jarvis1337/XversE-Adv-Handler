const { Message } = require("discord.js");
const Jarvisx1337 = require("../../../index");
const config = require("../../../settings/config.js");

module.exports = {
  name: "version",
  aliases: ["ver"],
  description: "Check the current version of XversE-Adv-Handler",
  cooldown: 10,

  /**
   * @param {Jarvisx1337} client
   * @param {Message} message
   * @param {String[]} args
   */
  Xexecute: async (client, message, args) => {
    // Code
    message.reply(`\`\`\`js\n🟢 Version :: ${config.XversE.version}\n\`\`\``);
    message.react("✅");
  },
};