import './cart.item.styles.scss';

const CartItem = ({ product }) => {
    const { name, qty, imageUrl } = product;
    return (
        <div className='cart-item'>
            <img src={imageUrl} alt={name}></img>
            <div className='title'>
                {name}
                <div>X {qty}</div>
            </div>
        </div>);
}

export default CartItem;