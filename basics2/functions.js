function name(){
    console.log("Hello World");
}


name // this is simply a reference
name(); // this will call the function

function add(a, b){ //a,b are parameters
    // parameter is a variable that is passed to the function
    // this however does not check for types
    return a + b;
} 


function greetings(name = undefined){ // default value is undefined
    if (name === undefined) { // or we can write if (!name)
        console.log('username is not defined');
        return;
        
    }
    console.log(`Hello ${name}`);
}
// arguments are the values passed to the function
add(2,3) //2,3 are arguments
// if argument is not passed, it will be undefined
greetings();

// rest operator
function addprices(...prices){
    return prices;
}

// this will return an array of prices
console.log(addprices(2,3,4,5,6,7,8,9,10)); // this will return an array of prices

function greetings(obj){
    console.log(`Hello ${obj.name}`);
}

let user = {
    name: "Meowth"
    }

log.console.log(user.name); // this will print the name
// we can similarly pass arrays into functions