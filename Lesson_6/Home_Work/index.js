// 1. Преобразовать строку в массив слов
// Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

// var str = "Каждый охотник желает знать";
// function stringToarray(str) {
//   // Ваш код
//   return str.trim().split(" ");
// }

// let arr = stringToarray(str);
// console.log(arr);

// 2. Удаление указанного количества символов из строки
// Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

// var str = "Каждый охотник желает знать";
// function delete_characters(str, length) {
//   // Ваш код
//   if (str.constructor === String && length > 0) {
//     return str.slice(0, length);
//   }
// }
// console.log(delete_characters(str, 7));

// 3. Вставить тире между словами строки
// Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между
// словами. При этом все символы строки необходимо перевести в верхний регистр.

// var str = "HTML JavaScript PHP";

// function insert_dash(str) {
//   // Ваш код
//   return str
//     .trim()
//     .toUpperCase()
//     .replace(/[^a-zA-Z0-9 -]/, "")
//     .replace(/\s/g, "-");
// }
// console.log(insert_dash(str));

// 4. Сделать первую букву строки прописной
// Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.

// var str = "string not starting with capital";

// function cursive_letter(str) {
//   // Ваш код
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }
// console.log(cursive_letter(str));

// 5. Первая буква каждого слова заглавная
// Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

// var str = "каждый охотник желает знать";

// function capitalize(str) {
//   // Ваш код
//   return str.replace(/(^|\s)\S/g, function (a) {
//     return a.toUpperCase();
//   });
// }
// console.log(capitalize(str));

// 6. Смена регистра символов строки
// Напишите функцию change_register(str), которая принимает в качестве аргумента строку и и заменяет
// регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

// var str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";

// function change_register(str) {
//   // Ваш код
//   let new_str = "";
//   let len = str.length;
//   for (var i = 0; i < len; i++) {
//     if (str[i] === str[i].toLowerCase()) {
//       new_str += str[i].toUpperCase();
//     } else {
//       new_str += str[i].toLowerCase();
//     }
//   }
//   return new_str;
// }
// console.log(change_register(str));

// 7. Удалить все не буквенно-цифровые символы
// Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.

// var str = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";

// function remove_char(str) {
//   // ...ваш код...
//   let res = "";
//   res = str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
//   return res;
// }
// console.log(remove_char(str));

// 8. Нулевое заполнение строки
// Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение с дополнительным
// знаком «+» или « -« в зависимости от передаваемого аргумента.

// function zeros(num, len, sign) {
//   // ...ваш код...
//   let len_zer = len - (num + "").length,
//     num_zer = "";
//   for (; len_zer > 0; len_zer--) {
//     num_zer += 0;
//   }

//   return sign === undefined || sign === ""
//     ? num_zer + num + ""
//     : sign + num_zer + num + "";
// }
// console.log(zeros(21, 0, "-"));
// console.log(zeros(7, 4));

// 9. Сравнение строк без учёта регистра
// Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

// function comparison(str1, str2) {
//   // ...ваш код...
//   let res = str1.toUpperCase() === str2.toUpperCase();

//   return res;
// }
// console.log(comparison("sTrInG", "String"));
// console.log(comparison("sTrInG", "Strinh"));

// 10. Поиск без учета регистра
// Напишите функцию insensitive_search(str1, str2), которая осуществляет поиск подстроки str2 в строкеstr1 без учёта регистра символов.

// function insensitive_search(str1, str2) {
//   // ...ваш код...
// };

// 11. ВерблюжийРегистр (CamelCase)
// Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.

// str = "hEllo woRld";
// function initCap(str) {
//   // ...ваш код...
//   return str.toLowerCase().replace(/(?:^|\s)[a-z]/g, function (m) {
//   return m.toUpperCase().replace(/\s+/g, "");
//   });
// }
// console.log(initCap(str));

// 12. Змеиный_регистр (snake_case)
// Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case,
// при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.

// function initSnake(str) {
//   // ...ваш код...
//   let str = str.replace(/[A-Z]/g, function (letter) {
//     return "_" + letter.toLowerCase();
//   });
//   return str.replace(/^_/, "");
// }
// console.log(initSnake("HelloWorld"));

// 13. Повторить строку n раз
// Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую определённое количество раз.

// function repeatStr(str, n) {
//   // ...ваш код...
//   let new_str = "";
//   while (n-- > 0) new_str += str;
//   return new_str;
// }
// console.log(repeatStr("Hi!", 7));

// 14. Получить имя файла
// Напишите функцию path(pathname), которая возвращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.

// var pathname = "/home/user/dir/file.txt";

// function path(pathname) {
//   // ...ваш код...
//   let name = pathname.split("/").pop();
//   return name;
// }
// console.log(path(pathname));

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

// 17. Вставить подстроку в указанную позицию строки
// Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указанную позицию pos строки str.
// По умолчанию подстрока вставляется в начало строки.

// function insert(str, substr, pos) {
//   //     ...ваш код...
//   let array = str.split("");
//   array.splice(pos, 0, substr);
//   return array.join("");
// }

// console.log(insert("Hello Max", " big", 5));

// 18. Ограничить длину строки
// Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n.
// Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.

// function limitStr(str, n, symb) {
//   // ...ваш код...
//   if (!n && !symb) return str;
//   symb = symb || "...";
//   return str.substr(0, n - symb.length) + symb;
// }
// console.log(limitStr("Астрономия это наука о небесных объектах", 12, "-"));

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

// ..........................................................................................................................//////////////////////////////////
// 21. Удалить лишние пробелы из строки
// Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.

// var str = "    Max is a good      boy     ";

// function strip(str) {
//     ...ваш код...
// };

// 23. Удалить лишние слова из строки

// Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.

// var str = "Сила тяжести приложена к центру масс тела";

// function cutString(str, n) {
//   //     ...ваш код...
//   return str.split(" ").splice(0, n).join(" ");
// }
// console.log(cutString(str, 2));

// 24. Найти слово в строке
// Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.

// var str = "abc def ghi jkl mno pqr stu";

// function findWord(word, str) {
//   //     ...ваш код...
//   return RegExp("\\b" + word + "\\b").test(str);
// }
// console.log(findWord("sty", str));
