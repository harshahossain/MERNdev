function bullet(){
    console.log('tears dont fall')
    console.log('shatter')
    console.log('all these things I hate')
}
bullet();

function greet (firstName){
    console.log(`Hello! ${firstName}, How may I assist you? ` )
}
//greet('Margaratte')//expected arguement, if blank it will be undefined default

function greet (firstName, lastName){
    console.log(`Hello! ${firstName} ${lastName[0]}.  How may I assist you?`)
}
greet('Samurai','Jackson')
function repeat(str,numTimes){
    let result='';
    for(let i=0; i<numTimes;i++){
        result+=`${str} `;
    }
    console.log(result);
}
repeat('Viper',7)
function add(x,y){
    let ans=x+y;
    // return ans;
    return x+y;
}
function add(x,y){
    if(typeof x!=='number' || typeof y!=='number'){
        // return "One of them is not a number try again"
        return false;
    }
        let ans=x+y;
        // return ans;
        return x+y;
    
}
// return marks as exit so we dont gotta worry after if
add(add(1,6),3);
add(7,3);
let total=add(add(3,7),10)