import React from 'react'
import { useSelector } from 'react-redux';
import {
  Badge,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import {IoBagHandleSharp} from 'react-icons/io5'
import { IoFastFood } from 'react-icons/io5'
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const cartItems = useSelector(state => state.cart)
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('authToken')
    navigate('/login')
  }

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-dark bg-opacity-75 p-4">
          <div className="container">
            <h1 className="navbar-brand text-white"> <span><IoFastFood /> FOODicious</span></h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between ms-5" id="navbarNav">
              <div className='d-flex justify-content-center'>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to='/' className="nav-link active text-white"> Home</Link>
                  </li>
                  {(localStorage.getItem('authToken')) ? (
                    <li className="nav-item">
                      <Link to='/myorders' className="nav-link text-white">My Orders</Link>
                    </li>
                  ) : ('')}

                </ul>
              </div>
              <div className="d-flex justify-content-end">

                {!localStorage.getItem('authToken') ? (
                  <ul className="ms-3 navbar-nav">
                    <li className="nav-item">
                      <Link to='/login' className="nav-link active text-white">Log In</Link>
                    </li>
                    <li className="nav-item">
                      <Link to='/createuser' className="nav-link text-white">Sign Up</Link>
                    </li>
                  </ul>
                ) : (
                  <div className='d-flex'>
                    <UncontrolledDropdown>
                      <DropdownToggle caret><IoBagHandleSharp />
                        <Badge>{cartItems.length}</Badge>
                      </DropdownToggle>
                      {cartItems.length === 0 ? (<DropdownMenu >
                        <p>FoodBag is empty</p>
                      </DropdownMenu>) : (<DropdownMenu >
                        <div className='m-3'>FoodBag has {cartItems.length} items</div>
                        <div className='m-3'>
                          <button className='btn btn-outline-primary btn-sm'><Link to='/cart' className="nav-link">Go to Cart</Link></button>
                        </div>
                      </DropdownMenu>)}
                    </UncontrolledDropdown>
                    <ul className="ms-3 navbar-nav">
                      <li className="nav-item">
                        <button className="btn btn-outline-danger" onClick={handleLogout}>Log out</button>
                      </li>
                    </ul>
                  </div>

                )}


              </div>
            </div>

          </div>
        </nav>
      </div>
    </>

  )
}

export default Header