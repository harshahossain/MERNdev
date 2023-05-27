const form=document.querySelector('#searchForm');
form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    console.log("submitted just checking");
    const searchTerm=form.elements.query.value;
    const config={params: {q:searchTerm}}
    const res=await axios.get(`https://api.tvmaze.com/search/shows`,config);
    makeImages(res.data)
    form.elements.query.value=''; 
   // console.log(res.data[0].show.image.medium)
});
const makeImages=(shows)=>{
    for(let result of shows){
        if(result.show.image){
            const img=document.createElement('IMG');
            img.src=result.show.image.medium;
            document.body.append(img)
        }   
    }
}



const deleteImgs = function () {
    const imgs = document.querySelectorAll('img');
     for(let img of imgs){
        img.remove();
     }
    }
document.querySelector('body').addEventListener('click',()=>{
    deleteImgs();
})