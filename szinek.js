let str = '';
for (let i = 0; i <6; i++) {
    str += `<div class="box"></div>`
}
document.querySelector('.cont').innerHTML = str;

let boxes = document.querySelectorAll('.box');
let colors = []
for (let box of boxes) {
    //console.log(box.style.backgroundColor);
    let color = creatColor();
    colors.push(color);
    box.style.backgroundColor =color;
}
console.log(colors);
function creatColor(){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    return `rgb(${red}, ${green}, ${blue})`;
}
console.log(creatColor());

let randindex = Math.floor(Math.random()*6);
document.querySelector('.color').innerHTML = colors[randindex];

function check(e){
    console.log(e.target.style.backgroundColor);
    let clickAddColor = e.target.style.backgroundColor;
    if (clickAddColor== colors[randindex]){
        document.querySelector('.result').innerHTML = '👌'
    }else{
        document.querySelector('.result').innerHTML = '😒'
    }
}
