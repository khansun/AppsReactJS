import React from "react";
import { Link , Route} from "react-router-dom";

const NavBar = () => {
  return (
    <div >
      <nav class="navbar navbar-dark bg-dark">
        <div className="nav-wrapper">
          <Link  to="/" className="brand-logo" style={{ marginLeft: 650 }}>
            Book Finder
            
            </Link>
            
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
