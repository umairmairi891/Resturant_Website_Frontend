import { createContext, useContext } from "react";


export const cartContext=createContext({
    
    addtocart:(product)=>{},
    removefromCart:(id)=>{},
    increaseQuantity:()=>{},
    decreaseQuantity:()=>{},
})



export default function usecartContext(){
    return useContext(cartContext)
}

export const CartProvider=cartContext.Provider;