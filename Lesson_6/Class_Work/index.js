// Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его
// // цифры. И так, пока сумма не станет однозначным числом (9 и менее).

// const evenNine = (num) => {
//   num = "${num}";
//   let sum = 0;
//   for (let i = 0; i < num.length; i += 1) {
//     sum += +num[i];
//   }
//   console.log(sum);
//   if (sum > 9) {
//     return evenNine(sum);
//   } else {
//     return sum;
//   }
// };
// console.log(evenNine(2478));

// Дан массив с числами. Выведите последовательно его элементы.
// const arr = [2, 4, 3, 1];

// const arrSort = (arr) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (!i) {
//       result[i] = arr[i];
//       continue;
//     }
//     if (arr[i] > result[i - 1]) {
//       result[i] = arr[i];
//     } else {
//       const a = result[i - 1];
//       result[i - 1] = arr[i];
//       result[i] = a;
//     }
//   }
//   console.log(result);
// };

// console.log(arrSort(arr));
/////////////////////////////////////////////////
// const PosNum = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       k = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i + 1] = k;
//     }
//   }
//   console.log(arr);
// };
// PosNum([2, 1, 5, 3, 10, 8]);
//////////////////////////////////////////
// let arr = [2, 3, 5, 1];
// let swapped;
// do {
//   swapped = false;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       temp = arr[i + 1];
//       arr[i + 1] = arr[i];
//       arr[i] = temp;
//       swapped = true;
//     }
//   }
// } while (swapped === true);

// console.log(arr);
// решена............

// Напишите стрелочную функцию, которая будет возвращать true если строка
// является палиндромом и false в противном случае.

// const isPalindron = (str) => {
//   let newSrt = "";
//   for (let i = 0; i < str.length; i += 1) {
//     newStr += str[str.length - i - 1];
//   }
//   if (newStr === str) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isPalindron("abvba"));

// пример1....

// let num1 = 1;
// let num2 = num1;

// console.log(num1, num2);

// num1 = 2;

// console.log(num1, num2);

// пример 2

// const obj1 = {
//   name: "Alex",
// };

// const obj2 = obj1;

// console.log(obj1, obj2);

// obj1.name = "Ivan";

// console.log(obj1, obj2);

///////////////////////////////////////

// const obj = {};

// obj.true = 1;

// console.log(obj);

/////////////////////////////////////

// const obj = {};

// console.log(obj);

// obj.age = "12";

// obj["name-user"] = "Ivan";

// console.log(obj);

///////////////////////////////////

// const obj = {};

// console.log(obj);

// obj.age = "12";

// obj["name-user"] = "Ivan";

// console.log(obj);

// console.log(obj.age, obj["name-user"]);

// obj.age = "18";
// obj["name-user"] = "Max";

// console.log(obj);

// console.log(obj.age);
// delete obj.age;

// console.log(obj);
// console.log(obj.age);

///////////////////////////////////

// const obj = {
//   sayHi: function (name) {
//     console.log("Hi USER", name);
//   },
// };

// obj.sayHi("MAX");

//////////////////////////////////
//////////////////////////// Практика//////////////////////////////////////
// 1.Создайте объект myFavoriteFilm, описывающий ваш любимый фильм. Объект
// должен содержать свойства с названием фильма, с датой выпуска, именем
// режиссера и страной выпуска.
// 2. Добавить свойство содержащее значение выручки фильма в прокате.
// 3. Добавить метод, который который будет выводить название фильма в консоль.
// 4. Удалить свойство содержащее год выпуска.
// 5. Вывести в консоль объект myFavoriteFilm и проанализировать его структуру.

// const obj = {};

// console.log(obj);

// obj.myFavoriteFilm = "Gentlemen";

// obj.director = "Guy Ritchie";

// console.log(obj);

// console.log(obj.myFavoriteFilm, obj.director);

// obj.outputYear = "2019";
// obj.country = "England";

// console.log(obj);
//////////////
// const myFavoriteFilm = {
//   name: "Gentlemen",
//   year: "2019",
//   country: "England",
//   director: "Guy Ritchie",
//   clName: function () {
//     console.log("Gentlemen");
//   },
// };
// myFavoriteFilm.clName();
// delete myFavoriteFilm.year;
// console.log(myFavoriteFilm);

// myFavoriteFilm.clName = function () {
//   console.log("Gentlemen");
// };

/////////////
// const myFavoriteFilm = {
//   name: "Gentlemen",
//   year: "2019",
//   country: "England",
//   director: "Guy Ritchie",
//   clName: function () {
//     console.log("Gentlemen");
//   },
///////////////////////////////////////

// const str = "string";
// console.log(str);
// str[0] = "S";
// console.log(str);
/////////////////

// Практика
// ● Реализовать функцию которая будет принимать числовой диапазон в качестве
// параметров [min, max] и будет возвращать случайное целое число из данного
// диапазона.

// const getRandom = (min, max) => {
//   let result = Math.round(max * Math.random());
//   while (result < min || result > max) {
//     result = Math.round(max * Math.random());
//   }
//   console.log(result);
// };
// getRandom(100, 500);
// getRandom(1, 2);
/////////////////////////////////////////////////

// const getRandomNumber = (min, max) => {
//   const rand = Math.random() * (max - min);
//   const result = min + rand;
//   return Math.round(result);
// };
// console.log(getRandomNumber(1, 100));

// ● Реализовать функцию которая будет определять, в каком регистре записан n
// элемент переданной строки, если в верхнем то вернуть true, в противном случае
// вернуть false.

// const isUpper = (string, n) => {
//   if (string[n] === string[n].toUpperCase()) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };
// isUpper("frTy", 2);
//////////////////////////////////////////

// const getRegister = (str, n) => {
//   if (n > str.length) {
//     console.log("неверные параметры задачи");
//     return;
//   }
//   if (str[n] === str[n].toUpperCase()) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };

// getRegister("Ivan LEXA", 3);

// ● Реализовать функцию которая заменяет в строке str, все вхождения подстроки
// find, на подстроку replace.

// const customReplaceAll = (str, find, replaceStr) => {
//   while (str.includes(find)) {
//     str = str.replace(find, replaceStr);
//   }
//   return str;
// };

// console.log(customReplaceAll("hi is you, hi its me", "hi", "HELLO"));

///////////////////////////////////////////////////////////////
// for(let i = 0; i < str.length; i += 1) {
//     str = str.replace(find, replaceStr);
// }
//////////////////////////////////////////////////////////////

// const customReplaceAll = (str, find, replaceStr) => {
//   str = str.replace(find, replaceStr);
//   if (str.includes(find)) {
//     return customReplaceAll(str, find, replaceStr);
//   } else {
//     return str;
//   }
// };

// console.log(customReplaceAll("hi is you, hi its me", "hi", "HELLO"));
