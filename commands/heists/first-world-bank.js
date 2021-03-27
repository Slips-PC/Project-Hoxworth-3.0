const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "FIRST WORLD BANK\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/First_World_Bank",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/fwb.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "Conducted early in the morning, this bank job carries all the hallmarks of a classic job by the Payday gang. Forcing their way through to the rear area, the gang used thermite to melt their way down to the vault interior. As police forces gathered outside the front, the gang used C4 explosives to blast through to the neighboring office, and made their escape before local commanders knew the heist was over. Inside help is suspected and we are currently investigating the backgrounds of the staff for likely collaborators.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "Why the hell weren’t we watching this one? Jesus Christ, one of the biggest banks in the DC area - of course they were going to hit it. And that escape….just shows how rigid the thinking of our commanders is. Might be time to clear the decks there. Bain really caught us with our pants down, and gave us a spanking we deserved for it."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "first-world-bank",
    desc: "FWB",

}
