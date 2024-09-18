import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import ShopPages from './pages/ShopPages';
import Product from './pages/Product'
import Cart from './pages/Cart';
import Login from './pages/Login'
import Footer from './components/footers/Footer';
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kids_banner from './components/assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ShopPages />} />
          <Route path='mens' element={<ShopCategory banner={men_banner} category='men' />} />
          <Route path='womens' element={<ShopCategory banner={women_banner} category='women'  />} />
          <Route path='kids' element={<ShopCategory banner={kids_banner} category='kid' />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>


    </div>
  );
}

export default App;
