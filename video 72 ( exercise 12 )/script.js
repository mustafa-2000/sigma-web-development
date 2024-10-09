



console.log("Script.js initializing")
// forEach method doesn't work on html collection.
// let boxes = document.getElementsByClassName("box")

let boxes = document.querySelector(".container").children 


function getRandomColor(){
    // math.ceil is for round of the number 2.5 => 3
    // fromula a + math.random() (b-a)
    // 0 + math.random () (255) =>math.ceil (0 + math.random()*255)
    let val1 = Math.ceil(0 + Math.random)* 255);
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})