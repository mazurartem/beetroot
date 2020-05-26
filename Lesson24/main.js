// 1. Написать функцию, которая принимает 2 числа и возвращает -1,
// если первое меньше, чем второе; 1 – если первое больше,
// чем второе; и 0 – если числа равны.

function inputTwoNumber() {
  let firstNumber = prompt("Enter first number");
  console.log(`First number = ${firstNumber}`);
  let secondNumber = prompt("Enter second number");
  console.log(`Second number = ${secondNumber}`);

  if (firstNumber < secondNumber) {
    return `Result: -1`;
  } else if (firstNumber > secondNumber) {
    return `Result: 1`;
  } else if (firstNumber === secondNumber) {
    return `Result: 0`;
  }
}

console.log(inputTwoNumber());

// 2. Написать функцию, которая вычисляет факториал переданного ей числа.

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
let z = prompt(`Enter a number:`);
console.log(`
Calculate the factorial of a number "${z}"`);
let n = factorial(`${z}`);
console.log(`Factorial of a number "${z}" is`, `${n}`);

// 3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число.

function threeDigitNumber() {
  let firtsNumber = prompt("Enter first number");
  let secondNumber = prompt("Enter second number");
  let thirdNumber = prompt("Enter third number");
  let num = firtsNumber + secondNumber + thirdNumber;
  console.log(num);
}
threeDigitNumber();

// 4. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь.
// Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

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

// 5. Написать функцию, которая проверяет, является ли переданное ей число совершенным

const perfectNumber = function (n, i = 1, sum = 0) {
  if (n / i < 1 || i >= n) {
    return n === sum && n;
  }
  return perfectNumber(n, i + 1, n % i ? sum : sum + i);
};

// 6. Написать функцию, которая принимает минимальное и максимальное значения для диапазона,
// и выводит только те числа из диапазона, которые являются совершенными.

const perfectRange = function (a, b) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  if (perfectNumber(min)) {
    console.log(min);
  }
  if (min < max) {
    perfectRange(min + 1, max);
  }
  return;
};

// 7. Написать функцию, которая принимает время (часы, минуты, секунды)
// и выводит его на экран в формате «чч:мм:сс».
// Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

function time() {
  const hoursValue = prompt(`Enter a hours`);
  const minutesValue = prompt(`Enter a minutes`);
  const secondsValue = prompt(`Enter a seconds`);
  let theTime = new Date();
  theTime.setHours(hoursValue, minutesValue, secondsValue);
  alert(theTime);
}
time();

// 8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

function time1() {
  const hoursValue1 = prompt(`Enter a hours`);
  const minutesValue1 = prompt(`Enter a minutes`);
  const secondsValue1 = prompt(`Enter a seconds`);
  let result = hoursValue1 * 60 * 60 + minutesValue1 * 60 + secondsValue1;
  alert(`${result} ` + `seconds`);
}
time1();

// 9. Написать функцию, которая принимает количество секунд,
// переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

function time2() {
  const seconds = prompt(`Enter a seconds`);
  let hours = Math.floor(seconds / 60 / 60);
  let minutes = Math.floor(seconds / 60 / 60) - seconds / 60;
  let seconds1 = seconds % 60;
  let newTime = new Date();
  newTime.setHours(hours, minutes, seconds1);
  alert(newTime);
}
time2();

// 10. Написать функцию, которая считает разницу между датами.
// Функция принимает 6 параметров, которые описывают 2 даты,
// и возвращает результат в виде строки «чч:мм:сс».
// При выполнении задания используйте функции из предыдущих 2-х заданий:
// сначала обе даты переведите в секунды, узнайте разницу в секундах, а
// потом разницу переведите обратно в «чч:мм:сс»

let date1 = new Date("10/12/2010");
let date2 = new Date("12/12/2010");
let timeDiff = Math.abs(date2.getTime() - date1.getTime());
let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
alert(diffDays);
