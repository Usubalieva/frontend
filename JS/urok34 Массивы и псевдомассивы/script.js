"use strict";

//  использование строгого режима для обработки данных

// let number = 1; 
        //  данные к/е указываются без скобок = числа

// let text = "Ismar";
        //  данные к/е заключены в кавычки называются строки "string"

// console.log(10*5);
// console.log(number + text);
        //  текст + цифра = будет означать операцию склеивания
        //  + это операция склеивания и сложения

// true, false
// let number2 = false;
// console.log(number2);


// console.log(unknown); // не найдено.


// создание объекта начинается с фигурных скобок
// let obj = {
//     name: "Alex",
//     age: 27,
//     location: "Kyrgyzstan"
// };

// Первый вариант получения данных из объекта
//console.log("Name:" + obj.name + " Age:" + obj.age);

// Второй вариант получения данных из объекта
            //  obj - это переменная
            //  [] - это указание позиции и уточнения объекта
            //  "" нужны для определения объекта
            //  name это название объекта

// console.log(obj["name"]);




// МАССИВЫ
// В массивах используются сразу значения
// для получения значения необходимо использовать порядковый номер
        //    0         1        2
// let arr = ["яблоко", "iphone", "pen"];

// console.log(arr.яблоко); // underfined

// console.log(arr[1]); // яблоко





//  Базовые функции  /  Взаимодействие с пользователем

// console.log("Сообщение");

// alert('Привет гость!'); //Модальное окно - системное - дизайн изменить нельзя!



//var result = prompt("Сколько будет 2+2 ?", "");
// prompt - состоит из 2 частей
// 1 часть - вопрос
// 2 часть - ответ по умолчанию

// prompt - запоминает введенные данные для дальнейшей обработки

// var msg;
// if(result == "4") {
//         msg = "Верно";
// } else {
//         msg = "Не верно";
// }

// alert(msg);

// var result = confirm("Результат сложения 2+2 равен 4?");
// alert(result);





//      UROK 26
//   Условные операторы

//  Важно знать !!!
        // Операции значений всегда будут возвращать одно из след значений
        // TRUE
        // FALSE
//alert(2 == 4);  // == операция сравнения

// alert(8 > 4);
// alert(4 < 4);

// alert(4<=4);
// alert(4>=5);

//  alert(12 != 5);  // Не равно!

// alert("2" == 2);
// Когда происходит операция сравнения Значения конвертируется в цифры
// == сравнение значений (она конвертирует текста в цифры)

// alert("2" === 2);
// === сравнение типов данных + значения

        // if(4==2){
        //         alert("Ответ правильный");
        // } else {
        //         alert("Ответ не правильный!");
        // }



//  УРОК 34
// Массивы и псевдомассивы

const arr2 = [1,2,3,4,5];
// Индексы: 0,1,2,3,4
console.log(arr2);

 // console.log(arr2.pop());

//console.log(arr2);

 // arr2.push(10);

//console.log(arr2);
// резлультат [3,4,10]
// индексы     2,3,4

//console.log(arr2[2]);
// резлультат 3

// arr2.unshift(15);
//arr2.unshift(10);

// console.log(arr2);

// console.log(arr2[2]);

// delete arr2[0];
// delete arr2[1];

//console.log(arr2.length);
//console.log(arr2);

//arr2[50] = 20;

//console.log(arr2);

// for(let i = 0; i<arr2.length; i++) {
//     console.log(arr2[i]);
// }

// for (let value of arr2) {
//     console.log(value);
// }

// arr2.forEach(function(item, index, arr2){

//     // console.log(index);
//     //console.log(index);

//     console.log("Индек:"+index+" Значение:"+item+" из массива = "+arr2);

// });

let object = {0: 1, 1: 2, 2: 3, length: 3};

let array = [];



// Преобразуем псевдомассив в массив
for (let i = 0; i < object.length; i++) {
  array.push(object[i]);
  console.log(object[i]);
}

console.log( array ); // [1, 2, 3]