import React from "react";
import Cart from "./Cart";
import "./Header.css";
const Header = () => {
  return (
    
      <nav >
        <div className="header">
          <div >
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </div>
          <div>
            <Cart />
          </div>
          </div>
      </nav>
  );
};

export default Header;
