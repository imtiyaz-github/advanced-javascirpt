//Closures, Settimeout, ES6 features

// 5 new features introduced in es6 are 
// arrows.
// classes.
// enhanced object literals.
// template strings.
// let + const.

// ES6 provides a feature known as Arrow Functions. It provides a more concise syntax for writing function expressions by removing the "function" and "return" keywords.

// ES6 also provides Multi-line Strings. Users can create multi-line strings by using back-ticks(`).

// ES6 provides enhanced object literals, making it easy to quickly create objects with properties inside the curly braces.

// In ES6, we can declare a class using the new "class" keyword followed by the name of the class.

// The keyword "let" enables the users to define variables and on the other hand, "const" enables the users to define constants






//the main difference between forEach and map function? 


//The forEach() method does not return a new array, whereas the map() method returns a new array.

//example for each method

var arr = [1, 2,3,5]



var newArr = arr.forEach((item, i ) => {

console.log(item + 'index' + i)

return item + i

})



console.log(newArr)

//example 2 for map method



var arr = [1, 2,3,5]



var newArr = arr.map((item, i ) => {

console.log(item + 'index' + i)

return item + i

})



console.log(newArr)
