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