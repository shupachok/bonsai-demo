import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
const Navigation = () => {
    const authUrl = window.location.protocol + "//" + window.location.host + "/auth";
    const currentUser = useSelector(selectCurrentUser);
    const handleOnClickSignOut = async () => {
        await signOutUser();
        window.location.replace(authUrl);
    }
    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    BONSAI ♣
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        Shop
                    </Link>
                    {currentUser ?
                        <Link className="nav-link" onClick={handleOnClickSignOut} >
                            Sign Out
                        </Link>
                        :
                        <Link className="nav-link" to='/auth'>
                            Sign In
                        </Link>
                    }
                    <CartIcon />
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default Navigation;