function addToShoppingCart(clickedButton){
    console.log("Product Added to Cart")
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

    console.log(clickedButton)
    const shoppingCart = document
                            .getElementById("books")
                            .getElementsByTagName("h5")

                            
    console.log(shoppingCart)

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