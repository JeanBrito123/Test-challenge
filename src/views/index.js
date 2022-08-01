import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Layouts from "../components/Layouts";

import Home from './home/Home';
import AddProducts from './addProducts/AddProducts';
import ListProducts from './listProducts/ListProducts';
import Cars from './cars/Cars';

const Views = () => {
  return (
    <Router>
      <Layouts>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-products" element={<AddProducts />} />
          <Route path="/list-products" element={<ListProducts />} />
          <Route path="/cars" element={<Cars />} />
        </Routes>
      </Layouts>
    </Router>
  );
}

export default Views;
