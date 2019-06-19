import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info ">
      <a className="navbar-brand" href="/">
        Track-Rx
      </a>
      <ul>
        <li>
          <Link to="/">Your Meds</Link>
        </li>
        <li>
          <Link to="/addmed">Add New Med</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
