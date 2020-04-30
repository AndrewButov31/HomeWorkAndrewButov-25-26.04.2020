document.write("1 Массивы (объект Array)<br />");
document.write("<br />1.1 Функция принимает 2 массива и возвращает новый массив, в котором собраны общие элементы\n" +
    " (то есть элементы, которые встречаются и в первом и во втором массивах) без повторений<br />");
console.group('1 Массивы (объект Array)');
console.group('Задание 1.1');
console.log("1.1 Функция принимает 2 массива и возвращает новый массив, в котором собраны общие элементы (то есть элементы, которые встречаются и в первом и во втором массивах) без повторений");
const arr1 = ["Hello",2,3,4,5];
const arr2 = [4,5,6,7,"world!"];
function newArray(a1,a2) {
    return new Set(a1.concat(a2));
}
const arr4 = newArray(arr1,arr2);
console.log("Первый массив ",arr1);
console.log("Второй массив ",arr2);
console.log("Массив общих элементов без повторений ",arr4);
console.groupEnd ('Задание 1.1');
document.write("<br />1.2 Даны два массива. Объедините их и преобразовав в строку. <br />");
console.group('Задание 1.2');
console.log("1.2 Даны два массива. Объедините их и преобразовав в строку.");
const array1 = ["Hello","world!"];
const array2 = ["Hello","JavaScript!"];
const array3 = array1.concat(array2).join(" ");
console.log(array1);
console.log(array2);
console.log(array3);
console.groupEnd ('Задание 1.2');
console.groupEnd('1 Массивы (объект Array)');

document.write("<br />2 Строки (объект String)<br />");
console.group('2 Строки (объект String)');
document.write("<br />2.1 Напишите функцию, которая преобразует первую букву каждого слова строки str в верхний регистр.<br />");
console.group('Задание 2.1');
console.log("2.1 Напишите функцию, которая преобразует первую букву каждого слова строки str в верхний регистр.");
function caseConversion(line) {
    const arrSplitLine = line.split(' ');
    const uppercaseArray = arrSplitLine.map(element => element[0].toUpperCase() + element.slice(1));
    return everyUppercaseWord = uppercaseArray.concat().join(" ");
}
const givenLine = "lower case offer";
console.log("Строка для преобразования:",givenLine);
const line1 = caseConversion(givenLine);
console.log("Преобразованая строка:",line1);
console.groupEnd('Задание 2.1');
console.group('Задание 2.2');
document.write("<br />2.2 Написать функцию для проверки спама в переданной строке. Функция возвращает true, если строка содержит спам.\n" +
    " Спамом считать следующие слова: 100% бесплатно, увеличение продаж, только сегодня, не удаляйте, ххх.\n" +
    " Функция должна быть нечувствительна к регистру.<br />");
console.log("2.2 Написать функцию для проверки спама в переданной строке. Функция возвращает true, если строка содержит спам. Спамом считать следующие слова: 100% бесплатно, увеличение продаж, только сегодня, не удаляйте, ххх. Функция должна быть нечувствительна к регистру.");
function spamCheck(checkedString) {
    let validatedLowercaseString = checkedString.toLowerCase();
     if(validatedLowercaseString.includes('100% бесплатно') || validatedLowercaseString.includes('увеличение продаж')
        || validatedLowercaseString.includes('только сегодня') || validatedLowercaseString.includes('не удаляйте')
         || validatedLowercaseString.includes('ххх')){
         return false;}
     return true;
}
console.log("Проверяемая строка 'Hello world!', не содержит спан! - ",spamCheck('Hello world!'));
console.log("Проверяемая строка '100% бесплатно', не содержит спан! - ",spamCheck('100% бесплатно'));
console.groupEnd('Задание 2.2');
console.groupEnd('2 Строки (объект String)');

document.write("<br />3 Классы<br />");
document.write("<br />3.1 Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия),\n" +
"rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(),\n" +
"который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество\n" +
"отработанных дней days<br />");
console.group('3 Классы');
console.group('Задание 3.1-3.2');
console.log("3.1 Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(),который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days");
class Worker {
    constructor(name, surname, rate, days){
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary(){
        let salary = 0;
        return salary = this.rate * this.days;
    }
}
document.write("<br />3.2 С помощью класса Worker создайте двух рабочих и найдите сумму их зарплат.<br />");
console.log("3.2 С помощью класса Worker создайте двух рабочих и найдите сумму их зарплат.");
const working1 = new Worker('name1','surname1',100, 22);
const working2 = new Worker('name2','surname2',150, 21);
console.log("Рабочий №1 -",working1);
console.log("Рабочий №2 -",working2);
let sumSalery = working1.getSalary() + working2.getSalary();
console.log("Сумма зарплат рабочих =",sumSalery);
document.write("<br />3.3 Модифицируйте класс Worker следующим образом: сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры<br />");
console.log("3.3 Модифицируйте класс Worker следующим образом: сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры");
console.log("Не сделал!");
console.groupEnd('Задание 3.1-3.2');
console.groupEnd('3 Классы');

document.write("<br />4 Set<br />");
console.group('4 Set');
console.group('Задание 4.1-4.7');
document.write("<br />4.1 Создайте коллекцию Set с начальными значениями 1,2,3.<br />");
console.log("4.1 Создайте коллекцию Set с начальными значениями 1,2,3.");
const collectionSet = new Set([1, 2, 3]);
console.log("    Создана коллекция Set с начальными значениями 1,2,3",collectionSet);

document.write("4.2 С помощью метода has проверьте наличие элемента со значением 3, а затем элемента со значением 4..<br />");
console.log("4.2 С помощью метода has проверьте наличие элемента со значением 3, а затем элемента со значением 4.");
console.log("    Проверка методом has наличие элемента со значением 3 в коллекцию Set - ",collectionSet.has(3));
console.log("    Проверка методом has наличие элемента со значением 4 в коллекцию Set - ",collectionSet.has(4));

document.write("4.3 Добавите еще несколько элементов.<br />");
console.log("4.3 Добавите еще несколько элементов.");
collectionSet.add(4);
collectionSet.add(5);
collectionSet.add(6);
console.log("    Добавлено еще несколько элементов в коллекция Set ",collectionSet);

document.write("4.4 С помощью цикла for-of переберите ее значения и выведите в консоль.<br />");
console.log("4.4 С помощью цикла for-of переберите ее значения и выведите в консоль.");
let sumElements = 0;
console.log("    Значение элемента коллекций Set:");
for (let value of collectionSet){
    sumElements += value;
    console.log(value);
}

document.write("4.5 Найдите сумму этих значений.<br />");
console.log("4.5 Найдите сумму этих значений.");
console.log("    Сумма значений коллекцию Set =",sumElements);

document.write("4.6 Удалите элемент 2.<br />");
console.log("4.6 Удалите элемент 2.");
collectionSet.delete(2);
console.log("    Удален элемент 2 в коллекция Set ",collectionSet);

document.write("4.7 Очистите всю коллекцию.<br />");
console.log("4.7 Очистите всю коллекцию.");
collectionSet.clear();
console.log("    Очищена вся коллекция Set ",collectionSet);
console.groupEnd('Задание 4.1-4.7');
console.groupEnd('4 Set');

document.write("<br />5 Map<br />");
console.group('5 Map');
console.group('Задание 5.1-5.5');
document.write("<br />5.1 Пусть даны 2 массива. Создайте коллекцию Map из этих массивов.<br />");
console.log("5.1 Пусть даны 2 массива. Создайте коллекцию Map из этих массивов.");
const arrMap1 = ["Первый",1];
const arrMap2 = ["Второй",2];
const map1 = new Map([arrMap1,arrMap2]);
console.log("    Коллекцию Map из массивов -",map1);

document.write("5.2 Получите список ключей и значений отдельно.<br />");
console.log("5.2 Получите список ключей и значений отдельно.");
const keyList = map1.keys();
console.log("    Список ключей в коллекции Map -",keyList);
const listOfValues = map1.values();
console.log("    Список значений в коллекции Map -",listOfValues);

document.write("5.3 Получите текущее количество элементов.<br />");
console.log("5.3 Получите текущее количество элементов.");
const amountOfElements = map1.size;
console.log("    Количество элементов в коллекции Map -",amountOfElements);

document.write("5.4 Добавьте и удалите элемент<br />");
console.log("5.4 Добавьте и удалите элемент");
map1.set("Третий",3);
console.log("    Добавленый элемент в коллекцию Map -",map1);
map1.delete("Третий");
console.log("    Удаленный элемент в коллекцию Map -",map1);

document.write("5.5 Произведите поиск по ключу<br />");
console.log("5.5 Произведите поиск по ключу");
console.log("    Поиск ключа: 'Первый' в коллекцию Map -",map1.has("Первый"));
console.groupEnd('Задание 5.1-5.5');
console.groupEnd('5 Map');