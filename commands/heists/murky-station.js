const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "MURKY STATION\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Murky_Station",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://cdn.discordapp.com/embed/avatars/0.png"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "A lot is still unknown to our police department when it comes to Murkywater, but we do know that they are very serious about the business they are conducting. Having a hidden train yard where they can operate freely is no simple task, but the mercenaries still manage to do it, and every time we catch up to them they have moved their operations before we can make any arrests.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "We are well aware that Murkywater have operations all over the world, including these hidden train yards right here in the US where they can transport their goods in secrecy. This is not the first time the PAYDAY gang has meddled in the affairs of the mercenary organization, and it sure as hell won't be the last."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "murky-station",
    desc: "MS",

}
