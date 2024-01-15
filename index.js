const { Client, Collection, Intents } = require("discord.js");
const fs = require("fs");
const config = require("./config.json");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

// <!-- File Handler --> 

client.commands = new Collection();
const XcommandFiles = fs
  .readdirSync("./Commands/Message")
  .filter((file) => file.endsWith(".js"));

for (const file of XcommandFiles) {
  const command = require(`./Commands/Message/${file}`);
  client.commands.set(command.name, command);
}

client.slashCommands = new Collection();
const registerSlashCommands = () => {
  const XslashCommandFiles = fs
    .readdirSync("./Commands/Slash")
    .filter((file) => file.endsWith(".js"));
  for (const file of XslashCommandFiles) {
    const slashCommand = require(`./Commands/Slash/${file}`);
    client.slashCommands.set(slashCommand.data.name, slashCommand);
  }
};

// <!-- Event Handler -->

client.on("ready", () => {
  client.user.setStatus("dnd");
  client.user.setActivity("XversE-Adv-Handler", { type: "WATCHING" });
  console.log(`[>] ✅ | ${client.user.username} is Ready to use!`);

  // <!-- For Registering Slash Commands (Globally) -->
  console.log("[>] ✅ | Registering Slash Commands...");
  registerSlashCommands();
  const globalCommands = [...client.slashCommands.values()].map(command => command.data);
  client.application.commands.set(globalCommands);

});


client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { XCmdName } = interaction;
  const command = client.slashCommands.get(XCmdName);
  if (!command) return;

  try {
    command.Xexecute(interaction);
  } catch (error) {
    console.error(error);
    interaction.reply({
      content: "There was an error executing this command!",
      ephemeral: true,
    });
  }
});

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

client.login(config.token || process.env.TOKEN);
