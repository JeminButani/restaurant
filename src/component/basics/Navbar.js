import React from "react";

const Navbar = ({ filterItem, Menulist }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {Menulist.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
