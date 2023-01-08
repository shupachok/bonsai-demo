import { createAction } from "../../utils/reducer/reducer.utils"
import { CART_ACTION_TYPES } from "./cart.types"
const addCartItem = (cartList, productToAdd) => {
    for (let i = 0; i < cartList.length; i++) {
        if (productToAdd.id === cartList[i].id) {
            cartList[i].qty += 1;
            return [...cartList];
        }
    }
    return [...cartList, { ...productToAdd, qty: 1 }];
}

const minusCartItem = (cartList, productToMinus) => {
    for (let i = 0; i < cartList.length; i++) {
        if (productToMinus.id === cartList[i].id) {
            cartList[i].qty -= 1;
            break;
        }
    }
    return [...cartList]
}

const clearCartItem = (cartList, productToClear) => {
    return cartList.filter((item) => item.id !== productToClear.id);
}

export const addItemToDropdown = (cartList, item) => {
    const newCartList = addCartItem(cartList, item)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEM, newCartList);
};
export const decreaseItemInDropdown = (cartList, item) => {
    const newCartList = minusCartItem(cartList, item)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEM, newCartList);
};
export const removeItemInDropdown = (cartList, item) => {
    const newCartList = clearCartItem(cartList, item);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEM, newCartList);
};
