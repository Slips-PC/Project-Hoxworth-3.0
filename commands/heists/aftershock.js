const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "AFTERSHOCK\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Aftershock",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/aftershock.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "Shortly after the recent quake that devastated much of southern California, two shipping trucks, left stranded on the freeway, were robbed. The trucks belonged to a Seattle-San Francisco-Los Angeles shipping company called Kowalski & Hutch. They claimed their client was a Russian businessman, but before investigators could get more details the offices were burned down and all records destroyed.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "Of all places to appear, we could never have predicted the appearance of the Payday gang in LA, but there those bastards were. Seems to be a straightforward hit on a couple of trucks, though what could be so precious that it would get Bain’s crew all the way out to the West Coast."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "aftershock",
    desc: "AS",

}
