let input=prompt('What would you like to do?');
const todos=['Lunch','Call'];
while(input !=='quit'){//why not or || why the fk is there and?
    if(input ==='list'){
        console.log('*******************')
        for(let i=0; i<todos.length;i++){
            console.log(`${i}: ${todos[i]}`)
        }
        console.log('*******************')

    }
    else if(input==='new'){
        const newTodo=prompt('Tell us the Task to add!')
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`)
    }
    else if(input==='delete'){
        const index=parseInt(prompt('Enter an index to delete:'))
        if(Number.isNaN(index)){
            const deleted=todos.splice(index,1)
            console.log(`Ok, ${deleted} deleted from your list!`)
        }
        else{
            console.log("Unknown Index")
        }
    } 
    input=prompt('what would you like to do?') 

}
console.log("App Quitted!!!")   