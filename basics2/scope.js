function one(){
    let name = "Meowth";

    function two(){
        let breed = "Pikachu";
        console.log(name); // this will print Pikachu
    }
    
    two();
    // console.log(breed); this will throw an error
}

one(); // this will print Meowth

// if you declare a variable inside if-else, it will not be available outside of it
three(1) //this will work
// value(1) // this will throw an error
function three(num){
    return num + 1
}

const value = function(num){ // knowns as function expression
    return num + 2
}

// variables declared with var are hoisted to the top of the function