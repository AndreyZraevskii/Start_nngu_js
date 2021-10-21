// function helloWorld() {
//   console.log("Hello World");
// }

// helloWorld();

// пример 2
// const isUserAuth = false;
// function checkAccess() {
//   if (isUserAuth) {
//     console.log("Доступ есть");
//   } else {
//     console.log("Доступа нет");
//   }
// }

// checkAccess();

// function writeMessage() {
//   if (isUserAuth) {
//     console.log("Привет пользователь");
//   } else {
//     console.log("Привет гость");
//   }
// }
// writeMessage();

// пример 3

// function sum(a, b) {
//   console.log(a + b);
// }
// sum(1, 0);
// sum(16, 4);

// пример 4

// function sum(a, b) {
//   console.log(b);
//   console.log(a + b);
// }
// sum(1, 0);
// sum(16);

// пример 5

// function sum(a, b = 0) {
//   console.log(b);
//   console.log(a + b);
// }
// sum(1, 4);
// sum(16);

// пример 6

// function getName(name) {
//   console.log("до return");
//   return name;
//   console.log("после  return");
// }

// const userName = getName("Max");
// console.log(userName);

// пример 7

// function getName(name) {}

// const userName = getName("Max");
// console.log(userName);

// пример 8

// function getName(name) {
//   return name;
// }

// const userName = getName("Max");
// console.log(userName);

// пример 9

// function getName(userName) {
//   return userName;
// }

// let name = "Alex";

// const nameUserOne = getName(name);
// console.log(nameUserOne);

// name = "Ivan";

// const nameUserTwo = getName(name);
// console.log(nameUserTwo);

// пример 10

// let name = "Alex";

// console.log(name, "1");

// function sayHi() {
//   name = "Petr";

//   console.log(name, "function");
// }
// console.log(name, "2");

// пример 11

// let name = "Alex";

// console.log(name, "1");

// function sayHi() {
//   name = "Petr";

//   console.log(name, "function");
// }
// sayHi();

// console.log(name, "2");

// пример 12

// let name = "Alex";

// console.log(name, "1");

// function sayHi(userName) {
//   userName = "Petr";

//   console.log(userName, "function");
// }
// sayHi(name);

// console.log(name, "2");

// пример 13
// let name = "Alex";

// console.log(name, "1");

// function sayHi(userName) {
//   userName = "Petr";
//   name = "Max";
//   console.log(userName, "function");
// }
// sayHi(name);

// console.log(name, "2");

// пример 14

// let a = 0;
// let b = 0;

// function sum() {
//   a += 1;
//   b += 1;
//   console.log(a + b);
// }
// sum();
//  пример 15
// let a = 0;
// let b = 0;

// function sum() {
//   a += 1;
//   b += 1;
//   console.log(a + b);
// }
// sum();
// sum();
// sum();
// sum();

// пример 16

// function sum() {
//   const a = 0;
//   const b = 1;
//   console.log(a + b);
// }
// sum();
// sum();
// sum();
// sum();

// классная практика

// задача 1
// Написать функцию, которая будет принимать имя пользователя, и выводить
// строку с приветствием данного пользователя, если имени пользователя нет,
// выводить приветствие гостя.

// let name = "Alex";

// function sayHi(userName) {
//   if (userName) {
//     console.log(userName, "привет!");
//   } else {
//     console.log("Привет");
//   }
// }
// sayHi();

// задача 2
// Написать функцию, которая в качестве первого параметра будет принимать
// численное значение, а в качестве второго параметра будет принимать степень, в
// которую надо возвести первый аргумент. По умолчанию, второй аргумент
// единица.

// function exp(a, b = 1) {
//   console.log(a ** b);
// }
// exp(2, 2);
// exp(2, 8);
// exp(20);

// задача 3

// Написать функцию, которая будет принимать в качестве входного параметра
// массив любых, целых чисел, и будет возвращать среднее арифметическое
// значение данного массива*.

// function getValue(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }

// console.log(getValue([1, 23, 6]));

// пример 17

// const sayName = function (name) {
//   return name;
// };
// console.log(sayName("Alex"));

// пример 18

// const sayName = function (name) {
//   return name;
// };

// const copy = sayName;
// console.log(sayName("Alex"));

// console.log(copy("Ivan"));

// пример 19

// const getName = function () {
//   console.log("Alex");
// };

// const getUserInfo = function (callBack) {
//   console.log("USER INFO");
//   callBack();
// };

// getUserInfo(getName);

// колбек это функция отложенного вызова, будет вызвана, когда мы этого захотим.

//  пример 20

// function test() {
//   console.log("test");
// }

// test();

// const test2 = function () {
//   console.log("test2");
// };

// test2();

// пример 21

// const myFerstArrowFunc = () => console.log("!!");

// пример 23

// const test1 = (name, age) => console.log(name, age);

// test1("Alex", 19);
// ////////
// const test1 = (name) => name;

// console.log(test1("Alex"));
// //////////

// const test1 = (name) => {
//   return name;
// };

// console.log(test1("Alex"));

// const getLog = () => console.log("Log");
// getLog;

// пример 24

// FD
// function example1(param) {
//   return param;
// }
// example1(1);

// FE
// const example2 = function (param) {
//   return param;
// };
// example2(2);
// AF.1
// const example3 = (param) => param;
// example3(3);
// AF.2
// const example3 = (param) => {
// big bady
//   return param;
// };
// example3(3);

// классная практика 2

// задача 1
// Напишите стрелочную функцию которая будет выводить переданную строку в
// консоль n раз.

// const getString = (str, count) => {
//   for (let i = 0; i <= count; i += 1) {
//     console.log(str);
//   }
// };

// getString("Ivan", 3);

// getString("London", 30);

// getString("Madrid", 12);

// задача 2
// Напишите стрелочную функцию, которая будет принимать в качестве параметра
// букву и если она гласная, функция будет возвращать true, в противном случае
// false .

// гласных букв 9 шт.

// const printNTimes = (str, n) => {
//   for (let i = 1; i <= n; i++) {
//     console.log(str);
//   }
// };

// printNTimes(Some string, 6);

// const vowels = [a, e, i, o, u, y, A, E, I, O, U, Y];
// const isVowel = (letter) => {
//   for (let item of vowels) {
//     if (letter === item) return true;
//   }
//   return false;
// };

// console.log(isVowel(c));

// const isPalindrome = (str) => {
//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str[str.length - 1 - i]) return false;
//   }
//   return true;
// };

// console.log(isPalindrome(c2cc));

// или через свич кейс

// const getArr = (arr) => {

//   switch (arr) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//     case "y":
//       console.log("true");
//       break;
//     default:
//       console.log("false");
//   }
// };
// getArr("w");

// пример задачи 2

// const isPositive = (letter)=> {
//   if(letter === "a" || letter === "y") {
//     return true;
//   } else {
//     return false;
//   }
// }

// задача 3
// Напишите стрелочную функцию, которая будет возвращать true если строка
// является палиндромом и false в противном случае.

// задача на дом
