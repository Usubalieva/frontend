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

let ttl = document.getElementsByClassName("ttl");
console.log(ttl[1].innerText);

