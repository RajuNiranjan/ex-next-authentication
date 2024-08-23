import React from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-10 bg-white h-20 shadow-xl z-50 sticky top-0 ">
      <div>
        <h1>eComm</h1>
      </div>
      <div></div>
      <div className="flex gap-4 items-center"></div>
    </nav>
  );
};

export default NavBar;
