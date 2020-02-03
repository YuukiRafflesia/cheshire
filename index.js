require('dotenv').config();
const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Hi meowster! Signed me in as ${client.user.tag} I see~`);
});

client.on('message', msg => {
    // CHAT EMBED LINKS
    // PALINURUS
    if (msg.content.toLowerCase().includes(`<palinurus>`) || msg.content.toLowerCase().includes(`<pali>`)) {
        msg.channel.send("Palinurus on Steam: https://store.steampowered.com/app/458760/Palinurus \nVNDB: <https://vndb.org/v17129>")
    }
    // SEEDS OF SYLVIA
    if (msg.content.toLowerCase().includes(`<seeds of sylvia>`) || msg.content.toLowerCase().includes(`<sos>`)) {
        msg.channel.send("Seeds of Sylvia on Itch: https://watercress.itch.io/seeds-of-sylvia \nVNDB: <https://vndb.org/v18963>")
    }
    // FARE THEE WELL
    if (msg.content.toLowerCase().includes(`<fare thee well>`) || msg.content.toLowerCase().includes(`<ftw>`)) {
        msg.channel.send("Fare Thee Well on Steam: https://store.steampowered.com/app/674580/Fare_Thee_Well \nVNDB: <https://vndb.org/v19342>")
    }
    // OUR HOME.
    if (msg.content.toLowerCase().includes(`<our home>`) || msg.content.toLowerCase().includes(`<our home.>`) || msg.content.toLowerCase().includes(`<oh>`) || msg.content.toLowerCase().includes(`<oh.>`)) {
        msg.channel.send("Our Home. on Itch: https://watercress.itch.io/our-home \nVNDB: <https://vndb.org/v21088>")
    }
    // DEMON GRILLS 1
    if (msg.content.toLowerCase().includes(`<ah! my girlfriend is a demon summoned from the depths of hell!>`) || msg.content.toLowerCase().includes(`<ah my girlfriend is a demon summoned from the depths of hell>`) || msg.content.toLowerCase().includes(`<demon grills>`) || msg.content.toLowerCase().includes(`<demon grills 1>`)) {
        msg.channel.send("Ah! My Girlfriend is a Demon Summoned from the Depths of Hell! on Itch: https://watercress.itch.io/ah-my-girlfriend-is-a-demon-summoned-from-the-depths-of-hell \nVNDB: <https://vndb.org/v22260>")
    }
    // CAUTIONARY TALE
    if (msg.content.toLowerCase().includes(`<cautionary tale>`) || msg.content.toLowerCase().includes(`<ct>`) || msg.content.toLowerCase().includes(`<let go>`) || msg.content.toLowerCase().includes(`<let go.>`) || msg.content.toLowerCase().includes(`<beyond yesterday's grasp>`) || msg.content.toLowerCase().includes(`<beyond yesterays grasp>`) || msg.content.toLowerCase().includes(`<byg>`) || msg.content.toLowerCase().includes(`<in your dreams: the flood>`)  || msg.content.toLowerCase().includes(`<in your dreams the flood>`)|| msg.content.toLowerCase().includes(`<flood>`)) {
        msg.channel.send("Cautionary Tale on Itch: https://watercress.itch.io/cautionary-tale \nVNDB: <https://vndb.org/v22896>")
    }
    // DEMON GRILLS 2
    if (msg.content.toLowerCase().includes(`<ah!! my roommate is a succubus hellbent on world conquest!!>`) || msg.content.toLowerCase().includes(`<ah my roommate is a succubus hellbent on world conquest>`) || msg.content.toLowerCase().includes(`<demon grills 2>`)) {
        msg.channel.send("Ah!! My Roommate is a Succubus Hellbent on World Conquest!! on Itch: https://watercress.itch.io/ah-my-roommate-is-a-succubus-hellbent-on-world-conquest \nVNDB: <https://vndb.org/v26857>")
    }
    // TWFY.
    if (msg.content.toLowerCase().includes(`<this was for you>`) || msg.content.toLowerCase().includes(`<this was for you.>`) || msg.content.toLowerCase().includes(`<twfy>`) || msg.content.toLowerCase().includes(`<twfy.>`)) {
        msg.channel.send("this was for you. on Steam: https://store.steampowered.com/app/1067930/this_was_for_you \nVNDB: <https://vndb.org/v25591>")
    }
    // AFOFAS
    if (msg.content.toLowerCase().includes(`<a field of flowers and stars>`) || msg.content.toLowerCase().includes(`<afofas>`) || msg.content.toLowerCase().includes(`<twfy>`) || msg.content.toLowerCase().includes(`<twfy.>`)) {
        msg.channel.send("A Field of Flowers and Stars on Itch: https://watercress.itch.io/afofas-demo \nVNDB: <https://vndb.org/v27130>")
    }
})

client.login(process.env.TOKEN);