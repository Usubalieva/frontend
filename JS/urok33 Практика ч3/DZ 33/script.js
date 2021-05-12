
//    DZ
// №1)  Сделать callback функцию которая просит ввести логин и пароль,
//       и проверяет правильно ли введены данные пользователя 
// №2) Сделать callback функцию которая создаёт html элемент,
//      то есть функция просит какой тег создать, просит какой текст ввести и цвет текста.



function myFunc(user, pass, showMessage, out) {
    let myUser = prompt("Введите логин: ");
        
        if (user == myUser) {
            let myPass = prompt("Введите пароль: ");
            showMessage();
        }   else{
            out();
        }

}

function showTrueMessage() {
    alert("Правильно! Добро пожаловать админ!");
}
function outFalse() {
    alert("Что-то неправильно ввели :( ")
}
myFunc("login", "mypass", showTrueMessage, outFalse);










    function myFunction() {
        let login = prompt("Веедите логин");
        userPass = prompt("Введите пароль");

        if (login == "login" && userPass == "pass") {
            loginOk = true;
            alert("Правильно! Добро пожаловать админ!");
        }else (login_ok==false){
             alert("Неверный логин или пароль!");
        }
    }