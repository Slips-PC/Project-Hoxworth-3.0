const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "HELL'S ISLAND\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Hell's_Island",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/bph.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "We have received a report by locals of suspected gunfire in an old abandoned prison owned by Murkywater on the west coast. Eyewitness reports report several helicopters in the area. However, none of this has been confirmed by local authorities, which makes further investigation difficult.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "Not sure what to make of this. Murkywater has a lot of facilities they don’t openly admit to owning. Did this involve Bain somehow?"
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "hell's-island",
    desc: "HI",

}
