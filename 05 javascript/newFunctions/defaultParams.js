//old way
function multiply(a,b){
    b = typeof b !=='undefined' ? b:1;
    return a*b;
}

//older way
function rollDieDefault(numSides){
    if (numSides===undefined){
        numSides=6;
    }
    return Math.floor(Math.random()*numSides)+1
}


//**************************************
//new way DEFAULT PARAMS
function rollDie(numSides=6){
    return Math.floor(Math.random()*numSides)+1
}
function greet(person, msg="Hey there", punc="!"){
    console.log(`${msg}, ${person} ${punc}`)
}