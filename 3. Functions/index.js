// Functions are used to group Code together

const num1 = 20;

function countDown(num) {
    if (num <= 0) {
        console.log('All done')
        return
    }
    console.log(num)
    num--
    countDown(num)
}

// This function will count down from 10 to 0.
// the Function name is countDown.
// The parameter is num.
// You can Pass a Parameter to a Function by using the parameter name, for example:
// countDown(10) counts down from 10 to 0.
// countDown(5) counts down from 5 to 0.
// countDown(0) prints 'All done'.
// countDown(-3) prints 'All done'.
// countDown(num1) prints the number of the parameter.

console.log("Counting down from 10 to 0:")
countDown(10)
console.log("Counting down from 5 to 0:")
countDown(5)
console.log("Counting down from 0 to 0:")
countDown(0)
console.log("Counting down from -3 to 0:")
countDown(-3)
console.log("Counting down from " + num1 + " to 0:")
countDown(num1)