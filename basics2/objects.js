// object declaration via - literal (singleton not possible) or constructor

// object literals
const sym = Symbol("rawr")
const user1 = {
    name:"Meowth Jnr",
    age:17,
    location:"delhi",
    [sym] : "meow",
    email:"meow@gmail.com"
} //we can also nest objects inside objects

// accessed through:
console.log(user1.name);
console.log(typeof user1[sym]) //this should have supposedly given me type symbol
console.log(user1["name"])

// let's try to change values now and add a function to our object, and then freeze it
user1.greetings = function(){
    console.log(`${user1.name} greets thine existence`);
    
}
user1.email = "woof@gmail.com"
console.log(user1);
// Object.freeze(user1); // this shall freeze the user. not allowing us to modify it in anyway
user1.email = "rawr@gmail.com"
console.log(user1);

user1.greetings(); // if you use console.log with it, it will print undefined


//object constructor
let user2 = new Object();
user2.name = "Pikachu";
user2.age = 10;
user2.location = "Tokyo";
// user2.email = "pikachu@gmail.com";

// Adding a method to user2
user2.greetings = function() {
    console.log(`${this.name} says Pika Pika!`);
};

// Accessing attributes and method
user2.greetings();

let user3 = Object.assign({}, user1, user2); // this will merge the two objects
// {} is the target object, user1 and user2 are the source objects
console.log(user3);
// or, we use the spread operator
let user4 = {...user1, ...user2}; // this will merge the two objects
console.log(user4);

// Object.keys() - returns an array of the object's keys
user3.hasOwnProperty("name"); // returns true if the object has the specified property

const {location : loc} = user1 // destructuring assignment
console.log(loc); // this will print the value of location