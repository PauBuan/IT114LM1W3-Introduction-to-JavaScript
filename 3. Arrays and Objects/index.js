/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here
const firstItem = numbers[0];
const fifthItem = numbers[4];
const lastItem = numbers[numbers.length - 1];

console.log("First item:", firstItem);
console.log("Fifth item:", fifthItem);
console.log("Last item:", lastItem);

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here
const minNumber = Math.min(...numbers);
const maxNumber = Math.max(...numbers);
const averageNumber = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;

console.log("Min number:", minNumber);
console.log("Max number:", maxNumber);
console.log("Average number:", averageNumber);

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: Python lists and JavaScript arrays share the fundamental purpose of storing collections of elements, but they differ in their characteristics. Python lists are versatile, allowing the inclusion of different data types and dynamic resizing during runtime. Python provides convenient built-in methods for list manipulation. On the other hand, JavaScript arrays are more rigid regarding data types but come with powerful built-in methods, making them efficient for tasks like web development. The choice between them depends on the specific requirements of the programming task at hand, with Python lists offering flexibility and JavaScript arrays providing robust built-in functionalities.

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
const it114lCourse = {
    courseCode: 'IT114L',
    name: 'WEB SYSTEMS AND TECHNOLOGIES (LABORATORY)',
    units: 1,
    numberOfStudents: 38
};

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name. (Professor Name: Job Lipat)
it114lCourse.professorName = 'Job Lipat';
console.log(`Professor Name: ${it114lCourse.professorName}`);

// Todo 3.5 Declare an array of objects with information about the courses you are taking this term
const coursesThisTerm = [
    { courseCode: 'IT114L', name: 'Introduction to Programming Lab', units: 1 },
    { courseCode: 'CS120', name: 'Data Structures and Algorithms', units: 3 },
    { courseCode: 'MATH150', name: 'Differential and Integral Calculus', units: 4 }
];

// Todo 3.6 Calculate the total number of units you are taking this term using the array of objects.
const totalUnitsThisTerm = coursesThisTerm.reduce((total, course) => total + course.units, 0);
console.log(`Total Units This Term: ${totalUnitsThisTerm}`);


// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: In JavaScript, objects serve a similar purpose to dictionaries in Python. Both objects and dictionaries are used to store key-value pairs, allowing for the organization and retrieval of data through named keys. They are versatile data structures that can hold various data types as values. However, there are syntactic and semantic differences between the two. JavaScript objects use dot notation or bracket notation to access properties, while Python dictionaries use square brackets. Additionally, JavaScript objects can have methods associated with them, making them more versatile for representing complex data structures. Overall, while the core concept of key-value pairs is shared, the specific syntax and capabilities vary between JavaScript objects and Python dictionaries.

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here: 
let numbersCopy = [...numbers, 99]; // Creates a copy of 'numbers' array with an additional number 99
console.log(numbersCopy);

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here:
const it114l = {
    courseCode: "IT114L",
    name: "Introduction to Programming",
    units: 3,
    numberOfStudents: 50,
    professorName: "Job Lipat"
};

const { courseCode, units } = it114l; // Extracts 'courseCode' and 'units' using the spread operator
console.log(`Course Code: ${courseCode}, Units: ${units}`);

