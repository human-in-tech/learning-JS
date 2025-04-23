 let arr = [1,4,7]
 let arr3 = [5,6,7]
 console.log(`my array: ${arr}`)
 let arr2 = new Array(1,2,3,4)
 const meow = [...arr, ...arr2]
 console.log(meow)
 const woof = [...arr, ...arr3]
 console.log(woof)

 arr.push(2)
 console.log(`pushed value into arr. arr now becomes: ${arr}`)
arr.pop()
console.log(`popped value off, now my arr is: ${arr}`)

// unshift() method is used, where element is added to the front
// shift() pops element from front
// .join() joins it into string
// splice() -  takes out the indexes from the array
// .concat() - 


console.log(Array.from("rawr"))
console.log(Array.of(1,2,4,5))