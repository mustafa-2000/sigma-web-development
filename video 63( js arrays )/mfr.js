
// map, flite and reduce in js

// if we want to make new array form old array we use this below code for easy way we use map method
let arr = [1, 13, 5 ,7, 11];
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }

// map method to make new array
let newArr = arr.map((e, index, array)=>{
    return e**2
})
console.log(newArr)


// filter method return new array if passes a test or condition
// let arr = [1, 13, 5 ,7, 11];
// in here filter take those element are bigger than 7 => [13, 11]

const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(greaterThanSeven))

// reduce method is reduce an array to a number , by arthmatic opreations
let arr2 = [1,2,3,4,5,6]

const red = (a, b)=>{
    return a+b
}

console.log(arr2.reduce(red))