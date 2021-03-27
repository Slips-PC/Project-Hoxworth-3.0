const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "RATS\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Rats",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/rats.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "A number of high-ranking Mendoza cartel members were assassinated while being escorted out of the country under armed guard. These South Americans had cooperated with our field agents, and a deal had been worked out that would see their safe passage in exchange for information on the Sinaloan cartel. It is possible that this assassination was also linked to two other incidents - a meth-operation in a forest shack, and a shoot-out in a neighborhood ruled by The Cobras gang.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "Another war between the cartels. These things get bloody, fast, and, even though they’re shooting at each other, we have to practice zero tolerance. The Mendoza’s were almost in bed with the Bureau too. The failure to protect them not only means we lost a valuable contact, we’re also going to find it harder to convince any other rats in the future."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "Rats",
    desc: "R",

}
