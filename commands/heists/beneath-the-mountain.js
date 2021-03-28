const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "BENEATH THE MOUNTAIN\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Beneath_the_Mountain",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/beneathmountain.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "Occasional government contractor Murkywater has recently bought up several old military properties, in the US and abroad. One of those is known as the Black Ridge facility. Formerly an Air Force bunker, Black Ridge now operates as a command center for Murkywater. It is well defended by their own special operatives and several of their operations are coordinated from there. The facility also provides training, intelligence and human resources.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "We highly suspect this incident involved an inside man. Black Ridge is off the grid, much like Groom Lake, and highly classified. There is no way it would fall on the radar of a simple gang of clown-masked robbers. We do however, have certain intel that suggests Murkywater has taken some interest in Bain and his crew. This report has been corrected for clarification, and to rectify several clerical errors."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "beneath-the-mountain",
    desc: "BTH",

}
