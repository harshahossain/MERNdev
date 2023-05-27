//forEach
const numbers=[1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20];
function print(element){
    console.log(element)
}
//print(numbers[1])
//print(numbers[2])
numbers.forEach(print)
console.log('the next will be in line function with forEach');
numbers.forEach(function(el){
    console.log(el);
});
console.log('the next one is for of[for (let el of "something" ]'); 
for(let el of numbers){
    console.log(el);
}

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
games.forEach(function(trippleA){
    //console.log(trippleA)
   // console.log('with ``');
    console.log(`${trippleA.title} - ${trippleA.rating/10} out of 10`);
})