// Urok 49
(function () {
    'use strict';

    const   inputSom = document.querySelector("#som"),
            inputUsd = document.querySelector("#usd");

    inputSom.addEventListener( 'input', () =>{

        const request = new XMLHttpRequest();

        request.open("GET", "current.json");
        //  request.open(method(GET/POST), url, asy, login, passw);
        request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
        request.send();


        request.addEventListener('load', () => {

            if(request.status === 200){
                // console.log(request.response);
                // console.log(JSON.parse(request.response));

                const currency = JSON.parse(request.response);

                const result = inputSom.value / currency.current.usd;

                inputUsd.value = (result).toFixed(2);

            } else {
                inputUsd.value = "Что-то пошло не так";
            }

        });



        // status
        // statustext
        // response
        // readyState
     });

    

     


// Urok 51

    const   search      = document.querySelector("[name='search']"),
			btnSearch   = document.querySelector(".search button"),
            search_res  = document.querySelector(".search_result");

	btnSearch.addEventListener( 'click', (e) => {
		e.preventDefault();



        fetch('search.php', {
            method: "POST",
            body: JSON.stringify({query: search.value}),
            headers:{
                "Content-type": "application/json"
            }
        })
        .then(response => response.json())
        .then(json => {

            let creat_ul = document.createElement('ul');

            for (let i = 0; i < json.length; i++) {

                creat_ul.innerHTML += `<li>
                                        <a href="${json[i].href}">${json[i].text}</a>
                                        </li>`;

            }

            search_res.innerHTML = creat_ul.outerHTML;
        })
        .catch(console.log("Ошибка"));
        

    //     const request_ = new XMLHttpRequest();

    //     request_.open("GET", "search.php?query="+search.value);

    //     // request_.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    //     request_.send();


    //     request_.addEventListener('load', () => {

    //         if(request_.status === 200){
    //             // console.log(request.response);

    //             const data = JSON.parse(request_.response);

    //             // console.log(data[1].text);

    //             let creat_ul = document.createElement('ul');

    //             for (let i = 0; i < data.length; i++) {

    //                 creat_ul.innerHTML += `<li>
    //                                         <a href="${data[i].href}">${data[i].text}</a>
    //                                         </li>`;

    //             }
                
    //             search_res.innerHTML = creat_ul.outerHTML;

    //         }
    //     });

     });



    }());



