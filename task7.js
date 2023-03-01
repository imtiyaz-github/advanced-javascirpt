// call and Bind 

 // que 1
// var obj = {

//     val:100
// }
// function fun() {
//     console.log(this.val)
// }
// fun()

//output undefined

//que 2

// var obj = {
//     val:100
// }
// function fun() {
//     console.log(this.val)
// }
// obj.fun()

//obj is not a function

// que 3

// var obj = {
//     val:100
// }
// function fun() {
//     console.log(this.val)
// }
// fun.call(obj);

//output is 100

// //que 4
// var obj = {
//     val:100
// }
// function fun(a) {
//     console.log(this.val +a)
// }
// fun.call(obj)

// //output NaN 

// //que 5
// var obj  = {
//     val:100
// }
// function fun(a) {
//     console.log(this.val +a)
// }
// fun.call(obj,3)

//output 103

//que 6

// var obj = {

//     val: 100

//     }
//     function fun(a, b , c){
    
//     console.log(this.val + a + b + c)
    
//     }
    
//     fun.call(obj, 3, 4, 5)

    //output 112



    // que 7
    
// var obj = {

//     val: 100
    
//     }
    
//     function fun(a, b , c){
    
//     console.log(a)
    
//     console.log(b)
    
//     console.log(c)
    
//     }
    
//     fun.call(obj, [3, 4, 5])

    //ouput [3,4,5] and undefined undefined
    
//que 8

// var obj = {

//     val: 100
    
//     }
    
//     function fun(a, b , c){
    
//     console.log(this.val + a + b + c)
    
//     }
    
//     fun.apply(obj, 3, 4, 5)
    
    //TypeError: CreateListFromArrayLike called on non-object at object 
    
    //que 9

    // var obj = {

    //     val: 100
        
    //     }
        
    //     function fun(a, b , c){
        
    //     console.log(this.val + a + b + c)
        
    //     }
        
    //     const fun2 = fun.bind(obj)
        
        
        
    //     fun2(1, 2,3)

//output 106