// Reference : https://www.geeksforgeeks.org/how-to-invert-key-value-in-javascript-object/

var student = {
    name: "Chalid",
    age: 18,
    class: "A"
}

function inverse(obj) {
    // Variabel untuk menyimpan Object
    var retobj = {};

    // Looping data object
    for(var key in obj) {
        // code untuk pembaliknya
        retobj[obj[key]] = key;
    }

    // Return Result
    return retobj;
}

console.log(inverse(student));
