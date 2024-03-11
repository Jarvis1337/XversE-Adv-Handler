const config = require("../../config.json");

module.exports = {
  name: "version",
  description: "Check the current version of XversE-Adv-Handler",

  Xexecute: async (client, message) => {
    message.reply(`\`\`\`js\n🟢 Version :: ${config.XversE.version}\n\`\`\``);
    message.react("✅");
  },
};
