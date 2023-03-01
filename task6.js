
// Closures (99 % interviewers ask this)


// function x() {
//     let  a=10;
//     function y() {
//         console.log(a);
//     }
//     y();
// }
// x();


// function x(){

//     let a = 10;
    
//     function y(){
    
//     return a;
    
//     }
    
//     console.log(y());
    
//     }

//     x();
//     //output 10

   
 //3rd
// function x() {
//         let a =10;
//         function y() {
//             console.log(a);
//         }
//         return y;
//         }
//     console.log(x());

    //did not output anything
    
    //4th que

//     function x() {
//         let a =10;
//         function y() {
//             console.log(a);
//         }
//         return y;
//     }

//   const z = x()

//   console.log(z());

  //output 10 and undefined

//   function x(){

//     let a = 10;
    
//     function y(){
    
//     console.log(a);
    
//     }
    
//     a= 50;
    
//     return y;
    
//     }
    
    
    
//     const z = x()
    
//     console.log(z());

    //output 50 and undefined
