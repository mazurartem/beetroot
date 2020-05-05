const age = prompt("Enter your age");
console.log(age);

switch (true) {
  case age >= 0 && age < 12:
    console.log(`You are a children (${age} years old)`);
    alert(`You are a children (${age} years old)`);
    break;
  case age >= 12 && age < 18:
    console.log(`You are a teenager (${age} years old)`);
    alert(`You are a teenager (${age} years old)`);
    break;
  case age >= 18 && age < 60:
    console.log(`You are an adult (${age} years old)`);
    alert(`You are an adult (${age} years old)`);
    break;
  case age >= 60:
    console.log(`You are a pensioner (${age} years old)`);
    alert(`You are a pensioner (${age} years old)`);
    break;
  default:
    console.log(`Sorry, but you entered the wrong value`);
    alert(`Sorry, but you entered the wrong value`);
}

const keyNumber = prompt("Enter a number from 0 to 9");
console.log(keyNumber);

switch (true) {
  case keyNumber == 0:
    console.log(`Your number ${keyNumber} is )`);
    alert(`Your number ${keyNumber} is )`);
    break;
  case keyNumber == 1:
    console.log(`Your number ${keyNumber} is !`);
    alert(`Your number ${keyNumber} is !`);
    break;
  case keyNumber == 2:
    console.log(`Your number ${keyNumber} is @`);
    alert(`Your number ${keyNumber} is @`);
    break;
  case keyNumber == 3:
    console.log(`Your number ${keyNumber} is #`);
    alert(`Your number ${keyNumber} is #`);
    break;
  case keyNumber == 4:
    console.log(`Your number ${keyNumber} is $`);
    alert(`Your number ${keyNumber} is $`);
    break;
  case keyNumber == 5:
    console.log(`Your number ${keyNumber} is %`);
    alert(`Your number ${keyNumber} is %`);
    break;
  case keyNumber == 6:
    console.log(`Your number ${keyNumber} is ^`);
    alert(`Your number ${keyNumber} is ^`);
    break;
  case keyNumber == 7:
    console.log(`Your number ${keyNumber} is &`);
    alert(`Your number ${keyNumber} is &`);
    break;
  case keyNumber == 8:
    console.log(`Your number ${keyNumber} is *`);
    alert(`Your number ${keyNumber} is *`);
    break;
  case keyNumber == 9:
    console.log(`Your number ${keyNumber} is (`);
    alert(`Your number ${keyNumber} is (`);
    break;
  default:
    console.log(`Sorry, but you entered the wrong value`);
    alert(`Sorry, but you entered the wrong value`);
}

const threeDigitNumber = prompt("Enter a three digit number");
console.log(threeDigitNumber);

switch (true) {
  case threeDigitNumber[0] == threeDigitNumber[1] ||
    threeDigitNumber[0] == threeDigitNumber[2] ||
    threeDigitNumber[1] == threeDigitNumber[2]:
    alert(`There are identical numbers in this number ${threeDigitNumber}`);
    break;
  case threeDigitNumber[0] !== threeDigitNumber[1] &&
    threeDigitNumber[0] !== threeDigitNumber[2] &&
    threeDigitNumber[1] !== threeDigitNumber[2]:
    alert(`In this number there are no identical numbers ${threeDigitNumber}`);
    break;
  default:
    console.log(`Sorry, but you entered the wrong value`);
    alert(`Sorry, but you entered the wrong value`);
}

const year = prompt("Enter year");
console.log(year);

switch (true) {
  case year % 400 === 0:
    console.log(`This year ${year} is high`);
    alert(`This year ${year} is high`);
    break;
  case year % 4 === 0 && year % 100 !== 0:
    console.log(`This year ${year} is high`);
    alert(`This year ${year} is high`);
    break;
  default:
    console.log(`This year ${year} is not high`);
    alert(`This year ${year} is not high`);
}

const number = prompt("Enter a five-digit number");
console.log(number);

if (number[0] === number[4] && number[1] === number[3]) {
  alert(`This number "${number}" is palidrom`);
} else {
  alert(`This number "${number}" is not palidrom`);
}

const usd = prompt("Enter the number of dollars");
console.log(usd + " USD");
const money = prompt(
  "What currency do you want to convert? Select EUR, UAN or AZN"
);
if (money == "EUR") {
  alert(usd * 0.8 + " EUR");
} else if (money == "UAN") {
  alert(usd * 1.75 + " UAN");
} else if (money == "AZN") {
  alert(usd * 22.5 + " AZN");
} else if (money != "EUR" || money != "UAN" || money != "AZN") {
  alert("You have chosen the wrong value for translation");
}

const sum = prompt("Enter purchase amount");
console.log(sum);
switch (true) {
  case sum <= 200:
    alert(`Your amount is ${sum} USD and the discount is 0% and this is 0 USD`);
    break;
  case sum >= 200 && sum < 300:
    let discount1 = (sum / 100) * 3;
    alert(
      `Your amount is ${sum} USD and the discount is 3% and this is ${discount1} USD`
    );
    break;
  case sum >= 300 && sum < 500:
    let discount2 = (sum / 100) * 5;
    alert(
      `Your amount is ${sum} USD and the discount is 5% and this is ${discount2} USD`
    );
    break;
  case sum >= 500:
    let discount3 = (sum / 100) * 3;
    alert(
      `Your amount is ${sum} USD and the discount is 7% and this is ${discount3} USD`
    );
    break;
  default:
    alert("You entered an invalid value");
}

const circumference = prompt("enter the circumference");
console.log(circumference);
const squarePerimeter = prompt("square perimeter");
console.log(squarePerimeter);

let circleArea = (circumference * circumference) / (4 * Math.PI);
console.log(circleArea);
let squareArea = Math.pow(squarePerimeter / 4, 2);
console.log(squareArea);

if (circleArea < squareArea) {
  console.log("circle fit square");
} else circleArea >= squareArea;
console.log("circle don't fit in a square");

let result = 0;

const firstQuestion = prompt(
  "How many oceans on our planet?: 1) 4; 2) 6; 3) 7;"
);
if (firstQuestion == 1) {
  result += 2;
} else {
  result += 0;
}
const secondQuestion = prompt(
  "The longest river on the planet&: 1) Psel; 2) Amazon; 3) Dnipro;"
);

if (secondQuestion == 2) {
  result += 2;
} else {
  result += 0;
}
const thirdQuestion = prompt(
  "largest country?: 1) Ukraine; 2) USA; 3) Russia;"
);
if (thirdQuestion == 3) {
  result += 2;
} else {
  result += 0;
}
alert(result);

const day = prompt("Enter day");
const month = prompt("Enter month");
const year = prompt("Enter year");

const date = new Date(Number(year), Number(month - 1), Number(day) + 1);
alert(date.toLocaleDateString({ day: "2-digit", month: "long", year: "long" }));
