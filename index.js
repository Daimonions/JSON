const Discord = require("discord.js");

const client = new Discord.Client({intents:[
    
]});

client.login(process.env.DISCORD_TOKEN)