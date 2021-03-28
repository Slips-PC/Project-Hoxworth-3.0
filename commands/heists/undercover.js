const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "UNDERCOVER\n\n",
  "color": 4886754,
  "url": "https://fbi.overkillsoftware.com/img/heistinfo/man.jpg",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://cdn.discordapp.com/embed/avatars/0.png"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "We were just about to arrest the crooked taxman, Adrian Sturr, when the PAYDAY gang intervened, opening fire at our officers on the scene. Our men could do nothing but watch as the vehicle Mr. Sturr was hiding in was lifted up in the air by usage of a crane, and dropped on an abandoned building across the street. SWAT was called in to storm the building, but the PAYDAY gang managed to hold them off long enough to get what they wanted. When our men finally managed to secure the building, Mr. Sturr was found barely breathing. The server was gone, and the monitor in the room showed that a large transaction of 25 million had been transferred to an untraceable account.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "How the hell could the PAYDAY gang know this deal was going down? What kind of sources do they actually have? I shouldn't be surprised by the beating they gave Mr.Sturr, but that was brutal even for them. I need to find out how corrupt this city really is, because I can't get shit done working under these circumstances."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "undercover",
    desc: "UC",

}
