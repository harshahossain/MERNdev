const seatingChart=[
    ['Kristen','Eric','Butters'],
    ['Bebe','Wendy','Nicole','Stan'],
    ['Kyle','Token','Kenny']
]
for(let i=0; i<seatingChart.length; i++)
{
    const row=seatingChart[i];
    console.log(`Row #${i+1}`)
    for(let j=0;j<row.length;j++){
        console.log(row[j])
    }
}

for(let a=0; a<seatingChart.length;a++){
    for(let b=0; b<seatingChart[a].length; b++){
        console.log(seatingChart[a][b])

    }
}
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:
for(let i=0; i<people.length; i++){
    console.log(people[i].toUpperCase())
}
let count=0;
while(count<=10){    
    console.log(count)
    count++;
}
// while(!gameOver){
    //player 1 move
    //player 2 move//
// }

const secrect='BabyHippo';
let guess=prompt('Enter the secret code...');
while(guess!==secrect){
    
    guess=prompt('Enter the secret code...');
};
console.log('Congrats! right code. You can enter the Arena')

