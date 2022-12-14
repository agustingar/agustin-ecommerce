import React from "react";
import {  Routes, Route} from "react-router-dom";
import Inicio from "./Home/Inicio";
import  Products  from "./components/Product/Products";
import  CheckoutPage  from "./components/Checkout/CheckoutPage";

export default function Pages() {
  return (
<div>
      <Routes >
				<Route path="/" element={<Inicio/>} />
				<Route path="/productos" element={<Products/>} />
        <Route path="/checkout-page" element={<CheckoutPage/>} />
			</Routes>
</div>
  );
}
