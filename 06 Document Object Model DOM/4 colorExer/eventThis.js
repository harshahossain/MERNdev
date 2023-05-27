const makeRandColor=()=>{
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);
    return `rgb(${r}, ${g}, ${b})`
}
 const buttons=document.querySelectorAll('button');
// for(let btn of buttons){
//     btn.addEventListener('click',()=>{
//         // console.log("CLICKED")
//         btn.style.backgroundColor=makeRandColor();
//         btn.style.color=makeRandColor();
//     })
// }
const h1s=document.querySelectorAll('h1');
// for(let h of h1s){
//     h.addEventListener('click',()=>{
//         h.style.backgroundColor=makeRandColor();
//         h.style.color=makeRandColor();
//     })
    
// }

function colorize(){
    this.style.backgroundColor=makeRandColor();
    this.style.color=makeRandColor();
}
for(let h of h1s){

    h.addEventListener('click',colorize)
}

for(let btn of buttons){

    btn.addEventListener('click',colorize)
}