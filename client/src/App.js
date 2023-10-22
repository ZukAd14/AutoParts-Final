import { Routes, Route } from 'react-router-dom';
import  Header  from '../src/components/common/Header/Header';
import Home from './components/pages/HomePage/HomePage';
import Footer from './components/common/Footer/Footer';
import SearchBar from './components/features/SearchBar/SearchBar';
import { Container } from 'react-bootstrap';
import ProductPage from './components/pages/ProductPage/ProductPage';
import Cart from './components/pages/Cart/Cart';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateCartItem } from './redux/cartRedux';
import OrderPage from './components/pages/OrderPage/OrderPage';


const App = () => {
const dispatch = useDispatch();

  useEffect(() => {
    const cartState = JSON.parse(localStorage.getItem('cart'));
    if (cartState) {
        cartState.forEach((item) => {
            dispatch(
              updateCartItem({
                id: item.id,
                quantity: item.quantity,
              })
            );
          });
    }
  }, [dispatch]);

  return (
    <div>
      <Header />
      <SearchBar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order/summary' element={<OrderPage />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
};

export default App;