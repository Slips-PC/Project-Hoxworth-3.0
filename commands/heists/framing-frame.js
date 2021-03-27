const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "FRAMING FRAME\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Framing-Frame",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/framingframe.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "The Capitol Art Gallery reported the burglary of several paintings from an exhibition of new Singaporean artists. Questioning the usual fencers dealing in such art drew a blank, but these paintings were later found in the apartment of a well-respected Senator.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "This has dirty political fingerprints all over it, and shows just how connected Bain and Crime.Net has become. Hard to say who benefited the most from this. The fallout saw a shake-up that had Capitol Hill playing musical chairs. I’m sure one of those senators, congressmen, governors made good on this. I suspect this was the work of the Payday gang, which shows they have the brains to hatch a political scandal unseen since Watergate."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "framing-frame",
    desc: "FF",

}
