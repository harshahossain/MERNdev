const fakeRequest=(url)=>{
    return new Promise((resolve,reject)=>{
        const rand=Math.random();
        
        setTimeout(()=>{
            if(rand<0.7){
                resolve(`Your Fake Data is submitted to ${url}`)
            }
            else{
                reject('Connection Timed out!!')
            }
        },1000)
})
}
fakeRequest('/dogs/1')
    .then((pass)=>{
        console.log("Done With Request")
        console.log(pass)
    })
    .catch((err)=>{
        console.log("Failed Submission")
        console.log(err)
    })

