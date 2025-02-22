module.exports = {
  data: {
    name: "Truncate Text",
    cutStartingAt: "1"
  },
  category: "Text",
  UI: [
    {
      element: "input",
      name: "Text",
      storeAs: "string"
    },
    "-",
    {
      element: "input",
      name: "Cut Starting At Character #",
      placeholder: "Number",
      storeAs: "cutStartingAt"
    },
    "-",
    {
      element: "input",
      name: "Cut Until Character # (Max Length)",
      placeholder: "Number - Optional",
      storeAs: "cutUntil"
    },
    "-",
    {
      element: "menu",
      max: 1,
      storeAs: "ellipsis",
      types: {
        ellipsis: "Ellipsis"
      },
      name: "Ellipsis",
      UItypes: {
        ellipsis: {
          name: "Ellipsis",
          data: { ellipsis_text: "..." },
          UI: [
            {
              element: "input",
              storeAs: "ellipsis_text",
              name: "Ellipsis"
            },
            {
              element: "toggle",
              storeAs: "subtract_ellipsis_length",
              name: "Subtract Ellipsis Length From Max Length"
            }
          ]
        }
      }
    },
    "-",
    {
      element: "store",
      storeAs: "store",
      name: "Store Text Length As"
    }
  ],

  subtitle: (values, constants) => {
    return `Truncate "${values.text}"${values.ellipsis ? " with ellipsis" : ""} - Store As: ${constants.variable(values.store)}`
  },
  
  async run(values, message, client, bridge) {
    let string = bridge.transf(values.string);
    let ellipsis = string.length > Number(bridge.transf(values.cutUntil)) ? bridge.transf(values.ellipsis_text) : "";
    let maxLength = values.subtract_ellipsis_length ? Number(bridge.transf(values.cutUntil)) - ellipsis.length : Number(bridge.transf(values.cutUntil));
    string = string.slice(Number(bridge.transf(values.cutStartingAt)) - 1, maxLength || string.length);
    if (ellipsis && string.length > maxLength) {
      string = string.slice(0, maxLength) + ellipsis;
    }
    bridge.store(values.store, string.length);
    return string;
  },
};
