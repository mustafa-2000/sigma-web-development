// this is sample function 
// function name(params) {
    
// }
// function is used to make easy code and stop repating code writing

function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " your tshirt is nice!")
    console.log("Hey " + name + " your course is good too!")
}
nice("mustafa")
nice("harry")

// sample sum function

function sum(a, b, c = 3) {
    // console.log(a + b)
    console.log(a, b, c)
    // same way we can use return
    return a + b + c
    // return keyword is to return a value
}


result1 = sum(3, 2)
result2 = sum(7, 5)
result3 = sum(3, 13, 1)

console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)

// arrow function
const func1 = (x)=>{
    console.log("I am an arrow function", x)
}

func1(34);
func1(66);
func1(84);