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
 <a:monn:722716496584769546> \`m.mod-log #kanal\` = mod-log kanalı ayrlarsınız ban,uyarı,vb.

 <a:monn:722716496584769546>\`m.ban\` = etiketlenen kişiyi banlarsınız

 <a:monn:722716496584769546>\`m.unban\` = etiketlenen kişinin banını kaldırır     

 <a:monn:722716496584769546>\`m.kick\` = etiketlenen kişiyi sunucudan atar  

 <a:monn:722716496584769546>\`m.tag-yetki\` = Belirttiğiniz tagda olan kişilere beliritğiniz rolü verir

<a:monn:722716496584769546>\`m.uyarısistemi\` = uyar sistemini gösterir

<a:monn:722716496584769546>\`m.sunucukursistemi\` = sunucukur sistemine bakrsınız ne gibi sunucular kurulma gibi

<a:monn:722716496584769546>\`m.slowmode\` = Yavaş mode ayarlarsınız

<a:monn:722716496584769546>\`m.sil\` = belirttiğiniz kadar mesaj siler 1-100
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