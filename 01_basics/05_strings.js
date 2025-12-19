const name = "Aagam"
const surname = "Shah"

console.log("Hello " + name + " " + surname + "!") // Using concatenation
console.log(`Hello ${name} ${surname}!`) // Using template literals

const gameName = new String("Chess")
console.log(gameName)
console.log(typeof gameName)

console.log(gameName.length)
console.log(gameName.toLowerCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf("g"))
console.log(gameName.toUpperCase())
console.log(gameName.endsWith("am"))
console.log(surname.includes("Sh"))
console.log(surname.substring(1, 4))
console.log(surname.slice(1, 4))

const Name = "Aaga-shah"
console.log(Name.split("-"))

const url = "https://www.example.com/path/to/page?query=123"
console.log(url.replace("example.com", "google.com"))
