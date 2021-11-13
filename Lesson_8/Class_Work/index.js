// Продвинутая работа с функциями

// console.log(this); //видимость в win (браузер)

// console.log(global);  //видимость в js (node.js)
////////////

////пример
// var name = "Alex";

// function example() {
//   console.log(this);
// }
// example();

// console.log(globalThis);

// почему нет name?

////пример

// const user = {
//   name: "Alex",
//   age: "25",
//   getName: function () {
//     console.log("Alex");
//     //тоже самое, что и предидущая строка
//     //console.log(this.name);
//   },
// };

// user.getName();

////пример

// function getName() {
//   console.log(this.name);
// }
// const user = {
//   name: "Alex",
//   age: "25",
//   getUserName: getName,
// };
// const admin = {
//   name: "Max",
//   age: "45",
//   getAdminName: getName,
// };

// user.getUserName();

// admin.getAdminName();

////пример
///this - в частном случае, это сам обьект, у которого мы свойства, например
///Если обьект = "Вася", то к Васе можно обратится через This

// function getName() {
//   console.log(this.name);
// }

// function setName(newName) {
//   this.name = newName;
// }

// const user = {
//   name: "Alex",
//   age: "25",
//   getUserName: getName,
//   setUserName: setName,
// };
// const user1 = {
//   name: "Ivan",
//   age: "18",
//   getUserName: getName,
//   setUserName: setName,
// };
// const admin = {
//   name: "Max",
//   age: "45",
//   getAdminName: getName,
//   setUserName: setName,
// };

// user.getUserName();
// user1.getUserName();
// admin.getAdminName();

// console.log(user);
// user.setUserName("Ira");
// user.getUserName();
// console.log(user);

////пример
// function example() {
//   console.log(this);
// }
// const testObject = {
//   testMethod: example,
// };
// testObject.testMethod();

////пример
// function startFight() {
//   return this.strange * this.aqility;
// }
// const hero = {
//   name: "Jon",
//   strange: 20,
//   aqility: 10,
//   health: 100,
//   fight: startFight,
//   //   function () {
//   //     return hero.strange * hero.aqility;
//   //   },
// };

// const dracula = {
//   name: "Vlad",
//   strange: 50,
//   aqility: 7,
//   health: 1000,
//   fight: startFight,
//   //    function () {
//   //     return dracula.strange * dracula.aqility;
//   //   },
// };

// console.log(hero.fight(), dracula.fight());

// if (hero.fight() > dracula.fight()) {
//   console.log("Герой победил!!УРА");
// } else {
//   console.log("Провал, вы погибли");
// }

////пример

// // function startFight() {
// //   return this.strange * this.aqility;
// // }
// const startFight = () => {
//   return this.strange * this.aqility;
// };

// const hero = {
//   name: "Jon",
//   strange: 20,
//   aqility: 10,
//   health: 100,
//   fight: startFight,
//   sayName: function () {
//     return this.name;
//   },
// };

// const dracula = {
//   name: "Vlad",
//   strange: 50,
//   aqility: 7,
//   health: 1000,
//   fight: startFight,
// };

// console.log(hero.fight(), dracula.fight());

// if (hero.fight() > dracula.fight()) {
//   console.log("Герой победил!!УРА");
// } else {
//   console.log("Провал, вы погибли");
// }

// Практика
// Создать объект который будет описывать любой населенный пункт (на ваш выбор).
// Объект должен содержать свойства описывающие: название и численность. Так же
// объект должен содержать два метода: первый должен возвращать название города, а
// второй должен возвращать численность.
// *Дополнительно, добавить метод, который будет устанавливать новое значение для
// выбранного свойства из объекта описывающего город.

// function locality() {
//   console.log(this.nameCity, population);
// }
// const testObj = {
//   nameCity: "Madrid",
//   population: 738000,
// };

// testObj.nameCity();

// вариант2

// const town = {
//   townName: "London",
//   population: "13 ml",
//   getTownName: function () {
//     return this.townName;
//   },
//   getPopulation: function () {
//     return this.population;
//   },
//   setSomeValue: function (key, value) {
//     this[key] = value;
//   },
// };

// console.log(town);
// town.setSomeValue("townName", "Paris");
// town.setSomeValue("population", "9 ml");
// console.log(town);

//////РАБОТА С КОНТЕКСТОМ ВЫЗОВА////////////////////

///////// пример
// function sayFullName(firstName, lastName) {
//   return `${this.phrase} ${firstName} ${lastName}`;
// }

// console.log(sayFullName("Alex", "Shirokov"));

// console.log(sayFullName.call({ phrase: "Hello!!" }, "Ivan", "Smirnov"));

///////// пример
// let user1 = { name: "Вася" };
// let user2 = { name: "Петя" };
// function say(phrase) {
//   console.log(`${this.name} : ${phrase} `);
// }
// say.call(user1, "Привет");
// say.call(user2, "И тебе привет");

///////// пример
// function sayFullName(firstName, lastName) {
//   return `${this.phrase} ${firstName} ${lastName}`;
// }

// let boundFullName = sayFullName.bind({ phrase: "Bye!" }, "Max", "Pertov");

// console.log(boundFullName());

///////// пример
// function sayFullName(firstName, lastName) {
//   return `${this.phrase} ${firstName} ${lastName}`;
// }

// let boundFullName = sayFullName.bind({ phrase: "Bye!" }, "Max", "Pertov");

// let bound2 = sayFullName.bind({ phrase: "Hello!" }, "Kate", "Pertova");

// console.log(boundFullName());
// console.log(bound2());

///////// пример
// function sayFullName(firstName, lastName) {
//   return `${this.phrase} ${firstName} ${lastName}`;
// }

// let boundFullName = sayFullName.bind({ phrase: "Bye!" }, "Max", "Pertov");

// let bound2 = sayFullName.bind({ phrase: "Hello!" });

// console.log(boundFullName());
// console.log(bound2("Kate", "Pertova"));

///////// пример
// function sayFullName(firstName, lastName) {
//   return `${this.phrase} ${firstName} ${lastName}`;
// }

// let boundFullName = sayFullName.bind({ phrase: "Bye!" }, "Max", "Pertov");

// let sayHelloKate = sayFullName.bind({ phrase: "Hello!" }, "Kate");

// console.log(boundFullName());
// console.log(sayHelloKate("Pertova"));
// console.log(sayHelloKate("Smirnova"));
// console.log(sayHelloKate("Ivanova"));

////////////////// Практика
// Создайте второй объект описывающий город (первый возьмите из решения задачи
// №1). Второй объект должен содержать только свойства названия и численность.
// ● Используя метод call() / apply() вызовите методы объекта первого города в
// контексте объекта второго города.
// ● Используя метод bind(), изменить свойства объекта второго города на
// произвольные значения.

// const town = {
//   townName: "London",
//   population: "13 ml",
//   getTownName: function () {
//     return this.townName;
//   },
//   getPopulation: function () {
//     return this.population;
//   },
//   setSomeValue: function (key, value) {
//     this[key] = value;
//   },
// };

// const town2 = {
//   townName: "Paris",
//   population: "9 ml",
// };

// console.log(town.getTownName());
// console.log(town.getTownName.call(town2));

//вторая часть задачи
// const town = {
//   townName: "London",
//   population: "13 ml",
//   getTownName: function () {
//     return this.townName;
//   },
//   getPopulation: function () {
//     return this.population;
//   },
//   setSomeValue: function (key, value) {
//     this[key] = value;
//   },
// };

// const town2 = {
//   townName: "Paris",
//   population: "9 ml",
// };

// console.log(town2);

// const bound = town.setSomeValue.bind(town2);

// bound("townName", "Moscow");
// bound("population", "25 ml");
// bound("country", "RUS");

// console.log(town2);

////пример

// function test() {
//   const a = 0;
//   console.log(a);
//   console.log(this.a);
// }

// test();

// // const bound = test.bind({ a: 10 });

// // bound();

////пример

// function test(b) {
//   const a = 0;
//   console.log(b);
// }

// //   test();

// const bound = test.bind({ a: 10 }, 8);

// bound();

////////////////////ЗАМЫКАНИЕ//////////////////

// let a = 0;
// console.log(a);

// const tets = () => {
//   a = 10;
// };

// tets();
// console.log(a);

///пример
// function getFullName() {
//   const firstName = "Alex";

//   function getSecondName(secondName) {
//     return `${firstName} ${secondName}`;
//   }

//   return getSecondName;
// }

// const clouser = getFullName();
// console.log(clouser("Smirnov"));

///пример

// const getArea = (a) => {
//   return (b) => a * b;
// };

// const areaWithTen = getArea(10);
// console.log(areaWithTen(5));
// console.log(areaWithTen(10));
// console.log(areaWithTen(230));

// const areaWithFour = getArea(4);
// console.log(areaWithFour(3));
// console.log(areaWithFour(21));

///пример
// function example() {
//   let closure = 100;
//   return function (b) {
//     return closure + b;
//   };
// }
// const closureExample = example();
// console.log(closureExample(100));

// Практика
// ● Используя замыкание написать функцию которая будет вычислять объём
// параллелепипеда с высотой 10.

// const getVolumeParal = (a) => {
//   return (b, c) => a * b * c;
// };

// const volumeSum = getVolumeParal(3);

// console.log(volumeSum(5, 4));

// вариант 2

// const getVol = (height) => (width, length) => height * width * length;
// const getAll = getVol(10);
// console.log(getAll(4, 5));
// console.log(getAll(3, 3));
// const getAll2 = getVol(5);
// console.log(getAll(4, 3));

// ● Используя каррирование написать функцию которая будет вычислять объём
// параллелепипеда.
