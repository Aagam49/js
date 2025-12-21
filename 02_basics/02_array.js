const myArray1 = ['Dog', 'Cat', 'Mouse'];
const myArray2 = ['Apple', 'Banana', 'Cherry'];

// myArray1.push(myArray2)
// console.log(myArray1)

const concatArray = myArray1.concat(myArray2);
console.log(concatArray)

const spreadArray = [...myArray1, ...myArray2];
console.log(spreadArray)

const newArray = [1,23,[4,5,6],7,[8,9]];
console.log(newArray.flat())

console.log(Array.from('Hello')) // ['H','e','l','l','o']
console.log(Array.isArray("1")) 
console.log(Array.isArray(newArray))

let arr1 = 100
let arr2 = 200
let arr3 = 300

const arrayOfValues = Array.of(arr1,arr2,arr3)
console.log(arrayOfValues)