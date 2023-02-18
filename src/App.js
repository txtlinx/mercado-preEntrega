import React, { useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/pages/Home";
import Company from "./Component/pages/Company";
import Product from "./Component/pages/Product";

import Container from "./Component/layaout/Container";
import Navbar from "./Component/layaout/Navbar";
import Footer from "./Component/layaout/Footer";


function App() {
  useEffect(() => {
    document.title = 'supermercado test';
  },[])
  return (
    <Router>
      <Navbar/>
      <Container customClass="min-height">
      <Routes>
          <Route exact path="/home" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/company" element={<Company />} />
        </Routes>
        <Routes>
          <Route exact path="/product" element={<Product />} />
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
