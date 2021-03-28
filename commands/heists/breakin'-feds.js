const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "BREAKIN' FEDS\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Breakin'_Feds",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/tag.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "There has been a growing concern as to the security surrounding the Payday Task Force, and this incident is proof. Someone has managed to infiltrate our office and break into the evidence storage areas, taking with them some of the items seized in the raid on Congressman Simmons’ offices. While it is highly suspect that the connection is not mere coincidence, there has not yet been established a provable connection that would implicate the direct involvement of Mr. Simmons, who has since been released without prosecution pending. The involvement of the Payday gang has not been reliably established, but is highly suspect. Past links to the gang and Mr. Simmons have been investigated, but without firm results. In addition, our security experts have detected hacking attempts in our computer system from another, as yet unidentified, source. It is possible that the evidence we received regarding Mr. Simmons came from a corrupt party, with the intent of disrupting our operations, or to create a distraction to benefit the Payday gang in lieu of the disappearance of their leader, Bain.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "N/A"
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "breakin'-feds",
    desc: "BF",

}
