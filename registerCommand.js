const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { SlashCommandBuilder } = require('@discordjs/builders');

const commands = [
  new SlashCommandBuilder().setName('bangues').setDescription("Give's you Gille's best"),
  new SlashCommandBuilder().setName('gilles').setDescription("Suprise me Gille")
]; 

const CLIENT_ID = '932043757010944021';
const GUILD_ID = '932058246234124329';

const rest = new REST({ version: '9' }).setToken('');



(async () => {
  try {
    console.log('Started refreshing application (/) commands.');
    await rest.put(
      Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
      { 
        body: commands
      }
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();