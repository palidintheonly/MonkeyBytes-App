module.exports = {
  info: {
    name: "unixTime_MOD",
    description: "Outputs the current Unix timestamp."
  },
  action: {
    elements: [
      {
        "element": "actions",
        "storeAs": "getTime"
      }
    ],
    actions: {
      getTime: [
        {
          "type": "setVariable",
          "variable": "unixTime",
          "value": `Math.floor(Date.now() / 1000)`
        },
        {
          "type": "sendMessage",
          "content": `Current Unix timestamp: ${get("unixTime")}`
        }
      ]
    }
  }
};
