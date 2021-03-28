const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "RESERVOIR DOGS\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Reservoir_Dogs",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/rvd.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": There are many crime families in the United States and the Cabots are among the more notable, having been active for several decades. In order to obfuscate their activities and members, they adopt the practice of using color-coded monikers and a standard \“uniform\" consisting of a black suit and tie which, while it does make them stand out in a crowd, also makes it more difficult to gauge how many there are and single out specific individuals during a chaotic situation. They have nevertheless been adept at keeping a closed lid on their organization save for a few rare occasions. One of their specialties is known to be the theft and distribution of gemstones, which evidently made the Payday gang an ideal partner during a December 14, 2017 heist on a jewelry merchant in Los Angeles. The incident is still, at the time of this writing, being investigated by the local branch, which was in some fashion made aware of the heist beforehand, and thus could ensure that it did not unfold according to plan. (The L.A. office was not however, able to prevent the blood-bath that ensued.) Reportedly, an unknown number of surviving criminals (several of which bore Payday gang masks) evaded capture in vehicles and on foot with an undetermined number of gems. Also, as has recently been established, the heist coincided with an assault at a location in Washington D.C. that is suspected to have been important to the Payday gang.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "L.A. office slow in responding to queries. Have yet to adequately explain how they knew precise details of the attack before it happened. Can find no official record of a tip- anonymous or otherwise. \“Exhaustive\" investigations undertaken by L.A. office have yielded little tangible. Not one single arrest."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "reservoir-dogs",
    desc: "RD",

}
