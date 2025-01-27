// variables
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