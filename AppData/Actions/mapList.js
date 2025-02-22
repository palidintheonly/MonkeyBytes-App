module.exports = {
  data: {
    name: "Map List",
  },
  category: "Lists",
  UI: [
    {
      element: "var",
      storeAs: "list",
      name: "List"
    },
    "-",
    {
      element: "store",
      name: "Store Iteration Index As",
      storeAs: "storeIterationAs"
    },
    "_",
    {
      element: "store",
      name: "Store Iteration Value As",
      storeAs: "storeValueAs"
    },
    "-",
    {
      name: "For Each Iteration, Run",
      element: "actions",
      storeAs: "actions"
    },
    "_",
    {
      element: "var",
      storeAs: "mapValue",
      name: "Mapped Value Of Iteration"
    },
    "-",
    {
      element: "store",
      name: "Store Mapped List As",
      storeAs: "store"
    }
  ],

  subtitle: (values, constants) => {
    return `List: ${constants.variable(values.list)} - Store Mapped List As: ${constants.variable(values.store)}`
  },

  compatibility: ["Any"],

  async run(values, message, client, bridge) {
    let list = bridge.get(values.list);
    let endList = [];

    for (let element in list) {
      bridge.store(values.storeIterationAs, element);
      bridge.store(values.storeValueAs, list[element]);
      await bridge.runner(values.actions);
      endList.push(bridge.get(values.mapValue));
    }

    bridge.store(values.store, endList);
  },
};