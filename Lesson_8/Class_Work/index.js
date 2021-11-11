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
