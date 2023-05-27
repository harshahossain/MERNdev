const testScores={
    stan:76,
    kyle:82,
    nicole:92,
    wendy:95,
    eric:100,
    kenny:85,
    token:88,
    clyde:76
};
for(let person in testScores){
    console.log(person)
    //it just gives us the keys

    //to get the values
    console.log(testScores[person])

    //to make it more sensable
    console.log(`${person} scroed ${testScores[person]}` )

}

//new method:
Object.keys(testScores)//hit in consolle
Object.values(testScores)//hit in console
Object.entries(testScores)//this gives us both

//maybe i need all of their number to assing average so
let total=0;//to get the total
let scores=Object.values(testScores)//because testScores is a object and it doesnt have llenght on the other hand the scores is an array so it has length 
for(let score of scores){
    // total=total+score;
    total+=score;
    
    console.log(total/scores.length)
}