import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../contexts/cart.context';
import './checkout.styles.scss';
const Checkout = () => {
    const { dropDownItem } = useContext(CartContext);
    const totalPrice = dropDownItem.reduce((total, cur) => total + (cur.qty * cur.price), 0);
    return (
        <div className='check-out-container'>
            <div className='title-checkout'>Shopping Cart</div>
            <div className='check-out-detail-container' >
                <div className='shopping-cart-container'>
                    {dropDownItem.map((product) => <CheckoutItem key={product.id} product={product} />)}
                </div>
                <div className='total-price-container'>
                    <div className='title'>
                        Total Price
                    </div>
                    <div className='price'>{totalPrice} USD</div>
                    <button className='buy-now'>BUY NOW</button>
                </div>
            </div>
        </div>);
}

export default Checkout;