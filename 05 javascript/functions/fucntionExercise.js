// coding exercise 38
function multiply(x,y){
    if(typeof x!=='number' || typeof y!=='number'){
        return false;
    }
    return x*y;
}
//coding exercise 39
function isShortsWeather(temperature){
    if(typeof temperature!=='number'){
        return 'not valid Temperature!!!!'
    }
    else if(temperature>=75){
        return true;
    }
    else{
        return false;
    }

}
// coding exercise 40//return last element(string)
function lastElement(last){
    if(last.length>0){
        return last[last.length-1];
    }
    else{
        return null;
    }
}
//coding exercise 41//capitalize first letter(string)
function capitalize(word){
    if(word.length==0){
        return null;
    }
    let capital=word[0].toUpperCase();
    word=word.slice(1)
    word=capital+word;
    return word;
}
//coding exercise 42// Sum array
function sumArray(arr){
    if(arr.length==0){
        return null;
    }
    let sum=0;
    for(let i=0;i<arr.length;i++){
       sum+=arr[i]; 
    }
    return sum;
}
//coding exercise 42// Week exer[arr]
function returnDay(day){
    if(day<1||day>7){
        return null;
    }
    const week=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    return week[day-1];
}