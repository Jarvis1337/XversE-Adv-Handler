const fs = require("fs");
const config = require("../config.json");

// <!-- File Handler --> 
module.exports = (client) => {

  const XcommandFiles = fs
    .readdirSync("Commands/Message")
    .filter((file) => file.endsWith(".js"));

  for (const file of XcommandFiles) {
    const command = require(`../Commands/Message/${file}`);
    client.commands.set(command.name, command);
  }

  const registerSlashCommands = () => {
    const XslashCommandFiles = fs
      .readdirSync("Commands/Slash")
      .filter((file) => file.endsWith(".js"));
    for (const file of XslashCommandFiles) {
      const slashCommand = require(`../Commands/Slash/${file}`);
      client.slashCommands.set(slashCommand.data.name, slashCommand);
    }
  };

  client.on("ready", () => {
    // <!-- For Registering Slash Commands (Globally) -->
    console.log("[>] ✅ | Registering Slash Commands...");
    registerSlashCommands();
    const globalCommands = [...client.slashCommands.values()].map(
      (command) => command.data,
    );
    client.application.commands.set(globalCommands);
  });
};
