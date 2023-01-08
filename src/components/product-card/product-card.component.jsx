import './product-card.styles.scss'
import { useDispatch, useSelector } from 'react-redux';
import { addItemToDropdown } from '../../store/cart/cart.action';
import { selectCartList } from '../../store/cart/cart.selector';
const ProductCard = ({ product, productType }) => {
    const dispatch = useDispatch();
    const cartList = useSelector(selectCartList);
    const { name, imageUrl, price } = product;
    const handleAddProductToCart = () => {
        dispatch(addItemToDropdown(cartList,product));
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