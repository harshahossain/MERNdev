const subreddits=['cringe','books','dankmeme','funny','pics','football']
for(let i=0; i<subreddits.length;i++){
    console.log(`visit reddit.com/r/${subreddits[i]}`)
}
for(let sub of subreddits){
    console.log(sub)
    console.log(`visit reddit.com/r/${sub}`)
}

const pokemons=['Charizard', 'Pikachu','Bleziken','Mew','Darkia']
for(let pokeball of pokemons){
    console.log(`${pokeball}, I choose you!!!!`)
}
const seatingChart=[
    ['Kristen','Eric','Butters'],
    ['Bebe','Wendy','Nicole','Stan'],
    ['Kyle','Token','Kenny'],
    ['Clyde','Tweek','Hennifer','Jessica','Ike']
]

for(let a=0; a<seatingChart.length;a++){
    for(let b=0; b<seatingChart[a].length; b++){
        console.log(seatingChart[a][b])

    }
}
let num=1
for(let row of seatingChart){
    console.log(`Row ${num}`)
    num++
    for(let student of row){
        console.log(student)
    }
}
//allso works for string  basically anything iterable... search mdn
for(let char of "hello world!"){
    console.log(char)
}
