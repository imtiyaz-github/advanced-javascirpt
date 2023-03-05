
//Applications of event loop and spread operators

// console.log('a');
// console.log('b');

// setTimeout(() => console.log('c'),1000)
// console.log('d');

//output is a b  d & c will wait for 1 sec 

//que 2

// console.log('a');
// console.log('b');

// setTimeout (() => 
// console.log('c'),0)
// console.log('d')

//output a b d c and it will not wait for any second because it will will mention as 0 second

//que 3

// console.log('a');
// console.log('b');
// setTimeout(() =>console.log('e'),1000)
// setTimeout(() => console.log('c'),0)
// console.log('d')

//output a b d c and wait 1 sec for e


//que 4

// const obj1 = {
//     key1: "hello",
//     key2: "hello world!"

// }

// // obj1.key1 = "value100"
// const obj2 = {...obj1, key1: 'value10',key3: 'value3'}

// console.log(obj2);

//output { key1: 'value10', key2: 'hello world!', key3: 'value3' }

//que 5

// const arr1 = [ {a:1},{b:2},{c:2}];

// const arr2 = [3,4];

// const obj = {d:2};

// const arr3 = [...arr1,...arr2 ,obj];

// console.log(arr3);

//output [ { a: 1 }, { b: 2 }, { c: 2 }, 3, 4, { d: 2 } ]

// que 6

// const obj1 = {
//     'key1':"value1",
//     'key2':'value2',
//     'key3':'value3'
// }

// const obj2  = {...obj1}

// console.log(obj2);

//output { key1: 'value1', key2: 'value2', key3: 'value3' }


// que 7

// const ob1 = {
//    key1:'value1',
//    key2: 'value2',
//    key3: 'value3'
// }
// const obj2 = {...obj2 , key3:'new value'}

 
// output ReferenceError: Cannot access 'obj2' before initialization
  

//que 8

// const obj1 = {
//     key1:'value1',
//     key2:'value2',
//     key3:'value3'
// }
// const obj2 = {...obj1,key3:'new value' ,key1:'new val'}

//empty output

//que 9

// const obj = {
//     key1:'value1',
//     key2:'value2',
//     key3:'value3'
// }
// const obj2 = {...obj}

// console.log(obj2===obj)

//output false

//que 10

// const arr1 = [1,2,3]

// const arr2 = [3,5,6]

// const arr3 = [...arr1,...arr2]

// console.log(arr3);


//output  [ 1, 2, 3, 3, 5, 6 ]



//the use of spred operator 

//allows us to quickly copy all or part of an existing array or object into another array or object.