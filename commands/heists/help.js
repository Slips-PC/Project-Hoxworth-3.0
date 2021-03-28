const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
        const embed = {
            "title": "PROJECT HOXWORTH",
            "color": 4886754,
            "author": {
              "name": "BOT CODED BY SLIPS#9502"
            },
            "fields": [
              {
                "name": "*What is the bot prefix?*",
                "value": "If ya want me to look something up on the server, just start your message with`$h_`."
              },
              {
                "name": "*How do I use the bot?*",
                "value": "Type `$h_` followed by the heist you want to know about, in all lower case and with hyphens instead of spaces."
              },
              {
                "name": "*Why isn't the heist I selected showing up?*",
                "value": "Those dirty feds don't call our heists the same thing we do, so ya have to use their names, i.e 'bank-heist:-gold' would instead be 'harvest-and-trustee-bank'."
              },
              {
                "name": "*How do I find all the inputs?*",
                "value": "All inputs can be found in the following pastes:\n[Heist Inputs](https://pastebin.com/Q0gaydHt)\n[Heister Inputs \(Currently WIP as of 3/28/21\)](https://pastebin.com/Jtf7gmUV)\n[Cop Inputs \(Currently WIP as of 3/28/21\)](https://pastebin.com/UJ4NCPCG)"
              },
              {
                "name": "*Why doesn't the bot have all heists yet?*",
                "value": "The server was heavily encrypted, so I'm still trying to find all the dirt they have. It'll take me a bit, but once it's finished up, I'd expect to find information on everything: All our heists, the gang, and all our skills. Hell, maybe we'll find some new ways to use our skills from these wankers.",
              }
            ]
          };
          message.channel.send("That server we grabbed from the FBI raid has some pretty useful information in it.", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "help",
    desc: "Help Embed :)",

}
