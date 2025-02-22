module.exports = {
  name: "Poll End",
  nameSchemes: ["Store Message As", "Store Poll As"],
  initialize(client, data, run) {
    client.on('messageCreate', (message) => {
      if (!message.type == 46) return
      run([
        message,
        message.poll
      ], message)
    })
  }
};