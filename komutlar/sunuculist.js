const Discord = require('discord.js');
const db = require('quick.db') //dcs ekibi
exports.run = (client, message, args) => { 
  
  message.delete();
  
   if(message.author.id !== "720562744629264427") return 
  
  
 let dcss = client.guilds.map(a => a.id + " | " + a.name).join('\n');
message.channel.send(dcss, {code: "xl", split: true}); 
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['server-list'], 
  permLevel: 0
};

exports.help = {
  name: 'sl',  //dcs ekibi
  description: 'taslak', 
  usage: 's-list'
};