import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="navbar">
    <h1><Link to='/'>Goodest</Link></h1>
    <div className="links">
      <Link to='/'>Home</Link>
      <Link to='/fakepage'>Leaderboard</Link>
      <Link to='/signup'>Sign Up</Link>
    </div>
  </nav>
);

export default NavBar;