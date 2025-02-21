// variables
/*
let x; // Declaration
console.log(x)
const y = 10; //Initialization
console.log(y)
let z = 3; // Both at the same time

x = "Hello"
console.log(x)

z = true;
console.log(z)

let studentName = window.prompt("What is your name?")

console.log(studentName);

window.alert(`Hello, your name is ${studentName}`) //Need backticks in order to text format

let online = false;
console.log(online)
console.log(`Online Status ${online}`)

let className = "WEB-115";
console.log(className);
console.log(typeof className)
console.log(className, typeof className)
myNumber = 5.5; 
console.log(typeof myNumber)

let myAge = window.prompt("How old are you?")
console.log(typeof myAge)
myAge = Number(myAge)
console.log(myAge, typeof myAge)

let t = "pizza";
x = Number(t);
console.log(typeof t)


// Debugging in JavaScript //


// 4 Types of Errors //

// 1. Load-time Errors (a.k.a. Syntax Errors)
    // Occurs when program is loaded by browser
    // Grammar, Spelling Mistakes, Missing parentheses, Incomplete Brackets

// 2. Logic Errors
    // When code runs unexpectedly

// 3. User Errors
    // When user does something unexpected to the dev

// 4. Run-time Errors
    // Occur when interpreter is unable to run the code
    // Syntax is correct, but execution is broken
    // ex. Reference an undeclared variable. Illegal math operations.

// Debugging Methods & Tools //
// 1. Tracing: The examination of individual statements in an executing program. 
//    Displaying alert boxes at diff. points to show results intermittently. 

// 2. Logging
//      console.log to find the error

// 3. Commenting out code
//      Commenting code to find the error

// 4. Break mode and Break Points
//      Break Mode: Mode for running a program in which execution is suspended
//      to allow you to review the current state of variables and functions

// 5. Scope Window
// 6. Watch Window
// 7. Call Stack

//try __ finally blocks

try{
    console.log(x)
}
catch(error){
    console.error(error)
}
/*

/*
// Debugging in JavaScript //


 4 Types of Errors //

 1. Load-time Errors (a.k.a. Syntax Errors)
    // Occurs when program is loaded by browser
    // Grammar, Spelling Mistakes, Missing parentheses, Incomplete Brackets

 2. Logic Errors
    // When code runs unexpectedly

 3. User Errors
    // When user does something unexpected to the dev

 4. Run-time Errors
    // Occur when interpreter is unable to run the code
    // Syntax is correct, but execution is broken
    // ex. Reference an undeclared variable. Illegal math operations.

 Debugging Methods & Tools //
 1. Tracing: The examination of individual statements in an executing program. 
    Displaying alert boxes at diff. points to show results intermittently. 

 2. Logging
      console.log to find the error

 3. Commenting out code
      Commenting code to find the error

 4. Break mode and Break Points
      Break Mode: Mode for running a program in which execution is suspended
      to allow you to review the current state of variables and functions

5. Scope Window
6. Watch Window
7. Call Stack

try __ finally blocks

try{
    console.log(x)
}
catch(error){
    console.error(error)
}
*/

// If Statements //

// let age = 25;

// if(age >= 21){
//     console.log("You are a legal adult.")
// }
// else{
//     console.log("You are a minor")
// }

// // Nested if Statements
// // Got a license?

// let hasLicense = true // Boolean true false variable

// if(age >= 16){
//     if(hasLicense == true){
//         console.log("You are old enough to drive and have license")
//     }
//     else{
//         console.log("You are old enough to drive, but still need a license")
//     }
// }
    
// else{
//     console.log("You are not old enough to drive")
// }

// // Else If statement. Enter a social media site. Gotta be 13+
// age = 101

// if(age > 13){
//     console.log("You are old enough to doomscroll")
// }

// else if(age < 0){
//     console.log("You can not be younger than nothing")
// }

// else if(age == 0){
//     console.log("How is a baby on tiktok?")
// }

// else if(age >= 100){
//     console.log("You are TOO OLD to brainrot.")
// }

// else{
//     console.log("You must be 13+ to scroll tiktok")
// }

//Functions are reusable sections of code.
// Declare code once, use it whenever you want after that.
// Call the function to execute that code.

// function happyBirthday(name, age){ // parameters
//     console.log("Happy Birthday to you");
//     console.log("Happy Birthday to you");
//     console.log(`Happy Birthday dear ${name}`);
//     console.log("Happy Birthday to you");
//     console.log(`You are ${age} years old`);
// }

// happyBirthday("Abid", 16);
// happyBirthday("Mr. Gardner", 38);

/*
function add(x, y){
    let result = x + y;
    return result
}

let answer = add(2,3)
console.log(answer)

function subtract(x, y){
    let result = x - y;
    return result
}

let subtractAnswer = subtract(8,5);
console.log(subtractAnswer)

function isEven(number){
    if(number % 2 == 0){
        return true;
    }
    else{
        return false
    }
}

let evenAnswer = isEven(3)
console.log(evenAnswer)

function isValidEmail(email){
    return email.includes("@") ? true: false
}

let emailAnswer = isValidEmail("nmpatel133@gmail.com")
console.log(emailAnswer)

*/

// Loops

// While Loop //
// Repeat some code WHILE condition is true

/*
let username = "";

if (username === ""){
    console.log("You didn't enter your name")
}
else{
    console.log(`Hello ${username}`)
}

let myUsername = "";

while (myUsername === ""){
    console.log(`Name not found.`)
    myUsername = window.prompt(`Enter your name`)
}console.log("While loop finished")
console.log(`Hello, ${myUsername}`)

// Another way via do while. Run code first, then check condition.

let myName;

do{
    myName = window.prompt(`Enter your name: `)
}while(myName === "" || myName === null);


let loggedIn = false;
let myNewUserName;
let myPassword;

while(!loggedIn){
    myNewUserName = window.prompt("Enter your username")
    myPassword = window.prompt("Enter your password")

    if(myNewUserName === "username" && myPassword === "password"){
        loggedIn = true
        console.log("Log in success!")
    }

    else{
        console.log("Invalid Credentials. Try Again.")
    }
}
*/

// For Loops //
// Repeat some code a limited amount of time

/*
for (let i = 2; i <= 10; i+=2){
    console.log("Hello");
    console.log(i)
}

for(let i = 1; i <= 20; i++){
    if(i == 13){
        continue;
    }
    console.log(i)
}
*/

/*
// Arrays //
let fruits = ["apple", "banana", "orange", "grape"]
console.log(fruits[0])
fruits[3] = "coconut"
console.log(fruits[3])

fruits.push("cocunut") // Adds to the end of the array
fruits.pop(); // Removes the last element of the array
fruits.unshift("mango") // Adds to the beginning of the array
fruits.shift() // Removes the first element of the array

let numOfFruits = fruits.length;
console.log(numOfFruits);
console.log(fruits.length)

let index = fruits.indexOf("starfruit") // Search for index of matching
console.log(index); // Returns -1 if not found


// Loop through an array

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}

// Iterate through array backwards
for(let i = fruits.length - 1; i >= 0; i--){
    console.log(fruits[i])
}

// Enhanced for loop
for(let fruit of fruits){
    console.log(fruit)
}

// Sort methods
fruits.sort();
console.log(fruits)

// Reverse method
fruits.reverse();
console.log(fruits)

// 2D Arrays - A multidimensional array that stores a matrix of data in rows and columns
const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(matrix[2][0])

for (let row of matrix){
    //console.log(row)
    const rowString = row.join(' ');
    console.log(rowString)
}

// Objects = Like a dictionary in Python
// NOT the same as "objects" from the term "Object Oriented Programming"

let person = {
    firstName: "John",
    lastName: "Smith",
    age: 46,
    email: "Johnsmith@gmail.com"
}

// Dot Notation
console.log(person.firstName) // Accessing the object firstName
console.log(person["lastName"]) // Another way to access the object lastName

// Bracket Notation
console.log(person["age"])
console.log(person["email"])
console.log(person["age"] + 10)

for (i in person){
    console.log(i)
    console.log(person[i])
}

for (i in person){
    console.log(i + ": " + person[i])
}
*/


// MATH Object = a built-in object that provides
                // a collection of properties & methods

let x = 1.99;
let y = 4;
let z = 8.2;

console.log(Math.PI);
console.log("The minimum is: " + Math.min(x,y,z));
console.log("The maximum is: " + Math.max(x,y,z));

console.log("The Square root is:" + Math.sqrt(y)) 
console.log("The rounded is:" + Math.round(z)) 
console.log("The rounded down is:" + Math.floor(z)) 
console.log("The rounded up is:" + Math.ceil(z)) 

console.log("Removes Decimal: " + Math.trunc(z)) // Removes decimal
console.log("x to the power of y is: "+ (Math.pow(x,y)))
console.log("Returns what sign it is (negative = -1, null = 0, positive = 1: " + (Math.sign(5)))

console.log(Math.random())
console.log(Math.random()* 10) // Returns between 0-9
console.log(Math.random()* 11) // Returns between 0-10
console.log(Math.random()* 101) // Returns between 0-100

let min = 1;
let max = 1000;

function getRndIntgerExclusive(min, max){
    return Math.floor(Math.random() * (max - min) ) - min;
}

console.log(getRndIntgerExclusive(min, max))


function getRndIntgerExclusive(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

console.log(getRndIntgerExclusive(min, max))

// Spread Operator = Allow an iterable such as an array or string to be expanded into seperate element

let nums = [1,2,3,4,5];

let maximum = Math.max(nums)
let newMaximum = Math.max(...nums) // The ... is a spread operator

console.log (maximum, newMaximum)

// Combining arrays with spread operator
let fruitsAgain = ["apple", "orange", "banana"];

let vegetables = ["carrot", "potato", "broccoli"];

//combines fruitsAgain + vegetables
let foods = [...fruitsAgain, ...vegetables];
console.log(foods)
foods = [...fruitsAgain, "kiwi", ...vegetables, "spinach"];
console.log(foods)