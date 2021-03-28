const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "BROOKLYN 10-10\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Brooklyn_10-10",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/spa.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "A back street in Brooklyn, New York, was the scene of a major firefight between criminal elements. Local law enforcement were powerless to stop it. Nothing like it has been seen in the city for years.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "Witnesses reported heavily armed individuals in clown masks on the scene. It sounds very much like been the Payday Gang. It’s still unclear what they were doing there, since there was no robbery committed."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "brooklyn-10-10",
    desc: "B1010",

}
