import React ,{ createContext, useState} from "react"
import all_product from "../Components/Assets/all_product.js";

// In all_product we get all data of products in the form array of product-details from assets folder in component 
// assets folder consists of 3 js file and all images 
// these three file contain all data about products


export const ShopContext = createContext(null); //here we create context API



const getDefaultCart =()=>{              // getDefault creata a empty cart using product id as key  and set initial value for this key 0
    let cart ={};
    for (let index=0;index<all_product.length+1;index++){   //order of id is same as index of array i.e why we use all_product.length
        cart[index]=0;
    }
    return cart;          // now we get a empty cart product id as key and initial value of key is 0
}





const ShopContextProvider = (props)=>{
    const [cartItems ,setCartItems]=useState(getDefaultCart());  // for updating cart ==>initially cart id empty i.e we use getDefaultcart as initial value

    const addToCart =(itemId)=>{
        setCartItems((pre)=>({...pre,[itemId]:pre[itemId]+1})) // addtocart is function used on addtocart button to update setCartItemx 
        
        
    };
    const removeFromCart =(itemId)=>{
        setCartItems((pre)=>({...pre,[itemId]:pre[itemId]-1}))// removefromcart is function used on addtocart button to update setCartItemx 
    }

   const getTotalCartAmount =()=>{  // total amount of the products
        let totalAmount = 0;

        for (const item in cartItems)
           { 
            
            if(cartItems[item]>0){
                let itemInfo =all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price*cartItems[item];
            }
            
           }
           return totalAmount;
        };


    const getTotalItems=()=>{ // this function is used to show total items on the add to cart button 
        let totalItems=0;
        for (const item in cartItems){
            totalItems+=cartItems[item]
        }
        return totalItems;
    }
    






    const contextValue = {all_product, cartItems, addToCart, removeFromCart ,getTotalCartAmount , getTotalItems};// here we use common variable to pass contextValues 
    


    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;