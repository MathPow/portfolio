import React, { useState, useEffect } from 'react';
import '@/styles/globals.css';

interface FlashProps {
  isFlashVisible: boolean;
}

export default function Flash({isFlashVisible} : FlashProps) {

  return(  
    <>
      {isFlashVisible && (
        <div className="absolute flash z-[51] h-[100%] w-[100%] bg-white"></div>
      )}
    </>
  );
};