const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "DALLAS\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Dallas",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/clowncase/russian.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "If this one isn’t actually the leader, he’s definitely the trusted lieutenant. Dallas is one of the original four that emerged in 2011. He appears to be the Mastermind of the gang, and his calm demeanor under fire suggests both great experience and cunning intelligence.\n\nSecurity footage notes his hair is greying, possibly indicating he is one of the oldest members of the gang.\n\nHis smiling clown mask with the American pattern has become the face for the Payday gang."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "dallas",
    desc: "medicbagpog",

}