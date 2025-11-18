require('dotenv').config;
const { Client, IntentsBitField } = require('discord.js');
const {SlashCommandBuilder} =require('discord.js');



const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,   
    ],
});

client.on('clientReady', (c)=>{
    console.log(`${c.user.tag} is online`);
});

client.on('messageCreate', (message) => {
    if (message.author.username === 'sueza'){
        message.reply('The creature speaks');
    }

});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;
})

console.log(process.env.TOKEN);