"use strict";

//  использование строгого режима для обработки данных

let number = 1; 
        //  данные к/е указываются без скобок = числа

let text = "Ismar";
        //  данные к/е заключены в кавычки называются строки "string"

console.log(10*5);
console.log(number + text);
        //  текст + цифра = будет означать операцию склеивания
        //  + это операция склеивания и сложения

// true, false
let number2 = false;
console.log(number2);


// console.log(unknown); // не найдено.


// создание объекта начинается с фигурных скобок
let obj = {
    name: "Alex",
    age: 27,
    location: "Kyrgyzstan"
};

// Первый вариант получения данных из объекта
console.log("Name:" + obj.name + " Age:" + obj.age);

// Второй вариант получения данных из объекта
            //  obj - это переменная
            //  [] - это указание позиции и уточнения объекта
            //  "" нужны для определения объекта
            //  name это название объекта
console.log(obj["name"]);




// МАССИВЫ
// В массивах используются сразу значения
// для получения значения необходимо использовать порядковый номер
        //    0         1        2
let arr = ["яблоко", "iphone", "pen"];

console.log(arr.яблоко); // underfined

console.log(arr[1]); // яблоко




//  DZ
let person = {
    name: "Diana",
    surname: "Melnikova",
    age: 25,
    yearOfBirth: 1995,
    placeOfBirth: "Moskva"
};

let arr2 = ["life", "is", "good"];

console.log(arr2[2]);
console.log(person.name, person.yearOfBirth, person.placeOfBirth);
