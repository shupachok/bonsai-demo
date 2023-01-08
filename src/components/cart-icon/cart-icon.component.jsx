import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg'
import { selectCartList } from "../../store/cart/cart.selector";
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import './cart-icon.component.scss'

const CartIcon = () => {
    const dropDownItem = useSelector(selectCartList);
    const countDropDownItem = dropDownItem.reduce(( total,cur)=>total+cur.qty,0);
    return (
        <Link className='cart-icon-container' to='/checkout' >
            <ShoppingBagIcon className='cart-icon' />
            <span className='item-count'>{countDropDownItem}</span>
            <CartDropdown dropDownItem={dropDownItem}/>
        </Link>);
}

export default CartIcon;