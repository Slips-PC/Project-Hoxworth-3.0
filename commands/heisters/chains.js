const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "CHAINS\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Chains",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/clowncase/spanish.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "We regard this one as the Enforcer in the gang. He tends to bring the biggest gun and a lot of ammo to feed it. Breaking down his movement, style and technique, it is obvious that \"Chains\" is ex-military. It is likely he was special forces, and, based on overheard conversation, possibly even a former Navy SEAL.\n\n\"Chains\" appears to have a daredevil personality, and a strong conviction that he cannot be hurt or killed.\n\nRecently, we know that \"Chains\" was taking refuge in a Swedish safehouse. It was believed that he had been killed when Swedish police raided the safehouse, but \"Chains\" has since resurfaced in Washington."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "chains",
    desc: "pickle",

}