import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../../store/features/sideBarToggleSlice';
import ShopCart from '../ShopCart.jsx/ShopCart';
import Sidebar from '../Sidebar/Sidebar';
import SignUpForm from '../SignUpForm/SignUpForm';
import './style.scss'
import {NavLink} from 'react-router-dom'
function Header() {
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
});

const dispatch=useDispatch();
const {basket}=useSelector(state=>state.basket)
const header=useRef();
/* Method that will fix header after a specific scrollable */
 const isSticky = (e) => {
      const scrollTop = window.scrollY;
      scrollTop >= 40 ? header.current.classList.add('bg-white') : header.current.classList.remove('bg-white');
  };

  const [toggleSignUp,setToggleSignUp]=useState(false);
  const [toggleShopCart,setToggleShopCart]=useState(false);
  return (
    <>
    <div className={toggleSignUp||toggleShopCart?"shadow active":'shadow' } onClick={()=>{setToggleSignUp(false);setToggleShopCart(false)}}></div>
      <ShopCart toggleShopCart={toggleShopCart} setToggleShopCart={setToggleShopCart}/>
      <header ref={header}>
        <div className="wrapper flex j-between align-center">
          <div className="flex">
            <NavLink to="/" className="logo">
              Fashion
            </NavLink>
            <ul className="page_links flex">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/page404" className="info">
                  Xüsusiyyətlər
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="about">Haqqımızda</NavLink>
              </li>
              <li>
                <NavLink to="contact">Əlaqə</NavLink>
              </li>
            </ul>
          </div>
          <ul className="flex nav_icons">
            <li className="signupbtn" onClick={()=>setToggleSignUp(true)}>
              <i className="fas fa-user"></i>
            </li>
            <li>
              <i className="fas fa-heart"></i>
            </li>
            <li className="Shopping-cart" onClick={()=>setToggleShopCart(true)}>
              <span className="counter">{basket.length}</span>
              <i className="fas fa-shopping-bag"></i>
            </li>
            <button className="hamburgerBtn" onClick={()=>dispatch(toggleSidebar())}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </ul>
        </div>
      </header>
      <SignUpForm toggleSignUp={toggleSignUp} setToggleSignUp={setToggleSignUp}/>
      <Sidebar/>
    </>
  )
}

export default Header
