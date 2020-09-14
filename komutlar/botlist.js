const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
        .setTitle(`<a:monn:722716496584769546>\ ${client.user.username}   \  `)
        .setDescription(`
<a:monn:722716496584769546>\ **Bot Listimiz** [TIKLA](https://discord.gg/F73y6W) 
`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix}davet Sistemi Kullandı!`, message.author.avatarURL)
    .setColor(`RANDOM`)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'botlistimiz',
  description: '',
  usage: 'botlist'
};
