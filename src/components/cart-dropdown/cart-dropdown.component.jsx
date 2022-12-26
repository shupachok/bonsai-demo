import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import './cart-dropdown.style.scss'
const CartDropdown = () => {
    const {dropDownItem} = useContext(CartContext)
    return (
    <div className='cart-dropdown-container'>
    { 
    dropDownItem.length > 0 ? 
    dropDownItem.map((product)=><CartItem key={`p${product.id}`} product={product}></CartItem>) :
    "No Item"
    
    }
    </div>  );
}
 
export default CartDropdown;