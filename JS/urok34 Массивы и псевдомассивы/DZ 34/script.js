
//    DZ
// №1) Преобразуйте псевдо массив  в массив
    // дан псевдо массив  {0: 'first', 1: 'second', 2: 'third', length: 3} 
    // вывод [ "first", "second", "third" ]

        let object = {0: 'first', 1: 'second', 2: 'third', length: 3};
        let array = [];

        for (let i = 0; i < object.length; i++) {
            array.push(object[i]);
            console.log(object[i]);
        }
        console.log(array);



// №2)    дан массив ["first", "second", "third" ]
    // вывод [ "f", "i", "r", "s", "t" ], [ "s", "e", "c", "o", "n", "d" ] [ "t", "h", "i", "r", "d" ] 

    let object2 = ["first", "second", "third" ];
    let array2 = [];
    for (let i = 0; i < object2.length; i++) {
        object2 = array2.split('');
        console.log(object2[i]);
    }
    console.log(array2);

    // брррррррррррррррррррр  надо решить ..

    let myStr = ["first", "second", "third" ];
    //let myStr = "first";
    let myStrings = myStr.split('');
    console.log(myStrings);

    

    