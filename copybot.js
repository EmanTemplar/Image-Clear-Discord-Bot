// Load up the discord.js library
const Discord = require("discord.js");

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
    // List servers the bot is connected to
    console.log("Servers:")
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)

        // List all channels
        guild.channels.forEach((channel) => {
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
        })
    })
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});


client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Set bot prefix command
  if (receivedMessage.content.startsWith("$")) {
    processCommand(receivedMessage)    
}
//Simple commands
client.on('message', (receivedMessage) => {
  if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
      return
  }
  
  if (receivedMessage.content.startsWith("$")) {
      processCommand(receivedMessage)
  }
})

function processCommand(receivedMessage) {
  let fullCommand = receivedMessage.content.substr(1) // Remove the leading exclamation mark
  let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
  let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
  let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

  console.log("Command received: " + primaryCommand)
  console.log("Arguments: " + arguments) // There may not be any arguments

  if (primaryCommand == "help") {
      helpCommand(arguments, receivedMessage)
  } else if (primaryCommand == "multiply") {
      multiplyCommand(arguments, receivedMessage)
  } else {
      receivedMessage.channel.send("I don't understand the command. Try `$help` or `$multiply`")
  }
}

function helpCommand(arguments, receivedMessage) {
  if (arguments.length > 0) {
      receivedMessage.channel.send("It looks like you might need help with " + arguments)
  } else {
      receivedMessage.channel.send("I'm not sure what you need help with. Try `$help [topic]`")
  }
}

function multiplyCommand(arguments, receivedMessage) {
  if (arguments.length < 2) {
      receivedMessage.channel.send("Not enough values to multiply. Try `$multiply 2 4 10` or `$multiply 5.2 7`")
      return
  }
  let product = 1 
  arguments.forEach((value) => {
      product = product * parseFloat(value)
  })
  receivedMessage.channel.send("The product of " + arguments + " multiplied together is: " + product.toString())
}
});

bot_secret_token = "NTkzNTc4MzcyNTY3OTI0NzQ2.XRP7Tg.t-UHXS4wthmQp6v_rtvGlVcWhjs"

client.login(bot_secret_token)