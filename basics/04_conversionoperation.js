let catnips = 5
let cats = 5

console.log(typeof catnips)

let Catnips = Number(catnips)
console.log(typeof Catnips)

let cry = Number ("meow 123")

console.log(typeof cry);
console.log(cry); 

// even though values are converted in js, it doesn't guarantee they are done right. strings/undefined
// converted to numbers will give NaN aka not a number, while null converted to 0


// OPERATIONS - happening from Left to Right. String + Number gives us concatenation
console.log(1 + 1 + "2");  
console.log(1 + "1" + "2");
console.log(+true);
console.log(+"")


// COMPARISONS
console.log(null >= 0 );  
console.log(null == 0);
// equality and comparison operators work differently. thus, >= converts null into 0, but equalityt does not
console.log('0' === 0)
// === checks for the type as well



