
//    DZ
//    № 1

function stepen() {
    let x = +prompt("Введите число: "),
        y = +prompt("Введите степень: "),
        z = x ** y;

    console.log(z);
}
stepen();



//   № 2

let radius = prompt("Введите радиус");

function result (radius){
    var circle = {
        length : function (){
            return Math.PI * 2 * radius;
        }
    };
    return [circle.length()];
}
 
var answer = result (radius);
console.log (answer);



//  № 3

function mathFun() {
    let a = +prompt("Введите длину прямоугольника:"),
        b = +prompt("Введите ширину прямоугольника:"),
        s = a * b;
        console.log(s);
}

mathFun();
