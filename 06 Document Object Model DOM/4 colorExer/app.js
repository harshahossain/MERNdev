const btn=document.querySelector('button');
const h1=document.querySelector('h1')

btn.addEventListener('click',function(){
    console.log('wtf')
    // document.querySelector('body').style.backgroundColor='Olive';
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);
    const newC=`rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor=newC;//
    h1.innerText=newC;    
    btn.style.margin='40% 40%'
    //btn.style.alignContent='center'
    h1.style.textAlign='center'     
})


// const button = document.querySelector('button');
// const h1 = document.querySelector('h1');

// button.addEventListener('click', function () {
//     const newColor = makeRandColor();
//     document.body.style.backgroundColor = newColor;
//     h1.innerText = newColor;
// })

// const makeRandColor = () => {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     return `rgb(${r}, ${g}, ${b})`;
// }

