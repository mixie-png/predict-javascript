//  //Problem 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [randomCar] = cars
const [, otherRandomCar] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// 1. Prediction
//  Tesla
//  Mercedes
// 2. The actual output
//  Tesla
//  Mercedes
// 3. How would you get the index value that did not output?
// const [, , lastRandomCar] = cars


//  //Problem 2
const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { employeeName: otherName } = employee;
//Predict the output
console.log(otherName);
console.log(employeeName);

// 1. Prediction
// Elon
// Elon
// 2. The actual output
// Elon
// ReferenceError: employeeName is not defined
// 3. Be sure that variable names are unique


// // Problem 3:
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;
//Predict the output
console.log(password);
console.log(hashedPassword);

// 1. Prediction
// 12345
// 12345
// 2. The actual output
// 12345
// undefined
// 3. const { password: hashedPassword = '12345'} = person;



// Problem 4:
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers;
const [, , , second] = numbers;
const [, , , , , , , , third] = numbers;
//Predict the output
console.log(first === second);
console.log(first === third);

// 1. Prediction
// false
// true
// 2. The actual output
// false
// true
// 3.
// const [,,,fourth] = numbers;
// console.log(fourth);


// Problem 5:
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// 1. Prediction
// value
// [1, 5, 1, 8, 3, 3]
// [1]
// [1, 5, 1, 8, 3, 3]
// 2. The actual output
// value
// [1, 5, 1, 8, 3, 3]
// 1
// 5
// 3.
// const [,,,,,last] = secondKey;
// console.log(last);


// Problem 6:
var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
    function actuallyPrintingNames() {
        for (var index = 0; index < names.length; index++) {
            var name = names[index];
            console.log(name + ' was found at index ' + index);
        }
        console.log('name and index after loop is ' + name + ':' + index);
    }
    actuallyPrintingNames();
}
printNames(beatles);

// 1. Prediction
// Paul was found at index 0
// George was found at index 1
// John was found at index 2
// Ringo was found at index 3

// name and index after loop is Paul:0
// name and index after loop is George:0
// name and index after loop is John:0
// name and index after loop is Ringo:0
// 2. The actual output
// Paul was found at index 0
// George was found at index 1
// John was found at index 2
// Ringo was found at index 3
// name and index after loop is Ringo:4
// 3. 3 scopes: function scope, another function scope, and loop scope


// // Problem 7:
function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
        let name = names[index];
        console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
}

// 1. Prediction
// 2. The actual output
// 3. It had no parameters


// Problem 8:
const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
    function actuallyPrintingNames() {
        for (let index = 0; index < names.length; index++) {
            const name = names[index];
            console.log(name + ' was found at index ' + index);
        }
    }
    actuallyPrintingNames();
}
printNames(beatles);

// 1. Prediction
// Paul was found at index 0
// George was found at index 1
// John was found at index 2
// Ringo was found at index 3
// 2. The actual output
// Paul was found at index 0
// George was found at index 1
// John was found at index 2
// Ringo was found at index 3
// 3. No errors because the beatles variable was passed through the printNames function and the index variable was passed through the for loop, 
// and the name variable was to get the names in the beatles array


// Problem 9:
const planet = {
    name: "Jupiter",
    milesFromSun: 49849,
    mass: 393983,
    composition: ["gas", "liquid", "oxygen"]
}
const planetCopy = { ...planet }
console.log(planet.composition[0] === planetCopy.composition[0])
console.log(planet === planetCopy)

// 1. Prediction
// true
// true
// 2. The actual output
// true
// false
// 3. console.log(planet.composition[0] === planetCopy.composition[0]) are values exactly the same and console.log(planet === planetCopy) are different because they are from different memory addresses