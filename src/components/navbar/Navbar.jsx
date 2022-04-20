import React from 'react';
import './navbar.scss';
import Avatar from '../../challengeAssets/images/image-avatar.png';
import Cart from '../../challengeAssets/images/icon-cart.svg';

const Navbar = ({ cartMenuOpen, setCartMenuOpen }, {avatarMenuOpen, setAvatarMenuOpen}) => {
  // handle menu, we don't want 2 menu's open at the same time
  //if cart is active, disable avatar. Vice Versa.

  //search database if there is items in the users cart, display a number
  //over the cart
  return (
    <div className="nav">
      <div className='hamburger'>
        <span className="top"></span>
        <span className="mid"></span>
        <span className="bottom" ></span>
      </div>
      <div className="left">
        <span className="logo">sneakers</span>  
        <span className="navLink" >Collections</span>
        <span className="navLink">Men</span>
        <span className="navLink">Women</span>
        <span className="navLink">About</span>
        <span className="navLink">Contact</span>
      </div>

      <div className="right">
        <img className="cart" src={Cart} alt="" onClick={()=>setCartMenuOpen(!cartMenuOpen)}/>
        <img className="avatar"src={Avatar} alt="" onClick={()=>setAvatarMenuOpen(!avatarMenuOpen)}/>
      </div>
    </div>
  )
}

export default Navbar