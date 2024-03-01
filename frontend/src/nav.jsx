import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import cookingLogo from './images/595fa5ffb3d67f62ceabaa0d9a40d1e2.png';
const Nav = () => {
  return (
    <nav>
      <div className="nav-cont">
        <div className="title">
          <img src={cookingLogo} alt="Cooking Logo" />
          <h1>Foodie</h1>
        </div>
        <div className="nav-items">
          <Link to="/" style={{ textDecoration: "none" }}><h3>Home</h3></Link>
          <Link to="/about" style={{ textDecoration: "none" }}><h3>About Us</h3></Link>
          <Link to="/menu" style={{ textDecoration: "none" }}><h3>Menu</h3></Link>
        </div>
        <div className="book-button">
        <Link to="/reserve"><button>Book A Table</button></Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
