/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here
const squares = numbers.map(number => number ** 2);


// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here
const evenNumbers = numbers.filter(number => number % 2 === 0);
// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here
const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);


// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];

// Your code here
const uppercaseWords = words.map(word => word.toUpperCase());

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here
const longWords = words.filter(word => word.length > 4);

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here
const concatenatedString = words.reduce((accumulator, word) => accumulator + word, '');

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: Map, filter, and reduce are essential higher-order functions in JavaScript, allowing for efficient and concise array manipulation. The map function transforms each element of an array by applying a provided function, creating a new array with the results. Filter selectively includes elements based on a specified condition, generating a new array. Reduce aggregates array elements into a single value, utilizing a callback function for customization. These functions facilitate a functional programming paradigm, enhancing code clarity and maintainability by emphasizing a declarative approach to array operations. They contribute to the versatility and expressiveness of JavaScript when working with complex data structures.
