// if (1) {
//   console.log("TRUE");
// }

// if (0) {
//   console.log("FALSE");
// }

// console.log("START");

// const value = -5;

// if (value > 0) {
//   console.log("TRUE");
// } else {
//   console.log("FALSE");
// }

// console.log("FINISH");

// console.log("Start");

// let value;

// if (value === 0) {
//   console.log(value, " = value");
// } else if (value > 1) {
//   console.log(value, " > 1");
// } else if (value < -1) {
//   console.log(value, " < -1");
// } else {
//   console.log(value);
// }

// console.log("Finish");

// const age = 20;
// const result = age >= 18 ? "Доступ разрешен" : "Доступ запрещен";

// console.log(result);

// switch ("Ivan") {
//   case "Ivan":
//     console.log("IVAN");
//     break;
//   case "Alex":
//     console.log("ALEX");
//     break;
//   case "Max":
//     console.log("MAX");
//     break;
//   default:
//     console.log("Имя нет в списке");
// }

// console.log("FINISH");

// ***************************Практика 1

// *******************задача 1 С помощью условных операторов вывести на экран
// длину наибольшего отрезка из трех данных.

// console.log("Start");

// const a = 1000;
// const b = 200;
// const c = 300;

// if (a > b) {
//   a > c ? console.log(a) : console.log(c);
// } else {
//   b > c ? console.log(b) : console.log(c);
// }

// console.log("Finish");

// ***************************************************задача 2 сделать дома*****Реализовать систему
// рекомендаций для пользователя опираясь на значение
// переменной, хранящей значение температуры в градусах Цельсия.
// ниже -30: “Оставайтесь дома!”;
// от -30 до -10 включительно: “Сегодня холодно”;
// от -10 до +5 включительно: “Не холодно”;
// от +5 до +15 включительно: “Тепло”;
// от +15 до +25 включительно: “Очень тепло”;
// от +25 до +35: “Жарко”;
// выше либо равно +35: “Пекло!”;

// const degrees = 20;

// if (degrees < -30) {
//   console.log("Оставайтесь дома!");
// } else if (degrees <= -10) {
//   console.log("Сегодня холодно");
// } else if (degrees <= 5) {
//   console.log("Не холодно");
// } else if (degrees <= 15) {
//   console.log("Тепло");
// } else if (degrees <= 25) {
//   console.log("Очень тепло");
// } else if (degrees < 35) {
//   console.log("Жарко");
// } else if (degrees <= 35) {
//   console.log("Пекло!");
// }

// ******************задача 3  С помощью конструкции switch и переменной, хранящей роль пользователя
// (admin, manager, user …), выводить на экран информацию о пользователе
// (информацию любого типа, роль, дату рождения, любимый напиток и тд).

// const userRole = "ingener";

// switch (userRole) {
//   case "user":
//     console.log("user info");
//     break;
//   case "admin":
//     console.log("admin info");
//     break;
//   case "manager":
//     console.log("manager info");
//     break;
//   default:
//     console.log("no info");
// }

// *************Логические операторы *****|| или*****&& и*****! не*****
// ***Приоритет оператора && (И) больше, чем у || (ИЛИ),
// поэтому он выполняется раньше.*******

// ************ || возвращает первое true или последнее false*********

// const a = false;
// const b = 0;

// const result1 = a || b;
// console.log(result1);

// ************ && возвращает первое false или последнее true*********

// const a = 10;
// const b = "d";

// const result = a && b;

// console.log(result);

// ***************************************

// const a = 10;
// const b = 200;
// const c = 30;

// if (a > b && a > c) {
//   console.log(a);
// } else if (b > a && b > c) {
//   console.log(b);
// } else {
//   console.log(c);
// }

// ****************************************

// const a = 10;
// const b = 200;
// const c = 30;
// const d = 1000;

// if (a > b && a > c) {
//   console.log(a);
// } else if (b > a && b > c) {
//   console.log(b);
// } else {
//   console.log(c);
// }
// *********Можно записать короткой строкой*****ИЛИ*****
// console.log((a && b) || (c && d));

// ***************************************************

// ********************Приоритет ! (НЕ) является наивысшим из всех
// логических операторов, всегда выполняется перед
// && (И) и || (ИЛИ).*********************************************

// const name = "";

// if (name) {
//   console.log("Имя есть");
// } else {
//   console.log("Имя нет");
// }

// console.log(!!"Alex");
// console.log(Boolean("Alex"));

// *****************Циклы while и for*************

// console.log("start");

// while (true) {
//   console.log("loop");
// }
// console.log("end");

// ************************Ctrl+C остановка скрипта*****************

// let i = 0;

// while (i < 10) {
//   console.log(i);
//   i += 1;
//   i = i + 1; //одно и тоже значение, только длинее предидущей строки
// }
// console.log("end");

// let i = 0;

// do {
//   console.log("WORK");
// } while (i);
// console.log("end");

// for (;;) {}

// console.log("start");
// let i = 0;
// while (true) {
//   console.log("loop");
//   i += 1;
//   if (i > 10) break;
// }
// console.log("end");

// *****************************Практика 2 while и for
//  *****задача 1
// Вывести в консоль заданную строку N раз.

// let i = 0;

// while (i < 10) {
//   console.log("N");
//   i += 1;
// }
// console.log("end");

// ****информация

// for (let i = 0; i <= 10; i += 1) {
//   console.log("string");
// }

// *****задача 2
// Ежедневно количество доступных автомобилей в салоне уменьшается в два
// раза. Выяснить, на какой день продаж, количество доступных к покупке авто
// станет меньше M, если известно, что в первый день продаж всего было N
// автомобилей.

// let N = 500;
// let M = 37;
// let days = 0;
// while (N >= M) {
//   N /= 2;
//   days += 1;
// }
// console.log(days);

// ********************задача 3
// Проанализировав временной промежуток начиная с 1800 и до 2020 года найти
// и вывести в консоль:
// ○ Год первого полета человека в космос и количество итераций которое
// потребовалось для поиска.
// ○ Количество високосных годов принадлежащих данному отрезку и
// количество итераций которое
// потребовалось для поиска.
