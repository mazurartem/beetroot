function inputTwoNumber() {
  let firstNumber = prompt("Enter first number");
  let secondNumber = prompt("Enter second number");

  if (firstNumber < secondNumber) {
    return `-1`;
  } else if (firstNumber > secondNumber) {
    return `1`;
  } else if (firstNumber === secondNumber) {
    return `0`;
  }
}

console.log(inputTwoNumber());

function rFact(num) {
  if (num == 0 || num == 1) return 1;
  return num * rFact(num - 1);
}

alert(rFact(prompt()));

function threeDigitNumber() {
  let firtsNumber = prompt("Enter first number");
  let secondNumber = prompt("Enter second number");
  let thirdNumber = prompt("Enter third number");
  let num = firtsNumber + secondNumber + thirdNumber;
  console.log(num);
}
threeDigitNumber();

let a = prompt("Enter length");
let b = prompt("Enter width");
console.log(`This is ${a}, ${b}`);

function rectangleArea(a, b) {
  if (a > 0 && b > 0) {
    return a * b;
  } else if (a == 0) {
    return b * 4;
  }
}
console.log(rectangleArea(a, b));
