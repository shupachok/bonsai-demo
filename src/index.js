import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/user.context';
import { CategoriesContextProvider, ProductsContextProvider } from './contexts/categories.context';
import { CartContext, CartContextProvider } from './contexts/cart.context';
import ScrollTop from './routes/scrolltop/scrolltop.component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserProvider>
      <CategoriesContextProvider>
        <CartContextProvider>
          <ScrollTop />
          <App />
        </CartContextProvider>
      </CategoriesContextProvider>
    </UserProvider>
  </BrowserRouter>
);
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
