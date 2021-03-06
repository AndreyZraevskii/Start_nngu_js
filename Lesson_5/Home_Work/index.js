// 1.	Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

// const getSquare = (a) => a ** 2;
// console.log(getSquare(7));

// 2.	Сделайте функцию, которая возвращает сумму двух чисел.

// const getSum = (a, b) => a + b;
// console.log(getSum(7, 8));

// 3.	Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

// const getNum = (a, b, c) => (a - b) / c;
// console.log(getNum(20, 10, 2));

// 4.	Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели
// на русском языке.

// const getDay = function (day) {
//   switch (day) {
//     case 1:
//       return "понедельник";
//     case 2:
//       return "вторник";
//     case 3:
//       return "среда";
//     case 4:
//       return "четверг";
//     case 5:
//       return "пятница";
//     case 6:
//       return "суббота";
//     case 7:
//       return "воскресенье";
//     default:
//       return "параметр не задан";
//   }
// };
// console.log(getDay(3));

// 5.	Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть
// функция вернет true, а если не равны - false.

// const getNum = (a, b) => {
//   if (a === b) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(getNum(3, 3));

// 6.	 Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма
// больше 10 - пусть вернет true, а если нет то - false.

// const getSum = (a, b) => {
//   sum = a + b;
//   if (sum > 10) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(getSum(3, 12));

// 7.	 Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно
// или нет. Если отрицательное - пусть функция вернет true, а если нет - false.

// const negativeNum = (a) => {
//   if (a < 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(negativeNum(-8));

// 8.	 Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что
// оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

// const isNumberInRange = (a) => {
//   if (a > 0 && a < 10) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(isNumberInRange(3));

// 9.	 Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и
// меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.

// const arr = [2, -1, 2, 8, 7, 45, 15, 0, 5, -12, 94];
// const newArr = [];
// function isNumberInRange(num) {
//   return num > 0 && num <= 10;
// }
// for (let i = 0; i < arr.length; i++) {
//   if (isNumberInRange(arr[i])) {
//     newArr.push(arr[i]);
//   }
// }

// console.log(newArr);

// 10.	 Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое
// число и возвращает сумму его цифр.

// const getDigitsSum = (digit) => {
//   let sum = 0,
//     str = String(digit);
//   for (let i = 0; i < str.length; i += 1) {
//     sum = sum + Number(str[i]);
//   }
//   return sum;
// };
// console.log(getDigitsSum(78));

// 11.	 Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте
// вспомогательную функцию getDigitsSum из предыдущей задачи.

// const arrYear = [];
// let a = 0;
// for (let i = 1; i <= 2020; i++) {
//   if (getDigitsSum(i) === 13) {
//     arrYear[a] = i;
//     a++;
//   }
// }
// console.log(arrYear);

// 12.	 Сделайте функцию isEven() (even - это четный), которая параметром принимает целое
// число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если
// нечетное - false.

// const isEven = (num) => {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(isEven(8));

// 13.	 Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать
// только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из
// предыдущей задачи.

// const isEven = (digit) => (digit % 2 === 0 ? true : false);
// const arr = [7, 0, 2, 21, 10, -4, 12, 19];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (isEven(arr[i]) === true) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);

// 14.	 Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив
// его делителей (чисел, на которое делится данное число).

// function getDivisors(num) {
//   var res = [];
//   for (let i = 1; i < num; i++) {
//     if (num % i == 0) {
//       res.push(i);
//     }
//   }
//   return res;
// }
// console.log(getDivisors(20));

// 15.	 Дан массив с числами. Выведите последовательно его элементы.

// 16.	 Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его
// цифры. И так, пока сумма не станет однозначным числом (9 и менее).
