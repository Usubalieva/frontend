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
// let person = {
//     name: "Diana",
//     surname: "Melnikova",
//     age: 25,
//     yearOfBirth: 1995,
//     placeOfBirth: "Moskva"
// };

// let arr2 = ["life", "is", "good"];

// console.log(arr2[2]);
// console.log(person.name, person.yearOfBirth, person.placeOfBirth);




//  Базовые функции  /  Взаимодействие с пользователем

console.log("Сообщение");

alert('Привет гость!'); //Модальное окно - системное - дизайн изменить нельзя!



var result = prompt("Сколько будет 2+2 ?", "");
// prompt - состоит из 2 частей
// 1 часть - вопрос
// 2 часть - ответ по умолчанию

// prompt - запоминает введенные данные для дальнейшей обработки

var msg;
if(result == "4") {
        msg = "Верно";
} else {
        msg = "Не верно";
}

alert(msg);

var result = confirm("Результат сложения 2+2 равен 4?");
alert(result);



// //  DZ
// //  № 1
// let result = prompt("Введите Ваше имя и фамилию: ");
// console.log(result);


// //  № 2
// let a = +prompt("Введите первое число", "");
// let b = +prompt("Введите второе число", "");

// alert(a + b );


// //  № 3
// let c = prompt("Введите первое число", "");
// let d = prompt("Введите второе число", "");

// alert( c * d );