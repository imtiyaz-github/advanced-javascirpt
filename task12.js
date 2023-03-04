
//callBack Function


//que 1

// setTimeout(() => console.log('timer expired'),1000)

// function x(y) {
//     console.log('inside x');
//     y();
// }
// x(function y(){
//     console.log('inside y')
// })

//  ouput  inside x 

//inside y 

// timer expired


// //que 2

// setTimeout(() => console.log('timer1 expired'),1000)

// setTimeout(() => console.log('timer2 expired'),0)

// function x(y) {
//     console.log('inside x');
//     y();
// }
// x(function y() {
//     console.log("inside y")
// }) 
//ouput inside x 
//  inside y
//  timer 2 expired
//  timer 1 expired

//que 3

// setTimeout(() => console.log('timer1 expired'),1000)

// setTimeout(() => console.log('timer2 expired'),0)

// function x(y) {
//     console.log('inside x');
//     y();
// }
// x(function y() {
//     setTimeout(() =>console.log('inside y'),0)
// })


 //output inside x
// timer 2 expired

// insde y

// timer 1 expired