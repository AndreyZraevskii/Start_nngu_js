// 1.	Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.

// const vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];

// var vegetableLength = vegetables.map(function (piece) {
//   return piece.length;
// });

// console.log(vegetableLength); // 7,4,7,8

// 2.	Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов,
// в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.

// let numbers = [2, 3, 5, 7, 11, 13, 17];
// let currentSums = (numbers) => {
//   let resSum = [];
//   numbers.reduce((item, index, array) => {
//     return (resSum[array] = item + index);
//   }, 0);
//   console.log(resSum);
// };
// currentSums(numbers); // [2, 2+3, 2+3+5, 2+3+5+7, 2+3+5+7+11, 2+3+5+7+11+13, 2+3+5+7+11+13+17] = [ 2,5,10,17,28,41,58]

// 3.	Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.

// const arr = [0, 1, 2, 3, 4, 5, 6, 7];
// function sumSeven(numbers) {
//   return numbers
//     .map((el) => `(${el} : ${7 - el})`)
//     .filter((_, i, arr) => i < arr.length / 2);
// }

// console.log(sumSeven(arr));

// вариант2

// const arr = [6, 8, 1, 4, 9, 9, 5, 3, 0, 2, 7];
// function sumSeven(numbers) {
//   return numbers
//     .map((el) => `(${el} : ${7 - el})`)
//     .filter((_, i, arr) => i < arr.length / 2);
// }

// console.log(sumSeven(arr));

// 4.	Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из первых букв слов строки str.

// let str = "Каждый охотник желает знать, где сидит фазан.";
// let foo = (str) => str.split(/\s/g).map((e) => e.slice(0, 1));

// console.log(foo(str)); // [К,о,ж,з,г,с,ф]

// 5.	Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str.

// let str = "JavaScript";
// let foo = (str) => {
//   let newArr = [];
//   for (let i = 0; i < str.length; i += 1) {
//     newArr.push(str.substring(i - 1, i + 2));
//   }
//   console.log(newArr);
// };

// foo(str); // [Ja,Jav,ava,vaS,aSc,Scr,cri,rip,ipt,pt]

// 6.	Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений.

// let numerics = [5, 7, 2, 9, 3, 1, 8];
// let foo = (numerics) => {
//   return numerics.sort((el, index) => index - el);
// };

// console.log(foo(numerics)); // [9,8,7,5,3,2,1]

// 7.	Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений через пробел.

// let a = [1, 2, 3];
// let b = [4, 5, 6];
// let c = [7, 8, 9];
// let getArr = (a, b, c) => {
//   let numSum = a.concat(b, c);
//   return numSum
//     .sort((el, index) => index - el)
//     .join(" ")
//     .split();
// };

// console.log(getArr(a, b, c)); // [9 8 7 6 5 4 3 2 1]

// 8.	Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. Показать решение.

// let a = [[1, 2, 3], [4, 5], [6]];
// let sumArr = (arr) => {
//   return arr
//     .reduce((el, index) => el.concat(index))
//     .reduce((num, val) => num + val);
// };

// console.log(sumArr(a));

// 9.	Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

// let arr = [
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   [
//     [5, 6],
//     [7, 8],
//   ],
// ];
// let sumArr = (arr) => {
//   return arr
//     .reduce((a, b) => a.concat(b))

//     .reduce((c, d) => c.concat(d))
//     .reduce((num, val) => num + val);
// };
// console.log(sumArr(arr));

// 10.	Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

// let revArr = [4, 7, 3, 1, 2, 3, 4, 10, 12];
// let newRevArr = (el) => {
//   let arr = [];
//   for (i = 0; i < el.length; i += 1) {
//     arr[i] = el[el.length - 1 - i];
//   }
//   return arr;
// };

// console.log(newRevArr(revArr));

// 11.	Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

// let arr = [1, 9, 2, 3, 4, 5, 6, 7];
// let sum = 0;
// let newArr = [];

// for (i = 0; i < arr.length; i++) {
//   sum += arr[i];
//   newArr.push(arr[i]);

//   if (sum > 10) {
//     break;
//   }
// }
// console.log(newArr.length);

// 12.	Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько
// элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
