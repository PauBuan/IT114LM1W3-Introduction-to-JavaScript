/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1
var myVariable = "Hello, World!";
console.log(myVariable); // Log the variable to the console

// Move the variable declaration after logging
console.log(myVariable); // This will still log the value assigned above
var myVariable = "Moved after log.";

// TODO 1.2
let anotherVariable = "Hi Pogi";
console.log(anotherVariable); // Log the variable to the console

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
const myConstVariable = "Wince x Bins";

// Checkpoint 1.1 What is the difference between var, let, and const?
/* Answer: In JavaScript, `var` is function-scoped and is hoisted, allowing variables to be used before declaration, but it lacks block-scoping. `let` and `const` are block-scoped, eliminating issues with variable hoisting and providing more predictable scoping behavior. 
 While `let` allows reassignment, `const` enforces immutability after initial assignment, making it suitable for constants. Unlike `var`, both `let` and `const` do not become properties of the global object. 
 In modern JavaScript, it's recommended to use `let` for variables that may be reassigned and `const` for constants, avoiding potential pitfalls associated with `var`.
*/

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// TODO 1.4

let num1 = 10;
let num2 = 5;

// Addition
let sum = num1 + num2;
console.log("Sum:", sum);

// Subtraction
let difference = num1 - num2;
console.log("Difference:", difference);

// Multiplication
let product = num1 * num2;
console.log("Product:", product);

// Division
let quotient = num1 / num2;
console.log("Quotient:", quotient);

// Modulus (remainder after division)
let remainder = num1 % num2;
console.log("Remainder:", remainder);

// Increment
num1++;
console.log("Incremented num1:", num1);

// Decrement
num2--;
console.log("Decremented num2:", num2);


// Checkpoint 1.2 What operators did you use?
// Answer: 
/*In the code for TODO 1.4, the following operators were used:

1. Addition Operator (`+`): Used to add two numbers (`num1 + num2`).
2. Subtraction Operator (`-`): Used to subtract one number from another (`num1 - num2`).
3. Multiplication Operator (`*`): Used to multiply two numbers (`num1 * num2`).
4. Division Operator (`/`): Used to divide one number by another (`num1 / num2`).
5. Modulus Operator (`%`): Used to find the remainder after division (`num1 % num2`).
6. Increment Operator (`++`): Used to increase the value of a variable by 1 (`num1++`).
7. Decrement Operator (`--`): Used to decrease the value of a variable by 1 (`num2--`).

These operators cover basic arithmetic operations, as well as incrementing and decrementing values.
*/

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
let firstName = "Jihoon";
let lastName = "Seo";

// Concatenation
let fullName = firstName + " " + lastName;
console.log("Full Name:", fullName);

// String Length
let nameLength = fullName.length;
console.log("Name Length:", nameLength);

// Accessing Characters (Indexing)
let firstCharacter = fullName[0];
let lastCharacter = fullName[fullName.length - 1];
console.log("First Character:", firstCharacter);
console.log("Last Character:", lastCharacter);

// Substring
let substring = fullName.substring(0, 4);
console.log("Substring:", substring);

// String Interpolation (Template Literals)
let age = 21;
let message = `Hello, my name is ${fullName} and I am ${age} years old.`;
console.log(message);


// Checkpoint 1.3 What operators did you use?
// Answer: 
/* In the code for TODO 1.5, the following string operators and operations were used:

1. Concatenation Operator (`+`): Used to concatenate (join) two strings (`firstName + " " + lastName`).
2. Length Property (`length`): Used to retrieve the length of a string (`fullName.length`).
3. Indexing (Accessing Characters): Used square brackets `[]` to access individual characters in a string (`fullName[0]`, `fullName[fullName.length - 1]`).
4. `substring` Method: Used to extract a portion of a string based on indices (`fullName.substring(0, 4)`).
5. String Interpolation (Template Literals): Used backticks (\`) to create template literals, allowing dynamic insertion of variables within a string (`Hello, my name is ${fullName} and I am ${age} years old.`).

These operators and methods provide various ways to manipulate and work with strings in JavaScript. */

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// TODO 1.6
let wince = true;
let bins = false;

// Logical AND (&&)
let deo = wince && bins;
console.log("Logical AND:", deo);

// Logical OR (||)
let imman = wince || bins;
console.log("Logical OR:", imman);

// Logical NOT (!)
let zyhoon = !wince;
console.log("Logical NOT:", zyhoon);

// Mixed Logical Operations
let wincexdalen = (wince && !bins) || (bins && !wince);
console.log("Mixed Logical Operations:", wincexdalen);


// Checkpoint 1.4 What operators did you use?
// Answer: 
/* 
In the code for TODO 1.6, the following logical operators were used:

1. Logical AND (`&&`): Used to perform a logical AND operation. Returns `true` if both operands are `true`.
2. Logical OR (`||`): Used to perform a logical OR operation. Returns `true` if at least one of the operands is `true`.
3. Logical NOT (`!`): Used to perform a logical NOT operation. Returns the opposite boolean value of the operand.

These operators are fundamental in creating logical conditions and controlling the flow of a program based on boolean values.
*/

// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
// TODO 1.7
let papi = 10;
let papi2 = 5;

// Equal to (==)
let isEqual = papi == papi2;
console.log("Equal to:", isEqual);

// Not equal to (!=)
let isNotEqual = papi != papi2;
console.log("Not equal to:", isNotEqual);

// Greater than (>)
let isGreaterThan = papi > papi2;
console.log("Greater than:", isGreaterThan);

// Less than (<)
let isLessThan = papi < papi2;
console.log("Less than:", isLessThan);

// Greater than or equal to (>=)
let isGreaterOrEqual = papi >= papi2;
console.log("Greater than or equal to:", isGreaterOrEqual);

// Less than or equal to (<=)
let isLessOrEqual = papi <= papi2;
console.log("Less than or equal to:", isLessOrEqual);


// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: 
/*
In JavaScript, the expression `[] == false` evaluates to `true` due to automatic type coercion during loose equality comparisons. 
The empty array (`[]`) is coerced to `true` because it is considered truthy, and then the comparison simplifies to `true == false`. 
To reconcile the differing types, both `true` and `false` are further coerced to numbers, resulting in `1 == 0`, which evaluates to `false`. 
The use of loose equality (`==`) allows for automatic type conversions, leading to unexpected outcomes, emphasizing the importance of understanding JavaScript's type coercion rules when writing code.
*/


// Your code here