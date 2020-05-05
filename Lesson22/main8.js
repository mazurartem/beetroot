/* Пользователь вводит сумму денег в кошельке и цену одной шоколадки.
Программа выводит, сколько шоколадок может купить пользователь,
и сколько сдачи у него останется. */

let sumMoney = prompt("indicate the amount of money");
let price = prompt("indicate the price for one chocolate bar");
let sumMoneyResult = sumMoney / price;
document.write(Math.floor(sumMoneyResult) + " chocolate ");

document.write(`${sumMoneyResult - Math.floor(sumMoneyResult)} balance`);
