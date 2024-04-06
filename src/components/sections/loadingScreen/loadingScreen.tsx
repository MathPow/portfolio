import React from "react";
import "@/styles/globals.css";
import FlashCard from "@/components/sections/loadingScreen/flashCard";

interface LoadingScreenProps {
  isLoading: boolean;
  startPage: () => void;
}

export default function LoadingScreen({
  isLoading,
  startPage,
}: LoadingScreenProps) {
  return (
    <div className="min-h-screen w-screen absolute z-0">
      {isLoading ? (
        <>
          <div className="container">
            {/* <Image src={loading} alt="logo" className='w-32'/> */}
            {/* loading animation */}
            <div className="dot dot-1"></div>
            <div className="dot dot-2"></div>
            <div className="dot dot-3"></div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="10"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <p className="text-xl text-gray-300 animate-pulse text-center">
            Chargement...
          </p>
        </>
      ) : (
        <div className="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 flex flex-col justify-center items-center">
          <h1 className="text-slate-100 font-extrabold tracking-widest text-2xl md:text-4xl text-center mb-12 gradient-text">
            Bienvenue dans le monde de
            <br />
            Mathys Deshaies
          </h1>
          <>
            <button
              onClick={startPage}
              className="btn btn-gradient-border btn-glow"
            >
              Venez visitez!
            </button>
          </>
        </div>
      )}
      <FlashCard />
    </div>
  );
}
