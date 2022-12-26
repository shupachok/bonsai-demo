import { useState } from "react";
import { createContext } from "react";
import SHOP_DATA from '../shop-data.json'
import { useEffect } from "react";
import { addCollectionAndDocuments, getCollection } from "../firebase/firebase.utils";


export const CategoriesContext = createContext({
    catogories: null,
    setCategories: () => null
});

export const CategoriesContextProvider = ({ children }) => {
    const [catogories, setCategories] = useState({});
    const value = { catogories, setCategories };
    useEffect(()=>{
        const setCategoriesContext = async()=>{
            const categoriesCollectionName = 'categories';
            const categoriesData = await getCollection(categoriesCollectionName);
            setCategories(categoriesData);
        }
        setCategoriesContext();
    },[]);
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}