// reference :  https://www.geeksforgeeks.org/javascript-program-to-check-if-two-numbers-have-same-last-digit/

function hasSameLastDigit(num1, num2) { 
  
    // Cara 1 : Get the last digit of two number 
    const lastDigit1 = num1 % 10;
    const lastDigit2 = num2 % 10;

    // Cara 2 : Get the last digit of two number 
    // const lastDigit1 = num1.toString().slice(-1);
    // const lastDigit2 = num2.toString().slice(-1);

    // Cara 3 : Get the last digit of two number 
    // const digit1 = [...num1.toString()];
    // const digit2 = [...num2.toString()];

    // const lastDigit1 = digit1[digit1.length - 1];
    // const lastDigit2 = digit2[digit2.length - 1];

    // Compare
    return lastDigit1 === lastDigit2;
} 
  
// Example usage: 
const number1 = 12211; 
const number2 = 453234243; 
const result = hasSameLastDigit(number1, number2); 
console.log(result); 