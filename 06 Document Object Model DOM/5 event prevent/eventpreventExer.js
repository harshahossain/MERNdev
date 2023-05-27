const form = document.querySelector('form');
const ul=document.querySelector('#list')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const quantity=form.elements.qty
    const product=form.elements.product
   
    addGro(quantity,product)
    quantity.value='';
    product.value='';
})
const addGro=(quantity,product)=>{
    const li=document.createElement('li')
    li.innerHTML=`${quantity.value} ${product.value}`
    ul.appendChild(li)

}