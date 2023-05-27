 const prices=[9.11, 20.50,70.45,2.15,30.00,19.99]
// let total =0;
// for(let price of prices){
//     total+=price;   
// }
// console.log(total)


//reduce accumulator (the first perameter) we can select the starting point
const total=prices.reduce((total,price)=>{
    return total+price;
});
const total2=prices.reduce((total,price)=> total*price) //inline

const minPrice=prices.reduce((min,price)=>{
    if (price<min){
        return price;
    }
    else{
        return min;
    }
})
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
const highestRated=games.reduce((bestGame, currentGame)=>{
    if(currentGame.rating>bestGame.rating){
        return currentGame;
    }
    return bestGame;
});
//reduce accumulator (the first perameter) we can select the starting point
const evens=[2,4,6,8]
evens.reduce((add,specialAdd)=> add+specialAdd,100)

const person={
    firstName: 'Victor',
    lastName: 'Chao',
    // thats why we change below stuff to function() from arrow
    fullName:function(){
        console.log(this);
        return `${this.firstName} ${this.lastName}`
    },
    shoutName:function(){
        //whats happening here is the setTimeout is refferring to windows object for this.fullname which has none.
        //if we change setTimeout(function) to arrow function setTimeout(()=>{})
        //it will refer to the ppparent element which will be person
        setTimeout(()=>{
            console.log(this)
            console.log(this.fullName())
        },3000)
    }
};
