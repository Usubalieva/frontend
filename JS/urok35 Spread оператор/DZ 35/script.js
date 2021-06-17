
//    DZ
// №1) 
function copy_arr(myObj) {

    const newObj = {};

    let key;
    for(key in myObj){
        newObj[key] = myObj[key];
    }

    return newObj;

}


const oldObj = {
    name: "Ismar",
    surname: "Suleimanov",
    hobby: {
        1: "swimming",
        2: "running",
        3: "reading",
        4: "dancing"
    }
};

 console.log(oldObj);
 const newObj = copy_arr(oldObj);

    

function myFunc = {
    yourName = prompt("Введите имя: "),
    surname =  prompt("Введите фамилию: ");

 }
    