
let score = 0

function doSomething(){
console.log ("increase the score")
score = score + 1
draw()
}
function draw (){
let scoreElement = document.getElementById 
("score-spot")
scoreElement.innerText = score
}