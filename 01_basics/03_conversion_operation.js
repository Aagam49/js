// let score = 33
// let score = "33"
// let score = "33abc"
// let score = null
let score = undefined
console.log(typeof score)
// console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// "33" => Number("33") => 33
// "33abc" => Number("33abc") => NaN
// null => Number(null) => 0
// undefined => Number(undefined) => NaN


let a = " "
let b = Boolean(a)
console.log(typeof b)
console.log(b)

// true => 1
// false => 0
// "" => false
// " " => true
// "abc" => true