//    ДЗ 49
(function () {
    'use strict';

    const   inputSom = document.querySelector("#som"),
            inputRub = document.querySelector("#rub");

    inputSom.addEventListener( 'input', () =>{

        const request = new XMLHttpRequest();

        request.open("GET", "current.json");

        request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
        request.send();


        request.addEventListener('load', () => {

            if(request.status === 200){

                const currency = JSON.parse(request.response);

                const result = inputSom.value / currency.current.usd;

                inputRub.value = (result).toFixed(2);

            } else {
                inputRub.value = "Что-то пошло не так";
            }

        });

     });





    const   inputSomm = document.querySelector("#somm"),
            inputUsdd = document.querySelector("#usdd");

    inputSomm.addEventListener( 'input', () =>{

        const request_ = new XMLHttpRequest();

        request_.open("GET", "currenty.json");

        request_.setRequestHeader("Content-type", "application/json; charset=UTF-8");
        request_.send();


        request_.addEventListener('load', () => {

            if(request_.status === 200){

                const currency = JSON.parse(request_.response);

                const result2 = inputSomm.value * currency.current.usdd;

                inputUsdd.value = (result2).toFixed(2);

            } else {
                inputUsdd.value = "Что-то пошло не так";
            }

        });

     });



   

}());





