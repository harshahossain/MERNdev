const req= new XMLHttpRequest();
req.onload=function(){
    console.log("All done with request");
    // console.log(this);
    const data=JSON.parse(this.responseText);
    console.log(data.ticker.price)
}
req.onerror=function(){
    console.log("All Error");
    console.log(this);
}
req.open('GET','https://api.cryptonator.com/api/ticker/btc-usd');
req.send();