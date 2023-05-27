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
const bitCoinPrice=async()=>{
    try{
    const res= await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    console.log("Response waiting to be parsed..")
    const data =await res.json();
    console.log(data.ticker.price)
    }catch (e) {
       console.log("ERROR!!! :",e)
    }
    
}    