import React from "react";
import { Link } from "react-router-dom";
import "../styles/HeaderStyle.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>VALORANT</h1>
      </div>
      <nav>
        <ul className="listItems">
          <li className="item">
            <Link to="/Home" className="navLink">
              Home
            </Link>
          </li>
          <li className="item">
            <Link to="/Agents" className="navLink">
              Agents
            </Link>
          </li>
          <li className="item">
            <Link to="/Maps" className="navLink">
              Maps
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
