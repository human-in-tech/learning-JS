let myDate = new Date()
console.log(myDate.toDateString())
console.log(myDate.toString())
console.log(myDate.toJSON())
console.log(myDate.getFullYear())

// note: month starts from 0 in js
let createdDate = new Date(2023,0,1,5,4,2)
console.log(createdDate.toString());

let timestamp = Date.now()
console.log(timestamp.toString())


// to further customise what's being showed, you can re-defined the format:
myDate.toLocaleDateString('default',{
    day: "numeric",
    weekday: "narrow"
})