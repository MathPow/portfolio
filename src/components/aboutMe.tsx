import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import HamburgerMenu from '@/components/hamburgerMenu';
import logo from '@/img/logo.svg'
import { Button } from '@/components/ui/button';
import '@/styles/globals.css';
import { isMobile } from 'react-device-detect';
import Socials from '@/components/socials';

export default function AboutMe() {
  const words = ['developpeur', 'étudiant', 'creator'];
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  /*useEffect(() => {
    let timeoutId:any;

    const type = () => {
      const currentWord = words[index];
      const speed = isDeleting ? 50 : 150;

      setDisplayedText((prevText) => {
        return isDeleting
          ? prevText.slice(0, -1)
          : currentWord.slice(0, prevText.length + 1);
      });

      const isFinished = isDeleting
        ? displayedText === ''
        : displayedText === currentWord;

      if (isFinished) {
        setIsDeleting(!isDeleting);
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
      }

      timeoutId = setTimeout(type, isFinished ? 1000 : speed);
    };

    type();

    return () => clearTimeout(setTimeout(type, timeoutId));
  }, [displayedText, index, isDeleting, words]);*/

  //${!isMobile ? "pointer-events-none" : "overflow-auto"}
  return ( 
    <section className={`flex flex-col justify-start absolute z-20 top-[calc(3vw+80px)] w-[calc(50vw+100px)] left-0 right-0 mx-auto gap-10 pointer-events-auto md:pointer-events-none pb-32`}>
        <div className='flex flex-col blur-background'>
            <h3 className="text-3xl font-bold mb-4 text-white">Enchanté, je suis Mathys</h3>
            {/* <p>I am a {displayedText}</p> */}
            <p className='text-lg text-gray-300'>Je suis un passionné par toutes les facettes de l&apos;informatique et
            de la gestion. J&apos;aime surtout innover dans le secteur du web et
            créer des expériences utilisateur fluides et fascinantes. Je me
            tiens à jour avec les nouvelles technologies et je n&apos;hésite pas à
            explorer de nouveaux concepts.</p>
            <Socials isWhite={true}/>
        </div> 
        <div className='flex md:flex-row flex-col gap-12 w-[calc(50vw+100px)]'>
          <div className='flex flex-col blur-background flex-1'>
              <h3 className="text-3xl font-bold mb-4 text-white">Mes compétences...</h3>
              <div className='grid grid-cols-2 gap-y-1'>
                <p className='text-lg text-gray-300'>JavaScript CSS HTML C++ C# Java MySQL Bash React Vue.js tailwindcss FireBase Git GitLab GitHub Canva Figma VSCode Dart Flutter DaisyUI Stencil.js Jira PHP Docker Unity</p>
              </div>
          </div>

          <div className='flex flex-col blur-background flex-1'>
              <h3 className="text-3xl font-bold mb-4 text-white">Mes intérêts...</h3>
              <div className='grid lg:grid-cols-2 gap-y-1 grid-cols-1'>
                  <p className='text-lg text-gray-300'>Technologie</p>
                  <p className='text-lg text-gray-300'>Programmation</p>
                  <p className='text-lg text-gray-300'>Design</p>
                  <p className='text-lg text-gray-300'>Finance</p>
                  <p className='text-lg text-gray-300'>Entreprenariat</p>
                  <p className='text-lg text-gray-300'>Ski</p>
                  <p className='text-lg text-gray-300'>Musculation</p>
                  <p className='text-lg text-gray-300'>Jeux de société</p>
              </div>
          </div>
        </div>
    </section>
  )
}