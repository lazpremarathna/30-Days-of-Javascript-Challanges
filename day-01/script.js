/*
function nextInLine(arr, item) {
    arr.push(item);
    return arr.pop();
    //return arr.shift();
}
var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
*/

const result = {
    succes: ["max-length", "no-amd", "prefer-arrow-function"],
    faliure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-backlist", "no-dup-keys"]
};

function makeList(arr) {
    const resultDisplayArray = []

    for(i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
    };

    return resultDisplayArray;
}


const resultDisplayArray = makeList(result.faliure);

//console.log(resultDisplayArray);

// Conditional, control flows (if else)

var age = prompt('what is your age?')

if((age >= 18) && (age <= 35)) {
    status = 'target demo';
    console.log(status);
} else {
    status = 'not my audience';
    console.log(status);
}

