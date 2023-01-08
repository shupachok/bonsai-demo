import { useDispatch, useSelector } from "react-redux";
import {
  addItemToDropdown,
  decreaseItemInDropdown,
  removeItemInDropdown,
} from "../../store/cart/cart.action";
import { selectCartList } from "../../store/cart/cart.selector";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ product }) => {
  const { name, imageUrl, qty, price } = product;
  const dispatch = useDispatch();
  const cartList = useSelector(selectCartList);
  const handlePlus = () => {
    dispatch(addItemToDropdown(cartList, product));
  };
  const handleMinus = () => {
    if (qty === 1) return;
    dispatch(decreaseItemInDropdown(cartList, product));
  };
  const handleRemove = () => {
    dispatch(removeItemInDropdown(cartList, product));
  };

  return (
    <div className="checkout-item-container">
      <div className="checkout-item-detail">
        <img src={imageUrl} alt={name} />
        <div className="checkout-item-title">
          <span>{name}</span>
          <div>Price: {price} USD</div>
          <button className="checkout-item-button" onClick={handleMinus}>
            -
          </button>
          <span className="qty">{qty}</span>
          <button className="checkout-item-button" onClick={handlePlus}>
            +
          </button>
        </div>
      </div>
      <button className="checkout-item-button" onClick={handleRemove}>
        X
      </button>
    </div>
  );
};

export default CheckoutItem;
