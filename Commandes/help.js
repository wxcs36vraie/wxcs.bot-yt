const Discord = require ('discord.js');

module.exports.run = (client, message, args) => {
let embed = new Discord.MessageEmbed()
	.setColor('#00F7D9')
	.setTitle('Voici la liste de mes commandes:')
	.setDescription('Mon préfix est !')
	.addField('!clear', " !clear supprime message 	hello dit bienvenue !ping dit pong mdr !", true)
message.channel.send(embed);
};


module.exports.help = {
    name: "help"
};