import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Products from './components/products/Products';
import ProductDetails from './components/products/ProductDetails';





function App() {
  return (
    <>


      <BrowserRouter>
        <Navbar />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products' element={<Products />} />
          <Route path='/productDetails/:id' element={<ProductDetails />} />

        </Routes>

      </BrowserRouter>





    </>

  );
}

export default App;
