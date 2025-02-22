module.exports = {
  category: "Actions",
  aliases: ["Run Actions", "Action Box", "Box"],
  data: {
    name: "Action Container",
  },
  UI: [
    {
      element: "actions",
      name: "Actions",
      storeAs: "actions",
      large: true
    },
    "-",
    {
      element: "input",
      storeAs: "name",
      name: "Name"
    },
  ],
  subtitle: (data, constants) => {
    return `${data.name || ""}`
  },
  compatibility: ["Any"],
  async run(values, message, client, bridge) {
    let promise = new Promise(async res => {
      await bridge.runner(values.actions);
      res()
    });
    promise.catch(err => err)
    await promise
  },
};
