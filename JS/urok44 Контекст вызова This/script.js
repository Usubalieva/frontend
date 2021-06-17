// Urok 44
(function () {
    //  'use strict';

    // function get_this(a,b) {
    //     // console.log(this);

    //     function arif() {
    //         console.log(this);

    //         return a + b;
    //     }
    //     console.log(arif());
    // }

    // get_this(10,3);


    
    //  this - это возможность вызова объекта и всего содержимого, что находиться внутри 
    //  объекта.
    //  использование this внутри функции также будет обращаться к window
    //  если мы включим 'use strict" this выдаст сообщение undefined.


    // const obj = {
    //     name:  "Ismar",
    //     age: 26,
    //     sum: function() {
    //         console.log(this);
    //         // доступен (Ismar / 26)

    //         function test() {
    //             console.log(this);
    //             // не доступен (underfined)
    //         }
    //         test();
    //     }
    // };

    // obj.sum();

    //  при использовании this внутри метода объекта obj у this есть возможность рядом стоящие данные
    //  если внутри одного метода создать функции и внутри него использовать this то она обратиться к глобальному окну window
    
    // function User(name, age) {
    //     this.name = name,
    //     this.age = age,
    //     this.data_ = function() {
    //         console.log("Hello " + this.name);
    //     };
    // }

    // let ismar = new User("Ismar", 26);

    // ismar.data_();

    // This может быть использован внутри функции, к/я создает объекты и this получит предсозданные объекты и их данные.


    // function hellow(age) {
    //     console.log(this);
    //     console.log(this.name);
    //     console.log(age);
    // }

    // const newObj = {
    //     name: "Ismar",
    // };

    // hellow.call(newObj, 26);
    // hellow.apply(newObj, [26]);

    
    // function count(num) {
    //     return this+num;
    // }

    // const mnojitel = count.bind(5);
    // console.log(mnojitel(10));


    const click = document.querySelector("#btn1");

    click.addEventListener('click', function(){
        this.remove();
    });


}());



