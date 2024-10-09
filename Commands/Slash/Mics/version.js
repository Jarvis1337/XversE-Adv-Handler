const { CommandInteraction } = require("discord.js");
const Jarvisx1337 = require("../../../index");
const config = require("../../../settings/config.js");

module.exports = {
  name: "version",
  description: "Check the current version of XversE-Adv-Handler",
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
    await interaction.followUp(`\`\`\`js\n🟢 Version :: ${config.XversE.version}\n\`\`\``,);
  },
};
