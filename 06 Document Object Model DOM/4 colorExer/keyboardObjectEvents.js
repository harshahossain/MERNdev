document.querySelector('button').addEventListener('click', function(evt){
   // console.log(evt)
   console.log('CLEEEEICK')
})
const input=document.querySelector('input');
input.addEventListener('keydown',(e)=>{
    console.log(e)
    console.log(e.key)
    console.log(e.code)
    console.log('key Pressed')
})
input.addEventListener('keyup',()=>{
    console.log('key Released')
})


// TO ADD EVENT TO WHOLE PAGE JUST
// window.addEventListener('keydown',(e)=>{
//     console.log(e.code)
// })
//TO onlly count the selected keyboard keys
window.addEventListener('keydown',(e)=>{
    switch(e.code){
        case 'ArrowUp':
            console.log("UP!!!CODE")
            break;
        case 'ArrowDown':
            console.log("DOWN!!!!CODE")
            break;
        case 'ArrowLeft':        
            console.log("LEFT!!!!CODE")
            break; 
        case 'ArrowRight':
            console.log("RIGHT!!!!CODE")
            break;
        default:
            console.log("IGNORED!")        
    }
})