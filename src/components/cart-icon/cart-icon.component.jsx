import { Link } from "react-router-dom";
import { useContext } from 'react'
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/cart.context'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import './cart-icon.component.scss'

const CartIcon = () => {
    const {dropDownItem} = useContext(CartContext);
    const countDropDownItem = dropDownItem.reduce(( total,cur)=>total+cur.qty,0);
    return (
        <Link className='cart-icon-container' to='/checkout' >
            <ShoppingBagIcon className='cart-icon' />
            <span className='item-count'>{countDropDownItem}</span>
            <CartDropdown/>
        </Link>);
}

export default CartIcon;