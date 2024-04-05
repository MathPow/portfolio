import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import "@/styles/globals.css";

interface TooltipProps {
  text: string;
}

export default function Tooltip({ text }: TooltipProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  function getWidth() {
    const el = document.getElementById("tootip");
    if (el) return el.offsetWidth;
    else return 0;
  }

  function getHeight() {
    const el = document.getElementById("tootip");
    if (el) return el.offsetHeight;
    else return 0;
  }

  return (
    <>
      {!isMobile && (
        <div className={`absolute z-50 w-full`}>
          {text != "" && (
            <div
              id="tootip"
              className={`absolute p-1 px-2 rounded-xl`}
              style={{
                left: `${mousePosition.x - getWidth() / 2}px`,
                top: `${mousePosition.y - getHeight() - 30 / 2}px`,
              }}
            >
              <p
                className={`text-white text-md text-center ${
                  isMobile && "text-lg"
                }`}
              >
                {text}
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
}
