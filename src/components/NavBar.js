import React from "react";
import {NavLink} from "react-router-dom"

function NavBar() {
  return (
    <nav>
      <div className="titlediv">
        <h1>PomoTodo</h1>
      </div>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
