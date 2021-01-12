const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
    name: 'help',
    description: "This is a help command",
    execute(message, args) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#0aa1f5')
            .setTitle(`TITLE `)
            .setDescription('DESCRIPTION')
            .setFooter('FOOTER')
            .setThumbnail('THUMBNAIL;')
            .addFields({ name: 'Store', value: 'icestore.online/store' }, { name: 'Website', value: 'icestore.online' }, { name: 'Support Discord', value: 'https://discord.gg/cBytv2m4C3' }, )
            .setFooter('FOOTER', 'FOOTER PHOTO');

        message.author.send(Embed);
    }
}

//This will send a DM from the bot