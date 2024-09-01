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
