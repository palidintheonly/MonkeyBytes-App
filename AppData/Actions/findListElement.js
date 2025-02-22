module.exports = {
  data: {
    name: "Find List Element",
    value: { type: "string", value: "", removeSerialization: true }
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
      element: "var",
      storeAs: "value",
      name: "Element Value",
      also: {
        string: "Text",
      },
    },
    "-",
    {
      element: "toggle",
      storeAs: "removeSerialization",
      name: "Remove Serialization"
    },
    "-",
    {
      element: "store",
      name: "Store Element Position As",
      storeAs: "storePositionAs"
    },
  ],
  subtitle: (values, constants) => {
    let elementValue = values.value;
    if (elementValue.type == 'string') {
      elementValue = elementValue.value;
    } else {
      elementValue = constants.variable(elementValue);
    }
    return `Look For ${elementValue} (In ${constants.variable(values.list)})`
  },
  run(values, message, client, bridge) {
    let list = bridge.get(values.list);

    let elementValue = values.value;
    if (elementValue.type == 'string') {
      elementValue = elementValue.value;
    } else {
      elementValue = bridge.get(elementValue);
    }

    for (let element in list) {
      if (values.removeSerialization) {
        let listElement = list[element];
        if (typeof list[element] == 'object' && !Array.isArray(list[element])) {
          listElement = JSON.stringify(list[element]);
        }
        if (typeof elementValue == 'object' && !Array.isArray(elementValue)) {
          elementValue = JSON.stringify(elementValue);
        }
        if (listElement == elementValue) {
          bridge.store(values.storePositionAs, element);
          return true;
        }
      } else {
        if (list[element] == elementValue) {
          bridge.store(values.storePositionAs, element);
          return true;
        }
      }
    }
  },
};
