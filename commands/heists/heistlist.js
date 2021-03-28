const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "HEIST NAME\n\n",
  "color": 4886754,
  "description": "jewelry-store: Jewelry Store\nharvest-and-trustee-bank: Bank Heist: Gold/Cash/Deposit/Random\nshadow-raid: Shadow Raid\ngo-bank: GO Bank\ndiamond-store: Diamond Store\narmored-transports: All Main Transport Heists\ntrain-heist: Transport: Train Heist\nmallcrasher: Mallcrasher\nfour-stores: Four Stores\nwhite-xmas: White Xmas\nukrainian-job: Ukrainian Job\nmeltdown: Meltdown\naftershock: Aftershock\nnightclub: Nightclub\nstealing-xmas: Stealing Xmas\nwatchdogs: Watchdogs\nfirestarter: Firestarter\nrats: Rats\nbig-oil: Big Oil\nframing-frame: Framing Frame\nelection-day: Election Day\nthe-big-bank: The Big Bank\nhotline-miami: Hotline Miami\nhoxton-breakout: Hoxton Breakout\nhoxton-revenge: Hoxton Revenge\nthe-diamond: The Diamond\ngolden-grin-casino: Golden Grin Casino\nthe-bomb-dockyard: The Bomb: Dockyard\nthe-bomb-forest: The Bomb: Forest\nart-gallery: Art Gallery\nscarface-mansion: Scarface Mansion\nthe-alesso-heist: The Alesso Heist\ncounterfeit: Counterfeit\ncook-off: Cook Off\nfirst-world-bank: First World Bank\nmurky-station: Murky Station\nboiling-point: Boiling Point\ngoat-simulator: Goat Simulator\nsantas-workshop: Santa's Workshop\ncar-shop: Car Shop\nbiker-heist: Biker Heist\npanic-room: Panic Room\nbrooklyn-10-10: Brooklyn 10-10\nyacht-heist: Yacht Heist\nundercover: Undercover\nslaughterhouse: Slaughterhouse\nbeneath-the-mountain: Beneath the Mountain\nbirth-of-sky: Birth of Sky\nheat-street: Heat Street\ngreen-bridge: Green Bridge\nalaskan-deal: Alaskan Deal\ndiamond-heist: Diamond Heist\nreservoir-dogs: Reservoir Dogs\nbrooklyn-bank: Brooklyn Bank\nbreakin'-feds: Breakin' Feds\nhenry's-rock: Henry's Rock\nshacklethorne-auction: Shacklethorne Auction\nhell's-island: Hell's Island\nthe-white-house: The White House",
  "url": "https://pastebin.com/Q0gaydHt",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  }
};
message.reply("Check your DMs. If they're open, I will DM you the list of heists.")
message.author.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "heistlist",
    desc: "Template",

}
