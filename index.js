const fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client();

// class

client.on("message", async msg => {
    if (msg.guild.id == "588415857542299695") {
        if (msg.content.charAt(0) === "-") {
            if (msg.content.length >= 4 && msg.content.slice(1,4).toLowerCase() === "lfg") {
                if (msg.member.roles.cache.get("639655241868115978") === undefined) {
                    msg.member.roles.add(msg.guild.roles.cache.get("639655241868115978"))
                    let message = msg.content.replace("-lfg", "")
                    for (i = 0; i < message.length; i++) {
                        if (message.charAt(0) === " ") {
                            message = message.slice(1, message.length)
                        }
                    }
                    if (message === "") {
                        msg.channel.send(`<@&639655241868115978> <@${msg.member.id}> wants to play`)
                    } else {
                        msg.channel.send(`<@&639655241868115978> <@${msg.member.id}> says **${message}**`)
                    }
                } else {
                    msg.member.roles.remove(msg.guild.roles.cache.get("639655241868115978"))
                }
                msg.delete()
            }
            if (msg.content.length >= 15 && msg.content.slice(1,14).toLowerCase() === "clearmessages") {
                if (msg.member.roles.cache.get("588425431682908170") != undefined) {
                    let message = msg.content.replace("-clearmessages", "")
                    for (i = 0; i < message.length; i++) {
                        if (message.charAt(0) === " ") {
                            message = message.slice(1, message.length)
                        }
                    }
                    msg.channel.messages.fetch({ limit: Number(message)}).then(collection => collection.each(ms => ms.delete())).catch(error => console.error(error)).catch(error => console.error(error))
                }
             }
        }
//        if (msg.member.roles.cache.get("588425431682908170") != undefined) {
//            if (msg.member.roles.cache.get("588425431682908170") != undefined) {
//                if (msg.content === "-clearmessages") {
//                    while(true){
//                        const promises = [];
//                        const messages = await msg.channel.messages.fetch();
//                        await Promise.all(messages.map(message => message.delete()));
//                    }
//                }
//            }
//        }
    }
    if (msg.guild.name === "Birdino Land") {
        if (msg.content.charAt(0) === "-") {
            if (msg.content.length >= 15 && msg.content.slice(1,14).toLowerCase() === "clearmessages") {
                let message = msg.content.replace("-clearmessages", "")
                for (i = 0; i < message.length; i++) {
                    if (message.charAt(0) === " ") {
                        message = message.slice(1, message.length)
                    }
                }
                msg.channel.messages.fetch({ limit: Number(message)}).then(collection => collection.each(ms => ms.delete())).catch(error => console.error(error)).catch(error => console.error(error))
            }
            if (msg.content.length >= 8 && msg.content.slice(1,8).toLowerCase() === "compile") {
                let list = []
                await msg.channel.messages.fetch({ limit: 100}).then(collection => collection.each(ms => {list.push(ms); list.toString() + "test"}))
                msg.channel.send(list.toString())
            }
        }
        if (msg.author.id === "286688248221138947" && Math.random() >= .95) {
            msg.channel.send("hmm, smells like cheese")
        }
        if (Math.random() >= .75 && msg.author.id !== "707703414003597403" && msg.content.toLowerCase().includes("owo") || msg.content.toLowerCase().includes("uwu") || msg.content.toLowerCase().includes(">w<") || msg.content.toLowerCase().includes("twt")) {
            console.log(msg.author.id)
            owoList = ["owo", "oWo", "OwO", "OWO", "uwu", "uWu", "UwU", "UWU", ">w<", ">W<"]
            msg.channel.send(owoList[Math.floor(Math.random() * 10)])
        }
        if (msg.content.toLowerCase().includes("daddy")) {
            msg.channel.send("Yes baby?")
        }
        if ((msg.author.id != "231167642889748480" && msg.author.id != "286688248221138947") && msg.content.toLowerCase().includes("nigger") || msg.content.toLowerCase().includes("nigga") || msg.content.toLowerCase().includes("nibba")) {
            msg.channel.send(">:( <@231167642889748480> <@286688248221138947>")
        }
        if (msg.author.id != "271043994761429005" && msg.content.toLowerCase().includes("hoe") || msg.content.toLowerCase().includes("slut") || msg.content.toLowerCase().includes("bitch")) {
            msg.channel.send(">:( <@271043994761429005>")
        }
        if (msg.author.id != "468441283103424522" && msg.content.toLowerCase().includes("cracker") || msg.content.toLowerCase().includes("faggot")) {
            msg.channel.send(">:( <@468441283103424522>")
        }
        if (msg.author.id != "231545356758810624" && msg.content.toLowerCase().includes("chink")) {
            msg.channel.send(">:( <@231545356758810624>")
        }
        if (msg.content.toLowerCase().includes("clanker")) {
            for (i = 0; i < 5; i++) {
                msg.channel.send(">:( ")
            }
        }
    }
});

client.login("NzA3NzAzNDE0MDAzNTk3NDAz.XrM2Tg.dia8EMO5VQdGgnE8YpC6IsqMp_I");

//console.log(client.guilds.cache);
//
//for (user of client.guilds.cache.get("588415857542299695").members.cache) {
//    console.log(JSON.parse(fs.readFileSync("users.json")))
//}
