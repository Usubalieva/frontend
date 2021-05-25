"use strict";

//  использование строгого режима для обработки данных

// ООП - понятие 
    // Применение


    // Как понять что есть строка

    let str = "текст";
    let strObj = new String(str);

    // console.log(typeof(str));
    // console.log(strObj);

    let array = [1,2,3];

    // console.log(array);


    let car = {
        kuzov: "Железо",
        kolesa: "4 колеса",
        modal: function(){
            alert("Hello");
        }
    };
    
    // let mb = {
    //     marka: "Мерс",
    //     god: "2021"
    // };

    // let mb = Object.create(car);


    // mb.__proto__ = car;

    // Object.setPrototypeOf(mb, car);

    // console.log(mb.modal);

    // mb.modal();



    // Urok 38
//  Динамическая типизация

// let number = +"1";
// console.log(number + 5);
// console.log(parseInt(number) + 5);
// console.log(typeOf('1'));

//let res_input = +prompt("Введите свой возраст", "");
// console.log(typeof(res_input));

// console.log(res_input + 10);

// console.log(res_input);


//https://miukid.com/cat/
//console.log(`https://miukid.com/cat/${res_input}`);


// Urok 42

let click = document.getElementById("btn1");
let click2 = document.getElementById("btn2");

// click.onclick = function() {
//     alert("Click");
// };

// click.onclick = function() {
//     alert("Click 2");
// };

let delete_elem = (e) => {
    e.target.remove();
};

click.addEventListener('click', delete_elem);
click2.addEventListener('click', delete_elem);


// click.addEventListener('click', () => {
//     alert("click");
// });

