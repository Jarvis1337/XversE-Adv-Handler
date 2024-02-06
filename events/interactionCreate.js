module.exports = (client) => {
  client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;
    const command = client.slashCommands.get(commandName);
    if (!command) return;

    try {
      command.Xexecute(client, interaction);
    } catch (error) {
      console.error(error);
      interaction.reply({
        content: "There was an error executing this command!",
        ephemeral: true,
      });
    }
  });
};