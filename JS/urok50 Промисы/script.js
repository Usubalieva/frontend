// Urok 50
(function () {
    'use strict';

    // console.log("Запрос данных ...");


    // const req = new Promise(function(resolve, reject){

    //     setTimeout(() => {
    //         console.log("Обработка данных");
    
    //         const data = {
    //             name: "Product",
    //             price: 5000
    //         };
    
    //         resolve(data);
    
    
    //     }, 1500);

    // });
    

    // req.then(data =>{

    //     return new Promise(function(resolve, reject) {

    //         setTimeout(() => {
    
    //             data.status = "order";
    //             reject();
        
    //         },2000);
    
    //     });

    // }).then(data => {
    //     data.modify = "modify";
    //     return data;

    // }).then(data => {
    //     console.log(data);

    // }).catch(() => {
        
    //     console.log("Ошибка получения данных");

    // }).finally(() => {

    //     console.log("Очистка полей");
    // });




    const test = time => {
        return new Promise(resolve => {
            setTimeout(() => resolve(), time);
        });
    };

    test(1000).then(() => console.log("Time 1000s"));
    test(2000).then(() => console.log("Time 2000s"));


    Promise.all([test(1000), test(2000)]).then( () => {
        console.log("all done");
    });


    Promise.race([test(1000), test(2000)]).then( () => {
        console.log("all done");
    });

}());



