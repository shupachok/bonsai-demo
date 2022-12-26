import { Link, Outlet, useNavigate } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { ReactComponent as BonsaiLogo } from "../../assets/bonsai.svg";
import { Fragment, useContext } from "react";
import "./navigation.styles.scss";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
const Navigation = () => {
    const authUrl = window.location.protocol + "//" + window.location.host +"/auth";
    const { currentUser } = useContext(UserContext);
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
            <Outlet/>
        </>
    );
}

export default Navigation;