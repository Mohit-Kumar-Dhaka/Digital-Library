import React, { useState } from "react";
import './Navbar.css';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="Navbar">
      <div className="logo">Digital<span>Library</span></div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={menuOpen ? "show" : ""}>
        <li><a href="#home">Home</a></li>
        <li><a href="#popular">Popular Books</a></li>
        <li><a href="#explore">Explore Categories</a></li>
        <li><a href="#search">Search Books</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
};
