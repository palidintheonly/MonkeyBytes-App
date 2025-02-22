module.exports = {
  data: {
    name: "Generate PO Token",
  },
  category: "Music",
  UI: [
    {
      element: "store",
      storeAs: "store",
    }
  ],
  subtitle: (values, constants) => {
    return `Store As ${constants.variable(values.store)}`
  },
  compatibility: ["Any"],
  async run(values, message, botClient, bridge) {

  },
};
