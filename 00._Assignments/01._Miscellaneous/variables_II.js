"use strict";

/*
    totalGlobalVariable = "Never EVER!!! do this!!!";
    var globalVariable = "Also NEVER ever do this!!!";

    use const whenever possible, else use let

    about const:
        const cannot be undeclared or redeclared
        but its value can be changed as long as you don't change the assignment
*/

// Global Scope


// Function Scope
function someOtherScope() {
}

// Block Scope
{
    console.log("What is this?")
}

// For loop: 6, 6, 6, 6, 6, 6
/* 
for(var i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000);
} */

// For loop: 0, 1, 2, 3, 4, 5
for(let i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 0);
}