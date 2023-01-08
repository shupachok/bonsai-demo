import CartItem from "../cart-item/cart-item.component";
import './cart-dropdown.style.scss'
const CartDropdown = ({ dropDownItem }) => {
    return (
        <div className='cart-dropdown-container'>
            {
                dropDownItem.length > 0 ?
                    dropDownItem.map((product) => <CartItem key={`p${product.id}`} product={product}></CartItem>) :
                    "No Item"

            }
        </div>);
}

export default CartDropdown;