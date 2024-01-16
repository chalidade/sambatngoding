let number = 10;

// Cara membuat function Decimal to Biner
function decimalToBinner(number) {
    let binary =  "";

    for (; number > 0; number >>= 1) {
        binary = (number & 1) + binary;
    }

    return binary || "0";
}

const result = decimalToBinner(number);
console.log(result);

// 10 => 1010 ---> 0101 = 5
// 5  => 0101 ---> 0010 = 2
// 2  => 0010 ---> 0001 = 1
// 1  => 0001 ---> 0000 = 0
// console.log(number >>= 1)


// console.log(number & 1);

