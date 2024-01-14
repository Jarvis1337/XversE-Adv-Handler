const { Client, Intents } = require("discord.js");
const config = require("./config.json");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  client.user.setStatus("dnd");
  client.user.setActivity("XversE-Adv-Handler", { type: "WATCHING" });
  console.log(`[>] ✅ | ${client.user.username} is Ready to use!`);

  client.application.commands.create({
    name: "ping",
    description: "Replies with Pong!",
  });
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { XintSlashCMD } = interaction;

  if (XintSlashCMD === "ping") {
    await interaction.reply("Pong!");
  }
});

client.on("messageCreate", async (message) => {
  if (message.content === "..ping") {
    message.channel.send("Pong!");
  }

  if (message.content === "..reload") {
    const commands = await client.application.commands.fetch();
    for (const command of commands.values()) {
      await command.delete();
    }
    message.channel.send('All slash commands have been reloaded...');
  }

});

client.login(config.token || process.env.TOKEN);
