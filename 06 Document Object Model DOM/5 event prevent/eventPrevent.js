const form=document.querySelector("#ggezForm");
const input=document.querySelector("#dogBreed")
const list=document.querySelector('#dogs');//intially its null cause doesnt exist in html
form.addEventListener("submit",(e)=>{
    // console.log('submitted');
    e.preventDefault();
    console.log(input.value);
    const newLi=document.createElement('li');
    newLi.innerHTML=input.value;
    list.append(newLi)
    document.getElementById('dogBreed').value = "";
})
