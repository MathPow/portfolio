import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Socials from '@/components/socials';
import '@/styles/globals.css';
import { RedirectEnum } from './redirectEnum';
import { Button } from './ui/button';

interface RightDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  redirect: (redirect: RedirectEnum, number: Number | null) => void;
  downloadPdf: () => void;
}

const RightDrawer: React.FC<RightDrawerProps> = ({ isOpen, onClose, redirect, downloadPdf}) => {

  function redirectToSection(redirectEnumValue: RedirectEnum, number: Number | null){
    onClose()
    redirect(redirectEnumValue, number);
    window.scrollTo(0, 500);
  }

  return (
    <div className={`side-drawer ${isOpen ? 'open' : ''}`}>
      <div className="overlay" onClick={onClose}></div>
      <div className="drawer-content flex flex-col gap-y-1 p-4 md:w-[300px] w-[250px] overflow-y-scroll">
        <button className='w-6 pb-6' onClick={onClose}><svg id="Layer_1" version="1.1" viewBox="0 0 512 512"xmlns="http://www.w3.org/2000/svg"><path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/></svg></button>
        <Button className={`md:hidden rounded-xl text-black button mb-6`} onClick={downloadPdf}>Télécharger le CV</Button>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <h3 className='text-xl text-black font-bold underline'>Sections</h3>
            <AccordionTrigger>Section 1</AccordionTrigger>
            <AccordionContent>
              <p onClick={() => redirectToSection(RedirectEnum.PRESENTATION, null)} className='text-lg text-gray-800 hover:cursor-pointer rounded-full hover:bg-slate-200 p-1 pl-4'>Présentation</p>
              <p onClick={() => redirectToSection(RedirectEnum.COMPETENCES, null)} className='text-lg text-gray-800 hover:cursor-pointer rounded-full hover:bg-slate-200 p-1 pl-4'>Compétences</p>
              <p onClick={() => redirectToSection(RedirectEnum.INTERETS, null)} className='text-lg text-gray-800 hover:cursor-pointer rounded-full hover:bg-slate-200 p-1 pl-4'>Intérêts</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Section 2</AccordionTrigger>
            <AccordionContent>
            <p onClick={() => redirectToSection(RedirectEnum.PROJETS, null)} className='text-lg text-gray-800 hover:cursor-pointer rounded-full hover:bg-slate-200 p-1 pl-4'>Projets</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Section 3</AccordionTrigger>
            <AccordionContent>
              <p onClick={() => redirectToSection(RedirectEnum.EXPERIENCES, null)} className='text-lg text-gray-800 hover:cursor-pointer rounded-full hover:bg-slate-200 p-1 pl-4'>Expériences</p>
              <p onClick={() => redirectToSection(RedirectEnum.FORMATIONS, null)} className='text-lg text-gray-800 hover:cursor-pointer rounded-full hover:bg-slate-200 p-1 pl-4'>Formations</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Section 4</AccordionTrigger>
            <AccordionContent>
            <p onClick={() => redirectToSection(RedirectEnum.CONTACTEZMOI, null)} className='text-lg text-gray-800 hover:cursor-pointer rounded-full hover:bg-slate-200 p-1 pl-4'>Contactez-moi</p>
            </AccordionContent>
          </AccordionItem>
          <h3 className='text-xl text-black font-bold underline mt-6'>Racourcis</h3>
          <AccordionItem value="item-5">
            <AccordionTrigger>Projets</AccordionTrigger>
            <AccordionContent>
            <p onClick={() => redirectToSection(RedirectEnum.PROJETS, 1)} className='text-lg text-gray-800 hover:cursor-pointer rounded-full hover:bg-slate-200 p-1 pl-4'>🖥️ Portfolio</p>
            <p onClick={() => redirectToSection(RedirectEnum.PROJETS, 2)} className='text-lg text-gray-800 hover:cursor-pointer rounded-full hover:bg-slate-200 p-1 pl-4'>🎮 Zombie Tsunami</p>
            <p onClick={() => redirectToSection(RedirectEnum.PROJETS, 3)} className='text-lg text-gray-800 hover:cursor-pointer rounded-full hover:bg-slate-200 p-1 pl-4'>🖥️ LavageMR</p>
            <p onClick={() => redirectToSection(RedirectEnum.PROJETS, 4)} className='text-lg text-gray-800 hover:cursor-pointer rounded-full hover:bg-slate-200 p-1 pl-4'>🖥️ Cherche et résous</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Expériences</AccordionTrigger>
            <AccordionContent>
            <p onClick={() => redirectToSection(RedirectEnum.EXPERIENCES, 1)} className='text-lg text-gray-800 hover:cursor-pointer rounded-full hover:bg-slate-200 p-1 pl-4'>💼 Développeur front-end</p>
            <p onClick={() => redirectToSection(RedirectEnum.EXPERIENCES, 2)} className='text-lg text-gray-800 hover:cursor-pointer rounded-full hover:bg-slate-200 p-1 pl-4'>💼 Soutien technique</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Formations</AccordionTrigger>
            <AccordionContent>
            <p onClick={() => redirectToSection(RedirectEnum.FORMATIONS, 1)} className='text-lg text-gray-800 hover:cursor-pointer rounded-full hover:bg-slate-200 p-1 pl-4'>📚 Étude collégiale au Cégep de Sainte-Foy</p>
            <p onClick={() => redirectToSection(RedirectEnum.FORMATIONS, 2)} className='text-lg text-gray-800 hover:cursor-pointer rounded-full hover:bg-slate-200 p-1 pl-4'>📚 Diplôme d’études secondaires</p>
            <p onClick={() => redirectToSection(RedirectEnum.FORMATIONS, 3)} className='text-lg text-gray-800 hover:cursor-pointer rounded-full hover:bg-slate-200 p-1 pl-4'>📝 PSM</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className='py-4 mt-auto'>
          <Socials isWhite={false}/>
        </div>
      </div>
    </div>
  );
};

export default RightDrawer;
