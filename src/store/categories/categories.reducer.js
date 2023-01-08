import { CATEGORIES_ACTION_TYPE } from "./categories.types";
const INITIAL_STATE = {
    catogoriesList: []
}
export const categoriesReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case CATEGORIES_ACTION_TYPE.SET_CATEGORIES:
            return { ...state, catogoriesList: payload };
        default: return state;
    }
}