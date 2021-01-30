import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo" style={{ marginLeft: 20 }}>
            Book Finder
          </Link>
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
