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
 <a:monn:722716496584769546> \`m.uyar\` = Etiketlenen kişi +1 uyarı alır

 <a:monn:722716496584769546>\`m.uyarı-kaldır\` = etiketlenen kişinin -1 uyarısı kaldırırılır

 <a:monn:722716496584769546>\`m.uyarılar\` = etiketlenen kişinin toplamda kaç uyarı aldığını gösterir


<a:monn:722716496584769546>\`NOT\` UAYARI SİSTEMİNİ ÇALIŞTIRMAK İÇİN MOD-LOG KANALI AYARLAYINIZ.

`)  
 .setThumbnail(message.author.avatarURL)
  return message.channel.sendEmbed(embed);
  
      
       
  }
   
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['uyarısistemi','us','uyarı.sistem'],
  permlevel: 0
};

exports.help = {
  name: 'uyarı-sistem',
  description: 'uyarısistem',
  usage: 'uyar'
}
//KENDİR15TARAFINDAN KODLANMIŞTIR