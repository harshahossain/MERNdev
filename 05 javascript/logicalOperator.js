//     && for AND logical operator
//       ||for OR operator
//          ! for NOT operator

const password=prompt("Enter Pass");
if(password.length>=6 && password.indexOf(' ')===-1 ){
    console.log("Password is okay!");
}
else{
    console.log("Password must be 6+ and without any spaces")
}



//       ||for OR operator

let age=prompt("give us your age");
age=Math.abs(parseInt(age))
// if(Math.abs(age)===0 || Math.abs(age)>=125)

// if (Math.abs(age)===0 || Math.abs(age)>=125)
// {
//     console.log("Give us a valid age")
// }
// else if(Math.abs(age)<=10 || Math.abs(age)>=65){
//     console.log("You're child or elderly so you pay 10$")
// }
if(age>0 && age<6 || age>64)
{
    console.log('bachha bura free');
}

if (age===0 || age>=125)
{
    console.log("Give us a valid age")
}
else if(age<=5 || age>=65){
    console.log("You're baby or elderly so you get in for free")
}
else if(age>5 && age<11){
    console.log("You're a child so you pay 10$")
}
else{
    console.log("You're adult so you're paying $20")
}

const firstName=prompt("Give us your first Name")
if(!firstName)
{
    console.log("Please, Enter your first name")
}
else{
    console.log("Nice name!");
}



if(!(age>=0&&age<=5||age>=65)&&(!(age<=10 &&age>=6))){
    console.log("You aren't a baby or a senior or a child. You pay $20");
}
else if(age>5 && age <= 10){
    console.log("You're a child so $10");
}
else
    {
        console.log("You are either a baby or senior or you get in for free");
    }
