import { useState } from "react";
import { createContext } from "react";

const addCartItem = (cartItems, productToAdd) => {
    for (let i = 0; i < cartItems.length; i++) {
        if (productToAdd.id === cartItems[i].id) {
            cartItems[i].qty += 1;
            return [...cartItems];
        }
    }
    return [...cartItems, { ...productToAdd, qty: 1 }];
}

const minusCartItem = (cartItems, productToMinus, removeFlag) => {
    for (let i = 0; i < cartItems.length; i++) {
        if (productToMinus.id === cartItems[i].id) {
            if (removeFlag) {
                cartItems.splice(i, 1);
                break;
            }
            cartItems[i].qty -= 1;
            break;
        }
    }
    return [...cartItems]
}

export const CartContext = createContext({
    dropDownItem: [],
    addItemToDropdown: () => { },
    decreaseItemInDropdown: () => { }
});

export const CartContextProvider = ({ children }) => {
    const [dropDownItem, setDropDownItem] = useState([]);
    const addItemToDropdown = (productToAdd) => {
        const cartItem = addCartItem(dropDownItem, productToAdd);
        setDropDownItem(cartItem);
    }
    const decreaseItemInDropdown = (productToRemove, removeFlag) => {
        const cartItem = minusCartItem(dropDownItem, productToRemove, removeFlag);
        setDropDownItem(cartItem);
    }
    const value = { dropDownItem, addItemToDropdown, decreaseItemInDropdown }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
