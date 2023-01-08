import { Route, Routes } from 'react-router-dom';
import './App.css';
import './categories.styles.scss';
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import Category from './routes/category/category.component';
import { useEffect } from 'react';
import { createUserDocumentFromAuth, getCollection, onAuthChangeListener } from './utils/firebase/firebase.utils';
import { setCurrentUser } from './store/user/user.action';
import { useDispatch } from 'react-redux';
import { setCategories } from './store/categories/categories.action';

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = onAuthChangeListener(async (user) => {
            if (user){
               await createUserDocumentFromAuth(user);
            }
            dispatch(setCurrentUser(user));
        });
        return unsubscribe;
    }, []);

    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path='shop/*' element={<Shop />}/>
                <Route path='auth' element={<Authentication />} />
                <Route path='checkout' element={<Checkout/>} />
            </Route>
        </Routes>
    );

}

export default App;
