
module.exports = {
  category: "Actions",
  data: {
    name: "Stop Actions Out Of Container",
  },
  UI: [
    {
      element: "typedDropdown",
      name: "Depth",
      storeAs: "depth",
      choices: {
        default: { name: "Default" },
        custom: { name: "Custom", field: true },
      }
    }
  ],
  subtitle: "Nothing Below This Action Container Will Run",
  compatibility: ["Any"],
  run(values, message, client, bridge) {
    if (!values.depth || values.depth == "default") {
      bridge.data.invoker.bridge.stopActionRun = true;
    } else {
      let depth = values.depth.value;
      let currentBridge;
      while (depth != 0) {
        currentBridge = bridge.data.invoker.bridge;
      }
      bridge.data.invoker.bridge.stopActionRun = true;
    }
  },
};
