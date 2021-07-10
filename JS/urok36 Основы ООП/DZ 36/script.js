
//    DZ

let salary = {
    almaz: 1200,
    adilet: 1300,
    nursultan: 3000,
    getBonus(bonus) {
        for (let key in bonus) {
            console.log(`${key} ${this[key] += bonus[key]}`);
        }
    }
};

let bonus = {
    almaz: 400,
    adilet: 300,
    nursultan: 200,
};

salary.getBonus(bonus);



 
    