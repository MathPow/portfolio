import React from "react";
import Image from "next/image";
import GitHubLogo from "@/img/gitHubLogo.png";
import GitHubLogoWhite from "@/img/gitHubLogoWhite.png";
import "@/styles/globals.css";

interface ContactMeProps {
  isWhite: boolean;
}

export default function Socials({ isWhite }: ContactMeProps) {
  function onOpenGitHub() {
    window.open("https://github.com/MathPow", "_blank");
  }

  function onLinkedIn() {
    window.open("https://www.linkedin.com/in/mathys-deshaies/", "_blank");
  }

  return (
    <div className="flex gap-4 pt-2">
      {isWhite ? (
        <>
          <svg
            className="w-8 pointer-events-auto hover:cursor-pointer fill-white"
            onClick={onLinkedIn}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#000"
          >
            <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM8.951 9.404H6.165V17.5H8.95V9.404zm6.841-.192c-1.324 0-1.993.629-2.385 1.156l-.127.181V9.403h-2.786l.01.484c.006.636.007 1.748.005 2.93l-.015 4.683h2.786v-4.522c0-.242.018-.484.092-.657.202-.483.66-.984 1.43-.984.955 0 1.367.666 1.408 1.662l.003.168V17.5H19v-4.643c0-2.487-1.375-3.645-3.208-3.645zM7.576 5.5C6.623 5.5 6 6.105 6 6.899c0 .73.536 1.325 1.378 1.392l.18.006c.971 0 1.577-.621 1.577-1.398C9.116 6.105 8.53 5.5 7.576 5.5z" />
          </svg>
          <Image
            className="w-8 pointer-events-auto hover:cursor-pointer"
            onClick={onOpenGitHub}
            src={GitHubLogoWhite}
            alt={"GitHubLogoWhite"}
          />
        </>
      ) : (
        <>
          <svg
            className="w-8 pointer-events-auto hover:cursor-pointer"
            onClick={onLinkedIn}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#000"
          >
            <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM8.951 9.404H6.165V17.5H8.95V9.404zm6.841-.192c-1.324 0-1.993.629-2.385 1.156l-.127.181V9.403h-2.786l.01.484c.006.636.007 1.748.005 2.93l-.015 4.683h2.786v-4.522c0-.242.018-.484.092-.657.202-.483.66-.984 1.43-.984.955 0 1.367.666 1.408 1.662l.003.168V17.5H19v-4.643c0-2.487-1.375-3.645-3.208-3.645zM7.576 5.5C6.623 5.5 6 6.105 6 6.899c0 .73.536 1.325 1.378 1.392l.18.006c.971 0 1.577-.621 1.577-1.398C9.116 6.105 8.53 5.5 7.576 5.5z" />
          </svg>
          <Image
            className="w-8 pointer-events-auto hover:cursor-pointer"
            onClick={onOpenGitHub}
            src={GitHubLogo}
            alt={"GitHubLogo"}
          />
        </>
      )}
    </div>
  );
}
