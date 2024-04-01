import React, { useState, useEffect } from 'react';
import '@/styles/globals.css';

export default function ScreenInnerBorder() {

  return(  
    <>
      <div className='absolute h-[calc(100%-1.5vw)] w-[calc(100%-1.5vw)] outline outline-[20px] outline-slate-300 m-2 rounded-2xl'></div>
      <div className='absolute right-0 bottom-0 h-[calc(100%-1.5vw)] w-[calc(100%-1.5vw)] outline outline-[20px] outline-slate-300 m-2 rounded-2xl'></div>
      <div className='absolute right-0 top-0 h-[calc(100%-1.5vw)] w-[calc(100%-1.5vw)] outline outline-[20px] outline-slate-300 m-2 rounded-2xl'></div>
      <div className='absolute left-0 bottom-0 h-[calc(100%-1.5vw)] w-[calc(100%-1.5vw)] outline outline-[20px] outline-slate-300 m-2 rounded-2xl'></div>
    </>
  );
};