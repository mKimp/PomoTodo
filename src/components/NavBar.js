import React from "react";
import {Link} from "react-router-dom"

function NavBar() {
  return (
    <nav>
      <h1>Todo List with Pomo Technique</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default NavBar;
