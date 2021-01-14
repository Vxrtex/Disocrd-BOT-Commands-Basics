const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
    name: 'embed',
    description: "This is a embed command",
    execute(message, args) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#0aa1f5')
            .setTitle(`TITLE `)
            .setDescription('DESCRIPTION')
            .setFooter('FOOTER')
            .setThumbnail('')
            .addFields({ name: 'Store', value: 'icestore.online/store' }, { name: 'Website', value: 'icestore.online' }, { name: 'Support Discord', value: 'https://discord.gg/cBytv2m4C3' }, )
            .setFooter('FOOTER', ' ');

        message.channel.send(Embed);
    }
}

// You can use the following for differnt types of sending messages:

// message.author.send(Embed) - Sends the Embed in a DM
// message.channel.send(Embed) - Sends in the channel where the command was somuned