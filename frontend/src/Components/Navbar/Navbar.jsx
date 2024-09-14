import React, { useContext, useRef } from 'react'
import {NavLink} from "react-router-dom"
import { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from "../Assets/nav_dropdown.png"

const Navbar = () => {
    const {getTotalItems}=useContext(ShopContext)
    const [menu,setMenu]=useState("shop")
    const menuRef = useRef(); //used for resposive screen
 
    const dropdown_toggle =(e)=>{  // this func is for dropdown men button
        menuRef.current.classList.toggle("nav-menu-visible");
        e.target.classList.toggle("open")
    }

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPERX</p>
        </div>
        <img className='nav-dropdown' src={nav_dropdown} onClick={dropdown_toggle} alt="" />
        <ul ref={menuRef} className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}>  <NavLink style={{textDecoration:'none'}}to="/">Shop</NavLink>{menu==="shop"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}>  <NavLink style={{textDecoration:'none'}}to="/mens">Men</NavLink> {menu==="mens"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><NavLink style={{textDecoration:'none'}}to="/womens">Women</NavLink> {menu==="womens"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}> <NavLink  style={{textDecoration:'none'}}to="/kids">Kids</NavLink>{menu==="kids"? <hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <button><NavLink to="/login" style={{textDecoration:'none'}}>Login</NavLink></button>
            <NavLink to="/cart"><img src={cart_icon} alt="" /></NavLink>
            <div className="nav-cart-count">{getTotalItems()}</div>
        </div>
      
    </div>
  )
}

export default Navbar
