
import React,{createContext} from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About.js";
import Products from "./Component/Items.js";
import ProductDetails from "./Component/ItemDetails";
import ProductDetailInfo from "./Component/ItemDetailInfo.js";
import ProductDetailNutrition from "./Component/ItemDetailNutrition.js";
import ProductDetailStorage from "./Component/ItemDetailStorage.js";
import Cart from "./Component/Cart.js";
import Footer from "./Component/Footer";



function App() {
 
  const [cart, setCart] = useState(function () {
    let savedCart = [];
    try {
      savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    } catch (error) {
      savedCart = [];
    }
    return savedCart;
  });

  useEffect(() => {
    if (cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
     
    }
    console.log(`dentro de useEffect${cart}`)
  }, [cart]);
  
  function handleProductAdd(newProduct) {
    
    
    const existingProduct = cart.find(
      (product) => product.id === newProduct.id
    );
    if (existingProduct) {
      
      const updatedCart = cart.map((product) => {
        if (product.id === newProduct.id) {
          
          return {
            ...product,
            quantity: product.quantity + 1,
            
          };
          
        }
     
        return product;
      });
      setCart(updatedCart);
    } else {
   
      setCart([
        ...cart,
        {
          ...newProduct,
          quantity: 1,
        },
      ]);
    }
  
    
  }
  function handleProductDelAll(){

    setCart([])
    document.title = "add products"

  }

  function handleProductDelete(newProduct) {
    const existingProduct = cart.find(
      (product) => product.id === newProduct.id
    );
    if (existingProduct) {
      
      const updatedCart = cart.map((product) => {
        if (product.id === newProduct.id) {
        
          const newQuantity = product.quantity - 1;
          if (newQuantity < 0) {
            return product; // no petmit >0
          }
        
          return {
            ...product,
            quantity: newQuantity,
          
          };
        }
      
        return product;
      });
      setCart(updatedCart);
    } else {
     
      setCart([
        ...cart,
        {
          ...newProduct,
          quantity: -1,
        },
      ]);
    }
  }
  


  return (
    <BrowserRouter>
      <Navbar cart={cart} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/products" element={<Products
              cart={cart}
              onProductAdd={handleProductAdd}
              onProductDelete={handleProductDelete}
            />}>
          </Route>
          <Route
            path="/products"
            element={
              <Products
                cart={cart}
                onProductAdd={handleProductAdd}
                onProductDelete={handleProductDelete}
              />
            }
          ></Route>
          <Route
            path="/products/:id/"
            element={<ProductDetails onProductAdd={handleProductAdd} />}
          >
            <Route
              path=""
              element={<ProductDetailInfo onProductAdd={handleProductAdd} cart={cart} onProductDelete={handleProductDelete}/>}
            ></Route>

            <Route
              path="nutrition"
              element={<ProductDetailNutrition />}
            ></Route>

            <Route path="storage" element={<ProductDetailStorage />}></Route>
          </Route>
          <Route path="/cart" element={<Cart cart={cart} />}>
           
          </Route>
        </Routes>
        {cart.length > 0  && <Link className="boton" onClick={handleProductDelAll}>empty cart </Link>}

        
       
      </div>
      
          <Footer/>
    </BrowserRouter>
  );
}

export default App;
