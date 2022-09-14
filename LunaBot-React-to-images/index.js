// Keep the bot alive
const express = require ('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Server is up!'));

app.listen(port, () => console.log('Example app listening at http://localhost:${port}'));
'use strict';



const Discord = require ("discord.js");
const fs = require('fs');
const lunaBot = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES"
  ]
});
const config = process.env

function writeStringData(strData){
  // write to lunaFile
  try {
      fs.exists('./lunaFile', function(isExist){
        if(isExist) {
          fs.appendFile('lunaFile', '\n' + strData, function(err){
            if(err) throw(err);
            console.log("FILE EXISTS");
          });
        } else {
          fs.writeFile('lunaFile', strData, function(err){
            if(err) throw(err);
            console.log("FILE DOES NOT EXIST");
          });
        }
      });
    }catch(err)
    {
      console.error(err);
    }
}


lunaBot.on("ready", () => {
  // create lunaFile when the bot runs if it doesnt exist
  writeStringData("HI");
  console.log(lunaBot.user.username + ' is online.')
});

lunaBot.login(config.TOKEN)

// -------------------------------------COMMANDS-------------------------------------------------
const prefix = "%";

// React to images in channel
lunaBot.on('message', async message => {
  const {extname} = require('path');

  if (message.channel.id === '631173919075860491') {
    if (message.attachments.some(attachment => {
      // extname returns '.png', '.jpg' etc so we need to remove the dot at the start
      const extension = extname(attachment.name).slice(1);
      return ['png', 'jpg', 'jpeg', 'gif', 'mov', 'mp4'].includes(extension);
    })) {
      message.react('⭐');
    } else if(message.content.includes(".png") || message.content.includes(".jpg") || message.content.includes(".jpeg") || message.content.includes(".mp4") || message.content.includes(".gif") || message.content.includes(".mov") || message.content.includes("twitter") || message.content.includes("deviantart") || message.content.includes("instagram") || message.content.includes("artstation")) {
      message.react('⭐');
    }
  }
});

// NON COMMANDS
lunaBot.on("message", msg => {
  const {extname} = require('path');

  if(msg.author.bot){
    return;
  } else {
      
      if (msg.content.toLowerCase() === "ping" || msg.content.toLowerCase() === "pinged") {
        msg.channel.send("Ping? What is this? It sounds like something loud!");
      } else if (msg.content.toLowerCase().includes("picture")) {

        let resOptions = ["Picture...? WHERE?! I want it! Give me the picture for my collection!", "Picture? (✯◡✯)", "WHERE?!", "Another picture for my collection? (✯◡✯)", "PICTURE?? You have my attention!!", "A picture? For ME?! It's for me right?? (⁀ᗢ⁀)", "Where is the picture??????? I WANT IT."];
        let randResponse = resOptions[Math.floor(Math.random() * resOptions.length)];


        msg.channel.send(randResponse);
      } else if (msg.content.toLowerCase() === "art") {
        msg.channel.send("I like art, it's like a picture but made by a human!");
      } else if (msg.content.toLowerCase() === "oof") {
        msg.channel.send("Ouch! Owie!");
      } else if (msg.content.toLowerCase() === "hey luna" || msg.content.toLowerCase() === "luna") {
        msg.channel.send("Hello, its nice to meet you! 👋");
      }

      // Mention commands
      if (msg.content.includes("@here") || msg.content.includes("@everyone"))
      {
        msg.channel.send("GKK?! LOUD! LOUD!! ((╬◣﹏◢))");
      } else if (msg.mentions.has(lunaBot.user.id) && msg.content.toLowerCase().includes("hello")) {
        msg.channel.send("Hi. (=⌒‿‿⌒=)");
      } else if (msg.mentions.has(lunaBot.user.id) && msg.content.toLowerCase().includes ("how old are you?")) {
        msg.channel.send("I lost count after 1024 years... (*/_＼)");
      } else if (msg.mentions.has(lunaBot.user.id) && (msg.content.toLowerCase().includes("bitch") || msg.content.toLowerCase().includes("fuck") || msg.content.toLowerCase().includes("hate") || msg.content.toLowerCase().includes("hoe") || msg.content.toLowerCase().includes("whore"))) {
        msg.channel.send("sorry (｡•́︿•̀｡)");
      } else if((msg.channel.id != '631173919075860491') && (msg.mentions.has(lunaBot.user.id)) && (msg.attachments.size > 0 || msg.content.includes("http"))) {
        console.log("she can see picture");
        if ((msg.attachments.some(attachment => {
      // extname returns '.png', '.jpg' etc so we need to remove the dot at the start
      const extension = extname(attachment.name).slice(1);
      return ['png', 'jpg', 'jpeg', 'gif', 'mov', 'mp4'].includes(extension);
    })) || ((msg.content.includes(".png") || msg.content.includes(".jpg") || msg.content.includes(".jpeg") || msg.content.includes(".mp4") || msg.content.includes(".gif") || msg.content.includes(".mov") || msg.content.includes("twitter") || msg.content.includes("deviantart") || msg.content.includes("instagram") || msg.content.includes("artstation")))) {

          let resOptions = ["OOOOO! A pretty picture! THANK YOU! (✯◡✯)", "Another picture for my collection! (✯◡✯)", "This picture perfectly captures a part of the world!", "UWAAAAAAAAAAAA! P I C T U R E ! ! ! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", "My collection is increasing! ♡( ◡‿◡ )", "OOOH!", "UWAAAAA! (✯◡✯)", "A picture really is worth more than a thousand words!"];
        let randResponse = resOptions[Math.floor(Math.random() * resOptions.length)]

        msg.react('❤️');
        msg.reply(randResponse);

        }
        

      } else if (msg.mentions.has(lunaBot.user.id)) {

        let resOptions = ["GKK?! LOUD! LOUD!! ((╬◣﹏◢))", "I don't like this loud boop**BOOP** noise! (×﹏×)", "What?! Do you have a picture to show me? (⊙_⊙)", "You summoned me, but you didn't want me to do anything (•ิ_•ิ)?", "You are wasting my time.", "If it's not a picture, then I don't care! ┐(￣ヮ￣)┌", "▓▒░(°◡°)░▒▓", "Would you really do that? Go on the internet and waste everyone's time?", "If Mr. Rogers was your neighbor, he would move.", "STOP PINGING ME!!! ((╬◣﹏◢))", "It is impossible to underestimate you.", "How about you be useful and tag me with a picture instead. ( ╥ω╥ )", "I wish we were in heaven so I could throw you to hell.", "I'm looking for pictures, can you show me one? (✯◡✯)", "Hey! ヽ(*・ω・)ﾉ", "Hello!", "Hi!! ╰(*´︶`*)╯"];
        let randResponse = resOptions[Math.floor(Math.random() * resOptions.length)];

        msg.channel.send(randResponse);
      }

  }
});

lunaBot.on("message", message => {

  // if its another bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  // exit and stop if its not there
  if (!message.content.startsWith(prefix)) return;

  // hello command
  if (message.content.startsWith(`${prefix}hello`) || message.content.startsWith(`${prefix}hi`)) {
    message.reply("Hello stranger!");
  }

  // setup an image channel
  if (message.content.startsWith(`${prefix}setupChannel`)) {
    var channelID = message.content.replace(/\D/g,'');
    message.reply("Ooh! does <\#" + channelID + "> have cool pictures I can look at???");
  }

  //about command
  if (message.content.startsWith(`${prefix}about`)) {
    message.reply("Hi, my name is Luna! I like looking at pretty pictures! If I find any that I like then I'll give it a star! Though I'm at the mercy of the server owners on where I can look... If it was up to me I would look everywhere. TvT");
  }

  // add a channel to search for images in
  if (message.content.startsWith(`${prefix}addImgChannel`)) {
    var channelID = message.content.replace(/\D/g,'');
    if(channelID === null || channelID === ''){
      message.reply("Huh? But you didn't give me a channel name. Try again, but this time type the channel name!");
    } else {
      writeStringData(channelID);

      if(message.member.roles.cache.has('631011269062819841'))
      {
        message.reply("UuuAAAA! ^v^ \n\nThank you for letting me peek in <#" +channelID+"> for some cool pictures! I'll be sure to let everyone know I love them by reacting to each one <3");
      } else {
        return message.channel.send("Sorry, but I'm not allowed to listen to you.");
      }
    }
  }
  
  // remove a channel to search for images in

});