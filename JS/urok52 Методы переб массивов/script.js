// Urok 52
(function () {
    'use strict';

    //filter
    // const array = ["Яблоко", "Груши", "Виноград", "Апельсин",];

    // const result = array.filter(name => name.length < 7); 
    
    // console.log(result);



    //map

    // const array = ["Яблоко", "ГРУША", "Виноград", "Апельсин",];

    // const result = array.map(item => item.toLowerCase());

    // console.log(result);



    // every / some

    // const array = ["ГРУША", "Виноград", "1"];

    // const result = array.some(item => typeof(item) === 'number');
    // const result = array.every(item => typeof(item) === 'string');

    // console.log(result);



    // reduce 

    // const array = [1,2,3,4,5,6];
    //            //  1+2+3+4+5+6

    // const result = array.reduce((count, item) => count + item);
    // console.log(result);


    // const array = ["Ismar","2","3","Suleimanov","5","6"];

    // const result = array.reduce((count, item) => `${count} / ${item}`, "Итого:");
    // console.log(result);



    const obj = {
        suleimanov: "sname",
        ismar: "name",
        26: "age"
    };

    const result = Object.entries(obj)
    .filter(item => item[1] === 'name')
    .map(item => item[0]);

    console.log(result);

   



}());



