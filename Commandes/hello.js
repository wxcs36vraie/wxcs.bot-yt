const Discord = require ('discord.js');

module.exports.run = (client, message, args) => {
    message.channel.send('Bienvenue')
};

module.exports.help = {
    name: 'hello'
};
