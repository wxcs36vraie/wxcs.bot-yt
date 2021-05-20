module.exports = bot => {
    console.log(`${bot.user.username} est en ligne !`);

    let statuses = [
         
        `!help W.help 🗽`,
        `En développement🗽`
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: 'PLAYING'});
    }, 2000)
}
