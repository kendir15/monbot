const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '+'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  
  .setColor(0xF001FA)
  .setDescription(`**MON-BOT BİR BOTTAN DAHA FAZLASI**`)
  .addField(`**MON-BOT KOMUTLAR**`,


` <a:monn:722716496584769546>\`m.profil\` = kullaıcı biligi ye  gider.

 <a:monn:722716496584769546>\`m.dt\` = destek talep ama canlı bot destek ekibi ile


                          YAKINDA

 

`)  
 .setThumbnail(message.author.avatarURL)
  return message.channel.sendEmbed(embed);
  
      
       
  }
   
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardımana','yardımana','help'],
  permlevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'yardım ana',
  usage: 'yardım'
}
//KENDİR15TARAFINDAN KODLANMIŞTIR