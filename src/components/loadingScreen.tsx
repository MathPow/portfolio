import React, { useState, useEffect } from 'react';
import { Separator } from "@/components/ui/separator"
import '@/styles/globals.css';

interface LoadingScreenProps {
  isLoading: boolean;
  startPage: () => void;
}

export default function LoadingScreen({isLoading, startPage} : LoadingScreenProps) {

  return(  
    <div className="min-h-screen w-screen flex items-center justify-center flex-row absolute z-0">
      {isLoading ? (
        <>
          <div className=''>
            {/* <Image src={loading} alt="logo" className='w-32'/> */}
            <p className='text-xl text-gray-300 mt-96 animate-pulse text-center'>Chargement...</p>
            {/* loading animation */}
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
        </>
      ) : (
        <div className='absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 flex flex-col justify-center items-center'>
          <h1 className='text-slate-100 font-extrabold tracking-widest text-2xl md:text-4xl text-center mb-12 gradient-text'>Bienvenue dans le monde de<br/>Mathys Deshaies</h1>
          <><button onClick={startPage} className="btn btn-gradient-border btn-glow">Venez visitez!</button></>
        </div>
      )}
      
      <Separator orientation="vertical" />
      <div>
        
      </div>
    </div>
  );
};