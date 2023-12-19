import React from "react";
import { Nav } from "./NavbarStyle";
import XptoLogo from "../assets/xpto-logo.png";

function Navbar() {
  return (
    <>
      <Nav>
        <div>
          <a href="as">
            <img src={XptoLogo} alt="XPTO logo" />
          </a>
          <h3>GIF Sheet</h3>
        </div>
      </Nav>
    </>
  );
}

export default Navbar;
