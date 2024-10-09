let arr = [1, 2, 4, 5, 7]
//  Index  0, 1, 2, 3, 4

// we can change index of array
arr[0] = 5666;

// type of array is object
// console.log(arr, typeof arr);
// console.log(arr.length)

// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[4])

// change array to string
console.log(arr.toString())
// instate of coma, and comes between to arrays index :for exp:[1,2,3,4] =>[1 and 2 and 3 and 4]
console.log(arr.join(" and "))

// array method :
// let a = [1,2,3,4,5,6]
// a.pop() => [1,2,3,4,5] pop is take out the last element of an array
// a.push("nazari") => [1,2,3,4,5,6,'nazari']  push is and and element to an array
// a.shift => [2,3,4,5,6] => shift is remove the first element or 0 index
// a.unshift("jack") => ['jack',2,3,4,5,6] unshift change the 0 index
// a.delete[6] => ['jack', 2,3,4,5,6, empty] delete is remove the value of array bud not remove the index
// a.splice(1,3) => [index(1),index(2),index(3)] => [2,3,4] delete from a = [1,5,6]
// a.slice(2) => [index(3),index(4),index(5), ] => [3, 4, 5, 6]
// a.reverce => [6,5,4,3,2,1]

// let numbers = [1, 2, 3, 4, 5] 
// numbers.splice(1, 2)    
// numbers.splice(1, 3)  
// numbers.splice(1, 3, 222, 333) 
// (4) [1, 222, 333, 5]