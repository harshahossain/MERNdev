const tweetForm=document.querySelector('#tweetForm')
// const tweet=document.querySelectorAll('input')[1]
// const user=document.querySelector('input')
const ul=document.querySelector('ul')
tweetForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    // const li=document.createElement('li');
    // const b=document.createElement('b');
    
    const user=tweetForm.elements.username;
    const tweet=tweetForm.elements.tweet;
    // b.append(user);
    // // li.innerHTML=`${user.value} tweets,  ${tweet.value}`
    // li.append(b);
    // li.append(`- ${tweet}`)
    // ul.append(li);
    
    // tweet.innerHTML="";
    // user.innerHTML="";
    // console.log(li)
    addTweet(user.value,tweet.value)
    tweet.value="";
    user.value="";

})
const addTweet=(user,tweet)=>{
    const li=document.createElement('li');
    const b=document.createElement('b');
    b.append(user);
    // li.innerHTML=`${user.value} tweets,  ${tweet.value}`
    li.append(b);
    li.append(`- ${tweet}`)
    ul.append(li);
    
    
    //console.log(li)
}
ul.addEventListener('click', function(e){

    e.target.nodeName ==='LI'&& e.target.remove()//LI capital important, the nodeName is important here
})