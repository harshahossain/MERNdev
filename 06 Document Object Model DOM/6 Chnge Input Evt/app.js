const input=document.querySelector('input');
const h1=document.querySelector('h1')


// input.addEventListener('change',(e)=>{ //this fire whenever we click away from the input and theres change
//     console.log(e)
// })

//this fires whenever theres change
input.addEventListener('input',(e)=>{
    // e.preventDefault();
    console.log("input event")
    h1.innerText=input.value;
})

// exercise
const btn=document.querySelector('#change');
const container=document.querySelector('#container');

btn.addEventListener('click',(e)=>{
    container.style.backgroundColor=makeRandColor();
    e.stopPropagation()//basically the main function to stopp bubbling up
})
container.addEventListener('click',(e)=>{
    btn.classList.toggle('hide')
})
const makeRandColor=()=>{
    const r=Math.floor(Math.random()*255)
    const g=Math.floor(Math.random()*255)
    const b=Math.floor(Math.random()*255)
    return `rgb(${r}, ${g}, ${b})`
}