import React from "react";
import classes from "./Navbar.module.css";
import Logo1 from "./images/LOGO.png";
const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <img src={Logo1} className="img1" />
      <ul className="ulNav">
        <li className="li">
          <h5>
            <b>About</b>
          </h5>
        </li>
        <li className="li">
          <h5>
            <b>Details</b>
          </h5>
        </li>
        <li className="li">
          <h5>
            <b>Sponsors</b>
          </h5>
        </li>
        <li className="li">
          <h5>
            <b>FAQs</b>
          </h5>
        </li>
        <li className="li">
          <h5>
            <b>Support</b>
          </h5>
        </li>
      </ul>

      <button>
        <h5>
          <b>Register</b>
        </h5>
      </button>
    </div>
  );
};

export default Navbar;
