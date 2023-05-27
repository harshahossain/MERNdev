let cats=['Persian','Desi','Beral']
let dogs=['Poodle', 'Shiba Inu', 'Doberman']

cats.concat(dogs)
dogs.concat(cats)

let kukurBeral = dogs.concat(cats)

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false

kukurBeral.indexOf('Shiba Inu')

console.log(kukurBeral.indexOf('Desi'));
//expected output: 4
console.log(kukurBeral.indexOf('asdasdsad'));;
//expected output: -1 its an easy way to find out if something exitst in the array or not
kukurBeral.reverse()//this also changes the orignal kukurBeral and Saves it after Reversing it.
console.log(kukurBeral)
//expected to show the Berals first then the Kukurs. 

let elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

 let colors=['red','orange','yellow','green','blue','indigo','voilet']
 colors.slice()
 //if we console log colors.slice() the array will give us alll the colors.
 let coolColors=colors.slice(4)
 //coolColors= blue indigo violet. orignal color unchanged
 coolColors=colors.slice(4,6)
 //coolColors = blue and violet
 coolColors=colors.slice(3,6)
 //coolColors = green blue and violet [notice how the ending doesnt incllude itself. its more like an from index number 3 upto 6 ]
 coolColors=colors.slice(-3)
//  expected output: ["blue", "indigo", "violet"] -3 means last 3


// SPLICE IS DESTRUCTIVE
// colors.splice(start, ?delete, ?items)
colors.splice(5,1) //meaning delete 6th element not the index. if it was(5,2) it would delete both indigo and violet
// it returns the deleted index in this case indigo because its followed by the 5th element which is blue
colors.splice(1,0,'dark-orange')// meaning dont delete anything after red and add dark-orange between red and orange
colors.splice(3,0,'yelllow-green', 'pink')


// array.sort converts everything into string and then compares their UTF16?(ASCII?) value
//it is also destructive
let months =['Jan','Feb', 'March','Dec']
months.sort();
console.log(months);
//expected output: ["Dec","Feb","Jan","March"]
let arrayNum=[1,30,10000000000000000000,21,4]
arrayNum.sort();
console.log(arrayNum);
//expected output:[1,1000000000000000,21,30,4]

let num=[1,2,3]
let numCopy=num;
num.push(4);
// num=[1,2,3,4]
// numCopy=[1,2,3,4]
numCopy.pop(); // both numCopy and num is [1,2,3]

// const can be use to declare array and we can change like 
// push pop and we wont get an error because the ACTUAL REFERENCE isnt changing
// the allocated memory for the const is still the same even though its content has changed 

const gameBoard=[['X','O',null],['O',null,'X'],['O','O','X']];
// to get the null we could do gameBoard[0][2] or gameBoard[1][1]
// for rubics cube middle null we could [1],[1],[1]
