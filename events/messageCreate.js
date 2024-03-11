const config = require("../config.json");
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = (client) => {
  client.on("messageCreate", async (message) => {
    let XprefiX = config.prefix;
    var XversE = `<@${client.user.id}>`

    if (message.content === XversE) {
      message.reply({
        embeds: [
          new MessageEmbed()
          .setTitle('<a:lnx_white_crown:969664230016040981> *Prefix*  <a:lnx_white_crown:969664230016040981>')
          .setColor('000001')
          .setDescription(`*My Prefix in this server is **\`${XprefiX}\`***`)
        ],
      });
    }
    
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