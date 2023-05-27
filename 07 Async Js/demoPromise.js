// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// *********************************************************
// passing callback into function
// fakeRequestCallback('books.com',(response)=>{
//     console.log("it Worked!")
//     console.log(response)
//     fakeRequestCallback('books.com/page2',(response)=>{
//         console.log("it Worked again!");
//         console.log(response);
//         fakeRequestCallback('books.com/page2/pageB',(response)=>{
//             console.log("it Worked 3rd time in a row!");
//             console.log(response);
//         },(err)=>{
//             console.log("Error 2nd page/ Page B",err);
//         })  
//     },(err)=>{
//         console.log("Error 2nd page",err);
//     })
// },(err)=>{
//     console.log("Error!!!!!!!!!!",err)
    
// })
// *******************************************************************


// THE PROMISE VERSION > which returns an object and the object is attachable with callback
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

async function makeTwoRequest(){
    let data1=await fakeRequestPromise('/page1');
    console.log(data1)
}



// const request=fakeRequestPromise('hiking.com/api/trails');
// request
//     .then(()=>{
//         console.log("It worked")
    
//     })
//     .catch(()=>{
//         console.log("Oh Naw! It didn't work")
//     })

fakeRequestPromise('hiking.com/api/trails')
    .then(()=>{
        console.log("It worked")
        fakeRequestPromise('hiking.com/api/trails/page1')
            .then(()=>{
                console.log("It worked again")
                fakeRequestPromise('hiking.com/api/trails/page2')
                    .then(()=>{
                        console.log('It worked 3rd time in a row')
                    }).catch(()=>{
                        console.log('Third page loading failed')
                    })
            }).catch(()=>{
                console.log("Oh Naw! It failed at the 2nd time")
            })
    })
    .catch(()=>{
        console.log("Oh Naw! It didn't work")
    });




