//map
const numbers=[1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20]
const doubles=numbers.map(function(num){
    return num*2;
});

const games=[
    {
        title:'God Of War',
        rating:98
    },
    {
        title:'Ghost Of Tshusima',
        rating: 94
    },
    {
        title:'Red Dead Redemption 2',
        rating: 99
    },
    
    {
        title:'The Last of Us 2' ,
        rating: 97
    }

];
const titles=games.map(function(name){
    // return name.title;
    return name.title.toUpperCase();
});
// DO NOT ALTER THE FOLLOWING CODE:
const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// Write your code here
const firstNames=fullNames.map(function(fname){
    return fname.first;
    
});
//arrow
const lastNames=fullNames.map(lname=>{
    return lname.last
});
const square =(x)=>{
    return x*x;
}
//square(3)//console
const rollDie=()=>{
    return Math.floor(Math.random())*6 +1
}

const greet=(firstName)=>{
    return `Hey ${firstName}!`
};
//some other ways implicit { to ( and dont need the return keyword
const greet1=(firstName)=>(
    `Hey ${firstName}!`
);
//another way .. implicit one line return
const greet2=(firstName)=>`Hey ${firstName}!`;