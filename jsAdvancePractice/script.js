// Array  ( revision topics: forEach, map, filter, indexOf find)
// First thing that js and python array can hold elements of different
// data types for example
let jsArray = [1, "can hold string also", true, 4.3, {}, [], false]
// The above array statement is correct 


// forEach
let array = [1, 2, 3, 4, 5, 6]

array.forEach( val => {
    console.log(val + 10);
})


// Now, array.map

let copyArray = array.map(val => {
    return val;
})

console.log(copyArray);

let allElementsAre5 = array.map(val => {
    return 5; // will make all elements of array(original) to 5, this is because when we use map function it creates an blank/empty array of same elements in which map function is used
});

console.log("Array of number 5 elements: " + allElementsAre5);


// Now array.filter 
// what array.filter does is it filter only elements you need instead of copying complete array like map function does
let oneTwo = array.filter(val => {
    return val < 3;
})

console.log(oneTwo);

// Now lets revise array.find 
// array.find: we can search for an element inside an array if the element is present in the 
// array it will return the element one thing to note that it will return only one element so if there is a case wehere 
// there are more than one same element in array it will return the first one

let arrayFind = array.find(val => {
    return val === 4
})

console.log(arrayFind)
