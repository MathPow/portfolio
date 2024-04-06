import React, { useState, useEffect } from "react";
import "@/styles/globals.css";
import Image from "next/image";
import squareMe from "@/img/squareMe.png";
import { randomFacts } from "@/lib/composables/randomFacts";

interface LoadingScreenProps {
  isLoading: boolean;
  startPage: () => void;
}

export default function LoadingScreen({
  isLoading,
  startPage,
}: LoadingScreenProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [randomFact, setRandomFact] = useState("");

  const toggleVisibility = () => {
    setIsClicked(true);
    getRandomFact();

    setTimeout(() => {
      setIsClicked(false);
    }, 500);
  };

  useEffect(() => {
    getRandomFact();
  }, []);

  function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * randomFacts.length);
    setRandomFact(randomFacts[randomIndex]);
  }

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
      <div
        onClick={toggleVisibility}
        className={`absolute bottom-6 left-1/2 -translate-x-2/4 flex flex-col bg-darkBg h-28 w-[90%] max-w-[35rem] rounded-xl text-gray-100 transform transition-transform group hover:scale-[1.03] hover:cursor-pointer ${
          isClicked && "scale-[0.98] hover:scale-[0.98]"
        }`}
      >
        <div className="rounded-xl py-1.5 px-4 font-semibold flex justify-between">
          <span>Faits intéressants</span>
          {/* <svg
            className="h-6 w-6 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
          >
            <path d="M560-160v-80h104L537-367l57-57 126 126v-102h80v240H560Zm-344 0-56-56 504-504H560v-80h240v240h-80v-104L216-160Zm151-377L160-744l56-56 207 207-56 56Z" />
          </svg> */}
          <Image
            className="w-7 h-7 rounded-full"
            src={squareMe}
            alt={"LavageMR"}
          />
        </div>
        <div className="relative bg-lessDarkBg flex-grow h-full rounded-xl px-2 py-1">
          <p className="text-sm text-gray-300">{randomFact}</p>
          <svg
            className="h-7 w-7 fill-gray-400 absolute bottom-0 right-2 group-hover:animate-pulse"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
          >
            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
