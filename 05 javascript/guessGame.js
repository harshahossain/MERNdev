let maximum=parseInt(prompt("Enter the max number!"));

// while(!maximum){ // meaning if maximum value is falsy(Nan is falsy by default)
 
while (!maximum){
    console.log('Enter a valid Maximum Number, Please');
    maximum=parseInt(prompt('Enter a valid Maximum Number, Please'));
}

let attempt=1;
const targetNum=Math.floor(Math.random()*maximum)+1
// console.log(targetNum);r
//console.log(targetNum);
let guess=(prompt('Guess the number'))
while(parseInt(guess)!==targetNum){
    if(guess==='q'||guess==='Q') break;
    if(guess>targetNum){
        guess=prompt('Guess the number again. But try SMALLER number this time')
        attempt++;
    }
    else if(guess<targetNum){
        guess=prompt('Guess the number again. But try BIGGER number this time')
        attempt++;
    }
    else{
        guess=prompt(`Your guess is ${guess} which is not lower or higher, Please input actual number`)
        attempt++;
    }
}
if(guess==='q'||guess==='Q'){
    console.log("Ok, you Quit!!!!!!")
    console.log('Better luck next time')
}
else{
    console.log('CONGRATULATONS!!!! You guessed it right!')
    console.log(`the number is indeed ${targetNum} and it took you ${attempt} try/s`)
}

