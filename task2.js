
//Hoisting in Javascript

//examples

//  question 1

var a = 3;



function printName(name){

console.log(name)

}



printName("YAVTECH");

console.log(a)

//question 2


printName("YAVTECH");

console.log(a);



var a = 3;



function printName(name){

console.log(name)

}

 //question 3

 console.log(printName());

console.log(a);



var a = 3;



var printName = (name) => {

console.log(name)

}

//question 4


console.log(printName);

console.log(a);



var a = 3;



var printName = function (name) {

console.log(name)

}
