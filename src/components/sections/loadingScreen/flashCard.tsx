import React, { useState, useEffect } from "react";
import "@/styles/globals.css";
import Image from "next/image";
import squareMe from "@/img/squareMe.png";
import { randomFacts } from "@/lib/composables/randomFacts";

export default function FlashCard() {
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
  );
}
