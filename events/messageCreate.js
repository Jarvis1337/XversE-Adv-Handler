const config = require("../config.json");

module.exports = (client) => {
  client.on("messageCreate", async (message) => {
    let XprefiX = config.prefix;
    if (!message.content.startsWith(XprefiX) || message.author.bot) return;

    const args = message.content.slice(XprefiX.length).trim().split(/ +/);
    const XCommandName = args.shift().toLowerCase();

    const command = client.commands.get(XCommandName);
    if (!command) return;

    try {
      command.Xexecute(client, message, args);
    } catch (error) {
      console.error(error);
      message.reply("There was an error executing this command!");
    }
  });
};