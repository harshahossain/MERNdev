const p1Btn=document.querySelector('#p1btn');
const p2Btn=document.querySelector('#p2btn');
const reset=document.querySelector('#reset');
const p1Display=document.querySelector('#p1Display')
const p2Display=document.querySelector('#p2Display')
const PlayTo=document.querySelector('#round')
let p1Score =0;
let p2Score =0;
let winningScore=5;
let isGameOver=false;
p1Btn.addEventListener('click',(e)=>{
    // document.querySelector('#p1Score')

    if(!isGameOver){
        p1Score+=1;
        if(p1Score===winningScore){
            isGameOver=true;
            p1Display.style.color='Green'
            p2Display.style.color='Red'
            p1Btn.disabled=true;
            p2Btn.disabled=true;
        }   
        p1Display.textContent=p1Score;
    }
    else if(isGameOver){
        
    }
})
p2Btn.addEventListener('click',(e)=>{
    // document.querySelector('#p1Score')

    if(!isGameOver){
        p2Score+=1;
        if(p2Score===winningScore){
            isGameOver=true;
            p2Display.style.color='Green'
            p1Display.style.color='Red'
            p1Btn.disabled=true;
            p2Btn.disabled=true;
        }   
        p2Display.textContent=p2Score;
    }
    else if(isGameOver){
    
    }
})
// p2Btn.addEventListener('click',(e)=>{
//     // document.querySelector('#p1Score')
//     if(p2Score===winningScore){
//         p2Display.style.color='Green'
//         p1Display.style.color='Red'
//         p1Btn.disabled=true;
//         p2Btn.disabled=true;
//     }
//     else if(p2Score<winningScore){
//         p2Score+=1;
//         p2Display.innerHTML=p2Score;//colt used text content
//     }
//     else{

//     }
// })

function resetGame(){
    p1Display.innerHTML='0';
    p2Display.innerHTML='0';
    p1Btn.disabled=false;
    p2Btn.disabled=false;
    p2Display.style.color='Black'
    p1Display.style.color='Black'
    p1Score=0;
    p2Score=0;
    isGameOver=false;
}

PlayTo.addEventListener('change',(e)=>{
    winningScore=parseInt(PlayTo.value)
    resetGame();
})

reset.addEventListener('click', resetGame)