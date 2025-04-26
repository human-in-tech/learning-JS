let user = {
    name: "Meowth",
    age: 17,
    location: "delhi",
    
    sayHello: function() {
        console.log(`Hello, my name is ${this.name}`); // this refers to the object itself
    }
}

const one = function() {
    let name = "Meowth";
    console.log(`Hello, ${this}`); // this refers to the global object (window in browsers)
    console.log(this.name); // this will be undefined. thus we cant use this w fxn
}

one();

// now we declare a function using arrow function
const two = () => {
    let name = "Meowth";
    console.log(`Hello, ${this}`); // this refers to the global object (window in browsers)
    console.log(this.name); // this will be undefined. thus we cant use this w fxn
}

const three = () => 1 + 2; // this is implicit return
c