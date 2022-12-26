import { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";
import './category.styles.scss'

const Category = () => {
    const { category } = useParams();
    const { catogories } = useContext(CategoriesContext);
    const productItems = catogories[category];
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