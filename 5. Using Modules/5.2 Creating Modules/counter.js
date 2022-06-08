
function counter(a, b, c) {
    let output
    if (c === '+') {
        output = a + b
    } else if (c === '-') {
        output = a - b
    } else if (c === '*') {
        output = a * b
    } else if (c === '/') {
        output = a / b
    } else if (c === '%') {
        output = a % b
    }
    console.log(output)
}


module.exports = { counter }