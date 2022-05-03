import React from "react";
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <div className="header">
      <img
        src="https://react-projects-13-stripe-submenus.netlify.app/static/media/logo.1090473d.svg"
        alt=""
      />
      <li class="nav-list">
        <ul>
          <h2>Products</h2>
        </ul>
        <ul>
          <h2>Developers</h2>
        </ul>
        <ul>
          <h2>Company</h2>
        </ul>
      </li>
      <button className="btn-nav">
        <h3>Sign in</h3>
      </button>
    </div>
  );
};

export default Navbar;
