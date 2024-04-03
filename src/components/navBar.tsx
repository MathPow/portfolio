import React from "react";
import Image from "next/image";
import HamburgerMenu from "@/components/hamburgerMenu";
import logo from "@/img/logo.svg";
import logoWhite from "@/img/logoWhite.svg";
import { Button } from "@/components/ui/button";
import "@/styles/globals.css";
import { RedirectEnum } from "./redirectEnum";

interface NavBarProps {
  isBackgroundDark: boolean;
  backToHome: () => void;
  redirect: (redirect: RedirectEnum, number: Number | null) => void;
}

export default function NavBar({
  isBackgroundDark,
  backToHome,
  redirect,
}: NavBarProps) {
  const downloadPdf = () => {
    const pdfUrl = "cv_mathys_deshaies.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "cv_mathys_deshaies.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="fixed pt-nav px-[5vw] w-full flex justify-between items-center z-50">
      {(!isBackgroundDark && (
        <Image
          onClick={backToHome}
          src={logo}
          alt="logo"
          className="flex items-center md:w-64 w-44 hover:cursor-pointer"
        />
      )) || (
        <Image
          onClick={backToHome}
          src={logoWhite}
          alt="logo"
          className="flex items-center w-64 hover:cursor-pointer"
        />
      )}
      <div className="flex flex-row gap-x-12 items-center">
        <Button
          className={`hidden md:block rounded-xl ${
            (isBackgroundDark && "text-white button-white") ||
            "text-black button"
          }`}
          onClick={downloadPdf}
        >
          Télécharger le CV
        </Button>
        <HamburgerMenu
          isBackgroundDark={isBackgroundDark}
          redirect={redirect}
          downloadPdf={downloadPdf}
        />
      </div>
    </nav>
  );
}
