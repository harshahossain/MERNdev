function returnFunc(){
    const rand=Math.random();
    if (rand>0.5){
        return function(){
            console.log('the math random() returned more than 0.5')
        }
    }
    else{
        return function(){
            alert('we smaller but we are on alert! gg math random()')
        }
    }
    
    
}
returnFunc()
const tstAlpha=returnFunc()
tstAlpha
//tstAlpha()
function isBetween(num){
    return num>=50 && num<=100
}
function isBetween2(num){
    return num>=1 && num<=10
}
// A factory function is a function that will make a function for me
function makeBeetween(min, max){
    return function(num){
        return num>=min && num<=max;
    }
}
const range1 =makeBeetween(25,65)
// range1
// range1()
const hen={
    name:'Helen',
    eggCount:0,
    layAnEgg(){
        this.eggCount++;
        return 'EGG';
    }
  };

  function tell3(msg){
      try{
          console.log((msg.toUpperCase).repeat(3))
      }
      catch(e){
        //   console.log(e);
          console.log("Please, Pass a String")
      }
  }
