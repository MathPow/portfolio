import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Spline, { SplineEvent, SplineEventName } from "@splinetool/react-spline";
import loading from '@/img/loading.gif';
import ContactMe from '@/components/contactMe';
import AboutMe from '@/components/aboutMe';
import Navigation from '@/components/navigation';

interface SplineObject {
  emitEvent: (eventName: string) => void;
  // Add other properties as needed
}

enum DotEnum {
  HOME,
  SECTION3,
  SECTION2,
  SECTION1,
  SECTION4
}

export default function SplineApp() {
  /*const [isOpen, setIsOpen] = useState(false);

  function onLoad(splineApp) {
    spline.current = splineApp;
  }*/
  /*Arrow section*/
  const objectHomeArrow = useRef<SplineObject | null>(null);
  const objectSection1Arrow = useRef<SplineObject | null>(null);
  const objectSection2Arrow = useRef<SplineObject | null>(null);
  const objectSection3Arrow = useRef<SplineObject | null>(null);
  const objectSection4Arrow = useRef<SplineObject | null>(null);
  const homeArrowNameTag = "HomeArrow";
  const section1ArrowNameTag = "Section1Arrow";
  const section2ArrowNameTag = "Section2Arrow";
  const section3ArrowNameTag = "Section3Arrow";
  const section4ArrowNameTag = "Section4Arrow";
  
  /*Back to section*/
  const objectBackToHome = useRef<SplineObject | null>(null);
  const objectBackToSection1 = useRef<SplineObject | null>(null);
  const objectBackToSection2 = useRef<SplineObject | null>(null);
  const objectBackToSection3 = useRef<SplineObject | null>(null);
  const objectBackToSection4 = useRef<SplineObject | null>(null);
  const backToHomeNameTag = "BackToHome";
  const backToSection1NameTag = "BackToSection1";
  const backToSection2NameTag = "BackToSection2";
  const backToSection3NameTag = "BackToSection3";
  const backToSection4NameTag = "BackToSection4";
  const [isHtmlDot, setHtmlDot] = useState(DotEnum.HOME);
  const htmlFullDot = '<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="8" cy="8" r="4"></circle> </g>';
  const htmlOutlineDot = '<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path  d="M8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2Zm0,9.42857A3.42857,3.42857,0,1,1,11.42857,8,3.42857,3.42857,0,0,1,8,11.42857Z"></path> </g>';

  function onLoad(spline: any) {
    objectHomeArrow.current = spline.findObjectByName(homeArrowNameTag);
    objectSection1Arrow.current = spline.findObjectByName(section1ArrowNameTag);
    objectSection2Arrow.current = spline.findObjectByName(section2ArrowNameTag);
    objectSection3Arrow.current = spline.findObjectByName(section3ArrowNameTag);
    objectSection4Arrow.current = spline.findObjectByName(section4ArrowNameTag);

    objectBackToHome.current = spline.findObjectByName(backToHomeNameTag);
    objectBackToSection1.current = spline.findObjectByName(backToSection1NameTag);
    objectBackToSection2.current = spline.findObjectByName(backToSection2NameTag);
    objectBackToSection3.current = spline.findObjectByName(backToSection3NameTag);
    objectBackToSection4.current = spline.findObjectByName(backToSection4NameTag);
  }

  function onMouseDown(e: { target: { name: string; }; }) {
    console.log(e.target.name);
    if (e.target.name === 'github'){
      window.open('https://github.com/MathPow', '_blank');
    }
  }

  function triggerArrow() {
    if(isHtmlDot == DotEnum.HOME)
      triggerHomeArrow();
    else if(isHtmlDot == DotEnum.SECTION1)
      triggerSection1Arrow();
    else if(isHtmlDot == DotEnum.SECTION2)
      triggerSection2Arrow();
    else if(isHtmlDot == DotEnum.SECTION3)
      triggerSection3Arrow();
    else if(isHtmlDot == DotEnum.SECTION4)
      triggerSection4Arrow();
  }

  function triggerHomeArrow() {
    if (objectHomeArrow.current){
      objectHomeArrow.current.emitEvent('mouseDown');
      setTimeout(function() {
        setHtmlDot(DotEnum.SECTION1);
      }, 2500);
    }
  }

  function triggerSection1Arrow() {
    if (objectSection1Arrow.current){
      objectSection1Arrow.current.emitEvent('mouseDown');
      setTimeout(function() {
        setHtmlDot(DotEnum.SECTION2);
      }, 2500);
    }
  }

  function triggerSection2Arrow() {
    if (objectSection2Arrow.current){
      objectSection2Arrow.current.emitEvent('mouseDown');
      setTimeout(function() {
        setHtmlDot(DotEnum.SECTION3);
      }, 2500);
    }
  }

  function triggerSection3Arrow() {
    if (objectSection3Arrow.current){
      objectSection3Arrow.current.emitEvent('mouseDown');
      setTimeout(function() {
        setHtmlDot(DotEnum.SECTION4);
      }, 2500);
    }
  }

  function triggerSection4Arrow() {
    if (objectSection4Arrow.current){
      objectSection4Arrow.current.emitEvent('mouseDown');
      setTimeout(function() {
        setHtmlDot(DotEnum.HOME);
      }, 2500);
    }
  }

  function isBackgroundDark() {
    if (isHtmlDot == DotEnum.SECTION1){
      return true;
    } else {
      return false;
    }
  }

  /*function hoverSection1Arrow() {
    if (objectSection1Arrow.current){
      objectSection1Arrow.current.emitEvent('mouseHover');
      setHtmlDot(DotEnum.SECTION1);
    }
  }*/

  /*back to*/
  function backToSection1() {
    if (objectBackToSection1.current){
      objectBackToSection1.current.emitEvent('mouseDown');
      setTimeout(function() {
        setHtmlDot(DotEnum.SECTION1);
      }, 300);
    }
  }

  function backToSection2() {
    if (objectBackToSection2.current){
      objectBackToSection2.current.emitEvent('mouseDown');
      setTimeout(function() {
        setHtmlDot(DotEnum.SECTION2);
      }, 300);
    }
  }

  function backToSection3() {
    if (objectBackToSection3.current){
      objectBackToSection3.current.emitEvent('mouseDown');
      setTimeout(function() {
        setHtmlDot(DotEnum.SECTION3);
      }, 300);
    }
  }

  function backToSection4() {
    if (objectBackToSection4.current){
      objectBackToSection4.current.emitEvent('mouseDown');
      setTimeout(function() {
        setHtmlDot(DotEnum.SECTION4);
      }, 300);
    }
  }
  
  function backToHome() {
    if (objectBackToHome.current){
      objectBackToHome.current.emitEvent('mouseDown');
      setTimeout(function() {
        setHtmlDot(DotEnum.HOME);
      }, 300);
    }
  }

  return ( 
    <div>
      <Navigation isBackgroundDark={isBackgroundDark()} backToHome={backToHome}/>
      {isHtmlDot == DotEnum.SECTION1 && (<AboutMe/>)}
      {isHtmlDot == DotEnum.SECTION4 && (<ContactMe/>)}
      <div className="min-h-screen w-screen flex items-center justify-center flex-col absolute z-0">
        {/* <Image src={loading} alt="logo" className='w-32'/> */}
        <p className='text-xl text-gray-300 mt-96'>Chargement...</p>
        <div className="container">
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"/>
            </filter>
          </defs>
        </svg>
      </div>
      <Spline onMouseDown={onMouseDown} onLoad={onLoad} className='absolute z-10' scene="https://prod.spline.design/R1mqMpNsNvQxIAnn/scene.splinecode"></Spline>
      {/* <button className='absolute z-20 top-48' type="button" onClick={triggerAnimation}>
        Trigger Spline Animation
      </button> */}
      <div className='absolute z-20 bottom-0 w-screen flex items-center justify-center'  onClick={triggerArrow}>
        <svg className={`w-8 hover:cursor-pointer hover:w-9`} height="80px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path> </g></svg>
      </div>
      <div className='absolute min-h-screen z-20 flex flex-col justify-center left-12'>
        <svg onClick={backToHome} className={`w-6 hover:cursor-pointer hover:w-7 ${isBackgroundDark() && "fill-white" || "fill-black"}`} id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" dangerouslySetInnerHTML={{ __html: isHtmlDot == DotEnum.HOME && htmlOutlineDot || htmlFullDot }}></svg>
        <svg onClick={backToSection1} className={`w-6 hover:cursor-pointer hover:w-7 ${isBackgroundDark() && "fill-white" || "fill-black"}`} id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" dangerouslySetInnerHTML={{ __html: isHtmlDot == DotEnum.SECTION1 && htmlOutlineDot || htmlFullDot }}></svg>
        <svg onClick={backToSection2} className={`w-6 hover:cursor-pointer hover:w-7 ${isBackgroundDark() && "fill-white" || "fill-black"}`} id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" dangerouslySetInnerHTML={{ __html: isHtmlDot == DotEnum.SECTION2 && htmlOutlineDot || htmlFullDot }}></svg>
        <svg onClick={backToSection3} className={`w-6 hover:cursor-pointer hover:w-7 ${isBackgroundDark() && "fill-white" || "fill-black"}`} id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" dangerouslySetInnerHTML={{ __html: isHtmlDot == DotEnum.SECTION3 && htmlOutlineDot || htmlFullDot }}></svg>
        <svg onClick={backToSection4} className={`w-6 hover:cursor-pointer hover:w-7 ${isBackgroundDark() && "fill-white" || "fill-black"}`} id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" dangerouslySetInnerHTML={{ __html: isHtmlDot == DotEnum.SECTION4 && htmlOutlineDot || htmlFullDot }}></svg>
      </div>
    </div> 
  )
}