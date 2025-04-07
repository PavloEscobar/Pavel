const removebtn=document.querySelector(".btn")
const cartitem=document.querySelector(".cart-item")
removebtn.addEventListener("click", ()=>{
    cartitem.innerHTML=""
})