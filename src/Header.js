import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar">
      <Link to="/">Users</Link> <Link to="/addUser">addUser</Link>{" "}
      <Link to="/getUser/1">getUser</Link>
    </nav>
  );
}

export default Header;
