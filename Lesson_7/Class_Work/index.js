// 15. Заканчивается ли строка символами другой строки
// Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.

// var str = "Каждый охотник желает знать";
// var str1 = "скрипт";
// var str2 = "знать";

// String.prototype.endsWith = function (substring) {
//   // ...ваш код...
//   if (substring.length > this.length) return false;
//   return this.substr(this.length - substring.length) === substring;
// };
// console.log(str.endsWith(str));
// console.log(str.endsWith(str1));
// console.log(str.endsWith(str2));

// 2 решения
// const str = "String Random";
// const subStr = "Random";

// str.endsWith();

// String.prototype.endsWith = (str, substr) => {
//   const findStr = String(str.match(/\S+)$/g));
//   if (substr === findStr) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(String.prototype.endsWith(str, subStr));

// 16. Подстрока до/после указанного символа
// Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после или до указанного символа char в зависимости от параметра pos.

// var str = "Астрономия — Наука о небесных телах";

// function getSubstr(str, char, pos) {
//   //     ...ваш код...
//   if (pos == "after") return str.slice(str.indexOf(char) + 1);
//   else if (pos == "before") return str.slice(0, str.indexOf(char));
//   else return str;
// }
// console.log(getSubstr(str, "—", "after"));
// console.log(getSubstr(str, "Н", "before"));

// 2 вариант решения

// const str = "Астрономия — Наука о небесных телах";

// const getSubstr = (str, char, pos) => {
//   if (pos === "до") {
//     return str.slice(0, char);
//   } else if (pos === "после") {
//     return str.slice(char);
//   } else {
//     return "Error";
//   }
// };

// console.log((getSubstr = (str, 10, "после")));

// 19. Количество вхождений символа в строке
// Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.

// var symb = "о",
//   str = "Астрономия это наука о небесных объектах";
// function count(str, symb) {
//   // ...ваш код...
//   for (
//     let count = -1, index = 0;
//     index != -1;
//     count++, index = str.indexOf(symb, index + 1)
//   );

//   return count;
// }
// console.log(count(str, symb));

// 2 вариант решения

// const str = "Астрономия это наука о небесных объектах";

// const count = (str, srtSymbol) => {
//   let count = 0;
//   str = str.toLowerCase();
//   for (let i = 0; i < str.length; i += 1) {
//     if (str[i] === strSymbol) {
//       count += 1;
//     }
//   }
//   return count;
// };

////////////////////////////////////////////////

// const arr1 = new Array(4, 5, 66, 8, 9);

// console.log(arr1.length);

// const arr2 = new Array(4);

// console.log(arr2.length);

// const arr3 = [1, 2, 3, 4, 5];

// console.log(arr3);

// arr3[0] = 10;

// console.log(arr3);

// const data = [
//     {
//         name: "Alex",
//         age: "18",
//         parent:
//     },
//     {
//         name: "Ivan",
//         age: "20",
//     },
//     {
//         name: "Max",
//         age: "23",
//     },
// ];
// console.log(data[0].name);

///////////////////////

// const arr = [];

// console.log(arr);

// arr[0] = "НОЛЬ";

// console.log(arr);

// arr[10] = "ДЕСЯТЬ";

// console.log(arr);
/////////////////////////////

// const arr = [];

// console.log(arr);

// arr[0] = "НОЛЬ";

// console.log(arr);

// arr[10] = "ДЕСЯТЬ";

// console.log(arr);

// arr[5] = "ПЯТЬ";

// console.log(arr);
//////////////////////////////

// const arr = [];

// console.log(arr);

// arr[0] = "НОЛЬ";

// console.log(arr);

// arr[10] = "ДЕСЯТЬ";

// console.log(arr);

// arr[5] = "ПЯТЬ";

// console.log(arr);

// console.log(arr[4]);
////////////////////////////////

// const arr = [];

// console.log(arr);

// arr[0] = "НОЛЬ";

// console.log(arr);

// arr[10] = "ДЕСЯТЬ";

// console.log(arr);

// arr[5] = "ПЯТЬ";

// console.log(arr);

// console.log(arr.length);
////////////////////////////////////

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(arr);

// arr.length = 2;

// console.log(arr);
///////////////////////////////

// const arr = [];

// const testLength = arr.push(1);
// console.log(testLength);

// arr.push(10);
// console.log(arr);
/////////////////////////////////////

// const arr = [];

// const testLength = arr.push(1);
// console.log(testLength);

// arr.push(10, 100, 120);
// console.log(arr);

//////////////////////////////////////////

// const customFind = (arr, arrSymbol) => {
//   let result = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === arrSymbol) {
//       result = arr[i];
//     }
//   }
//   return result;
// };

// console.log(customFind([1, 2, 3, 4], 3));

// console.log([1, 2, 3, 4].find((el) => el === 3));
///////////////////////////////////////////////////////
// Метод фильтр

// const data = [
//   { title: "First", writer: "Alex" },
//   { title: "Second", writer: "Ivan" },
//   { title: "Third", writer: "Alex" },
//   { title: "Four", writer: "Max" },
//   { title: "Fife", writer: "Max" },
//   { title: "Six", writer: "Ivan" },
//   { title: "Seven", writer: "Alex" },
// ];

// console.log(data);
// const filterData = data.filter((el) => el.writer === "Alex");
// console.log(filterData);
// console.log(data);
//////////////////////////////////////////////////////////

// const data = [
//   { title: "First", writer: "Alex" },
//   { title: "Second", writer: "Ivan" },
//   { title: "Third", writer: "Alex" },
//   { title: "Four", writer: "Max" },
//   { title: "Fife", writer: "Max" },
//   { title: "Six", writer: "Ivan" },
//   { title: "Seven", writer: "Alex" },
// ];

// const newData = data.map(
//   (el, i) => el.title
//   // {
//   //   el.index = i;
//   //   return el;
//   // }
// );

// console.log(newData);
//////////////////////////////////////////////////////////

// const data = [
//   { title: "First", writer: "Alex" },
//   { title: "Second", writer: "Ivan" },
//   { title: "Third", writer: "Alex" },
//   { title: "Four", writer: "Max" },
//   { title: "Fife", writer: "Max" },
//   { title: "Six", writer: "Ivan" },
//   { title: "Seven", writer: "Alex" },
// ];

// console.log(data);
// const testForEach = data.forEach((el) => {
//   el.title = "TEST";
// });
// console.log(data);
//////////////////////////////////////////

// const data = [
//   { title: "First", writer: "Alex" },
//   { title: "Second", writer: "Ivan" },
//   { title: "Third", writer: "Alex" },
//   { title: "Four", writer: "Max" },
//   { title: "Fife", writer: "Max" },
//   { title: "Six", writer: "Ivan" },
//   { title: "Seven", writer: "Alex" },
// ];

// console.log(data);
// const testForEach = data.forEach((el, i, arr) => {
//   if (i % 2 === 0) {
//     el.title = "TEST";
//     console.log(arr[i]);
//   }
// });
// // console.log(data);
//////////////////////////////////////////////////
// Полезные методы -reduce()

// const data = [
//   { value: 2, month: "январь" },
//   { value: 3, month: "февраль" },
//   { value: 5, month: "март" },
// ];

// const valueSum = data.reduce((acum, curValue) => acum + curValue.value, 0);
// console.log(valueSum);
///////////////////////////////
// const data = [1, 45, 44];
// const valueSum = data.reduce((acum, curValue) => acum + curValue);
// console.log(valueSum);
////////////////////////////////
// const data = [1, 45, 44];
// const valueSum = data.reduce((acum, curValue) => acum - curValue);
// console.log(valueSum);
/////////////////////////////////////////////
// const data = [1, 45, 44];
// const valueSum = data.reduce((acum, curValue) => acum - curValue, 0);
// console.log(valueSum);
/////////////////////////////////////////////

// const str = "ABCD";

// const a = str.toLowerCase().toUpperCase().trim().toString().length;
// console.log(a);
////////////////////////////////////////////
// Практика
// ● Написать функцию, которая будет принимать массив чисел, содержащий целые
// положительные и целые отрицательные числа, в качестве результата возвращать
// сумму четных положительных элементов переданного массива.

// const posSum = (arr) =>
//   arr
//     .filter((el) => el > 0 && el % 2 === 0)
//     .reduce((acum, value) => acum + value);

// console.log(posSum([1, -2, -4, 6, 7, 8, 5]));

////////////////////////////////////////////////////////
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, -4, -6];
// function myFilter(arr) {
//   let sum = 0;
//   let filterArr = arr.filter((e) => e % 2 === 0 && e > 0);
//   for (let i = 0; i < filterArr.length; i++) {
//     sum += filterArr[i];
//   }
//   return sum;
// }
// console.log(myFilter(arr));
////////////////////////////////////////////////////////

// ● Написать функцию, которая будет принимать массив чисел, и будет убирать
// повторяющиеся значения из переданного массива, в качестве результата
// возвращать новый массив с уникальными значениями из исходного.

// const arr = [1, 2, 3, 5, 5, 5, 6, 1, 1, 6, 3, 4, 7, 8];

// const uniqArr = (arr) => {
//   const result = [];
//   //     for(let i = 0; i < arr.length; i += 1) {
//   //     if (!result.includes(arr[i])) {
//   //         result.push(arr[i]);
//   //     }
//   // }
//   arr.forEach((el) => {
//     if (!result.includes(el)) {
//       result.push(el);
//     }
//   });
//   return result;
// };
// console.log(uniqArr(arr));

///////////////////////////////////////////////////////////////
// let arr_2 = arr.filter((item, index) => {
//   return arr.indexOf(item) === index;
// });
// console.log(arr_2);

// const arr = [1, 1, 1, 1, 1, 6, 5, 4, 6, 4, 8, 7, 1, 2, 4, 9, 11];

// let uniqNumber = (arr) =>
//   arr.filter((item, index) => {
//     return arr.indexOf(item) === index;
//   });
// console.log(uniqNumber(arr));

// ● Написать функцию которая будет принимать два массива, и будет сравнивать
// их, если они идентичны (элементы совпадают по значению и по индексу) то
// функция возвращает true, в противном случае false.

// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3, 4];

// const isArr = (array1, array2) => array1.toString() === array2.toString();
// console.log(isArr(arr1, arr2));
////////////////////вариант 2
// const arr0 = [1, 3, 6];
// const arr1 = [1, 3, 5];
// const arr2 = [1, 3, 5];

// const comparison = (arr1, arr2) => {
//   if (arr1.toString === arr2.toString) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(comparison(arr1, arr2));
///////////////////////////вариант 3

// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3, 4, 5];

// const isEqualArr = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   return !arr1.map((el, i) => el === arr2[i]).includes(false);
// };
// console.log(isEqualArr(arr1, arr2));

////////////////////////////////////////////вариант 4

// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3, 4, 5];

// function compareArrays(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) return false;
//   }

//   return true;
// }
// console.log(compareArrays(arr1, arr2));
