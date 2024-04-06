import React, { useState } from "react";
import RightDrawer from "./rightDrawer";
import "@/styles/globals.css";
import { RedirectEnum } from "@/lib/enums/redirectEnum";

interface HamburgerMenuProps {
  isBackgroundDark: boolean;
  redirect: (redirect: RedirectEnum, number: Number | null) => void;
  downloadPdf: () => void;
}

const HamburgerMenu = ({
  isBackgroundDark,
  redirect,
  downloadPdf,
}: HamburgerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div
        className={`flex items-center hamburger-menu ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div
          className={`bar1 ${(isBackgroundDark && "bg-white") || "bg-black"}`}
        />
        <div
          className={`bar2 ${(isBackgroundDark && "bg-white") || "bg-black"}`}
        />
        <div
          className={`bar3 ${(isBackgroundDark && "bg-white") || "bg-black"}`}
        />
      </div>
      <RightDrawer
        isOpen={isOpen}
        onClose={closeMenu}
        redirect={redirect}
        downloadPdf={downloadPdf}
      />
    </div>
  );
};

export default HamburgerMenu;
