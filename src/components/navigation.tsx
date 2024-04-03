import React from "react";
import "@/styles/globals.css";
import { RedirectEnum } from "./redirectEnum";
import NavBar from "./navBar";
import AboutMe from "./aboutMe";
import ContactMe from "./socials";
import Projects from "./projects";
import { DotEnum } from "@/lib/enums/dotEnum";
import Experiences from "./experiences";
import Training from "./training";

interface NavigationProps {
  isBackgroundDark: boolean;
  backToHome: () => void;
  redirect: (redirect: RedirectEnum, number: Number | null) => void;
  projectNumber: number;
  isHtmlDot: DotEnum;
  isExperience: boolean;
  triggerArrow: () => void;
  experienceNumber: number;
  trainingNumber: number;
  sectionName: string;
  togglePage: () => void;
  backToSection1: () => void;
  backToSection2: () => void;
  backToSection3: () => void;
  backToSection4: () => void;
  htmlOutlineDot: string;
  htmlFullDot: string;
}

export default function Navigation({
  isBackgroundDark,
  backToHome,
  redirect,
  projectNumber,
  isHtmlDot,
  isExperience,
  triggerArrow,
  experienceNumber,
  trainingNumber,
  sectionName,
  togglePage,
  backToSection1,
  backToSection2,
  backToSection3,
  backToSection4,
  htmlOutlineDot,
  htmlFullDot,
}: NavigationProps) {
  return (
    <>
      <NavBar
        isBackgroundDark={isBackgroundDark}
        backToHome={backToHome}
        redirect={redirect}
      />
      {isHtmlDot == DotEnum.SECTION1 && <AboutMe />}
      {isHtmlDot == DotEnum.SECTION4 && (
        <ContactMe isWhite={isBackgroundDark} />
      )}
      {isHtmlDot == DotEnum.SECTION2 && (
        <Projects projectNumber={projectNumber} redirect={redirect} />
      )}
      {isHtmlDot == DotEnum.SECTION3 && (
        <>
          {isExperience ? (
            <Experiences
              experienceNumber={experienceNumber}
              togglePage={togglePage}
            />
          ) : (
            <Training trainingNumber={trainingNumber} togglePage={togglePage} />
          )}
        </>
      )}
      <div
        className="fixed z-20 bottom-4 w-screen flex items-center justify-center hover:cursor-pointer"
        onClick={triggerArrow}
      >
        <svg
          className={`w-8 hover:w-9 ${
            (isBackgroundDark && "fill-white") || "fill-black"
          }`}
          height="80px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 330 330"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              id="XMLID_225_"
              d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
            ></path>{" "}
          </g>
        </svg>
        <svg
          className={`absolute w-16 ${
            isHtmlDot == DotEnum.SECTION1 && "w-[76px]"
          } ${
            isHtmlDot == DotEnum.SECTION3 && "w-[72px]"
          } spin-anim overflow-visible ${
            (isBackgroundDark && "fill-white") || "fill-black"
          }`}
          viewBox="0 0 100 100"
        >
          <defs>
            <path
              id="circle"
              d="
                    M 50, 50
                    m -37, 0
                    a 37,37 0 1,1 74,0
                    a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text
            fontSize={
              isHtmlDot == DotEnum.SECTION3 || isHtmlDot == DotEnum.SECTION1
                ? "22"
                : "30"
            }
          >
            <textPath xlinkHref="#circle" textLength="226%">
              {sectionName}
            </textPath>
          </text>
        </svg>
      </div>
      <div className="fixed min-h-screen z-20 flex flex-col justify-center left[3vw] sm:left-[5vw]">
        <svg
          onClick={backToHome}
          className={`w-8 md:w-6 md:hover:cursor-pointer hover:w-7 ${
            (isBackgroundDark && "fill-white") || "fill-black"
          }`}
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          dangerouslySetInnerHTML={{
            __html:
              (isHtmlDot == DotEnum.HOME && htmlOutlineDot) || htmlFullDot,
          }}
        ></svg>
        <svg
          onClick={backToSection1}
          className={`w-8 md:w-6 hover:cursor-pointer md:hover:w-7 ${
            (isBackgroundDark && "fill-white") || "fill-black"
          }`}
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          dangerouslySetInnerHTML={{
            __html:
              (isHtmlDot == DotEnum.SECTION1 && htmlOutlineDot) || htmlFullDot,
          }}
        ></svg>
        <svg
          onClick={backToSection2}
          className={`w-8 md:w-6 hover:cursor-pointer md:hover:w-7 ${
            (isBackgroundDark && "fill-white") || "fill-black"
          }`}
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          dangerouslySetInnerHTML={{
            __html:
              (isHtmlDot == DotEnum.SECTION2 && htmlOutlineDot) || htmlFullDot,
          }}
        ></svg>
        <svg
          onClick={backToSection3}
          className={`w-8 md:w-6 hover:cursor-pointer md:hover:w-7 ${
            (isBackgroundDark && "fill-white") || "fill-black"
          }`}
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          dangerouslySetInnerHTML={{
            __html:
              (isHtmlDot == DotEnum.SECTION3 && htmlOutlineDot) || htmlFullDot,
          }}
        ></svg>
        <svg
          onClick={backToSection4}
          className={`w-8 md:w-6 hover:cursor-pointer md:hover:w-7 ${
            (isBackgroundDark && "fill-white") || "fill-black"
          }`}
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          dangerouslySetInnerHTML={{
            __html:
              (isHtmlDot == DotEnum.SECTION4 && htmlOutlineDot) || htmlFullDot,
          }}
        ></svg>
      </div>
    </>
  );
}
