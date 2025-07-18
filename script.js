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


checkoutButton.addEventListener("click",openCart)




// Cartheaderstyle

cartInnerBodyArr_header.innerText = "Your Shopping cart"
cartInnerBodyArr_header.style.fontSize = "15px"


cartMainBody.style.width = "400px"
cartMainBody.style.height = "100%"
cartMainBody.style.position = "fixed"
cartMainBody.style.top = "0"
cartMainBody.style.left = "0"
cartMainBody.style.right = "900px"
cartMainBody.style.bottom = "o"
cartMainBody.style.display = "flex"
cartMainBody.style.flexDirection = "column"


// indexBody.style.position = "absolute"

//function - open/closecart

function openCart(){

introHTML.insertBefore(cartMainBody,introImage)
cartMainBody.appendChild(cartInnerBodyArr[0])
cartMainBody.appendChild(cartInnerBodyArr[1])
cartMainBody.appendChild(cartInnerBodyArr[2])
cartInnerBodyArr[0].appendChild(cartInnerBodyArr_header)
cartInnerBodyArr_header[1].appendChild(cartInnerBodyArr_CartIsEmptyHTML)

if (cartInnerBodyArr[1].innerHTML.trim() === "") {
cartInnerBodyArr[1].innerText =  "Your cart is Empty"  
}








}

