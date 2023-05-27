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
        rating: 65,
        year: 2004

    },
    {
        title:'Dark Souls Remastered' ,
        rating: 65,
        year: 2019

    }
    

];

const goodGames=games.filter(game=>{
    return game.rating>80
});
const greatGames=games.filter(game=>{
    return game.rating>90
});
const goatGames=games.filter(game=>{
    return game.rating>94
});

//one liner implicit
const trashGames=games.filter(g=>g.rating<80);
const recentGames=games.filter(g=>g.year>=2018)

// filter is takes always a function and it only returns true or false. the true one is catchable by putting it in another array

const greatGameTitles=greatGames.map(g=>{
    return g.title
})

const goatTitles=games.filter(g=> g.rating>94).map(g=> g.title)
const validUserNames=['Mark','Stacysmom1978','qwe123232321323123','carrie98','MoanaFan'];
const validUserN=validUserNames.filter(vum=>{
    return vum.length<10;
});
// exercise 49
const userNames=['Mark','Stacysmom1978','qwe123232321323123','carrie98','MoanaFan'];
function validUserNames(arr){
    return arr.filter(n=> n.length<10)
}
// const testArray = ["working", "drawing", "reading", "gaming", "cooking lasagna", "cleaning bedroom"];
// function validUserNames(arr) {
//     return arr.filter((item) => {
//         return item.length < 10;
//     });
// }