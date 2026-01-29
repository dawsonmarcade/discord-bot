require('dotenv').config("C:/Users/dawso/discord-bot.env");
const {REST,Routes} =require('discord.js');

const commands = [
    {
        name: 'hey',
        description: 'Replies with hey!'

    },
    
    {
        name: 'truth',
        description: 'Speaks the Truth'

    },
    {
        name: 'size',
        description: 'Describes your endowment'

    },
    {
        name: 'goon',
        description: '... Gary asked for it'

    },


];

const rest = new REST({version: '10'}).setToken(process.env.BOT_TOKEN);

(async () => {
    try { 
        console.log('Registering slash commands...');
        
        await rest.put(
        Routes.applicationGuildCommands(
            process.env.CLIENT_ID, 
            process.env.GUILD_ID
        ),
            
            {body: commands}
        )
    console.log('Slash Commands successfully registered')
    } catch (error){
        console.log(`There was an error: ${error}`);
    }
})();