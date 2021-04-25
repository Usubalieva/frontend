//  DZ
//    № 1

let a = prompt("Введите первое число");
let b = prompt("Введите второе число");

function min(a, b) {
	if (a < b) {
		return a;
	} else {
		return b;
	}
}

console.log(min(a, b));



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


