const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '+'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  
  .setColor(0xF001FA)
  .setDescription(`**MON-BOT BİR BOTTAN DAHA FAZLASI**`)
  .addField(`**MON-BOT KOMUTLAR**`,


` <a:monn:722716496584769546>\`m.öneri\` = botun yeni gelecek komut hakkında önerinizi yazınız.

  <a:monn:722716496584769546>\`m.şikayet\` = bot hakkında şikayet , bug ları yazınız.

  <a:monn:722716496584769546>\`m.davet\` =botu davet edersiniz bize destek olmak için kullanmanızı tavsiye ederiz.

 <a:monn:722716496584769546>\`m.yapımcım\` = bot yapımcılarına gidesiniz

 <a:monn:722716496584769546>\`m.komutsay\` = botun kaç tane komutu olduğunu gösterir

  <a:monn:722716496584769546>\`m.istatistik\` = botun istatikleri

 
** [BOT DAVET LİNKİ](https://discordapp.com/oauth2/authorize?client_id=714756833394425867&scope=bot&permissions=8)**
  
** [DESTEK SUNUCUMUZ](https://discord.gg/xgp5g8X)**
 
** [WEBSİTE](http://9072040.259653.renderforestsites.com/)**
`)  
 .setThumbnail(message.author.avatarURL)
  return message.channel.sendEmbed(embed);
  
      
       
  }
   
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot3','bot2','bot1'],
  permlevel: 0
};

exports.help = {
  name: 'bot',
  description: 'bot',
  usage: 'bot'
}
//KENDİR15TARAFINDAN KODLANMIŞTIR