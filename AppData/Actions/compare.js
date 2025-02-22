module.exports = {
  category: "Control",
  data: {
    name: "Compare",
  },
  UI: [
    {
      element: "input",
      storeAs: "firstInput",
      name: "First Value"
    },
    "-",
    {
      element: "halfDropdown",
      storeAs: "comparator",
      name: "Comparator",
      choices: [
        {
          name: "="
        },
        {
          name: "!="
        },
        {
          name: "<"
        },
        {
          name: "<="
        },
        {
          name: ">"
        },
        {
          name: ">="
        },
      ]
    },
    "-",
    {
      element: "input",
      storeAs: "secondInput",
      name: "Second Value"
    },
    "-",
    {
      element: "condition",
      storeAs: "true",
      storeActionsAs: "trueActions",
      name: "If True"
    },
    "-",
    {
      element: "condition",
      storeAs: "false",
      storeActionsAs: "falseActions",
      name: "If False"
    }
  ],
  
  subtitle: "$[firstInput]$ $[comparator]$ $[secondInput]$",
  compatibility: ["Any"],

  async run(values, message, client, bridge) {
    let matchesCriteria = false;

    let firstValue = bridge.transf(values.firstInput);
    let secondValue = bridge.transf(values.secondInput);


    switch (values.comparator) {
      case "!=":
        if (firstValue != secondValue) {
          matchesCriteria = true;
        } else {
          matchesCriteria = false;
        }
        break;

      case "=":
        if (firstValue == secondValue) {
          matchesCriteria = true;
        }
        break;

      case ">":
        if (Number(firstValue) > Number(secondValue)) {
          matchesCriteria = true;
        }
        break;

      case "<":
        if (Number(firstValue) < Number(secondValue)) {
          matchesCriteria = true;
        }
        break;

      case ">=":
        if (Number(firstValue) >= Number(secondValue)) {
          matchesCriteria = true;
        }
        break;

      case "<=":
        if (Number(firstValue) <= Number(secondValue)) {
          matchesCriteria = true;
        }
        break;
    }


    if (matchesCriteria == true) {
      await bridge.call(values.true, values.trueActions)
    } else {
      await bridge.call(values.false, values.falseActions)
    }
  },
};
