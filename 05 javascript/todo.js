let inputPrimary=prompt('What would you like to do?').toLowerCase();
let list=['artemis','clyde Frog'];
let number;
let todoList;
let end;


while(!inputPrimary){
    console.log('Please, tell us what you want to do?')
    inputPrimary=prompt('What would you like to do?').toLowerCase()
}

while (inputPrimary!=='quit'){
    
    inputPrimary=prompt('Invalid Input. Try Again! the Commands are |new|, |delete|, |list| and |quit|').toLowerCase();
    if(inputPrimary==='new'){
        console.log('Yeah Sure, adding a new task! at what Number you want to assign this task?')
        number=parseInt(prompt('At what number you want this task to be? (By defult it will appear on end of the list)'))
        todoList=prompt('Tell us the Task to add!')
        if(number=undefined){
            list.push(arr)
        }
        else{
            list.splice((number-1),0,arr);
        }
        
    }
    else if(inputPrimary==='list'){
        for(let i=0; i<list.length; i++){
            console.log(list[i])
        }
    }
    else if(inputPrimary==='delete'){
        number=parseInt(prompt('What number task you want to delete? (By defult it will delete the first task)'))
        while(!number){
            list.shift();
            break;
        }
        list.splice((number+1),1)
    }
    else if(inputPrimary==='quit'){
        console.log('Ok bye! Have a nice Day!')
        end=true;
    }
    else{
        inputPrimary=prompt('invalid Input. Please read the instruction from the page and try again!').toLowerCase()
    }
}



// if(inputPrimary==='new'){
//     console.log('Yeah Sure, adding a new task! at what Number you want to assign this task?')
//     number=parseInt(prompt('At what number you want this task to be? (By defult it will appear on end of the list)'))
//     arr=prompt('Tell us the Task to add!')
//     while(!number){
//      list.push(arr)
//      break;
//     }
//     list.splice((number-1),0,arr);
// }
// else if(inputPrimaryinputPrimary==='list'){
//     for(let i=0; i<list.length; i++){
//         console.log(list[i])
//     }
// }
// else if(inputPrimary==='delete'){
//     number=parseInt(prompt('What number task you want to delete? (By defult it will delete the first task)'))
//     while(!number){
//         list.shift();
//         break;
//     }
//     list.splice((number-1),1)
// }
// else if(inputPrimary==='quit'){
//     console.log('Ok bye! Have a nice Day!')
//     end=true;
// }
// else{
//     inputPrimary=prompt('invalid Input. Please read the instruction from the page and try again!').toLowerCase()
// }

console.log("Thank you for trying out this app!")