module.exports = {
	name: 'imagedel',
	description: 'Clear Images Once',
	execute(message, args) {
        function processCommand(receivedMessage) {
            let fullCommand = receivedMessage.content.substr(1)
            let splitCommand = fullCommand.split(" ")
            let primaryCommand = splitCommand[0]
            let arguments = splitCommand.slice(1)
        }
        if (message.channel.type == 'text') {
            message.channel.messages.fetch().then(messages => {
                const botMessages = messages.filter(msg => msg.author.bot);
                const imgMessages = messages.filter(msg => msg.attachments.size > 0 | msg.embeds.length > 0);
                const cmdMessages = messages.filter(msg => msg.content === "$imagedel");
                message.channel.bulkDelete(botMessages);
                message.channel.bulkDelete(cmdMessages);
                message.channel.bulkDelete(imgMessages);
                messagesDeleted = botMessages.array().length; // number of messages deleted
               
        
                // Logging the number of messages deleted on the console.
                console.log('Deletion of messages successful. Total messages deleted: ' + messagesDeleted)
            }).catch(err => {
                console.log('Error while doing Bulk Delete');
                console.log(err);
            });
        
        }
    message.channel.send('Clearing images now...')
        .then(msg => {
            msg.delete({ timeout: 10000 })
                      })    
        
	},
};