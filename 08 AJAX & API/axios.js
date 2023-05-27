// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(response=>{
//         console.log("Response waiting to be parsed..",response)
//         return response.json();
//     })
//     .then(data=>{
//         console.log("data parsed..")
//         console.log(data.ticker.price)
//         //return fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     })
//     .catch(e=>{
//         console.log("ERROR!!!!!!!....",e)
//     })

// res=response
// const bitCoinPrice=async()=>{
//     try{
//     const res= await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     console.log("Response waiting to be parsed..")
//     const data =await res.json();
//     console.log(data.ticker.price)
//     }catch (e) {
//        console.log("ERROR!!! :",e)
//     }
    
// }    
// ******************************************
// *****************************************
// WITH AXIOS
// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res=>{
//         console.log(`Current BitCoin Price: ${Math.floor(res.data.ticker.price)} $`)
//     })
//     .catch(e=>{
//         console.log("ERORRRRRRRRR!!!!!!!!!",e)
//     })

//  const currBitCoinPrice= async()=>{
//      try{
//          const res=await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//          console.log(`Current BitCoin Price: ${Math.floor(res.data.ticker.price)} $`)
//      }
//      catch(err){
//         console.log("ERORRRRRRRRR!!!!!!!!!",err);
//      }
//  }   

// **********************************************
//  *************************************************

//  const jokes=document.querySelector('#joke')
//  const getBadJoke=async()=>{
//     const config={ headers: {Accept: 'application/json'}}
//     const res= await axios.get('https://icanhazdadjoke.com/',config)
//     // console.log(res)
//     // console.log(res.data.joke)
//     const newLi=document.createElement('li');
//     newLi.append(res.data.joke);
//     jokes.append(newLi)
//  }
//  document.querySelector('button').addEventListener('click',getBadJoke)
//  list=document.querySelectorAll('li')

//  jokes.addEventListener('click', function(e){

    // e.target.nodeName ==='LI'&& e.target.remove()//LI capital important, the nodeName is important here
// })
const jokes=document.querySelector('#joke');
const button=document.querySelector('button');
const addJoke=async()=>{
    const jokeText=await getBadJoke();
    const newLi=document.createElement('li');
    newLi.append(jokeText);
    jokes.append(newLi)
}
const getBadJoke=async()=>{
        try{
            const config={ headers: {Accept: 'application/json'}}
            const res= await axios.get('https://icanhazdadjoke.com/',config)
            return res.data.joke;
        }
        catch(e){
            return "No Joke Found this time!"
        }
        
}
button.addEventListener('click',addJoke)
jokes.addEventListener('click', function(e){

    e.target.nodeName ==='LI'&& e.target.remove()//LI capital important, the nodeName is important here
})