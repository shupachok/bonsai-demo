import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss'

const CheckoutItem = ({ product }) => {
    const { name, imageUrl, qty, price } = product
    const { addItemToDropdown, decreaseItemInDropdown } = useContext(CartContext);
    const handlePlus = () => { addItemToDropdown(product) };
    const handleMinus = () => {
        if (qty === 1)
            return;
        decreaseItemInDropdown(product);
    };
    const handleRemove = () => {
        decreaseItemInDropdown(product, true);
    };

    return (<div className='checkout-item-container'>
        <div className='checkout-item-detail'>
            <img src={imageUrl} alt={name} />
            <div className='checkout-item-title'>
                <span>{name}</span>
                <div>Price: {price} USD</div>
                <button className='checkout-item-button' onClick={handleMinus}>-</button>
                <span className='qty'>{qty}</span>
                <button className='checkout-item-button' onClick={handlePlus}>+</button>
            </div>
        </div>
        <button className='checkout-item-button' onClick={handleRemove}>X</button>


    </div>);
}

export default CheckoutItem;