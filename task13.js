//fat arrow Functions

//que 1

// var fun = a => a

// var a = 10;
// console.log(fun(a))


// ouput 10

//que 2

// var fun = a=> a

// console.log(fun(a))
// var a =10;

//ouput undefined

//que 3

// var fun =  a=> {a}

// var a =10;

// console.log(fun(a))

//output undefined

//que 4

// var fun = (a,b) => {
//     var sum = a+b
//     return sum
// }
// var a =10;
// var b =20;
// console.log(fun(a,b));

// output 30

//que 5

//  var fun  =(a,b) =>
//  var  sum  = a+b

//  return sum;

//  var a =10;
//  var b =20;
//  console.log(fun(a,b))

//ouput unexpectd token

 //que 6
// var student = function(name) {
//     this.name =name;
//     function printName() {
    
//         console.log(this.name)
//     }
//     printName()
// }
// var yash = new student('yash')

//output undefined


//que 7 important


// var student  =function(name) {
//     this.name = name;
//     var printName =  () => {
//     console.log(this.name)
// }
// printName()
// }
// var yash  =new student('yash')


//output yash

//difference between arrow function and normal function
//it allows you to create functions more cleanly compared to regular funcinons 