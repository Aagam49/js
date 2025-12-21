const tinderUser = new Object();
tinderUser.name = "Aagam";
tinderUser.age = 22;
tinderUser.isLoggedIn = false;

console.log(tinderUser);
console.log(typeof tinderUser); 
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("age"));
console.log(tinderUser.hasOwnProperty("email"));
    
const regularUser = {
   email : "john@example.com",
    fullname : {
        userFullName : "John Wick",
        userLastName : "Doe"
    },
    age : 30,
}

console.log(regularUser.fullname.userFullName);
const {email:email} = regularUser;
console.log(email);

const obj1 = {
    key1 : "value1",
    key2 : "value2",
}
const obj2 = {
    key3 : "value3",
    key4 : "value4",
}

const mergedObject = Object.assign({}, obj1, obj2);
console.log(mergedObject);

const spreadObject = {...obj1, ...obj2};
console.log(spreadObject);