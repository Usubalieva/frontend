//    ДЗ 42

let click = document.getElementById("btn1");
let click2 = document.getElementById("btn2");
let click3 = document.getElementById("btn3");
let click4 = document.getElementById("btn4");
let click5 = document.getElementById("btn5");

let delete_elem = (e) => {
    e.target.remove();
};

click.addEventListener('click', delete_elem);
click2.addEventListener('click', delete_elem);
click3.addEventListener('click', delete_elem);
click4.addEventListener('click', delete_elem);
click5.addEventListener('click', delete_elem);