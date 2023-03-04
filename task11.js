
//Functions 

//que 1

// a()
// b()

// function a() {
//     console.log('inside a');
// }

// var b = function() {

// console.log('inside b');

// }

//ouput b is not a function

//que  3

// function a() {
//     console.log('inside a');
// }

// var b = function abc() {
//     console.log('inside b');
// }
// a();
// abc();

//abc is not defined



//que 4

// function fun (a) {
//     console.log(a);
// }

// var b =10;
// fun(b);


//que 5a)

// function fun1() {
//     console.log('a');
//     return () => {
//         console.log('b')
//     }
// }
// fun1();

//output a 


//que 5 b)


// function fun1() {
//     var a =10;
//     return() => {
//         a =20;
//         console.log(a)

//     }
// }
// fun1()()

//output 20


// que 5 c)

// function fun1(a) {
//     return () => {
//         a =a+20;
//         console.log(a)
//     }
// }
// fun1(10)(20);

//output 30

//que 5 d)

// function fun1(a) {
//     return (b) => {
//         a = a+b;
//         console.log(a);
//     }
// }
// fun1(10)(30)

//output 40

//que 5 e)

// function fun1(a) {
//     const fun2 = (b) => {
//         a = a+b;
//     console.log(a)
//     }
// }
// fun1(10)(30)

//fun1(...) is not a function