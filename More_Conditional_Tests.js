"use strict";
//Tests for equality and inequality with strings
console.log("Equality test with strings: ", "Apple" === "Apple");
//Tests for equality and inequality with strings
console.log("inequality test with strings: ", "Apple" != "Orange");
// Tests using the lower case function
console.log("lower case function Test: ", "HAMZA".toLowerCase() === "hello");
//Numerical tests involving equality. 
console.log("Equality test with numbers: ", 26 === 26);
//Numerical tests involving inequality 
console.log("Inequality test with numbers: ", 26 != 86);
//greater than,
console.log("Grater then test:", 10 > 5);
//less than,
console.log("Less then test:", 10 < 34);
// greater than or equal to
console.log(" greater than or equal to test: ", 30 >= 30);
// less than or equal to
console.log("less than or equal to test: ", 39 <= 23);
//Tests using "and" and "or" operators
console.log("Operator test: ", 5 === 5 && 10 > 3);
console.log("Operator test: ", 5 === 5 || 10 > 33);
//Test whether an item is in a array
const Sweets = ['Gulab Jamun', 'Barfi', 'Chum Chum'];
console.log('Test "Gulab Jamun" in the array: ', Sweets.includes("Gulab Jamun"));
//Test whether an item is not in a array
console.log('Testing "orange" is not in array: ', Sweets.includes("Orange"));
