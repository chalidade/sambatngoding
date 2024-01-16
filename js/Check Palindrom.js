let str = "chalid";

// Function palindrom with loop
function isPalindrom_1(str) {
    let rev = "";

    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }

    if(rev == str) {
        return true;
    }

    return false;
}

// Function palindrom without loop
function isPalindrom_2(str) {
    return str == str.split('').reverse().join('');
}

// Check Process of palindrom 
console.log("split : ", str.split(''));
console.log("reverse : ", str.split('').reverse());
console.log("join : ", str.split('').reverse().join(''));

// Check palindrom result
console.log(isPalindrom_1(str));
console.log(isPalindrom_2(str));