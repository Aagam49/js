const score =  100
console.log(score)
console.log(typeof score)

const score2 = new Number(200)
console.log(score2)
console.log(typeof score2)

console.log(score2.toString().length)
console.log(score2.toFixed(2))

const otherNumber = 123.856789
console.log(otherNumber.toPrecision(4))
console.log(otherNumber.toPrecision(6))
console.log(otherNumber.toPrecision(3))

const hundred = 10000000
console.log(hundred.toLocaleString("en-IN"))

console.log(Math)
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.trunc(4.7))

console.log(Math.random())
console.log(Math.round(Math.random() * 10 + 1)) // Random number between 1 and 10

const min = 10
const max = 20
console.log(Math.round(Math.random() * (max - min) + min)) // Random number between min and max