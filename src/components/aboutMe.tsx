import React from 'react';
import Image from 'next/image';
import HamburgerMenu from '@/components/hamburgerMenu';
import logo from '@/img/logo.svg'
import { Button } from '@/components/ui/button';
import '@/styles/globals.css';

export default function AboutMe() {

  return ( 
    <section className='flex flex-col justify-start absolute z-20 top-[25vh] w-[60vw] left-0 right-0 mx-auto gap-12'>
        <div className='flex flex-col blur-background'>
            <h3 className="text-3xl font-bold mb-4 text-white">Enchanté, je suis Mathys</h3>
            <p className='text-lg text-gray-300'>Je suis un passionné par toutes les facettes de l'informatique et
            de la gestion. J'aime surtout innover dans le secteur du web et
            créer des expériences utilisateur fluides et fascinantes. Je me
            tiens à jour avec les nouvelles technologies et je n'hésite pas à
            explorer de nouveaux concepts.</p>
        </div> 
        <div className='flex flex-col blur-background w-[45vw]'>
            <h3 className="text-3xl font-bold mb-4 text-white">Mes intérêts...</h3>
            <div className='grid grid-cols-2 gap-y-1'>
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
    </section>
  )
}