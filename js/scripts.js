function addToShoppingCart(clickedButton){

    //This was what I tried before giving up and looking it up on Youtube
    // console.log("Product Added to Cart")
    // const productTitle = document.getElementById("book-product");
    // const productTitle = document
    //                         .getElementById("books")
    //                         .getElementsByTagName("h5").clickedButton;

                            //a loop to get the clicked button's title
                            // .getElementsByClassName("row")[0]
                            // .getElementsByClassName("col")
                            
                            // .getElementsByClassName("card")
                            // .getElementsByClassName("card-body")
                            // .getElementsByClassName("book-product");
     
    // console.log(productTitle)

    //create a section element
    // const ol = document.createElement("ol");

    // //section product title
    // const li = document.createElement("li")
    // li.textContent = productTitle;
    // // li.textContent = productTitle;

    // //add product to the section
    // ol.appendChild(li)

    // //add section to #shoppingcart
    // document.getElementById("shoppingcart").appendChild(ol);

    // console.log(clickedButton)

    //The following code I did while watching a Youtube tutorial https://www.youtube.com/watch?v=YeFzkC2awTM&t=1070s
    const addToCartButtons = document.getElementsByClassName("add-item-button")
    for (let i = 0; i < addToCartButtons.length; i++){
        const button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
        console.log(i)
    }

    function addToCartClicked(event){
        const button = event.target
        const shopItem = button.parentElement
        console.log(shopItem)
        const title = shopItem.getElementsByClassName("card-title")[0].innerText
        const imageSrc = shopItem.getElementsByClassName("item-image")[0].src
        console.log(title, imageSrc)
        addItemToCart(title, imageSrc)
    }

    function addItemToCart(title, imageSrc){
        const cartRow = document.createElement("div")
        cartRow.innerText = title
        const cartItems = document.getElementById("cart-items")
        cartItems.appendChild(cartRow)
        console.log(cartItems)
    }
    // const shoppingCart = document
    //                         .getElementById("books")
    //                         .getElementsByTagName("h5")
    // for (const i = 0; i < shoppingCart.length; i++){
    //     const item = shoppingCart[i]
    //     console.log(item)
    // }
                            
    // console.log(shoppingCart)

    // const sec = document.createElement("section")
    // const h3 = document.createElement("h3");
    // h3.textContent = shoppingCart;
    
    // sec.appendChild(h3)

    // document.getElementById("shoppingcart").appendChild(sec)
    // document
    //     .getElementById("shoppingcart")
    //     .appendChild(clickedButton);
}

//https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
function displayCheckout(){
    const checkout = document.getElementById("checkout");
    if(checkout.style.display === "none"){
        checkout.style.display = "block";
    } else {
        checkout.style.display = "none";
    }

}