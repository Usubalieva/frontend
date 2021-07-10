"use strict";
//    DZ  35

function getPersonInfo(name, surname, option1, ...rest) {
    console.log(`${name} ${surname} ${option1}, ${rest.join(', ')}`);
}

getPersonInfo('Bret', 'Pit', 'option1', 'option2', 'option3', 'option4');



    