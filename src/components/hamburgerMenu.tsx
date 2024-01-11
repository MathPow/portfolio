import React, { useState } from 'react';
import RightDrawer from './rightDrawer';
import '@/styles/globals.css';

interface HamburgerMenuProps {
  isBackgroundDark: boolean;
}

const HamburgerMenu = ({ isBackgroundDark }: HamburgerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className={`flex items-center hamburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className={`bar1 ${isBackgroundDark && "bg-white" || "bg-black"}`} />
        <div className={`bar2 ${isBackgroundDark && "bg-white" || "bg-black"}`} />
        <div className={`bar3 ${isBackgroundDark && "bg-white" || "bg-black"}`} />
      </div>
      <RightDrawer isOpen={isOpen} onClose={closeMenu} />
    </div>
  );
};

export default HamburgerMenu;
