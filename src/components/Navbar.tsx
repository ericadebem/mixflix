import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [userData, setUserData] = useState();
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">MIXBUSS</NavLink>
        </li>
        <div>
          <li>HOME</li>
          {userData ? (
            <li>LOGOUT</li>
          ) : (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}{" "}
          <li>
            <NavLink to="/customer">Customer</NavLink>
          </li>{" "}
          <li>
            <NavLink to="/employee">Employee</NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};
