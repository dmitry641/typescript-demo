import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar: React.FunctionComponent = () => {
  return (
    <nav>
      <div className="nav-wrapper indigo px1">
        <NavLink to="/" className="brand-logo">
          React-typescript
        </NavLink>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">Todo list</NavLink>
          </li>
          <li>
            <NavLink to="/info">Information</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
