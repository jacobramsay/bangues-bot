const moreketplece = require('./moreketPlece');
const { Client, Intents } = require('discord.js');
const images = require('./images');


const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES]});

client.on('ready', async () => {
    console.log('Bangues ready to opperate');
});

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

      if (interaction.commandName === 'gilles') {
        const imgIndex = Math.floor(Math.random() * 150);
        console.log(images.images[imgIndex]);

        await interaction.reply({
            content: 'Bangues comes back with some gold',
            files: [
                {
                    attachment: images.images[imgIndex],
                    name: 'bangues.png',
                    description: 'The lord and savior'
                  }
            ]
        });
      }
  });

client.login('');