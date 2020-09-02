const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();

const fs = require('fs')
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

//Command Get
client.on('message', message => {
  //console.log(message.attachments.size)
  //console.log(message.embeds.length)
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
    
  if (!client.commands.has(command)) return;

  try {
    client.commands.get(command).execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('there was an error trying to execute that command!');
  }
});


//Prefix Requirement in config
const { prefix } = require('./config.json');


//Console Logging on Startup
client.on('ready', () => {
    console.log(`Bot has started as ${client.user.tag}`);
  });


//Token and Login Info
require('dotenv').config();

const config = {
  discord_token: process.env.DISCORD_TOKEN,
  owner: process.env.OWNER,
  prefix: process.env.PREFIX,
}

client.login(config.discord_token);