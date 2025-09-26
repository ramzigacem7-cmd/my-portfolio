const mysort=document.querySelector(".sort-button");
const myenter=document.querySelector(".enter-button");
const mynav=document.querySelector(".head-nav");

myenter.addEventListener("click", () =>{
mynav.classList.toggle("active") 

})
mysort.addEventListener("click", () =>{
    mynav.classList.remove("active") 
})

