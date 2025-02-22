module.exports = {
  data: {
    name: "Bulk Ban Members",
  },
  category: "Servers",
  aliases: ["Purge Members", "Members Purge"],
  UI: [
    {
      element: "var",
      storeAs: "members",
      name: "Members"
    },
    "-",
    {
      element: "typedDropdown",
      storeAs: "deleteHistory",
      name: "Delete History",
      choices: {
        "none": { name: "None" },
        "60": { name: "1 Hour" },
        "120": { name: "2 Hours" },
        "240": { name: "4 Hours" },
        "480": { name: "8 Hours" },
        "1440": { name: "1 Day" },
        "4320": { name: "3 Days" },
        "10080": { name: "1 Week" },
        custom: { name: "Custom (Minutes)", field: true }
      }
    },
    "-",
    {
      element: "input",
      storeAs: "reason",
      name: "Reason"
    }
  ],

  subtitle: (values, constants) => {
    return `Ban ${constants.variables(values.members)} - Reason: ${values.reason}`
  },
  
  async run(values, message, client, bridge) {
  },
};
