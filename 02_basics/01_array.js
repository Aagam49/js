const array = [10, 20, 30, 40, 50];

// Accessing elements
console.log(array[0]); // 10
console.log(array[2]); // 30

const MyArray = new Array(1,2,3,4)
console.log(MyArray[1]); // 2

MyArray.push(5); // Add element to the end
console.log(MyArray)
MyArray.pop(); // Remove last element
console.log(MyArray)
MyArray.unshift(0); // Add element to the beginning
console.log(MyArray)
MyArray.shift(); // Remove first element
console.log(MyArray)

console.log(MyArray.includes(3));
console.log(MyArray.indexOf(3));

const newArray = array.join("-") // Convert to string
console.log(newArray)
console.log(typeof newArray)


//slice and splice
console.log('A:',array)
const slicedArray = array.slice(1,4); // Extract elements from index 1 to 3
console.log('Sliced Array:', slicedArray);
console.log('Original Array after slice:', array)

console.log('B:',array)
const splicedArray = array.splice(1,4);
console.log('Spliced Array:', splicedArray);
console.log('Original Array after splice:', array)

