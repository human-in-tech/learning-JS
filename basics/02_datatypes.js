// old JS vs new JS 
//  js is dynamic
"use strict" // treats all JS code as newer version of JS. not really needed no more. automatic.

// avoid semi colons :3

//  primitive datatypes - stored and called by value, stored in stack memory
let name = "string"
let age = 34 // range for integer = 2^53, next is big int
let bigage = 23239432894023890289018238023498203420323094203219382039412n //big int
let boolean = true
let meow = null // null = datatype AND a stand-alone value
let rawr // undefined
let unique = Symbol(12)
console.log(typeof meow) 
// null vs undefined : null is representation of empty value. undefined is NOT assigning the value yet.


// non primitive datatypes - return type : object, stored in heap memory
// arrays
let arr = [3,4,"meow"]
console.log(arr)
// object
let obj = {
    name: "meowth",
    age:2023
}
// function (return type : function object)
let myFunction = function () {
    console.log("my forst function  meow")
}

