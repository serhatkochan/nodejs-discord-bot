const { Client, Intents, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
//const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILDS] });
const client = new Client({intents: Object.values(Intents.FLAGS).reduce((p, c) => p + c, 0)});
const config = require("./config.json");
const pagination = require("discordjs-button-pagination");


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on("messageCreate", message=>{

  if(message.author.id == client.user.id){
    return ;
  }

  var inMessage = message.content.toLocaleLowerCase();

  var embedMessage = new MessageEmbed()
  .setColor("YELLOW")
  .setDescription("as " + message.author.username);

  var komutlar = new MessageEmbed()
  .setTitle("Komutlar")
  .setColor("RED")
  .setDescription("test \n test2");

  

  if(inMessage === "selam" || inMessage === "sa"){
    return message.channel.send({
      content: "as" + message.author.username,
      embeds: [embedMessage]});
  }
  if(inMessage === "-help"){
    const embed = new MessageEmbed()
    .setTitle("1.sayfa");
    const embed2 = new MessageEmbed()
    .setTitle("2.sayfa");
    const embed3 = new MessageEmbed()
    .setTitle("3.sayfa");

    const btnPrevious = new MessageButton()
    .setCustomId("btnPrevious")
    .setStyle("SECONDARY")
    .setLabel("geri");
    const btnNext = new MessageButton()
    .setCustomId("btnNext")
    .setStyle("SECONDARY")
    .setLabel("ileri");

    pagination(message, [embed, embed2, embed3], [btnPrevious, btnNext], 30000);

  }
});

client.login(config.token);