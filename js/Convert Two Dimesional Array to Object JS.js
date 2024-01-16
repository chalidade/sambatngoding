// Reference : https://www.geeksforgeeks.org/how-to-convert-two-dimensional-array-into-an-object-in-javascript/?ref=lbp

let data = [
    ["John", 12],
    ["Jack", 13],
    ["Matt", 14],
    ["Maxx", 15]
];

function arr2obj(arr) {
    // Create an empty object
    let obj = {};

    arr.forEach(v => {
        // Extract the key value 
        let key = v[0];
        let value = v[1];

        // Add the key and value to object 
        obj[key] = value;
    });

    // Return result 
    return obj;
}

let new_output = arr2obj(data);

console.log("Before Conversion: ", data[0][1]);
console.log("After Conversion: ", new_output.John);
