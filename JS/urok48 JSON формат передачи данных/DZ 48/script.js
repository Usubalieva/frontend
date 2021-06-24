//    ДЗ 48
(function () {
    'use strict';

    const myObj = {
        listen: "music",
        dance: "hip-hop",
        read: {
          one: "books",
          two: "different articles",
          three: "magazines"
        } 

  };

  console.log(JSON.stringify(myObj));
  
  console.log(JSON.parse(JSON.stringify(myObj)));

   

}());





