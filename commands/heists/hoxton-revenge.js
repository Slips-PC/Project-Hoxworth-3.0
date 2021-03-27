const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "HOXTON REVENGE\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Hoxton_Revenge",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/hoxrev.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "This incident regrettably occurred at one of the Bureau’s most secluded safe houses. Despite the level of security, the Payday gang was able to get through to the secured asset - a South American drug baron turned informant called Hector Morales - and eliminate him.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "A real black mark on the history of the Bureau. The best security we could provide, and the clowns went right through it. And the dead rat? Well, he was one of the few that might have delivered Bain to us. We lost a shot at a clean prosecution, but no-one will cry over the corpse of Hector Morales."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "hoxton-revenge",
    desc: "HXRE",

}
