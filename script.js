let allItems = [
{id: 1,name: "something", price: 65, itemcount: 0, quanity: 100 }
]
let cartItems = []
let matchItem = []
const indexBody = document.querySelector("body")
const cartMainBody = document.createElement("div")
const cartInnerBodyArr = [document.createElement("div"),document.createElement("div"),document.createElement("div")]
const cartItemContainer = document.createElement("ul")
const introHTML = document.querySelector(".intro")
const introImage = document.querySelector(".intro-image")
const checkoutButton = document.querySelector(".checkout")
let total ;
const cartInnerBodyArr_header = document.createElement("h2")
const cartInnerBodyArr_CartIsEmptyHTML = document.createElement("p")
// cartInnerBodyArr_CartIsEmptyHTML.innerText = "Your cart is Empty"
let cartItemPlaceholder = document.createElement("div")


checkoutButton.addEventListener("click",openCart)




// Cartheaderstyle

cartInnerBodyArr_header.innerText = "Your Shopping cart"
cartInnerBodyArr_header.style.fontSize = "25px"
cartInnerBodyArr_header.style.margin = "15px"


cartMainBody.style.width = "400px"
cartMainBody.style.height = "70%"
cartMainBody.style.backgroundColor = "lightgray"
cartMainBody.style.position = "fixed"
cartMainBody.style.top = "0"
cartMainBody.style.left = "75%"
cartMainBody.style.right = "0"
cartMainBody.style.bottom = "0"
cartMainBody.style.display = "flex"
cartMainBody.style.flexDirection = "column"
cartMainBody.style.boxShadow = "0,0,0,2000px"



// indexBody.style.position = "absolute"


cartItemContainer 


//function - open/closecart

function openCart(){

introHTML.insertBefore(cartMainBody,introImage)
cartMainBody.appendChild(cartInnerBodyArr[0])
cartMainBody.appendChild(cartInnerBodyArr[1])
cartMainBody.appendChild(cartInnerBodyArr[2])
cartInnerBodyArr[0].appendChild(cartInnerBodyArr_header)
cartInnerBodyArr[1].appendChild(cartInnerBodyArr_CartIsEmptyHTML)
cartInnerBodyArr[1].appendChild(cartItemContainer)
if (cartItemContainer.innerHTML.trim() == "") {
cartItemContainer.innerText =  "Your cart is Empty"  
}
}



function addToCart(productId) {
    let cartIndex = cartItems.findIndex(item => item.id === productId);

    if (cartIndex !== -1) {
alert("Product is already in Cart")
    } else {
        matchedItem = allItems.find(x => x.id === productId);
        cartItems.push(matchedItem)
        if (matchedItem.quanity > 0 ) {
            // Create new cart item UI
            let li = document.createElement("div");
            li.style.display = "flex";
            li.style.justifyContent = "space-between"
            li.style.gap = "10px"
            li.style.borderBottom = "medium solid black"

            const nameElement = document.createElement("p");
            nameElement.innerText = `${matchedItem.name}`;

            const priceElement = document.createElement("p");
            priceElement.innerText = `Price: $${matchedItem.price}`;

            const quanityElement = document.createElement("p");
            quanityElement.innerText = `Quanity ${matchedItem.itemcount + 1}`;

          
            li.appendChild(nameElement);
            li.appendChild(priceElement);  
            li.appendChild(quanityElement)
            cartItemContainer.appendChild(li);
        }
    }
}


addToCart(1)







