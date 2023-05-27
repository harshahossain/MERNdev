//console mood ->
Math.max(123,22,3,45,667,86,12,4,5,2,89,43,12,3)
Math.min(123,22,3,45,667,86,12,4,5,2,89,43,12,3)



const nums=[123,22,3,45,667,86,12,4,5,2,89,43,12,3]
console.log(Math.max(nums))//NaN

//With Spread in Function
console.log(Math.max(...nums))
console.log(Math.min(...nums))
console.log(nums)
console.log(...nums)
// can be helpful for of 
console.log("hello!")
console.log(..."Hello!")

const cats=['Persian','Garfield','Tom']
const dogs=['Shiba','Akita','Doberman','Dalmetian']
const allPets=[...cats,...dogs]

//spread object also works the same way except we have to use {} instead of []
const feline={legs:4 ,family:'Felidae'};
const canine={family:'Caninae', furry:true}
const dog={...canine,isPet:true}
const catDog={...feline, ...canine, isCute:true}


//***************************************************************************************************** */
//REST
const raceResult=function(gold,silver, ...everyoneElse){
    console.log(`Gold Medal Winner: ${gold}!`);
    console.log(`Silver Medal Winner: ${silver}!`);
    console.log(`And Thanks to Everyone Else: ${everyoneElse}!`);    
};
//console mod->
raceResult('Gerald','Teemo','Gandalf','Peter','Tyrone','Lil-EmJay')

function sum(...nums){
    return nums.reduce((total, element)=> total+element)
}

//************************************** */
//DES-TRUC-TURING
const scores=[9278,8991,8827,7644,6545,3234,]
// const highScore=scores[0];
// const secondHighScore=scores[1];
// const [highScore,secondHighScore,bronze]=scores; 
const [highScore,secondHighScore,bronze, ...losers]=scores; 



//************************************** */
//DES-TRUC-TURING OBJECT
const user={
    email:'harvey@gmail.com',
    password:'scotmalkinsonhasdiabetes',
    firstName:'Harvey',
    lastName:'Dent',
    born:1985,
    died:2020,
    bio:'Harvey Dent was Harvey Dent. And I know Nothing About Harvey Dent. Maybe google that shit out',
    city:'San Fransisco',
    state:'California'
}

// const firstName=user.firstName;
const{email,firstName,lastName,city,bio}=user;
const{born:birthYear,died:deathYear='N/A'}=user;

const user2={
    email:'harvey@gmail.com',
    password:'scotmalkinsonhasdiabetes',
    firstName:'Kyle',
    lastName:'Keennnyy',
    born:1996,
    city:'South Park',
    state:'Colorado'
}
const{email:email2,firstName:firstName2,lastName:lastName2}=user2;
const{born:birthYear2,died:deathYear2='N/A'}=user2;


//************************************** */
//DES-TRUC-TURING PERAMS

// function fullName(user){
//     return `${user.firstName} ${user.lastName}`
// }


// function fullName(user){
//     const{firstName,lastName}=user;
//     return `${firstName} ${lastName}`
// }

function fullName({firstName,lastName='noLastName?'}){
    return `${firstName} ${lastName}`
}

const games=[
    {
        title:'God Of War',
        rating:98,
        year:2018
    },
    {
        title:'Ghost Of Tshusima',
        rating: 94,
        year:2020
    },
    {
        title:'Red Dead Redemption 2',
        rating: 99,
        year:2019
    },
    
    {
        title:'The Last of Us 2' ,
        rating: 97,
        year:2021
    },
    {
        title:'Knack' ,
        rating: 54,
        year:2013
    },
    {
        title:'Rachet & Clank' ,
        rating: 84,
        year: 2004

    },
    {
        title:'Warcraft III Remastered' ,
        rating: 25,
        year: 2004

    },
    {
        title:'Spiderman' ,
        rating: 88,
        year: 2017

    },
    {
        title:'Pokemon Shining Pearl' ,
        rating: 74,
        year: 2022

    },
    {
        title:'Dead Space' ,
        rating: 80,
        year: 2006

    },
    {
        title:'Dead Space 3' ,
        rating: 75,
        year: 2012

    },
    {
        title:'Pokemon Shiled' ,
        rating: 60,
        year: 2004

    },
    {
        title:'Dark Souls Remastered' ,
        rating: 69,
        year: 2019

    }
    

];


//games.filter((game)=>game.rating>=90) | the lline below is same
games.filter(({rating})=>rating>=90)
console.log(games.filter(({rating})=>rating>=90))


//another example
games.map(game=>{
    return `${game.title} (${game.year}) is rated ${game.rating/10}`
})

//below is same
games.map(({title,rating,year})=>{
    return `${title} (${year}) is rated ${rating/10}`
})