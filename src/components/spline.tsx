import React, { useRef, useState, useEffect } from "react";
import "@/styles/globals.css";
import Spline from "@splinetool/react-spline";
import Navigation from "@/components/navigation";
import Tooltip from "./tooltip";
import Flash from "./flash";
import { RedirectEnum } from "./redirectEnum";
import { isMobile } from "react-device-detect";
import { Toaster, toast } from "sonner";
import LoadingScreen from "./loadingScreen";
import { DotEnum } from "@/lib/enums/dotEnum";

interface SplineObject {
  emitEvent: (eventName: string) => void;
}

export default function SplineApp() {
  /*const [isOpen, setIsOpen] = useState(false);

  function onLoad(splineApp) {
    spline.current = splineApp;
  }*/
  const splineObj = useRef<any>();
  const [projectNumber, setProjectNumber] = useState(0);
  const [trainingNumber, setTrainingNumber] = useState(0);
  const [experienceNumber, setExperienceNumber] = useState(0);
  const [isExperience, setIsExperience] = useState(true);

  /*Arrow section*/
  const objectHomeArrow = useRef<SplineObject>();
  const objectSection1Arrow = useRef<SplineObject | null>(null);
  const objectSection2Arrow = useRef<SplineObject | null>(null);
  const objectSection3Arrow = useRef<SplineObject | null>(null);
  const objectSection4Arrow = useRef<SplineObject | null>(null);
  const homeArrowNameTag = "HomeArrow";
  const section1ArrowNameTag = "Section1Arrow";
  const section2ArrowNameTag = "Section2Arrow";
  const section3ArrowNameTag = "Section3Arrow";
  const section4ArrowNameTag = "Section4Arrow";
  const homeName = "Accueil • Accueil •";
  const section1Name = "Présentation • Présentation •";
  const section2Name = "Projets • Projets •";
  const section3Name = "Expériences • Formations •";
  const section4Name = "Contact • Contact •";
  const [sectionName, setSectionName] = useState(homeName);

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
  const htmlFullDot =
    '<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="8" cy="8" r="4"></circle> </g>';
  const htmlOutlineDot =
    '<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path  d="M8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2Zm0,9.42857A3.42857,3.42857,0,1,1,11.42857,8,3.42857,3.42857,0,0,1,8,11.42857Z"></path> </g>';

  /*Switch*/
  const toggle1PageSection3 = useRef<SplineObject | null>(null);
  const toggle1PageSection3Tag = "TooglePage1";
  const toggle2PageSection3 = useRef<SplineObject | null>(null);
  const toggle2PageSection3Tag = "TooglePage2";

  /*tooltip*/
  const [tooltipText, setTooltipText] = useState("");

  /*Shortcut Projects*/
  const objectProject1Shortcut = useRef<SplineObject | null>(null);
  const objectProject2Shortcut = useRef<SplineObject | null>(null);
  const objectProject3Shortcut = useRef<SplineObject | null>(null);
  const objectProject4Shortcut = useRef<SplineObject | null>(null);
  const objectProject5Shortcut = useRef<SplineObject | null>(null);
  const Project1ShortcutNameTag = "Project1Shortcut";
  const Project2ShortcutNameTag = "Project2Shortcut";
  const Project3ShortcutNameTag = "Project3Shortcut";
  const Project4ShortcutNameTag = "Project4Shortcut";
  const Project5ShortcutNameTag = "Project5Shortcut";

  /*Loading*/
  let isFirstLoad = true;
  const [isLoading, setIsLoading] = useState(true);
  const [isPageOpened, setIsPageOpened] = useState(false);
  const objectLoading = useRef<SplineObject | null>(null);
  const loadingNameTag = "Loading";

  async function onLoad(spline: any) {
    splineObj.current = spline;
    objectHomeArrow.current = spline.findObjectByName(homeArrowNameTag);
    objectSection1Arrow.current = spline.findObjectByName(section1ArrowNameTag);
    objectSection2Arrow.current = spline.findObjectByName(section2ArrowNameTag);
    objectSection3Arrow.current = spline.findObjectByName(section3ArrowNameTag);
    objectSection4Arrow.current = spline.findObjectByName(section4ArrowNameTag);

    objectBackToHome.current = spline.findObjectByName(backToHomeNameTag);
    objectBackToSection1.current = spline.findObjectByName(
      backToSection1NameTag
    );
    objectBackToSection2.current = spline.findObjectByName(
      backToSection2NameTag
    );
    objectBackToSection3.current = spline.findObjectByName(
      backToSection3NameTag
    );
    objectBackToSection4.current = spline.findObjectByName(
      backToSection4NameTag
    );

    toggle1PageSection3.current = spline.findObjectByName(
      toggle1PageSection3Tag
    );
    toggle2PageSection3.current = spline.findObjectByName(
      toggle2PageSection3Tag
    );

    objectProject1Shortcut.current = spline.findObjectByName(
      Project1ShortcutNameTag
    );
    objectProject2Shortcut.current = spline.findObjectByName(
      Project2ShortcutNameTag
    );
    objectProject3Shortcut.current = spline.findObjectByName(
      Project3ShortcutNameTag
    );
    objectProject4Shortcut.current = spline.findObjectByName(
      Project4ShortcutNameTag
    );
    objectProject5Shortcut.current = spline.findObjectByName(
      Project5ShortcutNameTag
    );

    objectLoading.current = spline.findObjectByName(loadingNameTag);

    if (!isFirstLoad) {
      setTimeout(finishLoading, 6000);
      setTimeout(loadingAnim, 500);
    } else {
      const splineEl = document.getElementById("spline");
      if (splineEl) {
        splineEl.style.visibility = "hidden";
      }
      isFirstLoad = false;
    }
    if (objectLoading.current) {
      objectLoading.current.emitEvent("mouseDown");
    }
  }

  function startPage() {
    const splineEl = document.getElementById("spline");
    if (splineEl) {
      splineEl.style.visibility = "visible";
      setIsPageOpened(true);
    }
  }

  function finishLoading() {
    setIsLoading(false);
  }

  function loadingAnim() {
    if (objectLoading.current) objectLoading.current.emitEvent("mouseDown");
  }

  useEffect(() => {
    const myFunction = () => {
      if (splineObj && splineObj.current) {
        const obj = splineObj.current.findObjectByName("BoatCalculator");
        if (splineObj.current.findObjectByName("BoatCalculator")) {
          const objPos = obj.position.x;
          console.log(objPos);
          if (objPos < -1450 && objPos > -1550) setProjectNumber(1);
          else if (objPos < -1550 && objPos > -1650) setProjectNumber(2);
          else if (objPos < -1650 && objPos > -1750) setProjectNumber(3);
          else if (objPos < -1750 && objPos > -1850) setProjectNumber(4);
          else if (objPos < -1850 && objPos > -1950) setProjectNumber(5);
          else setProjectNumber(0);
        }
      }
    };
    const intervalId = setInterval(myFunction, 300);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function onMouseDown(e: { target: { name: string } }) {
    const name = e.target.name;
    if (name === "github") window.open("https://github.com/MathPow", "_blank");
    else if (name == "Picture") backToSection2();
    else if (name === "camera") {
      setIsFlashVisible(true);
      if (isMobile) {
        toast("CHEESE!", {
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        });
      }
      setTimeout(() => {
        setIsFlashVisible(false);
      }, 700);
    } else if (name == "Picture Title") navExperience();
    else if (name == "Guitar Simple") backToSection1();
    else if (name == "Man Sit") backToSection4();
    else if (name === "Dot1-1") setExperienceNumber(1);
    else if (name === "Dot2-1") setExperienceNumber(2);
    else if (name === "Dot3-1") setExperienceNumber(3);
    else if (name === "Dot4-1") setExperienceNumber(4);
    else if (name === "Dot5-1") setExperienceNumber(5);
    else if (name === "Dot6-1") setExperienceNumber(6);
    else if (name === "Dot7-1") setExperienceNumber(7);
    else if (name === "Dot1-2") setTrainingNumber(1);
    else if (name === "Dot2-2") setTrainingNumber(2);
    else if (name === "Dot3-2") setTrainingNumber(3);
    else if (name === "Dot4-2") setTrainingNumber(4);
    else if (name === "Dot5-2") setTrainingNumber(5);
    else if (name === "Dot6-2") setTrainingNumber(6);
    else if (name === "Dot7-2") setTrainingNumber(7);
  }

  //backToSection1()
  function onMouseHover(e: { target: { name: string } }) {
    const name = e.target.name;
    if (name == "Backdrop") setTooltipText("");
    else if (name == "github") setTooltipText("Regarde mon code");
    else if (name == "Picture") setTooltipText("Qui suis-je?");
    else if (name == "Guitar Simple")
      setTooltipText("Connais-tu mes intérêts?");
    else if (name == "Picture Title")
      setTooltipText("Regarde moi toute cette expérience!");
    else if (name == "head") setTooltipText("Awww p'tit chien!");
    else if (name == "camera") setTooltipText("CHEESE!");
    else if (name == "Boat")
      setTooltipText("Bienvenue à bord, je suis capitain Goose");
    else if (name == "Rocket") setTooltipText("Où allez-vous cher voyageur?");
    else if (name == "Man Sit") setTooltipText("Venez discuter!");
    else if (name === "Dot1-1") setTooltipText("Développeur front-end");
    else if (name === "Dot2-1") setTooltipText("Soutien technique");
    else if (name === "Dot3-1") setTooltipText("À venir...");
    else if (name === "Dot4-1") setTooltipText("À venir...");
    else if (name === "Dot5-1") setTooltipText("À venir...");
    else if (name === "Dot6-1") setTooltipText("À venir...");
    else if (name === "Dot7-1") setTooltipText("À venir...");
    else if (name === "Dot1-2")
      setTooltipText("Étude collégiale au Cégep de Sainte-Foy");
    else if (name === "Dot2-2") setTooltipText("Diplôme d’études secondaires");
    else if (name === "Dot3-2") setTooltipText("À venir...");
    else if (name === "Dot4-2") setTooltipText("À venir...");
    else if (name === "Dot5-2") setTooltipText("À venir...");
    else if (name === "Dot6-2") setTooltipText("À venir...");
    else if (name === "Dot7-2") setTooltipText("À venir...");
    else setTooltipText("");
  }

  function triggerArrow() {
    if (!isLoading) {
      if (isHtmlDot == DotEnum.HOME) triggerHomeArrow();
      else if (isHtmlDot == DotEnum.SECTION1) triggerSection1Arrow();
      else if (isHtmlDot == DotEnum.SECTION2) triggerSection2Arrow();
      else if (isHtmlDot == DotEnum.SECTION3) triggerSection3Arrow();
      else if (isHtmlDot == DotEnum.SECTION4) triggerSection4Arrow();
    }
  }

  function triggerHomeArrow() {
    if (objectHomeArrow.current) {
      objectHomeArrow.current.emitEvent("mouseDown");
      setTimeout(function () {
        setHtmlDot(DotEnum.SECTION1);
        setSectionName(section1Name);
      }, 2500);
    }
  }

  function triggerSection1Arrow() {
    if (objectSection1Arrow.current) {
      objectSection1Arrow.current.emitEvent("mouseDown");
      setTimeout(function () {
        setHtmlDot(DotEnum.SECTION2);
        setSectionName(section2Name);
      }, 2500);
    }
  }

  function triggerSection2Arrow() {
    if (objectSection2Arrow.current) {
      objectSection2Arrow.current.emitEvent("mouseDown");
      setTimeout(function () {
        setHtmlDot(DotEnum.SECTION3);
        setSectionName(section3Name);
      }, 2500);
    }
  }

  function triggerSection3Arrow() {
    if (objectSection3Arrow.current) {
      objectSection3Arrow.current.emitEvent("mouseDown");
      setTimeout(function () {
        setHtmlDot(DotEnum.SECTION4);
        setSectionName(section4Name);
      }, 2500);
    }
  }

  function triggerSection4Arrow() {
    if (objectSection4Arrow.current) {
      objectSection4Arrow.current.emitEvent("mouseDown");
      setTimeout(function () {
        setHtmlDot(DotEnum.HOME);
        setSectionName(homeName);
      }, 2500);
    }
  }

  function isBackgroundDark() {
    if (isHtmlDot == DotEnum.SECTION1 || isHtmlDot == DotEnum.SECTION3) {
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
    if (objectBackToSection1.current && !isLoading) {
      objectBackToSection1.current.emitEvent("mouseDown");
      setTimeout(function () {
        setHtmlDot(DotEnum.SECTION1);
        setSectionName(section1Name);
      }, 300);
    }
  }

  function backToSection2() {
    if (objectBackToSection2.current && !isLoading) {
      objectBackToSection2.current.emitEvent("mouseDown");
      setTimeout(function () {
        setHtmlDot(DotEnum.SECTION2);
        setSectionName(section2Name);
      }, 300);
    }
  }

  function backToSection3() {
    if (objectBackToSection3.current && !isLoading) {
      objectBackToSection3.current.emitEvent("mouseDown");
      setTimeout(function () {
        setHtmlDot(DotEnum.SECTION3);
        setSectionName(section3Name);
      }, 300);
    }
  }

  function backToSection4() {
    if (objectBackToSection4.current && !isLoading) {
      objectBackToSection4.current.emitEvent("mouseDown");
      setTimeout(function () {
        setHtmlDot(DotEnum.SECTION4);
        setSectionName(section4Name);
      }, 300);
    }
  }

  function backToHome() {
    if (objectBackToHome.current && !isLoading) {
      objectBackToHome.current.emitEvent("mouseDown");
      setTimeout(function () {
        setHtmlDot(DotEnum.HOME);
        setSectionName(homeName);
      }, 300);
    }
  }

  /*navigation section*/
  function navExperience() {
    setIsExperience(true);
    backToSection3();
    if (toggle2PageSection3.current)
      toggle2PageSection3.current.emitEvent("mouseDown");
  }

  function navTraining() {
    setIsExperience(false);
    backToSection3();
    if (toggle1PageSection3.current)
      toggle1PageSection3.current.emitEvent("mouseDown");
  }

  function togglePage() {
    if (toggle1PageSection3.current && toggle2PageSection3.current) {
      if (isExperience) toggle1PageSection3.current.emitEvent("mouseDown");
      else toggle2PageSection3.current.emitEvent("mouseDown");
      setIsExperience(!isExperience);
    }
  }

  function redirect(redirect: RedirectEnum, num: Number | null) {
    if (redirect == RedirectEnum.HOME) backToHome();
    else if (redirect == RedirectEnum.PRESENTATION) backToSection1();
    else if (redirect == RedirectEnum.COMPETENCES) backToSection1();
    else if (redirect == RedirectEnum.INTERETS) backToSection1();
    else if (redirect == RedirectEnum.PROJETS) {
      backToSection2();
      // else if(redirect == RedirectEnum.PROJETS){
      //   if (objectProject2Shortcut.current){
      //     objectProject2Shortcut.current.emitEvent('mouseDown');
      //   backToSection2();
      //   }
      // }
      if (objectProject1Shortcut.current && num == 1) {
        objectProject1Shortcut.current.emitEvent("mouseDown");
      } else if (objectProject2Shortcut.current && num == 2) {
        objectProject2Shortcut.current.emitEvent("mouseDown");
      } else if (objectProject3Shortcut.current && num == 3) {
        objectProject3Shortcut.current.emitEvent("mouseDown");
      } else if (objectProject4Shortcut.current && num == 4) {
        objectProject4Shortcut.current.emitEvent("mouseDown");
      }
    } else if (redirect == RedirectEnum.EXPERIENCES) navExperience();
    else if (redirect == RedirectEnum.FORMATIONS) navTraining();
    else if (redirect == RedirectEnum.CONTACTEZMOI) backToSection4();
  }

  /*Flash*/
  const [isFlashVisible, setIsFlashVisible] = useState(false);

  return (
    <div>
      {/* <ScreenInnerBorder/> */}
      <Toaster />
      <Flash isFlashVisible={isFlashVisible} />
      <Tooltip text={tooltipText} />
      <LoadingScreen isLoading={isLoading} startPage={startPage} />

      <Spline
        id="spline"
        onMouseDown={onMouseDown}
        onMouseHover={onMouseHover}
        onLoad={onLoad}
        className="fixed z-10"
        scene="https://prod.spline.design/ZpqWtq7yPEa8aAPJ/scene.splinecode"
      ></Spline>
      {/* {isHtmlDot == DotEnum.SECTION2 && (<FollowMouse sectionName={"SCROLL • SCROLL •"} isBackgroundDark={isBackgroundDark()} isHtmlDotSection1Or3={false}/>)} */}
      {/* <button className='absolute z-20 top-48' type="button" onClick={triggerAnimation}>
        Trigger Spline Animation
        </button> */}
      {/* {isPageOpened && ( */}
      <Navigation
        {...{
          htmlOutlineDot,
          htmlFullDot,
          backToSection1,
          backToSection2,
          backToSection3,
          backToSection4,
          togglePage,
          sectionName,
          trainingNumber,
          experienceNumber,
          triggerArrow,
          isExperience,
          isHtmlDot,
          projectNumber,
          backToHome,
          redirect,
        }}
        isBackgroundDark={isBackgroundDark()}
      ></Navigation>
      {/* )} */}
    </div>
  );
}
