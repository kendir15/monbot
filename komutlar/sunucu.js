const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '+'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  
  .setColor(0xF001FA)
  .setDescription(`**MON-BOT BİR BOTTAN DAHA FAZLASI**`)
  .addField(`**MON-BOT KOMUTLAR**`,


` 
 <a:monn:722716496584769546> \`m.sunucutanıt\` = sunucunuzu tanıtır

 <a:monn:722716496584769546>\`m.çek\` = etiketlenen kişiyi bir seslideyse çekersiniz

<a:monn:722716496584769546>\`m.say\` = sunucuyu sayar

<a:monn:722716496584769546>\`m.sa-as aç/kapat \` = sa-as sistemini açar/kapatır

`)  
 .setThumbnail(message.author.avatarURL)
  return message.channel.sendEmbed(embed);
  
      
       
  }
   
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetki,li sistemi','ys','yetkili'],
  permlevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'yetkilii komutlr',
  usage: 'uyar'
}
//KENDİR15TARAFINDAN KODLANMIŞTIR