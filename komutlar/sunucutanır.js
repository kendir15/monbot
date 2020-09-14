const Discord = require('discord.js');

exports.run = function(client, message, args) {
    let type = args.slice(0).join('  ');
 if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Bu Komutu Kullanabilmek için `Yönetici` İznine Sahip Olmanız Gerekmekte")
    if (type.length < 1) return message.channel.send(
new Discord.RichEmbed()
.setDescription('**Kullanım:** `m.sunucutanıt Açıklama`'));
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('[Tanıtılan Sunucuya Ulaşmak İçin Tıklayınız](https://discord.gg/xgp5g8X)')
message.channel.send(embed)

 if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
  message.channel.createInvite({maxAge: 0}).then(invite => {
const embed2 = new Discord.RichEmbed()
.setColor('RANDOM')
.addField(message.guild, type)
.setDescription(`**${message.author}** adlı kullanıcının SUNUCUSU:`)
.addField(`・`,`[Buraya Tıklayarak Katılın](${invite})`)
.setThumbnail( message.guild.iconURL)
client.channels.get('743728320797212713').send(embed2); // ellemeyiniz
message.react(`743728320797212713`)
});
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
     aliases: ['sunucumu-tanıt', 'sunucumutanıt', 'tanıt-sunucu', 'tanıtsunucu', 'sunucu-tanıt'],
  permLevel: 0 
};

exports.help = {
  name: 'sunucutanıt',
  description: 'sunucu tanıtırsınz.',
  usage: 'sunucu<tanıt>'
};

///////////////////////////////////