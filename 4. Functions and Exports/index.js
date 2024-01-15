/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Call the 'greet' function with your name
greet("Paulo Bowan");

// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: In JavaScript, a function declaration is created using the function keyword, followed by a name, parameters, and a function body. Function declarations are hoisted, allowing them to be called before their actual placement in the code. Conversely, a function expression involves assigning an anonymous function to a variable. This type of function is not hoisted, requiring it to be declared before being called in the code. The primary distinction lies in the hoisting behavior, making function declarations more flexible in terms of order of invocation compared to function expressions.

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Todo 4.2
const calculateArea = function(length, width) {
    return length * width;
};

// Call the function
const area = calculateArea(5, 10);
console.log('Rectangle Area:', area);

// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: In JavaScript, a callback function is a function passed as an argument to another function, which is then invoked inside the outer function. Callbacks are often used in asynchronous operations, event handling, and other situations where the execution of a function needs to be delayed until a specific event occurs or a task is completed. For example, in the setTimeout function, the second parameter is a callback function that gets executed after a specified time delay.
// Example of a callback function
function greet1(name, callback) {
    console.log('Hello, ' + name + '!');
    callback();
}

function sayGoodbye() {
    console.log('Goodbye!');
}

// Calling greet with a callback
greet1('John', sayGoodbye);


// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Todo 4.3
function modifyArray(array, callback) {
    const modifiedArray = array.map(callback);
    return modifiedArray;
  }
  
  // Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
  const numbers = [1, 2, 3, 4, 5];
  const incrementByOne = function(number) {
    return number + 1;
  };
  const modifiedNumbers = modifyArray(numbers, incrementByOne);
  console.log("Modified array:", modifiedNumbers);

// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Importing the add method and PI constant from mathUtils.js
import { add, PI } from './mathUtils.js';

// Calling the add method and displaying the value of the PI constant
const sum = add(5, 10);
console.log('Sum:', sum);
console.log('PI:', PI);


// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
const isPalindrome = require('./isPalindrome');

// Call the isPalindrome function with a word
const word = 'rawr';
const result = isPalindrome(word);
// Display the result
console.log(`Is "${word}" a palindrome? ${result}`);


// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
/* Answer: 
The require function and module.exports variable are part of the CommonJS module system in Node.js for handling module dependencies. The require function is used to import modules, and module.exports is used to export values from a module. In contrast, the import and export keywords are part of the ES6 module system, which is supported in modern JavaScript environments.

While CommonJS syntax (using require and module.exports) is still widely used in Node.js environments, the ES6 module system provides a more standardized and expressive syntax. The use of import and export is generally preferred in modern JavaScript development for better code organization, clarity, and compatibility with other tools and bundlers. However, in Node.js environments, CommonJS syntax is still valid and widely used, especially in existing codebases and for compatibility reasons. The choice between them depends on the specific context and requirements of the project.
*/