//adavanced Closures

//que 1

// function y() {
//     setTimeout(() => console.log("a"),1000)
//     console.log('Done Coding');
// }
// y();

//output Done Coding and after 1 second  a


//que 2
// function y() {
//     setTimeout(() => console.log('a'),0)
//     console.log("Done Coding")
// }
// y();

//output Done coding and immediately a also


//que 3

// function y() {
//     for(var i=1;i<6;i++) {
//         setTimeout(() => console.log(i),i*1000)
//     }
//     console.log("Done Coding");
// }
// y();

//ouput Done Coding and after every 1 second 6 6 6 6 6


// //que 4

// function y() {
//     for(let i=1;i<6;i++) {
//     setTimeout(() => console.log(i),i*1000)
// }
// console.log('Done Coding');
// }
// y();

//output Done Coding and after every second 1 2 3 4 5 


// //que 5
// const fun =(arr) => {
//     var count  = 0;
//     return () => {
//         console.log("Hello "+arr[count]);
//         count++;
//     }
// }
// const name  = fun (['Ram','Shyam'])

// name();
// name();

//output Hello ram and Hello Shyam

