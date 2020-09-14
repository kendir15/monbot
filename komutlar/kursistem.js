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
 <a:monn:722716496584769546> \`m.sunucukur\` = gelişmiş sunucu kurar

 <a:monn:722716496584769546>\`m.bot-list-sunucukur\` = bot list sunucusu kurar




<a:monn:722716496584769546>\`NOT\` ONAY MONAY ALMAZ DİREK KURAR

`)  
 .setThumbnail(message.author.avatarURL)
  return message.channel.sendEmbed(embed);
  
      
       
  }
   
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucusistematik','sunucukursistemi','sunucu.sistem'],
  permlevel: 0
};

exports.help = {
  name: 'sunucukursistem',
  description: 'sunucukur',
  usage: 'sunucukurma sistemi'
}
//KENDİR15TARAFINDAN KODLANMIŞTIR