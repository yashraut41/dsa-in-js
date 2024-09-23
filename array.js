

//basic way 
let array1 = []

//create and with elements 
let array2 = [1, 2, 3, 4, 5]
//ways of defining array 
let array = new Array(1, 2, 3, 4, 5)
console.log(array)

//this way array is empty with legth 10
let a = new Array(10)
console.log(a)

//Unnlike many other programming languages, but common for most scripting languages,
//JavaScript array elements do not all have to be of the same type:
let mixElements = [2, null, 'Yashwant', false] //this is valid 
console.log(mixElements);

//all arrays are object in JS so we can check if Object is array 
let number = 13
console.log(Array.isArray(number)) //false
console.log(Array.isArray(mixElements)) //true

