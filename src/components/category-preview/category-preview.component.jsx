import { Fragment } from "react"
import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss"
const CategoryPreview = ({ categoryName, previewProduct }) => {
    const newArrivalProduct = previewProduct.pop();
    return (
        <div key={categoryName} className='category-preview-container'>
            <div className="category-preview-header"><span className="category-preview-title">{categoryName.toUpperCase()}</span><Link className="view-more" to={categoryName}>VIEW MORE</Link></div>
            <div className="preview-product-container">
                <div className='special-product-container'>
                    <ProductCard key={newArrivalProduct.id} product={newArrivalProduct} productType='special-preview'></ProductCard>
                </div>
                <div className='normal-product-container'>
                    {
                        previewProduct.map((product) => {
                            return <ProductCard key={product.id} product={product} productType='normal-preview'></ProductCard>
                        }
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default CategoryPreview;