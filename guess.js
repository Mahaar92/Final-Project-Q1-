import inquirer from "inquirer";
const systemgeneratednumber = Math.floor(Math.random() * 10);
const answer = await inquirer.prompt([
    { type: "number",
        name: "guessnumber",
        message: "write your guess number b/w 1-10", }
]);
const { guessnumber } = answer;
console.log(guessnumber, "guessnumber", systemgeneratednumber);
if (guessnumber === systemgeneratednumber) {
    console.log("yeah your answer is correct");
}
else {
    console.log("try again next time");
}
