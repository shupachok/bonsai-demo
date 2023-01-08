import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { SelectCategories } from "../../store/categories/categories.selector";
import './category.styles.scss'

const Category = () => {
    const { category } = useParams();
    const catogories= useSelector(SelectCategories);
    const [productItems,setproductItems] = useState(catogories[category]);

    useEffect(()=>{
            setproductItems(catogories[category]);
    },[category,catogories])

    return (
        <div>
            <h1 className="category-title">{category.toUpperCase()}</h1>
            <div className="category-container">
                {
                    productItems &&
                    productItems.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </div>)

}

export default Category;