const p1={
    score:0,
    button:document.querySelector('#p1btn'),
    display:document.querySelector('#p1Display')
}
const p2={
    score:0,
    button:document.querySelector('#p2btn'),
    display:document.querySelector('#p2Display')
}

const reset=document.querySelector('#reset')
const PlayTo=document.querySelector('#round')
let winningScore=5;
let isGameOver=false;

function updateScore(player,opponent){
    if(!isGameOver){
        player.score+=1;
        if(player.score===winningScore){
            isGameOver=true;
            player.display.style.color='Green'
            opponent.display.style.color='Red'
            player.button.disabled=true;
            opponent.button.disabled=true;
        }   
        player.display.textContent=player.score;
    }
}

p1.button.addEventListener('click',(e)=>{
    updateScore(p1,p2)
})
p2.button.addEventListener('click',(e)=>{
    updateScore(p2,p1)
})
function resetGame(){
    p1.display.innerHTML='0';
    p2.display.innerHTML='0';
    p1.button.disabled=false;
    p2.button.disabled=false;
    p2.display.style.color='Black'
    p1.display.style.color='Black'
    p1.score=0;
    p2.score=0;
    isGameOver=false;
}

PlayTo.addEventListener('change',(e)=>{
    winningScore=parseInt(PlayTo.value)
    resetGame();
})

reset.addEventListener('click', resetGame)