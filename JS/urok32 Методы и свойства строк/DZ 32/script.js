
//    DZ
// сделайте функцию которая суммируем два числа с плавающей точкой
// пример: если пользователь  ввел 1.2, 1.2 вывод должен быть 2. 
// пример: если пользователь  ввел 2.5, 2.3 вывод должен быть 5
// пример: если пользователь  ввел 2,5, 2.7 вывод должен быть 5. 
// пример: если пользователь  ввел 2,5, 3,2 вывод должен быть 6.


function sum(){
    let x = +prompt("Введите число: "),
        y = +prompt("Введите степень: "),
        z = x + y;

    console.log(z.toFixed(0));
}
sum();

