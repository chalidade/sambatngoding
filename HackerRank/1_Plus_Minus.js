function plusMinus(arr) {
    // Write your code here
    var positive = 0, negative = 0, zero = 0;
     
    arr.map((data) => {
        if(data < 0) {
            negative = negative + 1;
        } else if(data > 0) {
            positive = positive + 1;
        } else {
            zero = zero + 1;
        }
    });
    
    positive = (positive / arr.length).toFixed(6);
    negative = (negative / arr.length).toFixed(6);
    zero = (zero / arr.length).toFixed(6);
    
    console.log(positive);
    console.log(negative);
    console.log(zero);
}