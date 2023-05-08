require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`${c.user.tag} has logged in.`);
});

client.on('messageCreate', (msg) => {
    if (msg.author.bot) {
        return;
    } 

    if(msg.content == "hello") {
        msg.reply('hello');
    }
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) {
        return;
    }

    if(interaction.commandName == 'hey') {
        interaction.reply('hey!');
    }

    if(interaction.commandName == 'ping') {
        interaction.reply('Pong!');
    }
})

client.login(process.env.TOKEN);