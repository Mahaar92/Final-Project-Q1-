import inquirer from "inquirer";
let conversion = {
    PKR: {
        "USD": 0.0036,
        "EURO": 0.0033,
        "PKR": 1
    },
    USD: {
        "USD": 1,
        "EURO": 0.93,
        "PKR": 278.50
    },
    EURO: {
        "PKR": 298.77,
        "USD": 1.07,
        "EURO": 1
    },
};
const answer = await inquirer.prompt([{
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "EURO"],
        message: "Select your currency"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "EURO"],
        message: "Select your conversion currency "
    },
    {
        type: "number",
        name: "amount",
        message: "enter amount "
    },
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = conversion[from][to] * amount;
    console.log(`your conversion ${from} to ${to} is ${result}`);
}
else {
    console.log("invalid input");
}
