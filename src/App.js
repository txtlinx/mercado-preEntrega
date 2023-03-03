import {useState} from "react";
import {createRoot} from "react-dom/client";
import StoreFront from "./Component/pages/StoreFront";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    if (loggedIn){
        return <>
            <StoreFront />
            <button className="btn btn-outline" onClick={() => setLoggedIn(false)}>Logout</button>
        </>;
    }else {
        return <>
            <h2>Please login</h2>
            <button className="btn btn-primary" onClick={() => setLoggedIn(true)}>Login</button>
    </>;
    }
}

export default App;


// import React, { useEffect} from 'react'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Component/pages/Home";
// import Company from "./Component/pages/Company";
// import Product from "./Component/pages/Product";

// import Container from "./Component/layaout/Container";
// import Navbar from "./Component/layaout/Navbar";
// import Footer from "./Component/layaout/Footer";
// import { Profile } from './Component/pages/Profile';

// function App() {
//   useEffect(() => {
//     document.title = 'supermercado test';
//   },[])
//   return (
//     <Router>
//       <Navbar/>
//       <Profile img="https://i.imgur.com/YfeOqp2s.jpg" name="Pablo" />
//       <Profile img="https://i.imgur.com/OKS67lhs.jpg" name="Sam" />
//       <Container customClass="min-height">
//       <Routes>
//           <Route exact path="/home" element={<Home />} />
//         </Routes>
//         <Routes>
//           <Route exact path="/company" element={<Company />} />
//         </Routes>
//         <Routes>
//           <Route exact path="/product" element={<Product />} />
//         </Routes>
//       </Container>
//       <Footer/>
//     </Router>
//   );
// }


