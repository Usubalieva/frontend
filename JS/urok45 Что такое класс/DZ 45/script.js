//    ДЗ 45
(function () {
    'use strict';

   class User {

       constructor(name, surname) {
           this.name = name;
           this.surname = surname;
       }

       getFullName() {
        console.log(`ФИО: ${this.name} ${this.surname}`);
       }

   }


   class Student extends User {

        constructor(name, surname, year, yourYear) {
            super(name, surname);

            this.year = year;
            this.yourYear = yourYear;
        }

        getCourse() {
            return this.year - this.yourYear;

        }
   }

   const student = new Student("Maks", "Maksov", 2021, 2018);
   
   student.getFullName();
   console.log(student.getCourse());

   

}());





