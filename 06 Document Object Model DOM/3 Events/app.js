const btn=document.querySelector('#v2');
btn.onclick=function(){
    console.log('v2 id button got clicked')
    console.log('yeah it works!')
}
function scream(){
    console.log('YOOOOOOOOO STAPH!!!!!!!')
    console.log('Who Touch Ma Spagheet!!!')
}
btn.onmouseenter=scream;

// document.querySelector('h1').onclick=function(){
//     alert("Bro, why you're clicking the H1?")
// }
document.querySelector('h1').onclick=()=>{
    alert("Bro, why you're clicking the H1?")
}
// **************************************************************** */
//************************************************************** */
// addEventListener | removeEventListener
const button3=document.querySelector('#v3')
button3.addEventListener('click',()=>{
    alert('You cllicked v3 with alert with addEventListener')
});
// button.addEventListener('mouseup',()=>{
//     alert('You cllicked v3 with alert with addEventListener')
// });
button3.addEventListener('mouseup',scream);

function twist(){
    console.log('twist')
}
function shout(){
    console.log('shout')
}
const tasBtn=document.querySelector('#tas');

// tasBtn.onclick=twist;
// tasBtn.onclick=shout;
// doesnt work we need to use addEventListener

//but this will do the trick!!!!!!!!
tasBtn.addEventListener('click',twist, {once:true})
tasBtn.addEventListener('click',shout)

