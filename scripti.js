const serachBox = document.querySelector("#searchBox")
let search=document.getElementById("search")
const searchForm=document.getElementById("searhForm")
const key = "ZpZ2GtW5Bb-SPqSDluiYrP1pdcmjJ_4bOYPxpAacvWE";
const searchResault=document.getElementById("searchResult")
const more=document.getElementById("more")
let keyWord ="";
let page = 1;


async function searchImg() {
    keyWord = serachBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${key}&per_page=12`
    console.log(keyWord)
    const img=await fetch(url);
    const data=await img.json();
    const results=data.results;
    if(page==1){
        searchResault.innerHTML="";
    }
    results.map((result)=>{
      
        // document.createElement()
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imglink=document.createElement("a");
        imglink.href=result.links.html;
        imglink.target="_blank";
        imglink.appendChild(image);
        searchResault.appendChild(imglink);
        
    })
    more.style.visibility="visible";
    console.log(data);

}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImg();
})

more.addEventListener("click",()=>{
    page++
    searchImg();
})


