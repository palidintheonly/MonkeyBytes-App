module.exports = {
  name: "Test Dropdown_MOD",
  data: {
    name: "Test Dropdown",
  },
  category: "Test",
  UI: [
    {
      element: "dropdown",
      name: "Test Dropdown",
      storeAs: "testDropdown",
      choices: [
        { name: "Option 1" },
        { name: "Option 2" },
        { name: "Option 3" }
      ]
    },
    "-",
    {
      element: "store",
      storeAs: "testStore"
    }
  ],

  subtitle: (data, constants) => { 
    return `Selected Option: ${data.testDropdown} - Store As: ${constants.variable(data.testStore)}`; 
  },
  compatibility: ["Any"],

  async run(values, message, client, bridge) {
    let result = `Selected option is: ${values.testDropdown}`;
    bridge.store(values.testStore, result);
  },
};
