const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "ART GALLERY\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Art_Gallery",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/artgallery.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "The Capitol Art Gallery is one of DC’s leading galleries, hosting exhibitions ranging from 17th Century Swedish masterpieces to modern Singaporean pop-art. This burglary saw the disappearance of several modern masterpieces. Art crime has always been very lucrative. Theft, smuggling, and forgery have driven an insatiable black-market.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "The gallery is a compact and highly porous facility, with multiple ways in and out. The skylights seem to be particularly vulnerable. Seems like the notoriety brings visitors, so maybe the gallery isn’t interested in boosting security."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "art-gallery",
    desc: "AG",

}
