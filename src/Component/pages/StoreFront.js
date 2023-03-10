import React,{useState} from "react";
import Product from "./Product.js";

export default function StoreFront() {
    const [busqueda, setBusqueda]= useState();
    console.log(busqueda);
    const products = [{
        id:1,
        name: "Cheese",
        description: "200g cheese block",
        image: "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_300/v1580649404/react-tutorial/products/cheese.png"
    }, {
        id:2,
        name: "Milk",
        description: "1L of milk",
        image: "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_300/v1580649400/react-tutorial/products/milk.png"
    }]
    
    const newProducts= products.filter((p) => p.name.toLowerCase().includes(busqueda ? busqueda.toLowerCase() : ""));


    return <div className="store-front">

       <input type="text" value={busqueda} onChange={(e)=>setBusqueda(e.target.value)}/>
       
            {newProducts.map((product) =>(<Product details={product}></Product>))}
       
    </div>;
}