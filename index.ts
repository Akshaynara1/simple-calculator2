import inquirer from "inquirer"

const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
      message: "Please select one of the operator to perform operation",
      type: "list",
      name: "operator",
      choices: ["Addition", "Substraction", "Multiplication", "Division"],
    },
  ]);

  console.log(answer)

  //conditional statements
if (answer.operator === "Addition") { 
    console.log( answer.firstNumber + answer.secondNumber);
}else if (answer.operator === "Substraction") {
    console.log( answer.firstNumber +-answer.secondNumber) 
}else if (answer.operator === "Multiplication" ) {
    console.log( answer.firstNumber * answer.secondNumber);
}else if (answer.operator === "Division") {
    console.log( answer.firstNumber / answer.secondNumber);
} else {
    console.log("Plese select valid operator")
}