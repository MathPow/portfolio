import React from 'react';
import Image from 'next/image';
import DesjardinsLogo from '@/img/desjardinsLogo.png';
import ExperienceWindow from './experienceWindow';
import '@/styles/globals.css';

interface ExperiencesProps {
    experienceNumber: number;
    togglePage: () => void;
}

export default function Experiences({experienceNumber, togglePage} : ExperiencesProps) {
  //&apos;

  let page1DevFrontEnd = "<p className='text-lg text-gray-300'>- Résoudre des problèmes de programmation de manière efficace.</p>"
  page1DevFrontEnd += "<p className='text-lg text-gray-300'>- Travailler avec des designers pour bâtir une librairie de composants réutilisables pour les développeurs.</p>"
  page1DevFrontEnd += "<p className='text-lg text-gray-300'>- HTML, SCSS, TypeScript, Angular, Stencil.js, Git, GitHub</p>"

  let page2Support = "<p className='text-lg text-gray-300'>- Installer et remplacer les postes pour les employés Desjardins</p>"
  page2Support += "<p className='text-lg text-gray-300'>- Assurer un assistance technique aux employés.</p>"

  return ( 
    <>
    <div className='absolute z-20 top-[calc(2vw+70px)] left-[calc(10vw+10px)] flex flex-row blur-background-min rounded-full' onClick={togglePage}>
        <div className=' bg-slate-800 hover:cursor-pointer p-2 px-4 rounded-full text-gray-300'>
            Expériences
        </div>
        <div className='hover:cursor-pointer p-2 px-4 rounded-full text-gray-300'>
            Formations
        </div>
    </div>   
    {experienceNumber == 0 && (
        <section className=' absolute z-20 top-[calc(2vw+130px)] left-[calc(10vw+10px)] mx-auto gap-12 pointer-events-none'>
            <div className='flex flex-col blur-background items-center h-40'>
                <h3 className="text-2xl font-bold mb-4 text-gray-300">Appuyer sur un astéroide</h3>
                <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-300 w-16"  viewBox="0 0 24 24" stroke-width="2" fill='none' stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <line x1="3" y1="12" x2="6" y2="12" /> <line x1="12" y1="3" x2="12" y2="6" /> <line x1="7.8" y1="7.8" x2="5.6" y2="5.6" /> <line x1="16.2" y1="7.8" x2="18.4" y2="5.6" /> <line x1="7.8" y1="16.2" x2="5.6" y2="18.4" /> <path d="M12 12l9 3l-4 2l-2 4l-3 -9" /> </svg>
            </div> 
        </section>
    )}
    {experienceNumber == 1 && (
        <ExperienceWindow title={'Développeur front-end'} subtitle={'Stage chez Desjardins'} date={'Été 2023'} page1Content={page1DevFrontEnd} page2Content={''} webLink={''} logo={DesjardinsLogo}/>
    )}
    {experienceNumber == 2 && (
        <ExperienceWindow title={'Soutien technique'} subtitle={'Stage chez Desjardins'} date={'Été 2022'} page1Content={page2Support} page2Content={''} webLink={''} logo={DesjardinsLogo}/>
    )}
    {experienceNumber == 3 && (
        <ExperienceWindow title={"Entrain d'aquérir des connaissances"} subtitle={''} date={''} page1Content={""} page2Content={''} webLink={''} logo={null}/>
    )}
    {experienceNumber == 4 && (
        <ExperienceWindow title={"Entrain d'aquérir des connaissances"} subtitle={''} date={''} page1Content={""} page2Content={''} webLink={''} logo={null}/>
    )}
    {experienceNumber == 5 && (
        <ExperienceWindow title={"Entrain d'aquérir des connaissances"} subtitle={''} date={''} page1Content={""} page2Content={''} webLink={''} logo={null}/>
    )}
    {experienceNumber == 6 && (
        <ExperienceWindow title={"Entrain d'aquérir des connaissances"} subtitle={''} date={''} page1Content={""} page2Content={''} webLink={''} logo={null}/>
    )}
    {experienceNumber == 7 && (
        <ExperienceWindow title={"Entrain d'aquérir des connaissances"} subtitle={''} date={''} page1Content={""} page2Content={''} webLink={''} logo={null}/>
    )}
    </>
  )
}