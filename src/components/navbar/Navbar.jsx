import React, { useState } from 'react'
import './navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu, setMenu] = useState('shop')
    return (
        <div className='navbar d-flex justify-content-around border align-items-center'>
            <div className='nav-logo d-flex'>
                <img src={logo} alt="Shopify" />
                <p>SHOPIFY</p>
            </div>
            <ul className='nav-menu d-flex'>
                <li onClick={() => { setMenu('shop') }}><Link to='/'>Shop</Link> {menu === 'shop' ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu('mens') }}><Link to='/mens'>Men</Link> {menu === 'mens' ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu('womens') }}><Link to='/womens'>Women</Link>{menu === 'womens' ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu('kids') }}><Link to='/kids'>Kids</Link>{menu === 'kids' ? <hr /> : <></>}</li>
            </ul>
            <div className='navbar-login d-flex align-items-center'>
                <Link to='/login'><button className='btn btn-light'>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="Cart Icon" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar