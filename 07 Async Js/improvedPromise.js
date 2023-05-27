//promise version of callback
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
} 
// *********************************************************************
//this is the longer way. the modern way is after this block of code
// *********************************************************************
// fakeRequestPromise('hiking.com/api/trails')
//     .then(()=>{
//         console.log("It worked")
//         fakeRequestPromise('hiking.com/api/trails/page1')
//             .then(()=>{
//                 console.log("It worked again")
//                 fakeRequestPromise('hiking.com/api/trails/page2')
//                     .then(()=>{
//                         console.log('It worked 3rd time in a row')
//                     }).catch(()=>{
//                         console.log('Third page loading failed')
//                     })
//             }).catch(()=>{
//                 console.log("Oh Naw! It failed at the 2nd time")
//             })
//     })
//     .catch(()=>{
//         console.log("Oh Naw! It didn't work")
//     });

// *********************************************************************
// *********************************************************************
// *********************************************************************
//NEW WAYYYYYY [uses single |.catch| for all ] the function must be returned
fakeRequestPromise('hiking.com/api/trails')
    .then((data)=>{
        console.log("It worked for dashboard")
        console.log(data)
        return fakeRequestPromise('hiking.com/api/trails/page1')
    })
    .then(()=>{
        console.log("It worked for page 1 after dashboard")
        return fakeRequestPromise('hiking.com/api/trails/page2')
    })
    .then(()=>{
        console.log("it worked for the page 2 after accessin dashboard followed by page1")
    }).catch((err)=>{
        console.log("Oh naw! looks like it didnt work.")
        console.log(err)
    })