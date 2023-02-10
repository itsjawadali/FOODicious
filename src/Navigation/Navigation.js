import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../Pages/Home';
import Cart from '../Pages/Cart';
import Header from '../Components/Header';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import { Provider } from "react-redux";
import store from "../Store/store";

function Navigation() {
  return (
    <div>
      <div className='container text-secondary'>
        <Provider store={store}>
          <BrowserRouter>
            <Header />
            <div className='container'>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/createuser" element={<Register />}></Route>
              </Routes>
            </div>
          </BrowserRouter>
          </Provider>

      </div>
    </div>
  )
}

export default Navigation
