function miniMaxSum(arr) {
    // Write your code here
    let minimum = [...arr].sort((a, b) => a - b).splice(0,4);
    let maximum = [...arr].sort((a, b) => b - a).splice(0,4);
    
    minimum = minimum.reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);
    
    maximum = maximum.reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);
    
    console.log(minimum, maximum);
}