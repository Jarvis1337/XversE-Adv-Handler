const { Permissions } = require("discord.js");
const client = require("../index");
const { Cooldown } = require("../handlers/functions")
const config = require("../settings/config")

client.on("interactionCreate", async (interaction) => {
   // <!------- [ Slash Commands ] --------->
   if (interaction.isCommand()) {
      await interaction.deferReply({ ephemeral: false }).catch(() => {});

      const cmd = client.slashCommands.get(interaction.commandName);
      if (!cmd) return interaction.followUp({ content: "An error has occured " });
      const args = [];
      
      for (let option of interaction.options.data) {
         if (option.type === "SUB_COMMAND") {
            if (option.name) args.push(option.name);
            option.options?.forEach((x) => {
               if (x.value) args.push(x.value);
            });
         } else if (option.value) args.push(option.value);
      }
      interaction.member = interaction.guild.members.cache.get(
         interaction.user.id
      );

      if (cmd) {
         // <!--- Permission Handler--->
         if (!interaction.member.permissions.has(Permissions.FLAGS[cmd.userPermissions] || [])) {
            return interaction.followUp(`${config.Emoji.Error} ${interaction.user.username} You don't have \`${cmd.userPermissions}\`, Permission to use this \`${cmd.name}\` command...`) 
         } else if (!interaction.guild.members.me.permissions.has(Permissions.FLAGS[cmd.botPermissions] || [])) {
            return interaction.followUp(`${config.Emoji.Error} I don't have \`${cmd.botPermissions}\`, Permission to Execute this \`${cmd.name}\` command...`)
         } 
          
         if (Cooldown(interaction, cmd)) {
            return interaction.followUp(`${config.Emoji.Error} ${interaction.user.username} You are on Cooldown, So Please wait Until \`${Cooldown(interaction, cmd).toFixed()}\` seconds...`)
         } else {
            cmd.Xexecute(client, interaction, args);
         }         
      }
   }
   // <!---------- [ Buttons ] ---------->
   if (interaction.isButton()) {
   }
   // <!---------- [ Select Menu Handling ] ---------->
   if (interaction.isSelectMenu()) {
   }
   // <!---------- [ Context Menu Handling ] ---------->
   if (interaction.isContextMenu()) {
      await interaction.deferReply({ ephemeral: false });
      const command = client.slashCommands.get(interaction.commandName);
      if (command) command.run(client, interaction);
   }
});