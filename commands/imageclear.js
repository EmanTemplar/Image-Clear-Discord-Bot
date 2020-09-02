const clear = require("./imagedel");
const { MessageFlags } = require("discord.js");

module.exports = {
	name: 'imageclear',
	description: 'Start clear image loop',
	execute(message, args) {
        function processCommand(receivedMessage) {
            let fullCommand = receivedMessage.content.substr(1)
            let splitCommand = fullCommand.split(" ")
            let primaryCommand = splitCommand[0]
            let arguments = splitCommand.slice(1)
        }
        //Loop to continually delete images/embeds/links/gifs/etc.
        var timer = setInterval(function () { 
            if (message.channel.type == 'text') {
                message.channel.messages.fetch().then(messages => {
                    const botMessages = messages.filter(msg => msg.author.bot);
                    const imgMessages = messages.filter(msg => msg.attachments.size > 0 | msg.embeds.length > 0);
                    const cmdMessages = messages.filter(msg => msg.content === "$imageclear");
                    message.channel.bulkDelete(botMessages);
                    message.channel.bulkDelete(cmdMessages);
                    message.channel.bulkDelete(imgMessages);
                    
                    messagesDeleted = botMessages.array().length; // number of messages deleted
                    
                    
                    // Logging the number of messages deleted on the console.
                    console.log('Deletion of messages successful. Total messages deleted: ' + messagesDeleted)


                    //Stop command (clearInterval command)
                    const stopMessages = messages.reduce(((stop, message) => { 
                        return (stop || message.content === "$stop");
                    }), false);
                    if (stopMessages) {
                        console.log('Attempting to stop loop');
                        try {
                            message.channel.send('Stopping loop successful');
                            //This message will not auto clear until the next "$start" command is ran. Stays as a reference
                            message.channel.bulkDelete(messages.filter(msg => msg.content === "$stop"));
                            clearInterval(timer);
                            console.log('Stopping loop succsessful');
                        } catch (error) {
                            console.log('Error while stopping loop');
                            console.log(error)
                        }
                    }
                    
                })
                
            }
            // anything in here will get looped every 3 seconds (number in milliseconds)
        },3000)
        
        message.channel.send('Starting image cleanup loop...');
        console.log('Starting image cleanup loop...')
    },  
};

console.error;