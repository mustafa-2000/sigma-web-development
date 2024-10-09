
// we use array in loops
let a = [1, 93, 5, 6, 88]

// 1 for
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
    
// }

// 2 forEach
// a.forEach((value, index, arr)=>{
//     console.log(value, index, arr)
// })

// 3 for in
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key]; 
//         console.log(key, element)
//     }
// }
// 4 for of
for (const value of a) {
    console.log(value)
}