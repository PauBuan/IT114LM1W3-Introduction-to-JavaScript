/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing

// TODO 2.1 Display "more than fifty" if randomNumber is more than fify
// TODO 2.1
if (randomNumber > 50) {
    console.log("more than fifty");
}

// TODO 2.2 Display whether the random number is odd or even
if (randomNumber % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}

// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
if (randomNumber % 3 === 0 && randomNumber % 5 === 0) {
    console.log("fizzbuzz");
} else if (randomNumber % 3 === 0) {
    console.log("fizz");
} else if (randomNumber % 5 === 0) {
    console.log("buzz");
} else {
    console.log(randomNumber);
}

let toDisplay = ""
// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// TODO 2.4
toDisplay = randomNumber % 2 === 0 ? "Even" : "Odd";

console.log("toDisplay", toDisplay);

// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: Switch statements in JavaScript are like a supercharged version of if-else statements. 
// Imagine you have one variable, and depending on its value, you want different things to happen. 
//Instead of chaining a bunch of if-else statements, you can use a switch statement. 
//It's like saying, "Hey, computer, if the variable is this, do this; if it's that, do that." It keeps things neat and tidy, making your code look more organized and less like a tangled mess.


// TODO 2.5 Use a for loop to print the numbers 1 to N
const n = 10
for (let i = 1; i <= n; i++) {
    console.log(i);
}

const list = ["apple", "banana", "cherry", "date", "elderberry"];
// TODO 2.6 Use a while loop to display all the values in the list
let index = 0;

while (index < list.length) {
    console.log(list[index]);
    index++;
}

// Checkpoint 2.3 What is the difference between do while and while loop?
// Answer: In a nutshell, the main difference between a `while` loop and a `do-while` loop is when they check the condition. In a `while` loop, the condition is checked before the loop executes, meaning it might not run at all if the condition is initially false. On the other hand, a `do-while` loop always executes the loop's body at least once before checking the condition. So, if you want a loop to run at least once regardless of the condition, you go for `do-while`; if you want the loop to run only if the condition is true initially, you use `while`.

// TODO 2.7 Use a for of loop to display all the values in the list
for (const value of list) {
    console.log(value);
}

// TODO 2.8 Use a for in loop to display all the values in the list
for (const index in list) {
    console.log(list[index]);
}
// TODO 2.9 Use the for each method of the list to display all its values 
list.forEach(value => {
    console.log(value);
});

// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: In a concise manner, use `for of` when you want to iterate over the values of an array. Use `for in` when you need to loop through the properties of an object. `forEach` is a method specifically designed for arrays and provides a clean and concise way to iterate over their elements. Choose the loop that best fits the specific task and the type of data that the dev's are working with.

// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
const numerator = Math.floor((Math.random() * 100) + 1);
const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing

try {
    if (denominator === 0) {
        throw new Error("Division by zero error");
    } else {
        console.log(numerator / denominator);
    }
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Cleaning up resources");
}




