import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar-container") {
      x.className += " responsive";
    } else {
      x.className = "navbar-container";
    }
  }

  return (
    <div className="navbar-container" id="myTopnav">
      <p className="logo">
        <Link href="/">CRISCOMMERCE</Link>
      </p>
      <div className="dropdown">
        <button className="dropbtn">MOBILE PHONES</button>
        <div className="content-of-drop-down">
          <Link href="/apple-mobile" legacyBehavior><a >Apple</a></Link>
          <Link href="/samsung-mobile" legacyBehavior><a >Samsung</a></Link>
          <a href="#">Huawei</a>
          <a href="#">Techno</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">COMPUTERS</button>
        <div className="content-of-drop-down">
          <a href="#">APPLE</a>
          <a href="#">ASUS</a>
          <a href="#">HP</a>
          <a href="#">LENOVO</a>
          <a href="#">MSI</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">ACCESSORIES</button>
        <div className="content-of-drop-down">
          <a href="#">Protector</a>
          <a href="#">Handsfree</a>
          <a href="#">Mobile Wifi</a>
          <a href="#">Chargers</a>
          <a href="#">Data USB Cables</a>
          <a href="#">Batteries</a>
          <a href="#">Pendrives</a>
          <a href="#">External Harddrives</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">TELEVISIONS</button>
        <div className="content-of-drop-down">
          <a href="#">Apple</a>
          <a href="#">Samsung</a>
          <a href="#">Huawei</a>
          <a href="#">Techno</a>
        </div>
      </div>
      <a href="javascript:void(0);" className="icon" onClick={myFunction}>
        &#9776;
      </a>

      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
