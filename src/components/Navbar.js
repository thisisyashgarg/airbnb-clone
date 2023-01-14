import React from "react";
import logo from "../../public/images/airbnb-logo.png";

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function Navbar() {
  return (
    <nav>
      <img className="nav--logo" src={logo} />
    </nav>
  );
}
