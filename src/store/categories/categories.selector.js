import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories.catogoriesList;

export const SelectCategories = createSelector(
    [selectCategoryReducer],
    (catogoriesList) => catogoriesList.reduce((acc, element) => {
        const { title, items } = element;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
);

