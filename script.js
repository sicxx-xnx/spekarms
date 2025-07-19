const indexBody = document.querySelector("body")
const cartMainBody = document.createElement("div")
const cartInnerBodyArr = [document.createElement("div"),document.createElement("div"),document.createElement("div")]
const introHTML = document.querySelector(".intro")
const introImage = document.querySelector(".intro-image")
const checkoutButton = document.querySelector(".checkout")
let total ;
const cartInnerBodyArr_header = document.createElement("h2")
const cartInnerBodyArr_CartIsEmptyHTML = document.createElement("p")
cartInnerBodyArr_CartIsEmptyHTML.innerText = "Your cart is Empty"
let closecart = document.createElement("img")
closecart.src = "images/icons8-close.svg"
closecart.style.height = "24px"
closecart.style.width = "24px" 





checkoutButton.addEventListener("click",openCart)
closecart.addEventListener("click",() => {
cartMainBody.style.display = "none"    
})

// total cart style
cartMainBody.style.width = "400px"
cartMainBody.style.height = "70%"
cartMainBody.style.backgroundColor = "lightgray"
cartMainBody.style.position = "fixed"
cartMainBody.style.top = "0"
cartMainBody.style.left = "75%"
cartMainBody.style.right = "0"
cartMainBody.style.bottom = "0"
cartMainBody.style.display = "none"
cartMainBody.style.flexDirection = "column"
cartMainBody.style.boxShadow = "0 0 0 30px "
cartMainBody.style.borderRadius = "25% 10%"


// Cartheaderstyle

cartInnerBodyArr_header.innerText = "Your Shopping cart"
cartInnerBodyArr_header.style.fontSize = "25px"
cartInnerBodyArr_header.style.margin = "15px 15px 15px 45px"

// Top of cart 1st div
cartInnerBodyArr[0].style.display = "flex"
cartInnerBodyArr[0].style.justifyContent = "center"




introHTML.insertBefore(cartMainBody,introImage)
cartMainBody.appendChild(cartInnerBodyArr[0])
cartMainBody.appendChild(cartInnerBodyArr[1])
cartMainBody.appendChild(cartInnerBodyArr[2])
cartInnerBodyArr[0].appendChild(cartInnerBodyArr_header)
cartInnerBodyArr[0].appendChild(closecart)
cartInnerBodyArr[1].appendChild(cartInnerBodyArr_CartIsEmptyHTML)


// indexBody.style.position = "absolute"

//function - open/closecart

function openCart(){
if (cartMainBody.style.display = "none") {
  cartMainBody.style.display = "flex" } 
// introHTML.insertBefore(cartMainBody,introImage)
// cartMainBody.appendChild(cartInnerBodyArr[0])
// cartMainBody.appendChild(cartInnerBodyArr[1])
// cartMainBody.appendChild(cartInnerBodyArr[2])
// cartInnerBodyArr[0].appendChild(cartInnerBodyArr_header)
// cartInnerBodyArr[1].appendChild(cartInnerBodyArr_CartIsEmptyHTML)
if (cartInnerBodyArr[1].innerHTML.trim() == "") {
cartInnerBodyArr[1].innerText =  "Your cart is Empty"  
}
}


