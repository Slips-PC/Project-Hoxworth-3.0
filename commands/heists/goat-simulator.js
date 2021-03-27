const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "GOAT SIMULATOR\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Goat_Simulator",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/peta.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "Our officers arriving at the scene were shocked by the chaos that met them. The Payday gang was in a full-blown shootout with the Honduran cartel, with several goats running amok all over the neighborhood. Upon examining one of those goats retrieved from the scene, we found a package of cocaine inserted rectally in the animal.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "These damned criminals are willing to do anything nowadays - smuggling coke using Goats? Anyhow, this is not like the Clowns. It was sloppy and poorly executed. Even though they got away with a big fortune, it doesn't fit their usual MO. Someone else was behind this. Someone with power and influence. The Russian guy we found hiding in a dumpster still hasn't given anything up yet, but we'll break him sooner or later."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "goat-simulator",
    desc: "GS",

}
