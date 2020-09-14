const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');


const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "Lord Creative | Youtube Channel");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   l0RDconsole.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// }); //DEVİLHOUSE//

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


client.on("message", async msg => {
const request = require('node-superfetch');
const db = require('quick.db');
const ms = require('parse-ms')
let timeout = 86400000
let dakdest = await db.fetch(`goldzzz_${msg.author.id}`);
let i = db.fetch(`gold_${msg.author.id}`)
          if (i == 'gold') {
    if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
        let time = ms(timeout - (Date.now() - dakdest));
    } else {
  if(msg.author.bot) return;   
  if (msg.content.length > 1) {
db.set(`goldzzz_${msg.author.id}`, Date.now());

  var embed = new Discord.RichEmbed()
  .setThumbnail(`https://cdn.discordapp.com/emojis/679038564994121744.gif?v=1`)
  .setDescription(`Seni Burada Görmek Güzel <@${msg.author.id}>** __İşte Bir Gold Üye__\`\`Unutma\`\`<@${msg.author.id}> \`\`Ne Olduğun Değil Ne Olacağın Önemlidir.!\`\``)
  .setColor("black")
  .setFooter(`${client.user.username} - MON-BOT`, client.user.avatarURL)
   msg.channel.send(embed)
  }
};
          }
   else if (i == undefined) {           
          }
          if (!i) return;
        
});


////////////////////////////////////////////////////////////////////////////////////////////////////////
 client.on("guildCreate", guild => {
  let kanal = guild.channels.filter(c => c.type === "text").random();

  kanal.send(
    "Selam , Beni Eklediğiniz İçin Teşekkür Ederim. Size En İyi Şekilde Hizmet Edeceğim. m.yardım Yazarak Komutlarımı Öğrenebilirsiniz."
  );
});
  

/////////////////////////////////////////////////////////////////////////////////////////



client.on('message', async (msg, member, guild) => {
  let i = await  db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'sa') {
        msg.reply('<a:monn:722716496584769546> Aleyküm Selam Hoşgeldin <a:monn:722716496584769546>');      
      } 
      }
    });


//////////////////////////////////////////////////////////////////////////////////////////////////////


client.on("guildCreate", guild => {
  let add = client.channels.get("744163615816417400");
  const eklendim = new Discord.RichEmbed()

    .setTitle(`Sunucuya Eklendim`)
    .setTimestamp()
    .setColor("GREEN")
    .setThumbnail(guild.iconURL)
    .addField(`Sunucu İsmi`, guild.name)
    .addField(`Sunucu ID`, guild.id)
    .addField(`Kurucu`, guild.owner.user.tag)
    .addField(`Kurucu ID`, guild.owner.user.id)
    .addField(`Üye Sayısı`, guild.memberCount);

  add.send(eklendim);
});

client.on("guildDelete", guild => {
  let remove = client.channels.get("744163615816417400");
  const atildim = new Discord.RichEmbed()

    .setTitle(`Sunucudan Atıldım`)
    .setTimestamp()
    .setColor("RED")
    .setThumbnail(guild.iconURL)
    .addField(`Sunucu İsmi`, guild.name)
    .addField(`Sunucu ID`, guild.id)
    .addField(`Kurucu`, guild.owner.user.tag)
    .addField(`Kurucu ID`, guild.owner.user.id)
    .addField(`Üye Sayısı`, guild.memberCount);

  remove.send(atildim);
});
/// BOT ATILIRSA DATABASE SILME
client.on('guildDelete', async(guild, message) => {
await db.delete(`hgK_${message.guild.id}`)
await db.delete(`hgK2_${message.guild.id}`)
await db.delete(`mLog_${message.guild.id}`)
await db.delete(`bmLog_${message.guild.id}`)
await db.delete(`gc_${message.guild.id}`)
await db.delete(`boost_${message.guild.id}`)
await db.delete(`bottest_${message.guild.id}`)
await db.delete(`psl_${message.guild.id}`)
await db.delete(`ps_${message.guild.id}`)
await db.delete(`pst_${message.guild.id}`)
  
  
  client.on('guildMemberAdd', member => { 
if(member.user.bot === false) return

member.addRole('744163615816417400')
});
})

///////////////////////////////////////////////////////////////////////////////////////////











//////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////-
//---------------------------------KOMUTLAR---------------------------------\\
