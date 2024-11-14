import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen = false, onStateChange = () => {} }) => {
  const [menuOpen, setMenuOpen] = useState(isOpen);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
    onStateChange(state); 
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Menu isOpen={menuOpen} onStateChange={handleStateChange}>
      <Link onClick={closeMenu} className="menu-item" to="/">Home</Link>
      <Link onClick={closeMenu} className="menu-item" to="/about">About</Link>
      <Link onClick={closeMenu} className="menu-item" to="/program">Programme</Link>
    </Menu>
  );
};

export default Sidebar;
