//    ДЗ 43

let click = document.getElementById("btn1");
let click2 = document.getElementById("btn2");
let click3 = document.getElementById("btn3");


    let changeColour = function (e) {

        if (e.target === click) {
            document.body.style.background = "green";

        }

        if (e.target === click2) {
            document.body.style.background = "yellow";
        }

        if (e.target === click3) {
            document.body.style.background = "red";
        }

    };

    click.addEventListener('click', changeColour, false);
    click2.addEventListener('click', changeColour, false);
    click3.addEventListener('click', changeColour, false);

