import './product-card.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
const ProductCard = ({ product, productType }) => {
    const { name, imageUrl, price } = product;
    const { addItemToDropdown } = useContext(CartContext)
    const handleAddProductToCart = () => {
        addItemToDropdown(product);
    }
    return (
        <div className={`product-card-container ${productType}`} onClick={handleAddProductToCart}>
            <img src={imageUrl} alt={name}></img>
            <div className="title">
               <div className='name'>{name}</div> {productType && <div className='new-tag'>NEW</div>}
            </div>
            <div className="price">{price} USD </div>
            <div className='add-product-button' >ADD</div>

        </div>);
}

export default ProductCard;