// setTimeout(()=>{
// document.body.style.backgroundColor='red'
//     setTimeout(()=>{
//         document.body.style.backgroundColor='yellow'
//         setTimeout(()=>{
//             document.body.style.backgroundColor='green'
//             setTimeout(()=>{
//                 document.body.style.backgroundColor='lightblue'
//                 },1000)
//             },1000)
//     },1000)
    
// },1000)
const delayedColor=(newColor,delay,doNext)=>{
    setTimeout(()=>{
        document.body.style.backgroundColor=newColor;
        doNext && doNext();
    },delay)
}
// delayedColor('red',1000,()=>{
//     delayedColor('yellow',1000,()=>{
//         delayedColor('orange',1000,()=>{
//             delayedColor('blue',1000,()=>{
//                 delayedColor('green',1000,()=>{
//                     delayedColor('olive',1000,()=>{
//                         delayedColor('pink',1000,()=>{
    
//                         })
//                     })
//                 })
//             })
//         })     
//     })  
// })


// *************************************************************
// *************************************************************
// searchMoviesAPI('Shawshank Redemption',()=>{
//     saveToMyDB(movies, ()=>{
//         //if it works, then only fire this
//     },()=>{
//         //if it doesnt work, then fire this
//     })
// },()=>{
//     //if API is down, or request failed
// })
const delayedColorChange=(color,delay)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          document.body.style.backgroundColor=color;  
          resolve()
        },delay)
    })
}
delayedColorChange('red',1000)
    .then(()=>{
        console.log('It worked!')
        return delayedColorChange('yellow',1000)
    })
    .then(()=>{
        console.log('It worked!')
        return delayedColorChange('green',1000)
    })
    .then(()=>{
        console.log('It worked!')
        return delayedColorChange('grey',1000)
    })
    .then(()=>{
        console.log('It worked!')
        return delayedColorChange('olive',1000)
    })
    .then(()=>{
        console.log('It worked!')
        return delayedColorChange('orange',1000)
    })
    .then(()=> delayedColorChange('pink',1000))
    .catch((err)=>{
        console.log(err)
    })
