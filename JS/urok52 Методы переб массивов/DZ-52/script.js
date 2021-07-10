//    ДЗ 52
(function () {
    'use strict';

    //  1
    let str = "alex denis victory";
    let res = str.split(" ");
    console.log(res);



    //  2
    let str2 = "1 2 3";
    let array = str2.split(" ");
    let arr2 = array.map(Number);
    let result = arr2.reduce((count, item) => count + item);
    console.log(result);

   

}());





