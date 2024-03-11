const config = require("../../config.json");

module.exports = {
  data: {
    name: "version",
    description: "Check the current version of XversE-Adv-Handler",
  },
  Xexecute: async (client, interaction) => {
    await interaction.reply(`\`\`\`js\n🟢 Version :: ${config.XversE.version}\n\`\`\``,);
  },
};
