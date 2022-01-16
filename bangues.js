const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES]});

client.on('ready', () =>{
    console.log('Bangues ready to opperate');
})

client.on('interactionCreate', async interaction => {
    console.log(interaction);
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'bangues') {
        await interaction.reply({
            content: 'Our lord and savior bangues',
            files: [
                {
                    attachment: './images/bangues.png',
                    name: 'bangues.png',
                    description: 'The lord and savior'
                  }
            ]
        });
      }
  });

client.login('OTMyMDQzNzU3MDEwOTQ0MDIx.YeNPZA.3EJncCC0rWAL6kPkb2t1E3eOxH8');