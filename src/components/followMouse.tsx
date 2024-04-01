import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import '@/styles/globals.css';

interface FollowMouseProps {
  sectionName: string;
  isBackgroundDark: boolean;
  isHtmlDotSection1Or3: boolean;
}

export default function FollowMouse({sectionName, isBackgroundDark, isHtmlDotSection1Or3} : FollowMouseProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return(  
    <>
      {!isMobile && (  
        <svg className={`absolute z-20 pointer-events-none w-[56px] ${isHtmlDotSection1Or3 && "w-[64px]"} spin-anim overflow-visible ${isBackgroundDark && "fill-white" || "fill-black"}`} viewBox="0 0 100 100"       style={{
          left: `${mousePosition.x - 64 + 80 / 2}px`,
          top: `${mousePosition.y - 64 + 85 / 2}px`,
            }}>
          <defs>
            <path id="circle"
              d="
                M 50, 50
                m -37, 0
                a 37,37 0 1,1 74,0
                a 37,37 0 1,1 -74,0"/>
          </defs>
          <text fontSize={isHtmlDotSection1Or3 ? "18" : "25"}>
            <textPath xlinkHref="#circle" textLength="226%">
              {sectionName}
            </textPath>
          </text>
        </svg>
      )}
    </>
  );
};