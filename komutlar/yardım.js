const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '+'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  
  .setColor(0xF001FA)
  .setDescription(`**MON-BOT BİR BOTTAN DAHA FAZLASI**`)
  .addField(`**MON-BOT KOMUTLAR**`,


` <a:monn:722716496584769546>\`m.yetkili\` = yetkili komutlarına gider.

  <a:monn:722716496584769546>\`m.kullanıcı\` = kullanıcı komutlarına gider.

 <a:monn:722716496584769546>\`m.bot\` = bot un komutlarına gider.

 <a:monn:722716496584769546>\`m.eğlence\` = eğlence komutlarına gider 

<a:monn:722716496584769546>\`m.sunucu\` = sunucu komutları

 <a:monn:722716496584769546>\`prefix\` =  (m.) \

 
** [BOT DAVET LİNKİ](https://discordapp.com/oauth2/authorize?client_id=714756833394425867&scope=bot&permissions=8)**
  
** [DESTEK SUNUCUMUZ](https://discord.gg/xgp5g8X)**
 
** [WEBSİTE](http://9072040.259653.renderforestsites.com/)**
MON-BOT V-5 GÜNCELLEMESİ
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