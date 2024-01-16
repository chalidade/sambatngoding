// Reference :  https://www.geeksforgeeks.org/perfect-numbers-in-javascript/?ref=ml_lbp

const number = 15;

function isPerfectNumber(number) {

    // Condition for check if parameter input is number 
    if(!Number.isInteger(number) || number <= 0) {
        console.log("Please provide a valid positive integer");
    }

    let sum = 0;

    // Looping to find proper divider
    for (let i = 1; i < number; i++) {
        if(number % i == 0) {
            sum += i;
        }
    }

    // Check if perfect number or not 
    const isPerfect = sum === number;

    if(isPerfect) {
        console.log(`${number} is perfect number.`);
    } else {
        console.log(`${number} isn't perfect number`);
    }
    
    return isPerfect;
}

isPerfectNumber(number);
