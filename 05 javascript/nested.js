const password=prompt('Set new password');
//6+ charecters and musn't include space
if (password.length>=6){
    //if(password.indexOf(' ')!=true){
        //checking space
     //   console.log("Your Password is 6+ and doesn't have space. NEW PASSWROD IS SET");
   // }

//    idk why ^^^ doesnt  work
   if(password.indexOf(' ')===-1){
       console.log('New pass is set')
   }
    else{
        console.log("Password can't have spaces.")
    }
}
else{
    console.log("password's too short! Must be 6+ charecters")
}
const userInput= prompt("Enter Something");
if(userInput){
console.log('true')
}
else{
    console.log('false')
}
//if(0) means if(false) which is not gonna be true 