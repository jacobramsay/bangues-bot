const moreketplece = require('./moreketPlece');
const { Client, Intents } = require('discord.js');
const secrets = require('./secrets');
const image = require('./images');

var cron = require('node-cron');



let imagesArray = image.createArrayFromFile();

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES]});

client.on('ready', async () => {
    console.log('Bangues ready to opperate');
    console.log('Getting latest post from moreketPlece');

    cron.schedule('0 1 * * *', async () => {
        console.log('Running job');
        await updateImages();
      }, {
        scheduled: true,
        timezone: "America/Sao_Paulo"
      });

      updateImages();
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
            const wowLuckyNumberLOL = 69;
            const imgIndex = Math.floor(Math.random() * imagesArray.length);
            
            console.log(`${wowLuckyNumberLOL} et ${imgIndex}`);

            if(wowLuckyNumberLOL == imgIndex) {
                await interaction.reply({
                    content: `You just got a 1/${imagesArray.length} chance drop :O  https://www.youtube.com/watch?v=d1zzvW2oYjs&ab_channel=polar`,
                }); 
            } else {
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
            }  
        } catch (error) {
            console.log(error);
        }
      }
  });

  async function updateImages() {
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
  }

client.login(secrets.token);