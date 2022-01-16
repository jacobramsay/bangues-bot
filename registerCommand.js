const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { SlashCommandBuilder } = require('@discordjs/builders');

const commands = [
  new SlashCommandBuilder().setName('bangues').setDescription("Give's you Gille's best")
]; 

const CLIENT_ID = '932043757010944021';
const GUILD_ID = '932058246234124329';

const rest = new REST({ version: '9' }).setToken('OTMyMDQzNzU3MDEwOTQ0MDIx.YeNPZA.3EJncCC0rWAL6kPkb2t1E3eOxH8');



(async () => {
  try {
    console.log('Started refreshing application (/) commands.');
    await rest.put(
      Routes.applicationCommands(CLIENT_ID),
      { 
        body: commands
      }
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();