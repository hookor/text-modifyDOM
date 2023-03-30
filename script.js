let box = document.querySelector('.container');
let shrink = document.querySelector('.decrease');
let cb = document.querySelector('.icon');
let grow = document.querySelector('.increase');

// const boxStyle = window.getComputedStyle(box);
// console.log(boxStyle);
let cbStyle = window.getComputedStyle(cb).getPropertyValue('font-size');
console.log(cbStyle);

shrink.onclick = (cbStyle) => {};

// shrink.addEventListener('click', function(n){
//   cb.style.fontSize = "60px"
// })

// shrink.addEventListener('click', function(n){
//   cb.style.fontSize = "1px"
// })

// shrink.onclick = () => {
//   cb.style.fontSize. += cb.style.fontSize
// }

// grow.onclick = () => {
//   cb.style.fontSize += cb.style.fontSize
// }
// console.log(cb.style.fontSize);
