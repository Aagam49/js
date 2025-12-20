let myDate = new Date()
console.log(myDate) // Current date and time
console.log(typeof myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.getMonth()+1) // Month (0-11)
console.log(myDate.getDate()) // Day of the month (1-31)
console.log(myDate.getFullYear()) // Year (4 digits)

let specificDate = new Date(2025,0,3) // January 3, 2025
console.log(specificDate.toString())

let myTimestamp = Date.now()
console.log(myTimestamp) // Current timestamp in milliseconds
console.log(specificDate.getTime()) // Timestamp of specificDate