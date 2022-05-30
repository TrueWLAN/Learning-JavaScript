// Without Math you can't do much.
// So we need to learn about some basic math.

// 1. Create a variable called 'num1' and set it equal to the number 10.
// 2. Create a variable called 'num2' and set it equal to the number 20.
// 3. Create a variable called 'sum' and set it equal to the sum of num1 and num2.

const num1 = 10;
const num2 = 20;
const sum = num1 + num2; // 30
console.log(sum);

// We added the number 10 and 20 together by using the addition operator "+".

// 4. Create a variable called 'difference' and set it equal to the difference of num1 and num2.

const difference = num1 - num2; // -10
console.log(difference);

// We subtracted the number 20 from the number 10 by using the subtraction operator "-".

// 5. Create a variable called 'product' and set it equal to the product of num1 and num2.

const product = num1 * num2; // 200
console.log(product);

// We multiplied the number 10 by the number 20 by using the multiplication operator "*".

// 6. Create a variable called 'quotient' and set it equal to the quotient of num1 and num2.

const quotient = num1 / num2; // 0.5
console.log(quotient);

// We divided the number 10 by the number 20 by using the division operator "/".

// 7. Create a variable called 'remainder' and set it equal to the remainder of num1 divided by num2.
const remainder = num1 % num2; // 10
console.log(remainder);


// 8. Create a variable called 'isEven' and set it equal to whether num1 is even or not.
const isEven = num1 % 2 === 0; // true
console.log(isEven);

// We checked if the number 10 is even by using the modulo operator "%".

// 9. Create a variable called 'isOdd' and set it equal to whether num1 is odd or not.
const isOdd = num1 % 2 !== 0; // false
console.log(isOdd);

// We checked if the number 10 is odd by using the modulo operator "%".

// 10. Create a variable called 'isPositive' and set it equal to whether num1 is positive or not.
const isPositive = num1 > 0; // true
console.log(isPositive);

// We checked if the number 10 is positive by using the greater than operator ">".

// 11. Create a variable called 'isNegative' and set it equal to whether num1 is negative or not.

const isNegative = num1 < 0; // false
console.log(isNegative);

// We checked if the number 10 is negative by using the less than operator "<".

// 12. Create a variable called 'isZero' and set it equal to whether num1 is zero or not.
const isZero = num1 === 0; // false
console.log(isZero);

// We checked if the number 10 is zero by using the equality operator "==".

// 13. Create a variable called 'isNotZero' and set it equal to whether num1 is not zero or not.
const isNotZero = num1 !== 0; // true
console.log(isNotZero);

// We checked if the number 10 is not zero by using the inequality operator "!=".

// 14. Create a variable called 'isPositiveOrZero' and set it equal to whether num1 is positive or zero or not.
const isPositiveOrZero = num1 >= 0; // true
console.log(isPositiveOrZero);

// We checked if the number 10 is positive or zero by using the greater than or equal to operator ">=".
// 15. Create a variable called 'isNegativeOrZero' and set it equal to whether num1 is negative or zero or not.
const isNegativeOrZero = num1 <= 0; // false
console.log(isNegativeOrZero);

// We checked if the number 10 is negative or zero by using the less than or equal to operator "<=".
// 16. Create a variable called 'isPositiveAndOdd' and set it equal to whether num1 is positive and odd or not.
const isPositiveAndOdd = num1 > 0 && num1 % 2 !== 0; // false
console.log(isPositiveAndOdd);

// We checked if the number 10 is positive and odd by using the greater than and and operator "&&".
// 17. Create a variable called 'isNegativeAndOdd' and set it equal to whether num1 is negative and odd or not.
const isNegativeAndOdd = num1 < 0 && num1 % 2 !== 0; // false
console.log(isNegativeAndOdd);

// We checked if the number 10 is negative and odd by using the less than and and operator "&&".
// 18. Create a variable called 'isPositiveAndEven' and set it equal to whether num1 is positive and even or not.
const isPositiveAndEven = num1 > 0 && num1 % 2 === 0; // false
console.log(isPositiveAndEven);

// We checked if the number 10 is positive and even by using the greater than and and operator "&&".
// 19. Create a variable called 'isNegativeAndEven' and set it equal to whether num1 is negative and even or not.
const isNegativeAndEven = num1 < 0 && num1 % 2 === 0; // false
console.log(isNegativeAndEven);

// We checked if the number 10 is negative and even by using the less than and and operator "&&".
// 20. Create a variable called 'isPositiveOrZeroAndOdd' and set it equal to whether num1 is positive or zero and odd or not.
const isPositiveOrZeroAndOdd = num1 >= 0 && num1 % 2 !== 0; // false
console.log(isPositiveOrZeroAndOdd);

// We checked if the number 10 is positive or zero and odd by using the greater than or equal to and and operator "&&".
// 21. Create a variable called 'isNegativeOrZeroAndOdd' and set it equal to whether num1 is negative or zero and odd or not.
const isNegativeOrZeroAndOdd = num1 <= 0 && num1 % 2 !== 0; // false
console.log(isNegativeOrZeroAndOdd);

// We checked if the number 10 is negative or zero and odd by using the less than or equal to and and operator "&&".
// 22. Create a variable called 'isPositiveOrZeroAndEven' and set it equal to whether num1 is positive or zero and even or not.
const isPositiveOrZeroAndEven = num1 >= 0 && num1 % 2 === 0; // false
console.log(isPositiveOrZeroAndEven);

// We checked if the number 10 is positive or zero and even by using the greater than or equal to and and operator "&&".
// 23. Create a variable called 'isNegativeOrZeroAndEven' and set it equal to whether num1 is negative or zero and even or not.
const isNegativeOrZeroAndEven = num1 <= 0 && num1 % 2 === 0; // false
console.log(isNegativeOrZeroAndEven);

// We checked if the number 10 is negative or zero and even by using the less than or equal to and and operator "&&".
// 24. Create a variable called 'isPositiveOrNegative' and set it equal to whether num1 is positive or negative or not.
const isPositiveOrNegative = num1 > 0 || num1 < 0; // true
console.log(isPositiveOrNegative);
