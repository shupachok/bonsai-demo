import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_STATE = {
    cartList: [],
}
export const cartReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEM:
            return { cartList: payload };
        default:
            return state
    }
}

