// You can write Text, which will not be executed by // having before the comment
// Or if it's a multiline comment, you can write it like this:

/*
    * This is a multiline comment
    * which can be used to write
    * multiple lines of code
*/

// Now some Variables in JavaScript


// let declares a variable that can be reassigned and is block scoped (only available in the block it was declared in)

let name = "Max"; // Sets the variable name to "Max"
console.log(name); // Prints "Max" to the console
if (true) { // If the condition is true, the code inside the block will be executed
    let name = "Manu"; // This will overwrite the value of the variable "name"
    console.log(name); // Prints "Manu" to the console
}
console.log(name);// Prints "Max" to the console

// Const declares a variable that can't be reassigned and is block scoped (only available in the block it was declared in)

const age = 30; // Sets the variable age to 30
console.log(age); // Prints 30 to the console
if (true) { // If the condition is true, the code inside the block will be executed
    const age = 31; // This will throw an error, because the variable "age" can't be reassigned
    console.log(age); // Prints 31 to the console
}
console.log(age); // Prints 30 to the console

//var declares a variable or an Array that can be reassigned and is function scoped (only available in the function it was declared in)

var citys = ["Berlin", "Hamburg", "Munich"]; // Sets the variable citys to an Array
console.log(citys); // Prints ["Berlin", "Hamburg", "Munich"] to the console
if (true) { // If the condition is true, the code inside the block will be executed
    var citys = ["Frankfurt", "Cologne"]; // This will overwrite the value of the variable "citys"
    console.log(citys); // Prints ["Frankfurt", "Cologne"] to the console
}
console.log(citys); // Prints ["Berlin", "Hamburg", "Munich"] to the console
