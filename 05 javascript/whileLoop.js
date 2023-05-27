let targetNum=Math.floor(Math.random()*10)
let guess=Math.floor(Math.random()*10)
let i=0;//to count how many times the loop was performed before the 'break;'
while(true){
    i++;
    guess=Math.floor(Math.random()*10);
    if(guess===targetNum){
        console.log(`Correct! guessed: ${guess} & target was: ${targetNum} and we got in on ${i}th try`)
        
        break;
    }
    else{
        console.log(`Guessed ${guess} ... Incorrect!`)
    }
}
let input=prompt("Hey, Say Something!")
while(true){
    input=prompt(input);
    if(input==='stop copying me'){
        break;
    }
}
console.log('Ok! You Win!!!!!')

