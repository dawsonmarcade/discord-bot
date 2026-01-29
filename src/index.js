require('dotenv').config();
const { Client, IntentsBitField, Events } = require('discord.js');


function getRandomArbitrary(max) {
    return Math.floor((Math.random()*max), 2);
}

/// bots access to methods. Add more as needed
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,   
    ],
});


/// Log when bot has logged in to server
client.once(Events.ClientReady, (c)=>{
    console.log(`${c.user.tag} is online`);
});

client.on('interactionCreate', (interaction) => {
    console.log(interaction);
    if (!interaction.isChatInputCommand()) return;
    
    if (interaction.commandName === 'size'){
        
        const rand_num = getRandomArbitrary(16);
        if (rand_num >= 6 ) {
            interaction.reply(`${rand_num} inches is your dick size! Congrats on the largie!`)
        } else {
            interaction.reply(`${rand_num} inches is your dick size. Quite unfortunate...`)         
        }  
    }
});

client.on('messageCreate', (message)=>{
    
    if (message.content === 'hello') {
        message.reply('hello');
    }
});

client.login(process.env.BOT_TOKEN);
