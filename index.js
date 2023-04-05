import inquirer from "inquirer";
import chalk from "chalk";
let clc = await inquirer.prompt([
    {
        name: "num1",
        message: "Enter any number",
        type: "number",
    },
    {
        name: "num2",
        message: "Enter any number",
        type: "number",
    },
    {
        name: "operator",
        message: "Enter any operator + , - , / , * , % , **",
        type: "string",
    }
]);
if (clc.num1 && clc.num2 && clc.operator === "+") {
    let result = clc.num1 + clc.num2;
    console.log(result);
}
else if (clc.num1 && clc.num2 && clc.operator === "-") {
    let result = clc.num1 - clc.num2;
    console.log(chalk.green(result));
}
else if (clc.num1 && clc.num2 && clc.operator === "*") {
    let result = clc.num1 * clc.num2;
    console.log(chalk.green(result));
}
else if (clc.num1 && clc.num2 && clc.operator === "/") {
    let result = clc.num1 / clc.num2;
    console.log(chalk.green(result));
}
else if (clc.num1 && clc.num2 && clc.operator === "%") {
    let result = clc.num1 % clc.num2;
    console.log(chalk.green(result));
}
else if (clc.num1 && clc.num2 && clc.operator === "**") {
    let result = clc.num1 ** clc.num2;
    console.log(result);
}
else {
    console.log(chalk.red("Please Select only these Operators '+ , - , * , / , % ' "));
}
