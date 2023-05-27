// const creature = "Common Sea Dragon";
 
// function scubaDive(){
//     const creature = "Spanish Dancer"; //A type of sea slug
//     console.log(creature);
// }
 
// scubaDive();
// let deadlyAnimal = "Blue-Ringed Octopus";
 
// function handleAnimal() {
//     let deadlyAnimal = "Scorpionfish";
//     console.log(deadlyAnimal);
// }
 
// handleAnimal();
// console.log(deadlyAnimal)
// if we make something with var it will be scopped to the function but the block is unscopped
function bankRobbery(){
    const heros=['Batman','Spiderman','Wolverine','Silver-Surfer','Superman','Hulk']
    function cryHelp(){
        function inner(){
            for(let hero of heros){
                console.log(`PLEASE HELP US, ${hero.toUpperCase}`)
            }
        }
        inner();
    }
    cryHelp();
}
// function expression = stroing function inside variable
const square=function(num){
    return num*num;
}
square(4)//its name of the variable it is stored to


// creating double rolls with fucntion calling function
function callTwice(func){
    func();
    func();
}
function tenTimes(f){
    console.log('roll die 10 time with lloop and high order function')
    for(let i=0; i<=10; i++){
        f()
    }
}
function rollDie(){
    const roll=Math.floor(Math.random()*6)+1;
    console.log(roll)
}
callTwice(rollDie)

//return function
function returnFunc(){
    const rand=Math.random();
    if (rand>0.5){
        return function(){
            console.log('the math random() returned more than 0.5')
        }
    }
    else{
        return function(){
            alert('we smaller but we are on alert! gg math random()')
        }
    }
    
    
}
