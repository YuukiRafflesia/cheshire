require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'hi') {
        msg.channel.send('*excited impossibly fast footsteps*\n**HI MEOWSTER WELCOME BACK!!!!!!!!!**');
    }
});

client.login(process.env.TOKEN);