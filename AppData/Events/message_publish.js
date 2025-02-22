const { Client } = require("oceanic.js");

module.exports = {
  name: "Announcement Message Publish",
  nameSchemes: ["Store Message As"],

  /**
   * @param {Client} client
   * @param {*} data
   * @param {*} run
   */
  initialize(client, data, run) {
    client.on('messageUpdate', async (message, oldMesssage) => {
      if (message.flags & 1 << 0 && !(oldMesssage.flags & 1 << 0)) {
        run([
          msg
        ], msg);
      };
    })
  }
};
