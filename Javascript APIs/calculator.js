function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}

const num1 = 5;
const num2 = 10;
const operator = "+";

console.log(`Result: ${calculate(num1, num2, operator)}`);
