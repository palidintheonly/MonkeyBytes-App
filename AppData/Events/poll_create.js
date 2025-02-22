module.exports = {
  name: "Poll Create",
  nameSchemes: ["Store Message As", "Store Poll As"],
  initialize(client, data, run) {
    client.on('messageCreate', (message) => {
      if (!message.type == 43) return
      run([
        message,
        message.poll
      ], message)
    })
  }
};