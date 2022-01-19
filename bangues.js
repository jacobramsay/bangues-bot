const moreketplece = require('./moreketPlece');
const { Client, Intents } = require('discord.js');
const secrets = require('./secrets');
const image = require('./images');

let imagesArray = image.createArrayFromFile();

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES]});

client.on('ready', async () => {
    console.log('Bangues ready to opperate');
    console.log('Getting latest post from moreketPlece');

    //Maximum of 12 posts without scrolling down the page
    const latestPosts = await moreketplece.getPosts(12);
    const newPosts = [];

    latestPosts.forEach((post) => {
        if(!imagesArray.includes(post)) {
            newPosts.push(post);
        }
    });

    if(newPosts.length > 0) {
        console.log('Adding latest posts to the images: ', newPosts);
        image.appendImagesToFile(newPosts);
    } else {
        console.log("There are no new posts to add!");
    }
});

client.on('interactionCreate', async interaction => {
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
        try {
            const imgIndex = Math.floor(Math.random() * imagesArray.length);
            console.log('Sending this post: ', imagesArray[imgIndex]);
    
            await interaction.reply({
                content: 'Bangues comes back with some gold',
                files: [
                    {
                        attachment: imagesArray[imgIndex],
                        name: 'bangues.png',
                        description: 'The lord and savior'
                      }
                ]
            });   
        } catch (error) {
            console.log(error);
        }
      }
  });

client.login(secrets.token);