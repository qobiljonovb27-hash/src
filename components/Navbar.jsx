import React from "react";
import Logo from "../assets/Logo .svg";

const Navbar = () => {
  return (
    <div>
      <div className="navbar flex items-center justify-betwen p-5">
        <div className="nav_left">
          <img className="w-[100px]" src={Logo} alt="" />
        </div>
      </div>
      <div className="nav_right  flex items-center gap-5"></div>
    </div>
  );
};

export default Navbar;
-