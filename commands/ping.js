module.exports = {
    name: "ping",
    description: "Ping da bot",
    execute(message) {
        message.channel.send({ content: "Pong! :ping_pong:\nalso fuck u" });
    }
}