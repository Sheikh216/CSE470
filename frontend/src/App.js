import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Homescreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<Homescreen />} /> 
            <Route path='/product/:id' element={<ProductScreen/>} />
            {/* <Route path="/products/:id" component={ProductScreen} /> */}
            <Route path='/cart/:id?' element={<CartScreen/>} />





          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
