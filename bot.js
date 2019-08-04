const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-'
const devs = ['413660639668731914'];

client.on('ready', () => {
    console.log(`~~~~~~~~~~~~~~~~~`);
    console.log(`Logging into Discord`);
    console.log(`~~~~~~~~~~~~~~~~~~~~~`);
    console.log(`on  ${client.guilds.size} Servers `);
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~`);
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setGame(`#Riyderz System |-Help`,"http://twitch.tv/y04zgamer")
    client.user.setStatus("dnd")
 });







client.on('message', message => {// By KillerFox
            if (message.content.startsWith("-Riyderz")) {
  let fox = message.content.split(" ").slice(1).join(' ');// By KillerFox
  if (!message.channel.guild) return message.channel.send('**هذا امر مخصص للسيرفر  الرجاء اعدم استعماله في خاص بوت**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**لا يوجد معاك صلاحية** `ADMINISTRATOR`');
     let killerfox = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.setDescription( '\n'+"**" + " ➥ مرسل الرسالة : " + "**" +
       "\n"+ "** ➥  ** "+` **${message.author.tag}**`  +
       "\n"+ "**" + " ➥ الرساله : " + "**" +
      "\n" + "**" + fox + "**")
.setColor('#14e4dd') // By KillerFox
  message.channel.sendEmbed(killerfox);
    }
});


client.on('message', message => { //Toxic Codes
    var command = message.content.split(" ")[0];
    var args1 = message.content.split(" ").slice(1).join(" "); //Toxic Codes
    if(command == prefix + 'find') { // الامر : -find
        let sizePlayers = 1; //Toxic Codes
         
        if(message.author.bot) return;
        if(!message.channel.guild) return;
        if(!args1) return message.channel.send(`**? Useage:** ${prefix}find (اي حرف من الاسم الي تبيه)`).then(msg => msg.delete(5000));//Toxic Codes
       
        var playersFind = new Discord.RichEmbed()
        .setTitle(`:white_check_mark: **خاصية البحث عن الاعضاء**`)
        .setThumbnail(client.user.avatarURL)
        .setDescription(`**\n? البحث عن الاعضاء الموجود بداخل اسمائهم:**\n " ${args1} "\n\n**? عدد الاعضاء:**\n " ${message.guild.members.filter(m=>m.user.username.toUpperCase().includes(args1.toUpperCase())).size} "\n\n\`\`\`????????????????????????????????????????????????????????????????????????????????????????\n\n${message.guild.members.filter(m=>m.user.username.toUpperCase().includes(args1.toUpperCase())).map(m=>sizePlayers++ + '. ' + m.user.tag).slice(0,20).join('\n') || 'لا يوجد اعضاء بهذه الاحرف'}\n\n????????????????????????????????????????????????????????????????????????????????????????\`\`\``)//Toxic Codes
        .setColor('GRAY')
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL)//Toxic Codes
       
        message.channel.send(playersFind); //Toxic Codes
        message.delete(); //Toxic Codes
    }
}); //Toxic Codes






client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === "-unmute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'mute-log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت 'Muted' **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('الأستعمال:', 'اسكت/احكي')
      .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
  
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
  
    if (message.guild.member(user).removeRole(muteRole.id)) {
  return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
  } else {
      message.guild.member(user).removeRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
  });
    }
  
  };
  
  });








 client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

var args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد طردة**");


  message.guild.member(user).kick(7, user);

message.channel.send(`**✅ ${user.tag} kicked from the server ! ✈ **  `)

}
});






client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

var args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**✅ ${user.tag} banned from the server ! ✈ **  `)

}
});















client.on('message', message => {

    if(message.content === prefix + "close") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
           });
             }
//FIRE BOT
 if(message.content === prefix + "open") {
                     if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("**__تم فتح الشات__:white_check_mark:**")
           });
             }
             
      
    
});







client.on('message', ra3d => {
                        let args = ra3d.content.split(" ").slice(1).join(" ")
if(ra3d.content.startsWith(prefix + 'ccolors')) {
    if(!args) return ra3d.channel.send('`يرجي اختيار كم لون `');
             if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**'); 
              ra3d.channel.send(`**✅ |Created __${args}__ Colors**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });








client.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
    if (command === "bans") {
        message.delete(5000)
         if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply("Error : \` I Dont Have ADMINISTRATOR Permission\`").then(message => message.delete(5000));
        if(!message.member.hasPermission('ADMINISTRATOR')) return;
        if(!message.channel.guild) return;
        message.guild.fetchBans()
        .then(bans => message.channel.send(`\`${bans.size}\` : عدد الاشخاص المحظورين من السيرفر `)).then(message => message.delete(5000))

  .catch(console.error);
}
});









client.on('message',async message =>{ 
    if(message.content.startsWith(prefix + "rooms")) {
        let i = 1;
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle(message.guild.name)
        .setThumbnail(message.guild.iconURL)
        .setDescription(message.guild.channels.map(c => `\`${i++}\` - **${c.name}**`))
        .setFooter(message.guild.channels.size + ' Channels in the server!');
        message.channel.send(embed).then(msg => {
            msg.delete(25000);
            message.delete(25000);
        });
    }
});

















client.on('message', message => {
              if(!message.channel.guild) return;
    if(message.content.startsWith('-bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "Cozmo bot";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
	      let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('Server', message.guild.name)
       .addField('Sender', message.author.username)
       .addField('Message', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });
    





client.on('message', message => {
           var currentTime = new Date(),
           hours = currentTime.getHours() + 0 ,
           minutes = currentTime.getMinutes(),
           seconds = currentTime.getSeconds(),
           years = currentTime.getFullYear(),
           month = currentTime.getMonth() + 1,
           day = currentTime.getDate(),
           week = currentTime.getDay();
      
            

           if (minutes < 10) {
               minutes = "0" + minutes;
           }
           var suffix = "AM";
           if (hours >= 12) {
               suffix = "PM";
               hours = hours - 12;
           }
           if (hours == 0) {
               hours = 12;
           }
               if(message.content.startsWith('-time')) {
                   const embed = new Discord.RichEmbed()
          .addField(`🕐 Time `,` ** 「  ${hours} : ${minutes} : ${suffix} 」**`)
.addField(` :satellite: Date `,`**「 ${years} : ${month} : ${day} 」**`)

          
message.channel.send(embed)
}
});   








 
client.on('message', message => { //By |.iiMostafaYT#1001
    if (message.content.startsWith("-bot")) { //By |.iixdavied#9908
    message.channel.send({ //By |.iixdavied#9908
        embed: new Discord.RichEmbed() //By |.iixdavied#9908
            .setAuthor(client.user.username,client.user.avatarURL) //By |.iixdavied#9908
            .setThumbnail(client.user.avatarURL) //By |.iixdavied#9908
            .setColor('RANDOM') //By |.iiMostafaYT#1001
            .setTitle('Info Riyderz bot.') //By |.iixdavied#9908
            .addField('**My Ping**' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true) //By |.iixdavied#9908
            .addField('**RAM Usage**', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true) //By |.iixdavied#9908
            .addField('**Servers**', [client.guilds.size], true) //By |.iixdavied#9908
            .addField('**Channels**' , `[ ${client.channels.size} ]` , true) //By |.iixdavied#9908
            .addField('**Users**' ,`[ ${client.users.size} ]` , true) //By |.iixdavied#9908
            .addField('**My Name**' , `[ ${client.user.tag} ]` , true) //By |.iixdavied#9908
            .addField('**My ID**' , `[ ${client.user.id} ]` , true) //By |.iixdavied#9908
            .addField('**DiscordJS**' , `[ ${Discord.version} ]` , true) //By |.iixdavied#9908
            .addField('**NodeJS**' , `[ ${process.version} ]` , true) //By |.iixdavied#9908
            .addField('**Arch**' , `[ ${process.arch} ]` , true) //By |.iixdavied#9908
            .addField('**Platform**' , `[ ${process.platform} ]` , true) //By |.iixdavied#9908
                  .addField('**My Prefix**' , `[ ${prefix} ]` , true) //By |.iixdavied#9908
                  .addField('**My Language**' , `[ Java Script ]` , true) //By |.iixdavied#9908
                  .setFooter('By | .iixdavied#9908') //By |.iixdavied#9908
    }) //By |.iixdavied#9908
} //By |.iixdavied#9908
}); //By |.iixdavied#9908
















  client.on('messageUpdate', (message, newMessage) => {
    if (message.content === newMessage.content) return;
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
 
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setTitle('Message Edited')
       .addField('Before Edit',`${message.cleanContent}`)
       .addField('After Edit',`${newMessage.cleanContent}`)
       .addField('Edit In',`<#${message.channel.id}>`)
       .addField('By', `<@${message.author.id}> `)
       .setColor('#36393e')
       .setTimestamp();
     channel.send({embed:embed});
 
 
});








 client.on('message', async message => {
 
   if (message.content.startsWith("-new")) {  
        const reason = message.content.split(" ").slice(1).join(" ");  
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`لازم تسوي رتبة اسمها \`Support Team\` وتنطي البوت ادمنيتر حتا يقدر يسوي الرومات ويعدل برمشنات`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });  
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: تم انشاء تذكرتك, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(d1631e)
                .addField(`Hey ${message.author.username}!`, `:white_check_mark:  تم انشاء تذكرتك, #ticket`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("-closed")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`هل انت متأكد من اقفالك للتذكرة اذا متأكد اكتبconfirm`)
           .then((m) => {
               message.channel.awaitMessages(response => response.content === 'confirm', {
                       max: 1,
                       time: 10000,
                       errors: ['time'],
                   })  
                   .then((collected) => {
                       message.channel.delete();
                   })  
                   .catch(() => {
                       m.edit('لم يتم تقفيل التكت').then(m2 => {
                           m2.delete();
                       }, 3000);
                   });
           });
   }
 
});











client.on('message', message => {
    if(!message.channel.guild) return;
if (message.content.startsWith('-ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('**Time Taken:**',msg + " ms :signal_strength: ")
.addField('**WebSocket:**',api + " ms :signal_strength: ")
message.channel.send({embed:embed});
}
});







client.on("message", (message) => {
    if (message.content.startsWith("-cv")) {
                if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
            let args = message.content.split(" ").slice(1);
        message.guild.createChannel(args.join(' '), 'voice');
                  message.channel.send('__**Done ✅**__')                
    }
    });


client.on("message", (message) => {
    if (message.content.startsWith("-ct")) {
                if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
            let args = message.content.split(" ").slice(1);
        message.guild.createChannel(args.join(' '), 'text');
                  message.channel.send('__**Done ✅**__')            
    }
    });






client.on("message", message => {
    var args = message.content.substring(prefix.length).split(" ");
    if (message.content.startsWith(prefix + "clear")) {
        if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
var msg;
msg = parseInt();

message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
message.channel.sendMessage("", {embed: {
title: "``تــم مسح الشات ``",
color: 0x06DF00,
footer: {
  
}
}}).then(msg => {msg.delete(3000)});
                  }


});







client.on("message", msg => {
    var prefix = "-";
if(msg.content.startsWith (prefix + "id")) {
if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
const embed = new Discord.RichEmbed();
embed.addField(":cloud_tornado:  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
   .addField(":id:  الايدي", `**[ ${msg.author.id} ]**`, true)
   .setColor("RANDOM")
   .setFooter(msg.author.username , msg.author.avatarURL)
   .setThumbnail(`${msg.author.avatarURL}`)
   .setTimestamp()
   .setURL(`${msg.author.avatarURL}`)
   .addField(':spy:  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
   .addField(':satellite_orbital:   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
   .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
   .addField(':robot:  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
msg.channel.send({embed: embed})
}
});







client.on('message', message => {
    if (message.content.startsWith("-av")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});







client.on("message", message => {

            if (message.content.startsWith(prefix + "obc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});

client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + 'edit')) {
        message.channel.sendMessage('Edit me').then(msg=>{msg.edit('Done edit')});
    }
});






client.on('message', message => {
    if(message.content == '-member') {
    const embed = new Discord.RichEmbed()
    .setDescription(`**Members info🔋
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart: idle:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
:black_heart: offline:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
:blue_heart:   all:  ${message.guild.memberCount}**`)         
         message.channel.send({embed});

    }
  });





client.on('message', message => {
    if (message.content.startsWith("-stats")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .addField('Uptime', timeCon(process.uptime()), true)
            .addField('RAM Usage', `${(process.memoryUsage().rss / 1048576).toFixed()}MB`, true)
            .addField('Guild Count', client.guilds.size, true)
    })
}
});

function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}







client.on('message', message => {
 if (message.content.toLowerCase() === prefix + "move all") {
     message.delete(4000)
 if(!message.channel.guild) return;
 if (!message.member.hasPermission("MOVE_MEMBERS")) return;
 if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return;
if (message.member.voiceChannel == null) return;
 var author = message.member.voiceChannelID;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send('\`Moved All Voice Members To Your Channel\`').then(m => m.delete(4000))
 }
   });


















client.on("message", message => {
  var prefix = "-";
  if(message.content.startsWith(prefix + "embed")) {
    

var color = message.content.split(" ")[1];
  var text = message.content.split(" ").slice(2);
    var tt = text.join(" ")
  if(!color) return message.reply("يجب كتابة لون الامبد الذي تريده");
    if(!tt) return message.reply("يجب كتابة كلام لتكراره");
  let embed = new Discord.RichEmbed()
  .setColor(color)
  .setDescription(tt)
  message.channel.send(embed).catch(Julian =>{console.log('`Error`: ' + Julian);
message.channel.send("`Error`:" + Julian)
    })
  }
  });







client.on('message', message => {
  const aa = message.content.split(" ").slice(1).join(" ");
  if(message.content.startsWith(prefix + "skin")){
    if(!aa) return message.reply(`:x:  -  **${prefix}skin <name>**`);
    var ss = new Discord.RichEmbed()
    .setTitle(`${aa}'s Skin!`)
    .setURL(`https://minotar.net/armor/body/${aa}/100.png`)
    .setThumbnail(`https://minotar.net/avatar/${aa}`)
    .setImage(`https://minotar.net/armor/body/${aa}/100.png`)
    .setFooter(`Requested By : ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(ss);
  }
});








client.on("message", message => {
if(message.content.startsWith(prefix + "vmute")) {
var mnt = message.mentions.members.first();
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MUTE_MEMBERS") || !message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return;
if(!mnt) return message.channel.send(`**• | Usage:** ${prefix}vmute \`\`@Name\`\``);
if(!mnt.voiceChannel) return message.channel.send(`⛔ | *${mnt.user.tag}* is not in a voice channel!`);
mnt.setMute(true).then(() => {
message.channel.send(`Successfully Muted ${mnt} :+1:`)
}).catch(console.error);
}
if(message.content.startsWith(prefix + "unvmute")) {
var mnt = message.mentions.members.first();
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MUTE_MEMBERS") || !message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return;
if(!mnt) return message.channel.send(`**• | Usage:** ${prefix}unvmute \`\`@Name\`\``);
if(!mnt.voiceChannel) return message.channel.send(`⛔ | *${mnt.user.tag}* is not in a voice channel!`);
mnt.setMute(false).then(() => {
message.channel.send(`Successfully Unmuted ${mnt} :+1:`)
}).catch(console.error);
}
});








client.on("message", message => {
    if (message.content.match(/([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi)) {
        if(!message.guild.members.get(client.user.id).hasPermission('MANAGE_MESSAGES')) return message.channel.send('**I need Permission \`MANAGE_MESSAGE\`To delete Tokens**')
        message.delete();
        message.reply(`مخك وين ترسل التوكن لحول`);
        return;
    }
    if(message.channel.type === "dm"){
    if (message.content.match(/([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi)) {
  
        message.reply(`مخك وين ترسل التوكن لحول`);
        return;
    }
}
});



client.on('message', message => {
    if (message.content.startsWith("<576354546952044555>"))
    
    message.reply("Bot Owner : YOU");
    
      



});










client.on('message', message => {
    if(message.content == '-alls') {
             if(!message.author.id === '413660639668731914') return;
    var gimg;
    var gname;
    var gmemb;
    var gbots;
    var groles;
    var servers = client.guilds;
    servers.forEach((g)=>{
    gname = g.name;
    gimg = g.iconURL;
    gmemb = g.members.size;
    gbots = g.members.filter(m=>m.bot).size;
    groles = g.roles.map(r=> {return r.name});
    let serv = new Discord.RichEmbed()
    .setAuthor(gname,gimg)
    .setThumbnail(gimg)
    .addField('Server Member Count',gmemb = g.members.size)
    .setColor('RANDOM')
    message.channel.send(`
    Server Name : **${gname}**
    Server MemberCount : **${gmemb} **
           
            `);
          message.channel.sendEmbed(serv);
    })
    }
    });










client.on('message', message => {
        if (message.content === "-invite") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
        .setTitle(`➡ Click Here `)
        .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=576354546952044555&permissions=0&scope=bot`)
        .setThumbnail("https://discordapp.com/api/oauth2/authorize?client_id=577069612995444755&permissions=0&scope=bot")        
     message.channel.sendEmbed(embed);
       }
   });





client.on('message', message => {
     if (message.content === "-support") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" ** :gear: Server Support :gear: **" , "  **https://discord.gg/wYRywZ3**")
     
     
  message.channel.sendEmbed(embed);
    }
});










client.on('message', message => {
    if (message.content.startsWith("-link")) {
 
  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}]  هذا هو رابط سيرفر
https://discord.gg/wYRywZ3
-هذا الرابط صالح ل 100 مستخدم فقط
https://discord.gg/wYRywZ3
-هذا الرابط صالح لمده 24 ساعه فقط
https://discord.gg/wYRywZ3
**`)
      message.author.sendEmbed(Embed11)
    }
});












 






client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('-ownersend')){
if (message.author.id !== '413660639668731914') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
if(!message.author.id === '413660639668731914') return;
message.channel.sendMessage('جار ارسال |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});








client.on('message',message =>{
		var command = message.content.toLowerCase().split(" ")[0];
		  var args = message.content.toLowerCase().split(" ");
		  var userM = message.mentions.users.first()
		  if(command == prefix + 'unban') {
			  if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(':no_entry: | You dont have **BAN_MEMBERS** Permission!');
			  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send(':no_entry: | I dont have **BAN_MEMBERS** Permission!');
			  if(!args[1]) return  message.channel.send(':no_entry: | Please type the ID of user');
			  if(args[1].length < 16) return message.reply(':no_entry: | This ID is not id user!');
			  message.guild.fetchBans().then(bans => {
				  var Found = bans.find(m => m.id === args[1]);
				  if(!Found) return message.channel.send(`:no_entry: | <@${message.author.id}> This preson not have any ban from this server! :unlock:`);
				  message.guild.unban(args[1]);
				  message.channel.send(`:white_check_mark: Successfully \`\`UNBANNED\`\` <@${args[1]}> From the server!`);
				 
				  let banInfo = new Discord.RichEmbed()
				  .setTitle('**New Unbanned User !**')
				  .setThumbnail(message.author.avatarURL)
				  .setColor('GREEN')
				  .setDescription(`**\n:airplane: Successfully \`\`UNBANNED\`\` <@${args[1]}> From the server!\n\n**User:** <@${args[1]}> (ID: ${args[1]})\n**By:** <@${message.author.id}> (ID: ${message.author.id})`)
				  .setTimestamp()
				  .setFooter(userM.user.tag, userM.user.avatarURL)
				 
				  let incidentchannel = message.guild.channels.find(`name`, "incidents");
				  if(!incidentchannel) return message.channel.send("Can't find incidents channel.");
				  incidentchannel.send(banEmbed);
				  }
	   
			  )}
			})












client.on('message', message => {
	var prefix = "-";
       if (message.content.startsWith(prefix + 'users')) {
     let msg =  client.guilds.map(guild => `**${guild.name}** عدد الاعضاء: ${guild.memberCount}`).join('\n');
  let embed = new Discord.RichEmbed()
  .setTitle(`${client.guilds.size}سيرفرات `)
  .setDescription(`${msg}`)
  .setColor("#00ff47");
  message.channel.send(embed);
}
});












client.on('message', message => {
	var prefix = "-";
    if(message.content.startsWith(prefix + "report")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**# Specify a reason!**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("Couldn't find user.");
    let Rembed = new Discord.RichEmbed()
    .setTitle("`New Report!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .addField("**# - Time:**",message.createdAt,true)
    .setFooter("لو ان الابلاغ فيه مزح راح يتعرض صاحب الابلاغ لقوبات")
message.channel.send(Rembed)
message.channel.send("__Are you sure you want to send this to the Server owner??__").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.guild.owner.send(Rembed)
    message.reply("**# - Done! 🎇**");
})
reaction2.on("collect", r => {
    message.reply("**# - Canceled!**");
})
})
}
});







client.on('message', message => {
    const swearWords = ["يا قحبة", "كس اختك","كس امك"]; // الكلمات الممنوعه هنا 
    if( swearWords.some(word => message.content.includes(word)) ) {
        message.delete();
        message.author.send('Hey! That word has been banned, please don\'t use it!');
      }
}) 






client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","Players"));
    });









client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== '232564113459511306') return;

if (message.content.startsWith(prefix + 'g')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 

if (message.content.startsWith(prefix + 'w')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 
if (message.content.startsWith(prefix + 'l')) {
client.user.setActivity(argresult, {type:'LISTENING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 

if (message.content.startsWith(prefix + 's')) {
  client.user.setGame(argresult, "https://www.twitch.tv/Justin-Ly0001");
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
}

});







client.on('message',async message => {
 var prefix = '-';//البرفكس
  if(message.content.startsWith(prefix + "buy")) {
 
if(!message.channel.guild) return message.reply(' ');
 
 
  let submite = message.guild.channels.find(`name`, "vip");
 
  if(!submite) return message.channel.send("لايوجد روم خاص للي يوصل الشراء اليه :x:");
  let filter = m => m.author.id === message.author.id;
 
    let thisMessage;
 
    let thisFalse;
 
    message.channel.send('**ما تشتري ؟**').then(msg => {
 
 
 
    message.channel.awaitMessages(filter, {
 
      max: 1,
 
      time: 90000,
 
      errors: ['time']
 
    })
 
    .then(collected => {
 
      collected.first().delete();
 
      thisMessage = collected.first().content;
 
      let boi;
 
      msg.edit('**الرجاء كتابة اسمك**').then(msg => {
 
 
 
          message.channel.awaitMessages(filter, {
 
            max: 1,
 
            time: 90000,
 
            errors: ['time']
 
          })
 
          .then(collected => {
 
            collected.first().delete();
 
            boi = collected.first().content;
 
            let boi2;
 
            msg.edit('**الرجاء تحويل 10الف كريدت ل iixdavied#9908**').then(msg => {
 
 
 
              message.channel.awaitMessages(filter, {
 
                max: 1,
 
                time: 90000,
 
                errors: ['time']
 
              })
 
              .then(collected => {
 
                collected.first().delete();
 
              boi2 = collected.first().content;
 
      msg.edit('**هل متاكد من شرائك الرتبة اخي الكريم الرجاء الاجابة بنعم ام لا**');
 
 message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
 
        max: 1,
 
        time: 90000,
 
        errors: ['time']
 
      })
 
      .then(collected => {
 
        if(collected.first().content === 'لا') {
 
          msg.delete();
 
          message.delete();
 
          thisFalse = false;
 
        }
 
        if(collected.first().content === 'نعم') {
 
          if(thisFalse === false) return;
 
          msg.edit('**Done ✅, تم بنجاح شراء الرتبة الرجاء الانتظار حين الادارة ترد عليك**');
 
          collected.first().delete();
 
          submite.send(`@everyone | @here
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**[ ${message.guild.name}:arrow_down: ] Submit**
 
[**هل يريد شراء الرتبة او كهدية**]:
${thisMessage}
 
[**اسم الذي يريد شراء الرتبة**]:
${boi}
 
[**هل تم التحويل ام لا**]:
${boi2}
 
[**اسم الشاري بمنشنة**]:
${message.author}
 
[**ايد�� الشاري**]:
${message.author.id}`);//Fras#2729
 
        }
 
      }
 
  );
 
});
 
    });
 
  }
 
    );
 
  });
 
}
 
);
 
    })}});






client.on('message',async Epic => {
  var prefix = "-" ;
  if(Epic.content.startsWith(prefix + "vonline")) {
  if(!Epic.guild.member(Epic.author).hasPermissions('MANAGE_CHANNELS')) return Epic.reply(':x: **I Dont Have Permissions**');
  if(!Epic.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return Epic.reply(':x: **You Dont Have Permissions**');
  Epic.guild.createChannel(`Voice Online : [ ${Epic.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice Online Is Activation In ${Epic.guild.name}`);
    c.overwritePermissions(Epic.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`Voice Online :  ${Epic.guild.members.filter(m => m.voiceChannel).size} .`)
    },1000);
  });
  }
});









client.on('message', message => {
	var prefix = "-";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``Use : " +prefix+ "move @User``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`✅ You Have Moved <@${usermentioned}> To Your Channel`)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("`You Cant Move"+ message.mentions.members.first() +" `The User Should Be In channel To Move It`")
}
} else {
 message.channel.send("**``You Should Be In Room Voice To Move SomeOne``**")
}
} else {
message.react("❌")
 }}});



client.on('message', message => { 
let prefix = '-'
    if (message.content.startsWith(prefix + 'emojis')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('➡ Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
    }
});







client.on('message', message => {
var prefix = "-"
        if(message.content.startsWith(prefix + 'hypixel')) {
            let args = message.content.split(' ').slice(1).join(' ');
            if (!args) return message.channel.send("**رجأء ضع اسمك في ماين كرافت. ?**");
            var link = (`https://hypixel.net/player/${args}`);
            message.channel.send(link);
        }
    });





client.on('message', eyad => {
  if (eyad.content.startsWith('-vban')) {
if (!eyad.member.hasPermission("MOVE_MEMBERS")) return eyad.channel.send("❎ | **انت لا تمتلك الخاصيه المطلوبه**");
let men = eyad.mentions.users.first()
let mas = eyad.author
if(!men) return eyad.channel.send('`⛔| ** يجب عليك المنشن اولاً **`');
eyad.guild.channels.forEach(c => {
c.overwritePermissions(men.id, {
          CONNECT: false
})
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
لقد تم منع من دخول الرومات الصوتيه 
بواسطة : <@${eyad.author.id}> **`)
.setThumbnail("http://www.clker.com/cliparts/o/Y/d/G/j/1/close-hi.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(eyad.guild.name, eyad.guild.iconURL)
.setDescription(`          <@${men.id}>
لقد تم منع من دخول الرومات الصوتيه
بواسطة : <@${eyad.author.id}> `)
.setThumbnail("http://www.clker.com/cliparts/o/Y/d/G/j/1/close-hi.png")
eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(10000)})
    }
})



client.on("message", message => {    
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === "-savatar"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`صورة ** ${message.guild.name} **`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor('RANDOM')
    .setImage(message.guild.iconURL)

   message.channel.send({embed});
      }
  });



client.on('message', eyad => {
  if (eyad.content.startsWith('-uvban')) {
if (!eyad.member.hasPermission("MOVE_MEMBERS")) return eyad.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
 let men = eyad.mentions.users.first()
 let mas = eyad.author
 if(!men) return eyad.channel.send('`⛔| ** يجب عليك المنشن اولاً **`');
 eyad.guild.channels.forEach(c => {
 c.overwritePermissions(men.id, {
         CONNECT: true
 })
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
 الان يمكنك الدخول الي الرومات الصوتيه:)
بواسطة : <@${eyad.author.id}> **`)
.setThumbnail("http://shopforclipart.com/images/green-tick/22.jpg")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(eyad.guild.name, eyad.guild.iconURL)
.setDescription(`          <@${men.id}>
الان يمكنك الدخول الي الرومات الصوتيه
بواسطة : <@${eyad.author.id}>
`)
.setThumbnail("http://shopforclipart.com/images/green-tick/22.jpg")
eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(15000)})
    }
})








 
    client.on('message', message => {
	    var prefix = "-";
    if(message.content.startsWith(prefix + '2avatar')) {
         var men = message.mentions.users.first();
      var heg;
      if(men) {
          heg = men
      } else {
          heg = message.author
      }
  var avatar = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle(heg.username)
.setImage(heg.avatarURL)

message.channel.sendEmbed(avatar)
    }
});













  client.on("message", message => {
                                    var prefix = "-";
                                 if (message.content === "-help") {
                                     message.channel.send(' ');
                                  const embed = new Discord.RichEmbed() 
                                      .setColor("RANDOM")
                                      .setDescription(`
                                      __**Administrative Commands**__
                                      『-move @user / لسحب الشخص الى روومك』
                                      『-bc / رسالة جماعية الى كل اعضاء السيرفر』                                  
                                      『-clear / مسح الشات』
                                      『-mute @user <reason> / اعطاء العضو ميوت لازم رتبة <Muted>』
                                      『-unmute @user / لفك الميوت عن الشخص 』
                                      『-kick @user <reason> / طرد الشخص من السيرفر』
                                      『-ban @user <reason> / حضر الشخص من السيرفر』
                                      『-close / تقفيل الشات』
                                      『-open / فتح الشات』
                                      『-ct <name> / انشاء شات』
                                      『-cv <name> / انشاء رووم فويس』
                                      『-uvban/ فك البان الصوتي』
                                      『-vban/ اعطاء بان صوتي』
                                `)
                                   message.author.sendEmbed(embed)
                                    
                                   }
                                   }); 
                                
                                
                                   
                                   client.on("message", message => {
                                    var prefix = "-";
                                 if (message.content === "-help") {
                                     message.channel.send('');
                                  const embed = new Discord.RichEmbed() 
                                      .setColor("RANDOM")
                                      .setDescription(`
                                      __**General Commands**__
                                      『-server / يعرض لك معلومات عن السيرفر』
                                      『-bot / يعرض لك كل معلومات البوت』
                                      『-member / عرض لك عدد كل حالات الاشخاص وعدد البوتات وعدد الاشخاص』
                                      『-id /  معلومات عنك』                
                                      『-2avatar /صورة الي تمنشنة』
                                      『-avatar / صورتك  』
                                      『-invite / لدعوة البوت الى سيرفرك』
                                      『-support / سيرفر الدعم』
                                      『-new / لعمل تيكيت』
                                      『-savatar / لاضهار صورة السيرفر』
                                      『-buy / لشراء رتبة [vip]』
                                      『-report / لابلاغ عن شخص في السيرفر』
                                      『-users / لرؤية عدد الاشخاص في السيرفر』
                                      『-link / رابط السيرفر』
                                      『-skin / يضهرلك سكنك في ماين كرفت』
                                      『-time / يضهرلك الوقت』
                                      『-rooms / يضهرلك الرومات』
                                      『-suggest / لاقتراحات』
                                `)
                                   message.author.sendEmbed(embed)
                                    
                                   }
                                   }); 
                                
                                



























client.on("message", msg => {
    let message = msg;
    let messageArray = msg.content.split(" ");
    let args = messageArray.slice(1);
            let caseid = Date.now() + msg.author.discriminator
    if (msg.content.startsWith(prefix + "suggest" || msg.content.startsWith(prefix + "sug"))){
            let suggestionchat = msg.guild.channels.find(channel => channel.name === "الاقتراحات")
                                                                                  // ^^^^^^^^^وأكيد يمديك تعدل اسم الروم لو تبي
            let suggestion =  args.join(' '); // بتلاقون تعريف الأرقز حقي فوق
            if(!suggestion) return message.channel.send('الرجاء وضع اقتراحك بعد الأمر');
            if(!suggestionchat) return message.channel.send('لا يمكنني ايجاد الشات');
            let suggestionembed = new Discord.RichEmbed()
                .setAuthor('New Suggestion!')
                .addField('الأقتراح من قبل', `${message.author.tag} **|** ${message.author.id}`, true)
                .addField('اسم السيرفر المرسل منه الأقتراح', `${message.guild.name} **|** ${message.guild.id}`)
                .addField('الأقتراح', `${suggestion}`)
                .setColor('#ffffff')
                .setFooter(`ID: ${Date.now() + msg.author.discriminator}`)
                .setThumbnail(message.author.avatarURL)
                .setTimestamp();
            suggestionchat.send(suggestionembed).then(send =>{
            sug[caseid] = {
                message: suggestion,
                by: msg.author.id,
                Time: message.createdAt,
                thisisimportant: send.id
               }
               fs.writeFile("./suggestions.json", JSON.stringify(sug, null , 4), err =>{
                console.log(err);
                })
              })
            message.channel.send("**تم أرسال اقتراحك**")
              }
 
  if (msg.content.startsWith(prefix + "allsuggestions")){
    let data = undefined;
  for(i in sug){
      if (data === undefined) {
        data = "";
      }
      let data1 = sug[i].message
      let data2 = sug[i].by
      const stuff = `${data1} **By** <@${data2}>`;
      data += (stuff) + "\n\n";
    }
    if (data !== undefined) {
      const richEmbed = new Discord.RichEmbed();
      richEmbed.addField("Messages", data)
      msg.channel.send(richEmbed)
    }else if(data === undefined) return message.channel.send("Couldn't find any suggestion")
  }
  if (msg.content.startsWith(prefix + "dsug")){
        let that = args.join(' ')
        if(!that) return message.channel.send("Hmmm please put an id")
        if(sug[that] === undefined) return message.channel.send("Couldn't find that suggestion id!")
            message.channel.send("Deleted!")
            message.guild.channels.find(ch => ch.name === "الاقتراحات").fetchMessage(sug[that].thisisimportant).then(msg => msg.delete());
            delete sug[that];
            fs.writeFile("./suggestions.json", JSON.stringify(sug, null , 4), err =>{
                console.log(err)
              })
            }
       
})
                                 















client.on('message', function(msg) {
    const prefix = '-'
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });








client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === "-mute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'mute-log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
    
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('الأستعمال:', 'اسكت/احكي')
      .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
     
     if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
   
    if (message.guild.member(user).roles.has(muteRole.id)) {
  return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
  } else {
      message.guild.member(user).addRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
  });
    }
  
  };
  
  });




client.on('message', msg => {
    if (msg.content === 'السلام عليكم') {
      msg.reply('**وعليكم السلام**');
    }
  });






client.on('message', msg => {
    if (msg.content === 'كيف الحال') {
      msg.reply('**الحمد الله**');
    }
  });




client.on('message', msg => {
    if (msg.content === 'مبروك') {
      msg.reply('**الله يبارك فيك**');
    }
  });


client.on('message', msg => {
    if (msg.content === 'مرحبا') {
      msg.reply('**هلا**');
    }
  });



client.on('message', msg => {
    if (msg.content === 'هلا') {
      msg.reply('**اهلين**');
    }
  });





client.on('message', msg => {
    if (msg.content === 'ip1') {
      msg.reply('**play.timolia.de**');
    }
  });





client.on('message', msg => {
    if (msg.content === 'ip2') {
      msg.reply('**eu.hypixel.net**');
    }
  });



client.on('message', msg => {
    if (msg.content === 'ip3') {
      msg.reply('**premium.blocksmc.com**');
    }
  });



client.on('message', msg => {
    if (msg.content === 'ip4') {
      msg.reply('**eu.hivemc.com **');
    }
  });





client.on('message', msg => {
    if (msg.content === 'ip5') {
      msg.reply('**pvptemple.eu**');
    }
  });




client.on('message', msg => {
    if (msg.content === 'ip6') {
      msg.reply('**Revils.eu**');
    }
  });






client.on('message', msg => {
    if (msg.content === 'ip7') {
      msg.reply('**giantcraft.net**');
    }
  });




client.on('message', msg => {
    if (msg.content === 'ip8') {
      msg.reply('**play.Requezmc.net**');
    }
  });




client.on('message', msg => {
    if (msg.content === 'ip9') {
      msg.reply('**fynnland.net**');
    }
  });




client.on('message', msg => {
    if (msg.content === 'ip10') {
      msg.reply('**eu.minemen.club**');
    }
  });













client.on('message', message => { 
    var prefix = "-";
    if (message.author.boss) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "Roleadd") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**:no_entry_sign:انت لا تملك صلاحيات **").then(msg => msg.delete(5000));;
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('**ضع منشن الشخص!!**').then(msg => {msg.delete(5000)});
    let MRole = message.content.split(" ").slice(2).join(" ");
    if(!MRole)return message.reply("يجب عليك وضع اسم الرتبة").then(msg => {msg.delete(5000)});
    message.guild.member(user).addRole(message.guild.roles.find("name", MRole));
    message.reply('*** Done :white_check_mark:  ***').then(msg => {msg.delete(10000)});
    }
    });
    





client.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find('name', '🌈⇅chat-شــات');
  
    const millis = new Date().getTime() - member.user.createdAt.getTime();
    const now = new Date();
    const createdAt = millis / 1000 / 60 / 60 / 24;




  
    const embed = new Discord.RichEmbed()
    
    .setColor("black")
    .setDescription(`**تاريخ دخولك للدسكورد منذ ${createdAt.toFixed(0)} يوم**`)
    .setAuthor(member.user.tag, member.user.avatarURL);
    channel.sendEmbed(embed);

  
});













client.on("message", message => {
	var prefix = "-";
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		} 
	} 
});






client.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "say") {
let rank = message.guild.member(message.author).roles.find('name', '.');
if (!rank) return message.reply('انت لا تمتلك الرتبه المخصصه لهذا الامر')
  message.channel.send(args.join("  "))
    message.delete();
  }


});








client.on("message", async message => {
    if(!message.channel.guild) return;
    var prefix = "-";
if(message.content.startsWith(prefix + 'invites')) {
var nul = 0
var guild = message.guild
await guild.fetchInvites()
    .then(invites => {
     invites.forEach(invite => {
        if (invite.inviter === message.author) {
             nul+=invite.uses
            }
        });
    });
  if (nul > 0) {
      console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
      var embed = new Discord.RichEmbed()
          .setColor("#000000")
            .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
                  message.channel.send({ embed: embed });
              return;
            } else {
               var embed = new Discord.RichEmbed()
                .setColor("#000000")
                .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

               message.channel.send({ embed: embed });
                return;
            }
}
if(message.content.startsWith(prefix + 'invite-codes')) {
let guild = message.guild
var codes = [""]
message.channel.send(":postbox: **لقد قمت بأرسال جميع روابط الدعوات التي قمت بأنشائها في الخاص**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}

});







client.on('message', message => { // Toxic Codes
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc1')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(' **ADMINISTRATORلا يوجد صلاحيه **');
const args = message.content.split(" ").slice(1).join(" ")
const BcList = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(`محتوى الرساله : ${args}`)
.setDescription(`**برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست\nلكتابه اسم السيرفر اكتب في الرساله :[server]\nلكتابه اسم المراسل  اكتب في الرساله :[by]\nلكي يقوم  البوت بمنشن الاعضاء اكتب في الرساله :[user]**`)
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
msg.react('📝')
.then(() => msg.react('✏'))
.then(() =>msg.react('📝'))
 
var EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
var NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
 
var EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
var NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
 
 
EmbedBc.on("collect", r => {
 
message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var EmbedRep = args.replace('[server]' ,message.guild.name).replace('[user]', m).replace('[by]', `${message.author.username}#${message.author.discriminator}`)
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(EmbedRep)
.setThumbnail(message.author.avatarURL)
m.send({ embed: bc })
msg.delete();
})
})
NormalBc.on("collect", r => {
  message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var NormalRep = args.replace('[server]' ,message.guild.name).replace('[user]', m).replace('[by]', `${message.author.username}#${message.author.discriminator}`)
m.send(NormalRep);
msg.delete();
})
})
})
}
});





 client.on('message', message => {
	   var prefix = "-";
      if (message.content === prefix + "date") {
          if (!message.channel.guild) return message.reply('** This command only for servers **');  
          var currentTime = new Date(),
              Year = currentTime.getFullYear(),
              Month = currentTime.getMonth() + 1,
              Day = currentTime.getDate();
 
              var Date15= new Discord.RichEmbed()
              .setTitle("**『  Date - التاريخ 』 **")
              .setColor('RANDOM')
              .setTimestamp()
              .setDescription( "『"+ Day + "-" + Month + "-" + Year + "』")
              .setFooter(`-help to see all bot commands `, 'https://images-ext-1.discordapp.net/external/x-p4BwGofa_z_p9hpV-4hJPcqWh-aWGQzsmI189cDiY/%3Fwidth%3D344%26height%3D344/https/media.discordapp.net/attachments/372444859329544203/372701184055836682/ass.jpg?width=231&height=231')
               message.channel.sendEmbed(Date15);
      }
  });
 







client.on("guildMemberAdd", member => {
    member.createDM().then(function (channel) {
    return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
  :crown:اسم العضو  ${member}:crown:  
  انت العضو رقم ${member.guild.memberCount} `) 
  }).catch(console.error)
  })





client.on('guildCreate', guild => {
    var embed = new Discord.RichEmbed()
    .setColor(0x5500ff)
    .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
        guild.owner.send(embed)
  });















client.on("message", msg => {
    var prefix = '-'//البركفس
    if(msg.content.startsWith(prefix + 'myguild')){
      let embed = new Discord.RichEmbed()
      .setThumbnail(msg.guild.iconURL)
      .setColor("RANDOM")
      .addField("Year📆",msg.guild.createdAt.getFullYear())
      .addField("Hour📆", msg.guild.createdAt.getHours())
      .addField("Day📆", msg.guild.createdAt.getDay())
      .addField("Month📆", msg.guild.createdAt.getMonth())
      .addField("Minutes📆", msg.guild.createdAt.getMinutes())
      .addField("Seconds📆", msg.guild.createdAt.getSeconds())
      .addField("Full📆", msg.guild.createdAt.toLocaleString())
      .setTimestamp()
      msg.channel.send(embed);
    }
  });







client.on('guildCreate', guild => {
    var embed = new Discord.RichEmbed()
    .setColor(0x5500ff)
    .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
        guild.owner.send(embed)
  });







client.on('message', message => {
  if(message.content.includes('discord.gg')){
                                          if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
      if (!message.member.hasPermissions(['ADMINISTRATOR'])){
      message.delete()
  return message.reply(`** Not allowed to advertising Here :angry: ! **`)
  }
}
});










client.on('message', msg => {
   if(msg.content === "-السعودية") {
var embed20 = new Discord.RichEmbed()
.setTitle("🇸🇦 🕌 الاذان في السعودية 🕌 🇸🇦")
.setImage("https://cdn.discordapp.com/attachments/499383925924429837/502484545556316174/unknown.png")
msg.channel.sendEmbed(embed20).then(SA => {
   SA.react('🇸🇦').then(() => SA.react('🇸🇦'))    
})
}                      
 });

client.on('message', msg => {
   if(msg.content === "-مصر") {
var embed20 = new Discord.RichEmbed()
.setTitle("🇪🇬 🕌 الاذان في مصر 🕌 🇪🇬")
.setImage("https://cdn.discordapp.com/attachments/501948394286350356/502486345537683456/unknown.png")
msg.channel.sendEmbed(embed20).then(M => {
M.react('🇪🇬').then(() => M.react('🇪🇬'))
})
   }
 });


client.on('message', msg => {
   if(msg.content === "-العراق") {
var embed20 = new Discord.RichEmbed()
.setTitle("🇮🇶 🕌 الاذان في العراق 🕌 🇮🇶")
.setImage("https://cdn.discordapp.com/attachments/499383925924429837/502494601525985280/unknown.png")
msg.channel.sendEmbed(embed20).then(I => {
I.react('🇮🇶').then(() => I.react('🇮🇶'))
})
                                    }
 });
client.on('message', msg => {
   if(msg.content === "-المغرب") {
var embed20 = new Discord.RichEmbed()
.setTitle("🇲🇦 🕌 الاذان في المغرب 🕌🇲🇦 ")
.setImage("https://cdn.discordapp.com/attachments/499383925924429837/502494027375968266/unknown.png")
msg.channel.sendEmbed(embed20).then(A => {
A.react('🇲🇦').then(() => A.react('🇲🇦'))
})   
}
 });



client.on('message', msg => {
   if(msg.content === "-سوريا") {
var embed20 = new Discord.RichEmbed()
.setTitle("🇸🇾 🕌 الاذان في سوريا 🕌 🇸🇾")
.setImage("https://cdn.discordapp.com/attachments/499383925924429837/502495763549388800/unknown.png")
msg.channel.sendEmbed(embed20).then(S => {
S.react('🇸🇾').then(() => S.react('🇸🇾'))
})   
}
 });

client.on('message', msg => {
   if(msg.content === "-الأردن") {
var embed20 = new Discord.RichEmbed()
.setTitle("🇯🇴 🕌 الاذان في الأردن 🕌 🇯🇴")
.setImage("https://cdn.discordapp.com/attachments/499383925924429837/502496095570624533/unknown.png")
msg.channel.sendEmbed(embed20).then(J => {
J.react('🇯🇴').then(() => J.react('🇯🇴'))
})
   }
 });

client.on('message', msg => {
   if(msg.content === "-تونس") {
var embed20 = new Discord.RichEmbed()
.setTitle("🇹🇳 🕌 الاذان في تونس 🕌 🇹🇳")
.setImage("https://cdn.discordapp.com/attachments/499383925924429837/502496873073082394/unknown.png")
msg.channel.sendEmbed(embed20).then(T => {
T.react('🇹🇳').then(() => T.react('🇹🇳'))
})   
}
 });

client.on('message', msg => {
   if(msg.content === "-فلسطين") {
var embed20 = new Discord.RichEmbed()
.setTitle("🇵🇸 🕌 الاذان في فلسطين 🕌 🇵🇸")
.setImage("https://cdn.discordapp.com/attachments/499383925924429837/502496873073082394/unknown.png")
msg.channel.sendEmbed(embed20).then(P => {
P.react('🇵🇸').then(() => P.react('🇵🇸'))
})   
}
 });

client.on('message', msg => {
   if(msg.content === "-قطر") {
var embed20 = new Discord.RichEmbed()
.setTitle("🇶🇦 🕌 الاذان في قطر 🕌 🇶🇦")
.setImage("https://cdn.discordapp.com/attachments/499383925924429837/502497346207219742/unknown.png")
msg.channel.sendEmbed(embed20).then(Q => {
Q.react('🇶🇦').then(() => Q.react('🇶🇦'))
})   
   }
 });

client.on('message', msg => {
   if(msg.content === "-البحرين") {
var embed20 = new Discord.RichEmbed()
.setTitle("🇧🇭 🕌 الاذان في البحرين 🕌 🇧🇭")
.setImage("https://cdn.discordapp.com/attachments/499383925924429837/502497608284241940/unknown.png")
msg.channel.sendEmbed(embed20).then(B => {
B.react('🇧🇭').then(() => B.react('🇧🇭'))
})   
   }
                                                
                                    
 });



client.on('message', message => {
    if(message.content.startsWith(prefix + "antibots on")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
antibots[message.guild.id] = {
onoff: 'On',
}
message.channel.send(`**✅ The AntiBots Is __𝐎𝐍__ !**`)
          fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }

        })



client.on('message', message => {
    if(message.content.startsWith(prefix + "antibots off")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
antibots[message.guild.id] = {
onoff: 'Off',
}
message.channel.send(`**⛔ The AntiBots Is __𝐎𝐅𝐅__ !**`)
          fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }

        })










client.on('message', async message => {
 if(message.channel.type === "dm") return;
  if(message.author.bot) return;
   if(!temp[message.guild.id]) temp[message.guild.id] = {
    time: "3000",
     category : 'click here',
      channel : 'click here'
       }
        if(message.content.startsWith('-temp on')){
         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
          var ggg= message.guild.createChannel('click here', 'category').then(cg => {
           var ccc =message.guild.createChannel('click here', 'voice').then(ch => {
            ch.setParent(cg)
             message.channel.send('**Done ,**')
              client.on('message' , message => {
               if(message.content === '#temp off') {
                if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                 cg.delete()
                  ch.delete()
                   message.channel.send('**Done ,**')
                    }
                     });
                      const time = temp[message.guild.id].time
                       client.on('message' , message => {
                        if (message.content.startsWith(prefix + "temptime")) {
                         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                          let newTime= message.content.split(' ').slice(1).join(" ")
                          if(!newTime) return message.reply(`**${prefix}temptime <time>  \`1000 = 1s\`**`)
	                 if(isNaN(newTime)) return message.reply(`** The Time Be Nambers :face_palm: **`);
	                if(newTime < 1) return message.reply(`**The Time Be Up \`3000s\`**`)
                       temp[message.guild.id].time = newTime
                      message.channel.send(`**Temp Rooms Time Change To \`${newTime}\`**`);
                     }
                    });
                   client.on('voiceStateUpdate', (old, neww) => {
                  let newUserChannel = neww.voiceChannel
                 let oldUserChannel = old.voiceChannel
                temp[message.guild.id].category = cg.id
               temp[message.guild.id].channel = ch.id
              let channel = temp[message.guild.id].channel
             let category = temp[message.guild.id].category
            if(oldUserChannel === undefined && newUserChannel !== undefined && newUserChannel.id == channel) {
           neww.guild.createChannel(neww.displayName , 'voice').then(c => {
          c.setParent(category)
         let scan = setTimeout(()=>{
        if(!neww.voiceChannel) {
       c.delete();
      client.channels.get(channel).overwritePermissions(neww, {
     CONNECT:true,
    SPEAK:true
   })
  }
 }, temp[neww.guild.id].time);
  c.overwritePermissions(neww, {
   CONNECT:true,
    SPEAK:true,
     MANAGE_CHANNEL:true,
      MUTE_MEMBERS:true,
       DEAFEN_MEMBERS:true,
	MOVE_MEMBERS:true,
	 VIEW_CHANNEL:true
	  })
	   neww.setVoiceChannel(c)
            })
             client.channels.get(channel).overwritePermissions(neww, {
	      CONNECT:false,
	       SPEAK:false
		})
               }
              })
             })
           })
          }
         fs.writeFile("./temp.json", JSON.stringify(temp), (err) => {
        if(err) console.error(err)
       })
      });












client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا **ف** تكلم مع الادارة `');
   
       
    }
})



client.on("guildMemberAdd", (member) => {
  let channel = member.guild.channels.get("594185638438240538");
  if (!channel) {
      console.log("!the channel id it's not correct");
      return;
  }
  if (member.id == client.user.id) {
      return;
  }
  console.log('-');
  var guild;
  while (!guild)
      guild = client.guilds.get("550727606224289792");
  guild.fetchInvites().then((data) => {
      data.forEach((Invite, key, map) => {
          var Inv = Invite.code;
          if (dat[Inv])
              if (dat[Inv] < Invite.uses) {
                  setTimeout(function() {
channel.send(`**invited by** ${Invite.inviter} `) ;
                  },1500);
}
          dat[Inv] = Invite.uses;
     
     });
  });
});



client.on('emojiCreate', emoji =>{
  var log = emoji.guild.channels.find(c => c.name === 'log');
  if(!log) return
 
    let ee = new Discord.RichEmbed()
    .setColor('BLUE')
    .setThumbnail(`https://cdn.discordapp.com/emojis/${emoji.id}.png`)
    .setDescription(`**{ ${emoji} } has been added to the emoji list**`)
    .setTimestamp()
    .setFooter(emoji.guild.name,emoji.guild.iconURL)
    log.send(ee);
});
///
client.on('emojiDelete', emoji =>{
  var log = emoji.guild.channels.find(c => c.name === 'log');
  if(!log) return
 
    let ee = new Discord.RichEmbed()
    .setColor('BLUE')
    .setThumbnail(`https://cdn.discordapp.com/emojis/${emoji.id}.png`)
    .setDescription(`**{ ${emoji} } has been removed from the emoji list**`)
    .setTimestamp()
    .setFooter(emoji.guild.name,emoji.guild.iconURL)
    log.send(ee);
});




client.on('message', message => {
  if (message.content === prefix + 'volcano.com') {
    message.react(`🐱`)
      message.channel.sendFile("file:///C:/Users/dawoo/OneDrive/%D8%B3%D8%B7%D8%AD%20%D8%A7%D9%84%D9%85%D9%83%D8%AA%D8%A8/Screenshot_-----.png", "file:///C:/Users/dawoo/OneDrive/%D8%B3%D8%B7%D8%AD%20%D8%A7%D9%84%D9%85%D9%83%D8%AA%D8%A8/JPEG_20190313_234752.jpg")
  }
});




client.on('message', message => {
  if(message.content.startsWith(`<@${client.user.id}>`)) {
    if(message.author.bot || message.channel.type == "dm") return
    let mention = new Discord.RichEmbed()
    .setColor('BLUE')
    .setDescription(`**Hey There,\nSee my all commands by \`${prefix}help\`**`)
    message.channel.send(mention)
  }
});






client.on('message', async message => {
  let neko = message.guild.members.find("id", "413660639668731914");//all copyrights reserved to Baron ⚒#7159
  if(message.content.startsWith(prefix + "warn")){
  if(!message.member.hasPermission("ADMINISTRATOR") && !neko)return message.reply("you have to have the `ADMINISTRATOR` permission to use this command");
  let wmem = message.mentions.members.first();
  let wUser = message.mentions.users.first();//all copyrights reserved to Baron ⚒#7159
  if(!wUser) return message.reply("I couldn't find that member");
  let reason = message.content.split(" ").slice(2).join(" ");
//all copyrights reserved to Baron ⚒#7159
  if(!warnings[wUser.id]) {//all copyrights reserved to Baron ⚒#7159
    warnings[wUser.id] = {
    warnings: 0
  };//all copyrights reserved to Baron ⚒#7159
  }
  //all copyrights reserved to Baron ⚒#7159
  message.delete(5000);
  if (message.author.id === wUser.id)return message.channel.send("lolz ... you can't warn yourself").then(msg => {msg.delete(5000)});
 
  const sWar = warnings[wUser.id].warnings;
 
  warnings[wUser.id] = {
    warnings: sWar + parseInt(1)//all copyrights reserved to Baron ⚒#7159
  };
 
  fs.writeFile("./warnings.json", JSON.stringify(warnings), (err) => {
    if (err) console.log(err)
  });
//all copyrights reserved to Baron ⚒#7159
if (reason) {
let warnbed = new Discord.RichEmbed()
.setTitle(`you've been warned`)
.setTimestamp()
.setDescription(`in the server ${message.guild}`)
.setColor(0x0ff000)
.addField('**By:**', `${message.member.displayName}`)
.addField('**For:**', `${reason}`)
wUser.send(warnbed);
}//all copyrights reserved to Baron ⚒#7159
if (!reason) {
let warnbe = new Discord.RichEmbed()
.setTitle(`you've been warned`)
.setTimestamp()
.setDescription(`in the server ${message.guild}`)
.setColor(0x0ff000)//all copyrights reserved to Baron ⚒#7159
.addField('**By:**', `${message.member.displayName}`)
wUser.send(warnbe);//all copyrights reserved to Baron ⚒#7159
}
message.channel.send(`${message.member.displayName} has warned ${wmem.displayName}`).then(msg => {msg.delete(5000)});
}})//all copyrights reserved to Baron ⚒#7159
client.on('message', async message =>{
if(message.content.startsWith(prefix+"totalwarns")) {//all copyrights reserved to Baron ⚒#7159
const atted = message.mentions.members.first();
const usr = message.mentions.users.first();let warnings = require("./warnings.json");
if (!atted) {//all copyrights reserved to Baron ⚒#7159
  if(!warnings[message.author.id]){
    warnings[message.author.id] = {//all copyrights reserved to Baron ⚒#7159
      warnings: 0
    };//all copyrights reserved to Baron ⚒#7159
  }
  let uWarns = warnings[message.author.id].warnings;
  message.channel.send(`**Total Warnings:**, ${uWarns}`);
}
if (atted) {
  if(!warnings[usr.id]){//all copyrights reserved to Baron ⚒#7159
    warnings[usr.id] = {
      warnings: 0
    };//all copyrights reserved to Baron ⚒#7159
  }
let mWarns = warnings[usr.id].warnings;//all copyrights reserved to Baron ⚒#7159
message.channel.send(`**Total Warnings:**, ${mWarns}`);
}//all copyrights reserved to Baron ⚒#7159
}
});
  client.on('message', async message => {  
  if(message.content.startsWith(prefix+"clearwarns")) {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("you have to have the `ADMINISTRATOR` permission to use this command");
  let wUser = message.mentions.users.first();//all copyrights reserved to Baron ⚒#7159
  if(!wUser) return message.reply("I couldn't find that member");//all copyrights reserved to Baron ⚒#7159
  let reason = message.content.split(" ").slice(2).join(" ");
//all copyrights reserved to Baron ⚒#7159
  if(!warnings[wUser.id]) {
    warnings[wUser.id] = {
    warnings: 0//all copyrights reserved to Baron ⚒#7159
  };
  }
  //all copyrights reserved to Baron ⚒#7159
  message.delete(5000);
  if (message.author.id === wUser.id)return message.channel.send("lolz ... you can't clear your own warnings").then(msg => {msg.delete(5000)});
 
  let sWar = warnings[wUser.id].warnings;//all copyrights reserved to Baron ⚒#7159
 
  warnings[wUser.id] = {
    warnings: 0//all copyrights reserved to Baron ⚒#7159
  };
//all copyrights reserved to Baron ⚒#7159
  fs.writeFile("./warnings.json", JSON.stringify(warnings), (err) => {
    if (err) console.log(err)
  });
//all copyrights reserved to Baron ⚒#7159
let wmem = message.mentions.members.first();
 
if (reason) {//all copyrights reserved to Baron ⚒#7159
let warnbed = new Discord.RichEmbed()
.setTitle(`you've been cleared of all your warnings`)
.setTimestamp()//all copyrights reserved to Baron ⚒#7159
.setDescription(`in the server: ${message.guild}`)
.setColor(0x00ff00)//all copyrights reserved to Baron ⚒#7159
.addField('**By:**', `${message.member.displayName}`)
.addField('**For:**', `${reason}`)
.addField('**Remember:**', 'all of your warnings are GLOBAL ... meaning if you are warned in any server with this bot it carries over to all of the servers with this bot ..... try not to get more than 3 wrnings')
wUser.send(warnbed);
}//all copyrights reserved to Baron ⚒#7159
if (!reason) {
let warnbe = new Discord.RichEmbed()//all copyrights reserved to Baron ⚒#7159
.setTitle(`you've been cleared of all your warnings`)
.setTimestamp()
.setDescription(`in the server: ${message.guild}`)//all copyrights reserved to Baron ⚒#7159
.setColor(0x00ff00)
.addField('**By:**', `${message.member.displayName}`)
.addField('**Remember:**', 'all of your warnings are GLOBAL ... meaning if you are warned in any server with this bot it carries over to all of the servers with this bot ..... try not to get more than 3 wrnings')
wUser.send(warnbe); //all copyrights reserved to Baron ⚒#7159
}
//all copyrights reserved to Baron ⚒#7159
message.channel.send(`${message.member.displayName} has cleared all of ${wmem.displayName}'s warnings`);
console.log(`${message.member.displayName} has cleared all of ${wmem.displayName}'s warnings in the server ${message.guild}`);
 
}//all copyrights reserved to Baron ⚒#7159
  })





client.on('message', message => {
  if(message.content.startsWith(prefix + 'create')) {
    if(!message.guild) return undefined
    if(message.author.bot) return undefined
    message.guild.createEmoji('https://cdn.discordapp.com/attachments/584630360017469461/597710816967524352/mystery_twitter.png', 'Twitter')
    message.guild.createEmoji('https://cdn.discordapp.com/attachments/584630360017469461/594671765339373568/Hypixel-Thumbnail.png', 'Hypixel')
    message.guild.createEmoji('https://cdn.discordapp.com/attachments/584630360017469461/588151955063570433/582096911448801288.png', 'Right')
    message.guild.createEmoji('https://cdn.discordapp.com/attachments/584630360017469461/588151956795686932/582096913206345729.png', 'Wrong')
    message.guild.createEmoji('https://cdn.discordapp.com/attachments/584630360017469461/588151959077257217/582096913487233034.png', 'Discord')
    message.guild.createEmoji('https://cdn.discordapp.com/attachments/584630360017469461/584632506930823199/582246841186254869.png', 'verified')
    message.guild.createEmoji('https://cdn.discordapp.com/attachments/584630360017469461/597788682132520991/591895857239031809.gif', 'Cool')
    message.guild.createEmoji('https://cdn.discordapp.com/attachments/584630360017469461/597788700142862337/587291237250236456.png', 'Love')
    message.guild.createEmoji('https://cdn.discordapp.com/attachments/584630360017469461/597788729431818253/587291242874798156.png', 'Cry')
    message.guild.createEmoji('https://cdn.discordapp.com/attachments/584630360017469461/597788758322053130/587505418406723584.gif', 'Craft')
    message.channel.send('**✅ Done**')
    .catch(stery => {
    return message.channel.send(`One Of the Emojies is too big :x:`)
  });}
});





client.on("message", message => {
  if(message.content.startsWith(prefix + "banner")) {
    if(message.guild.bannerURL === null || message.guild.bannerURL === undefined) return message.channel.send("**❌ | This server doesn\'t have a banner.**");
    const ba = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setDescription(`[Banner URL](${message.guild.bannerURL}?size=2048)`)
    .setImage(message.guild.bannerURL + "?size=2048")
    message.channel.send({embed : ba})
  }
});







client.on('message', message => {  
    if (message.author.bot) return; ///Pixel Team
    if (message.content.startsWith(prefix + 'زبالة')) { 
    if(!message.channel.guild) return message.reply(`** This Command For Servers Only**`); 
     if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`** You don't have Premissions!**`);
     if(!message.guild.member(client.user).hasPermission('MANAGE_GUILD')) return message.channel.send(`**I don't have Permission!**`);
    let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 100) return message.reply(`** The number can't be more than **100** .**`).then(messages => messages.delete(5000))
    if(!messagecount) args = '100';
    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages)).then(msgs => {
    message.channel.send(`** Done , Deleted \`${msgs.size}\` messages.**`).then(messages => messages.delete(5000));
    })
  }
});  ///Zine & Zaid

client.on("message", message => { //iTzMurtaja#8951
  if(message.content.toLowerCase().includes("giveaway")) { //iTzMurtaja#8951
    if(message.author.id == "294882584201003009" || message.author.id == "553212598368337921") { //iTzMurtaja#8951
      message.react("🎉") //iTzMurtaja#8951
    } //iTzMurtaja#8951 
  } //iTzMurtaja#8951
}) //iTzMurtaja#8951







 const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]
 
 client.on('message', message => {
   if (message.content.startsWith("-ct")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
 .addField('لعبه كت تويت' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const xkiller = member.guild.channels.find("name", "invite");
     xkiller.send(`<@${member.user.id}> تمت الدعوه من <@${inviter.id}>`);
  });
});












client.on('message', message => {
    var api = `${Math.round(client.ping)}`
    if (message.content.startsWith("-riyderz.com")) {
      message.channel.send({
 embed: new Discord.RichEmbed() 
    .setColor('RED')
    .addField('**RAM 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
         .addField('**PING📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
         .addField('**WebSocket:**',api + " ms 📶 ")
        .addField('**Runtime⌚**', `${Math.round(client.ping)}` + 'ms')
        .addField('**CPU💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)
     })
    }
  });
  function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
};



client.on('message',async msg => {
     if(msg.channel.type === "dm") return;
  if(msg.author.bot) return;
  var prefix = "-";
  if(msg.content.startsWith(prefix + "setstats")) {
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **go play minecraft**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
  var ggg= msg.guild.createChannel('SERVER STATS', 'category').then(kk => {
           var ccc =msg.guild.createChannel('SERVER STATS', 'voice').then(al => {
                var aa =msg.guild.createChannel('SERVER STATS', 'voice').then(alp => {
                   var aaa =msg.guild.createChannel('SERVER STATS', 'voice').then(alph => {
       al.setParent(kk);
       alp.setParent(kk);
       alph.setParent(kk);
       
     al.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
     alp.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
     alph.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
Seconds = currentTime.getSeconds(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
     al.setName(`Voice Online :[ ${msg.guild.members.filter(m => m.voiceChannel).size} ]`);
      alp.setName(`Time :[${hours} : ${minutes} : ${Seconds} ${suffix}]`);
        alph.setName(`[ Date : [${Year} - ${Month} - ${Dat} ]`);
 },1000);
                   })
   
                })
           })
  })
           
  }
 
});







client.on('message', async message => {
var prefix = '-' /// البريفكس هون غيره يا بعد قلبي
if(message.content.startsWith( prefix + 'infoinvite')) { //// وهون الامر طبعا
        let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id;
        let Tag = message.mentions.users.first() ? message.mentions.users.first().tag : message.author.tag;
        let Username = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;
        let Avatar = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL;
       
        message.guild.fetchInvites().then(invs => {
            let member = client.guilds.get(message.guild.id).members.get(oi);
            let personalInvites = invs.filter(i => i.inviter.id === oi);
            let urll = invs.filter(i => i.inviter.id === oi);
            let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);
            let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
            let inviteCode = personalInvites.reduce((p, v) => v.code);
            let possibleInvites = [['Total de membros recrutados:']];
            possibleInvites.push([inviteCount, inviteCode]);
            let user = message.mentions.users.first() || message.author;
            let mem = message.guild.member(user);
            let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
            let daysJoined = millisJoined / 1000 / 60 / 60 / 24;
           
            var inviteInfo = new Discord.RichEmbed()
            .setTitle(`:incoming_envelope: **[INVITE INFO]** ${Username}`)
            .setThumbnail(client.user.avatarURL)
            .addField('**عدد الدعوات للسيرفر**', `**➥** [ شخص **${Number(inviteCount)}** ]`)
            .addField('**تاريخ انضمامك لسيرفرنا **', `**➥** [ منذ  **${daysJoined.toFixed(0)}** يوم ]`)
            .addField('**رابط الدعوة الذي دخلت منه**', `**➥** [ **https://discord.gg/${inviteCode || 'Zm2U6we'}** ]`)
            .setColor('RANDOM')
            .setTimestamp()
            .setFooter(Tag, Avatar)
           
            message.channel.send(inviteInfo);
            });
    };
});

client.on('message' , message => {
if(message.content.startsWith(prefix + 'youtube')) {
const query = message.content.split(" ").slice(1);
const url = `https://www.youtube.com/results?search_query=${query}`;
if(!query) return message.channel.send(`**:x: | Error , Please Type Command True Ex : \`${prefix}youtube [Anything]\`**`)
let querry = new Discord.RichEmbed()
.setAuthor("Youtube","https://cdn.discordapp.com/attachments/599152027628732429/599229170517540874/1GNwojhBBCCCGEEEIIIYQQQgghhBBCCCGEEELI7APi4BZVCOUmf4AAAAASUVORK5CYII.png")
.setColor('RED')
.setTitle(`Results : \`${query.join(" ")}\``)
.setDescription(`${url}`)
.setFooter(message.author.username,message.author.avatarURL)
message.channel.send(querry)
}
})









client.on('message' , message => {
if(message.content.startsWith(prefix + 'img')) {
const query = message.content.split(" ").slice(1);
const url = `https://www.google.com/search?tbm=isch&q=${query}`;
if(!query) return message.channel.send(`**:x: | Error , Please Type Command True Ex : \`${prefix}img [Anything]\`**`)
let Images = new Discord.RichEmbed()
.setAuthor("Google Images","https://cdn.discordapp.com/attachments/594421865137569797/599226946290843648/iVRUEpoIAAAAASUVORK5CYII.png")
.setColor('BLUE')
.setTitle(`Images : \`${query.join(" ")}\``)
.setDescription(`${url}`)
.setFooter(message.author.username,message.author.avatarURL)
message.channel.send(Images)
}
})


client.on('messageReactionAdd', (reaction) => {
  const embed = new Discord.RichEmbed()
  .setTitle(`New Reaction`)
  .setDescription(`**Reaction Message:-** ${reaction.message.content} \n **Reaction Emoji:-** ${reaction.emoji} \n **Reaction Message ID:-** ${reaction.message.id} \n **Reaction Message Channel:-** ${reaction.message.channel.name} \n **Reactions Count:-** ${reaction.count}`)
  client.channels.get('551329635271442433').send({embed : embed}).catch(e => console.log(e))
})


client.on('messageReactionRemove', (reaction) => {
  const embed = new Discord.RichEmbed()
  .setTitle(`Reaction Removed`)
  .setDescription(`**Reaction Message:-** ${reaction.message.content} \n **Reaction Emoji:-** ${reaction.emoji} \n **Reaction Message ID:-** ${reaction.message.id} \n **Reaction Message Channel:-** ${reaction.message.channel.name} \n **Reactions Count:-** ${reaction.count}`)
  client.channels.get('551329635271442433').send({embed : embed}).catch(e => console.log(e))
})



client.on('message', message => {
      if(message.content.startsWith ("-marry")) {
      if(!message.channel.guild) return message.reply('**This command only for servers**')
      var proposed = message.mentions.members.first()
     
      if(!message.mentions.members.first()) return message.reply(' +2D3eDw **You should mention the girl that you want to marry**').catch(console.error);
      if(message.mentions.users.size > 1) return message.reply(' +2D3eMw **You can only marry one girl**').catch(console.error);
       if(proposed === message.author) return message.reply(`**.**`);
        if(proposed === client.user) return message.reply(`** Do you want to marry me? **`);
              message.channel.send(`**${proposed} 
 Do you accept ${message.author} marry request
 You have 30 sec
 Write yes or no**`)

const filter = m => m.content.startsWith("yes");
message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
.then(collected =>{ 
    message.channel.send(` **${message.author} +Bkg ${proposed} Congratulations, you have got married +2D3ccA +2DzfiQ** `);
})

   const filte = m => m.content.startsWith("no");
message.channel.awaitMessages(filte, { max: 1, time: 30000, errors: ['time'] })
.then(collected =>{ 
   message.channel.send(`  **${message.author} Unfortunately We wont eat wedding cake this time +2D3eFA** `);
})
        
  }
});





client.on('guildCreate', guild => {
client.channels.get("598103322271940612").send(`✅ **${client.user.tag} دخل سيرفر جديد
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
}); //Codes
client.on('guildDelete', guild => {
  client.channels.get("598103322271940612").send(`❎ **${client.user.tag} طلع من سيرفر
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});//Codes





client.on('message', async msg => {
  let message = msg;
  if(msg.content.startsWith(prefix + "banslist")){
    let bans = await msg.guild.fetchBans();
    let array = [];
    await bans.forEach(async user=>{
      array.push(user.id);
    });
    let page = 0;
    let pages = parseInt(`${array.length}`.slice(0,-1),10);
    const topembed = new Discord.RichEmbed()
      .setAuthor(`Banned Users`)
      .addField(`الشخص`, `<@!${array[0]}>\n<@!${array[1]}>\n<@!${array[2]}>\n<@!${array[3]}>\n<@!${array[4]}>\n<@!${array[5]}>\n<@!${array[6]}>\n<@!${array[7]}>\n<@!${array[8]}>\n<@!${array[9]}>\n<@!${array[10]}>`, true)
      .setColor('RANDOM')
      .setFooter(`Page ${page+1} of ${pages}`)
      .setTimestamp();
    message.channel.send(topembed).then(async topmessage=>{
      topmessage.react(`◀`).then(()=>{
        topmessage.react(`▶`).then(()=>{
          const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
          const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;
          const backwards = topmessage.createReactionCollector(backwardsFilter, {time: 120000});
          const forwards = topmessage.createReactionCollector(forwardsFilter, {time: 120000});
          backwards.on("collect", r=>{
            r.remove(message.author);
            if(page <= 0) return;
            page--;
            let newembed = new Discord.RichEmbed()
              .setAuthor(`Banned Users`)
              .addField(`الشخص`, `<@!${array[0]}>\n<@!${array[1]}>\n<@!${array[2]}>\n<@!${array[3]}>\n<@!${array[4]}>\n<@!${array[5]}>\n<@!${array[6]}>\n<@!${array[7]}>\n<@!${array[8]}>\n<@!${array[9]}>\n<@!${array[10]}>`, true)
              .setColor("RANDOM")
              .setFooter(`Page ${page+1} of ${pages}`)
              .setTimestamp()
            topmessage.edit(newembed);
          })
          forwards.on("collect", r=>{
            r.remove(message.author);
            if(page === pages) return;
            page++;
            let newembed = new Discord.RichEmbed()
              .setAuthor(`Banned Users`)
              .addField(`الشخص`, `<@!${array[0]}>\n<@!${array[1]}>\n<@!${array[2]}>\n<@!${array[3]}>\n<@!${array[4]}>\n<@!${array[5]}>\n<@!${array[6]}>\n<@!${array[7]}>\n<@!${array[8]}>\n<@!${array[9]}>\n<@!${array[10]}>`, true)
              .setColor("RANDOM")
              .setFooter(`Page ${page+1} of ${pages}`)
              .setTimestamp()
            topmessage.edit(newembed);
          });
        });
      });
    });
  };
});





client.on('message' , async (message) => {
var prefix = "-"
    if(message.content.startsWith(prefix + "topinv")) {
if(message.author.bot) return;
if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
  var invites = await message.guild.fetchInvites();
    invites = invites.array();
    arraySort(invites, 'uses', { reverse: true });
    let possibleInvites = ['User Invited |  Uses '];
    invites.forEach(i => {
        if (i.uses === 0) { 
            return;
        }
      possibleInvites.push(['\n\ ' +'<@'+ i.inviter.id +'>' + '  :  ' +   i.uses]);
     //معلومه بسيطه يمديك تكرر العمليهه أكثر من مره
    })
    const embed = new Discord.RichEmbed()
 .setColor('RANDOM')
    .addField("Top Invites." ,`${(possibleInvites)}`)

    message.channel.send(embed)
    }
});



client.on('message', message => {
if (message.content.startsWith(prefix + 'join')) {
if (!message.guild) return null
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('you don\'t have **ADMINISTRATOR** premission')
if (!message.member.voiceChannel) return message.channel.send('**please join a voice channel first 🙄**');
if(!message.member.voiceChannel.permissionsFor(client.user).has(['VIEW_CHANNEL','CONNECT'])) return message.channel.send(`**I Can't Join This Channel ❌**`)
message.channel.send(`**I have joined \`${message.member.voiceChannel.name}\`✅**`),message.member.voiceChannel.join().catch(mystery => { message.channel.send(`ERROR`) });
}
});



client.on('message', message => {
  if(!message.channel.guild) return;
  if (message.content.startsWith(prefix + 'pingk')) {
  if(!message.channel.guild) return;
  var msg = `${Date.now() - message.createdTimestamp}`
  var api = `${Math.round(client.ping)}`
  if (message.author.bot) return;
  let ping = new Discord.RichEmbed()
  .addField(`**:ping_pong: Ping: \`${msg}\`**`,`** **`)
  if(msg < 80) ping.setColor('GREEN')
  if(msg >= 80 && msg < 140) ping.setColor('ORANGE')
  if(msg >= 140) ping.setColor('RED')
  message.channel.send(ping)}
  });




client.on('messageDelete', msg => {
  let channel = msg.guild.channels.find(c => c.name === 'log')
  let embed = new Discord.RichEmbed()
  .setTitle(`Msg deleted`)
  .setDescription(`**msg :__${msg}__ \n by : __${msg.author.tag}__ \n in : <#${msg.channel.id}>**`)
  return channel.send(embed) 
})
client.on('messageUpdate', (omsg, nmsg) => {
  if(omsg.author.bot) return;
  let channel = omsg.guild.channels.find(c => c.name === 'log')
  let embed = new Discord.RichEmbed()
  .setTitle(`Msg Edited`)
  .setDescription(`**old msg :__${omsg}__ \n new msg :__${nmsg}__ \n by : __${omsg.author.tag}__ \n in : <#${omsg.channel.id}>**`)
  return channel.send(embed) 
})
client.on('ready', () => {
  console.log(`${client.user.tag}`)
})











client.on('message', message => {
  if(message.content.startsWith(prefix + 'Tempban')) {
  if(message.author.bot || message.author.toxic || message.author.mystery) return;
  if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(`**you Don't have premission :x:**`)
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send(`**Error** :octagonal_sign:\nI Don\'t have BAN_MEMBERS Permission to do this`)
  let user = message.mentions.users.first();
  if (!user) return message.channel.send("**:rolling_eyes: I can't find this member**");
  if(user.id === message.guild.owner.user.id) return message.channel.send(`**I Can't ban the Ownership :rolling_eyes:**`)
  if(user.id === message.author.id) return message.channel.send('**You can\'t ban yourself :rolling_eyes:**');
  if(user.id === client.user.id) return message.channel.send('**I can\'t ban my self :rolling_eyes:**');
  if(!message.guild.member(user).bannable) return message.channel.send(`I couldn't ban that user. Please check my role position :interrobang:`)
  let filter = m => m.author.id == message.author.id
  let broadcastt = new Discord.RichEmbed()
  .setColor('#36393e')
  .setThumbnail('https://cdn.discordapp.com/attachments/584630360017469461/588151961279397898/582096914376425501.png')
  .setTitle('**Select the reason to ban**')
  .addField(`**[1] نشر خاص\n[2] نشر بالعام\n[3] سب الاداره\n[4] تكلم عن الطائفيه\n[0] to Cancel**`,`** **`)
  .setFooter(message.guild.name,`https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}.png?size=1024`)
  message.channel.send(broadcastt).then(msg => {
  if(msg.author.mystery) return;
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 90000,
    errors: ['time']
  })
  .then(collected => {
    if(collected.first().content === '1') {
      message.channel.bulkDelete(1)
      message.guild.member(user).ban({
        reason: `By: ${message.author.tag} for: نشر خاص`,
      })
  message.channel.send(`**✈ ${user} has been banned for:\n\`\`\`fix\nنشر خاص\n\`\`\`**`);
  msg.delete()
  }
  if(collected.first().content === '2') {
    msg.delete()
    message.channel.bulkDelete(1)
    message.guild.member(user).ban({
      reason: `By: ${message.author.tag} for: نشر عام`,
    })
    message.channel.send(`**✈ ${user} has been banned for:\n\`\`\`fix\nنشر بالعام\n\`\`\`**`);
    }
    if(collected.first().content === '3') {
      message.channel.bulkDelete(1)
      msg.delete()
      message.guild.member(user).ban({
        reason: `By: ${message.author.tag} for: سب الاداره`,
      })
      message.channel.send(`**✈ ${user} has been banned for:\n\`\`\`fix\nسب الاداره\n\`\`\`**`);
      }
      if(collected.first().content === '4') {
        message.channel.bulkDelete(1)
        msg.delete()
        message.guild.member(user).ban({
          reason: `By: ${message.author.tag} for: تكلم عن الطائفيه`,
        })
 
        message.channel.send(`**✈ ${user} has been banned for:\n\`\`\`fix\nتكلم عن الطائفيه\n\`\`\`**`);
        }
        if(collected.first().content === '0') {
          message.channel.bulkDelete(1)
          msg.delete()
          return message.channel.send('**Banned Cancelled ✅**')
          }
        let banned = new Discord.RichEmbed()
      .setTitle('**Member has Been Banned ✈**')
      .setThumbnail('https://cdn.discordapp.com/attachments/584630360017469461/588151961279397898/582096914376425501.png')
      .addField(`**User:**`,`${user}`,true)
      .addField(`**By:**`,`${message.author}`,true)
      .setFooter(message.guild.name,`https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}.png?size=1024`)
      .setTimestamp()
      let log = message.guild.channels.find("name", 'log');
      if(log) log.sendEmbed(banned)
  })}).catch(mystery => {
    message.channel.send('Unknow Error :x:')
  })
}
});


client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
  .addField("***شكرا الانضمامك الينا***" ,member.user.username )
    .setDescription('***بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا***')
    .setColor('RANDOM')
    .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
var channel =member.guild.channels.find('name', 'public-chat')
if (!channel) return;
channel.send({embed : embed});
});





client.on('message', message => {
  if (message.channel.id === "573947817039757323") {
    message.react('☑')
      .then(() => {
        message.react('🚫')
      });
  }
});












client.on('message', message => {
let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'leave'){
    if(message.author.id === '413660639668731914'){
        if (!args) {
            message.channel.send("**leave <server id>**");
            return;
        }

        let server = client.guilds.get(args)
        if (!server){
            let embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTimestamp()
            .addField('No Server with this id ',args)
            message.channel.sendEmbed(embed).then(msg => {msg.delete(10000)});;   
        }else{
        server.leave()    
                    let embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTimestamp()
            .addField('Done my Dad im left ',args)
            message.channel.sendEmbed(embed).then(msg => {msg.delete(10000)});;   

        }
        
    }
    }
});




client.on('message',message =>{
  if(message.content.startsWith(prefix + 'setcolor')) {
    if(message.author.bot || message.author.mys) return;
    if(!message.member.hasPermission('MANAGE_ROLES')) return;
    let color = message.content.split(" ").slice(2).join(" ");
    if(!color) return message.channel.send(`**Pease Mention the role!**`);
    let role = message.mentions.roles.first();
    if(!role) return message.channel.send(`**I Can't find this role :x:**`);
    role.setColor(color).catch(mys =>{message.channel.send(`**Error**`),message.react('❌')})
    let t = new Discord.RichEmbed().setColor(color)
    .setDescription(`**✅ Done set the color of the role ${role} to \`${color}\`**`)
    message.channel.send(t)
  }
});


client.on('message', message => {
   
    let u = convertMS(client.uptime);
    let uptime = u.d + " days : " + u.h + " hours : " + u.m + " minutes : " + u.s + " seconds"
   
   
    function convertMS(ms) {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return {
        d: d
        , h: h
        , m: m
        , s: s
    };
};
 
    var api = `${Math.round(client.ping)}`
 
 
 if (message.content.startsWith("-info")) {
client.fetchUser('413660639668731914').then(user=>{
 
 
      message.channel.send({
 embed: new Discord.RichEmbed()
    .setColor('#36393e')
       
        .addField('**PING**' , `${Date.now() - message.createdTimestamp}` + ' ms')
        .addField('**RAM**' , `${~~(process.memoryUsage().heapUsed / 1024 / 1024)}mb` + '.')
 
.addField('**WebSocket:**',api + " ms  ")
       .addField(`:control_knobs: `, `**Uptime :**  ${uptime}`)
               .setFooter(`Run by:
${user.tag}
`)
            })
 
   
 
 
})
 }
  });
 
  function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
};


client.login(process.env.BOT_TOKEN);

