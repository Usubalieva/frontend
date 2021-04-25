// 2) По клику на кнопку добавить в корзину товар с след параметрами:
//         1) Картинка
//         2) Заголовок
//         3) Доп параметры цвет
//         4) Цена
//     3) Добавить в корзину

//  Конкретные задачи:
    /*  Получить картинку 
                 заголовок
                 доп параметры
                 цену
    */
//    Принцип получения данных следующий:
//    Получить данные можно с помощью:
/*      .class
        #id 
        attribute 
        tag 
*/

//  .class - document.getElementsByClassName - 
//     Внутри документа получить елементы по названию класса

// let ttl = document.getElementsByClassName("ttl");
// console.log(ttl[1].innerText);
// console.log(ttl[3].innerText);
// console.log(ttl[4].innerText);
// console.log(ttl[5].innerText);
// console.log(ttl[6].innerText);


// let ttl = document.querySelectorAll(".body_product > .ttl");

// console.log(ttl);
//  Вариант вывода номер 1
    // console.log(ttl[0].innerText);
    // console.log(ttl[1].innerText);
    // console.log(ttl[2].innerText);
    // console.log(ttl[3].innerText);
    // console.log(ttl[4].innerText);

    // for (let text of ttl) {
    //     console.log(text.innerText);
    // }

var elements = document.getElementsByClassName("add_cart");

var myFunction = function() {
    var attribute = this.parentNode.parentNode.parentNode.querySelectorAll(".ttl");
    alert(attribute[0].innerText);
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}


// Что такое function ???

let num = 200;

function nameFun(num){
    let perConst = 120;
    let result;

    result = perConst + num;
    console.log(result);
}
nameFun(num);

// Методы и свойства строк

let text = "      Привет! Как у тебя дела?     ";
console.log(text);
console.log(text.trim());


// Методы и свойства чисел
let number = 120;
number.toString();

let x = 9;
let a = "10";
let result = x + +a;

console.log(result);