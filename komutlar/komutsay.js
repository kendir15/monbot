const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
  message.delete(3000)
  try {
    
    const embed = new Discord.RichEmbed()
  
    .setTitle('**\nMON-BOTTA TOPLAM ** **' + client.commands.size + '** ** Komut Vardır!**')
     .setDescription('\nSİZE DAHA İYİ BİR HİZMET VERMEK İÇİN KOMUT SAYISINI YÜKSELTMEYE ÇALIŞİYORUZ')
    .setColor("#ff0000")
   
    .setTimestamp()
    .setFooter(message.author.username , message.author.avatarURL)
    return message.channel.send({embed});
    
    message.channel.send();
  } catch (err) {
    message.channel.send('Daha Sonra Tekrar Deneyin!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ["komutsay"],
  kategori: 'genel',
  guildOnly: true,
  permLevel: 0
 
};

exports.help = {
  name: 'komutlar',
  description: 'Bottaki Komut Sayısını Gösterir.',
  usage: 'komutlar'
};
