const login= async(username ,password)=>{
    if(!username || !password){
        throw 'Missing Credentials'
    }
   if(password==='patienceAatrox') return 'WELCOME!'
   throw 'Invalid Password'
}

login('assasa','patienceAatrox')    
    .then(msg=>{
        console.log('logged in!')
        console.log(msg)
    })
    .catch(err=>{
        console.log('ERROR')
        console.log(err)
    })    





// await
const delayedColorChange=(color,delay)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor=color;  
            resolve()
        },delay)
    })
}
    
    // delayedColorChange('red',1000)
    // .then(()=>delayedColorChange('orange',1600))
    // .then(()=>delayedColorChange('yellow',1600))
    // .then(()=>delayedColorChange('green',1600))
    // .then(()=>delayedColorChange('blue',1600))
    // .then(()=>delayedColorChange('indigo',1600))
    // .then(()=>delayedColorChange('violet',1600))
    // .then(()=>delayedColorChange('purple',1600))
    // .then(()=>delayedColorChange('skyblue',1600))
    // .then(()=>delayedColorChange('magenta',1600))
    // .then(()=>delayedColorChange('#81b29a',1600))
    // .then(()=>delayedColorChange('pink',1600))

    async function rainbow(){
        await delayedColorChange('red',1000)
        await delayedColorChange('yellow',1000)
        await delayedColorChange('green',1000)
        await delayedColorChange('blue',1000)
        await delayedColorChange('indigo',1000)
        await delayedColorChange('violet',1000)
        return "isLGBT=true;"
    }
    // rainbow().then((arg)=>{
    //     console.log("END OF RAINBOW!")
    //     console.log(arg)
    // })
    async function printRainbow(){
        await rainbow();
        console.log("End of Rainbow!")
        //downside is we cant print out the promise result or the response or the resolve string
    }



// ********************************************************
// *********************************************************
// *******************************************************
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout... :( Sadge')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
} 
    
async function makeTwoRequest(){
    try{
        let data1=await fakeRequestPromise('/page1');
        let data2=await fakeRequestPromise('/page2');
        console.log(data1)
        console.log(data2)
    }
    catch(e){
        console.log(e)
    }
    
}
    