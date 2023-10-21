import { Routes, Route } from 'react-router-dom';
import  Header  from '../src/components/common/Header/Header';
import Home from './components/pages/HomePage/HomePage';
import Footer from './components/common/Footer/Footer';
import SearchBar from './components/features/SearchBar/SearchBar';
import { Container } from 'react-bootstrap';
import ProductPage from './components/pages/ProductPage/ProductPage';
const App = () => {

  return (
    <div>
      <Header />
      <SearchBar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductPage />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
};

export default App;