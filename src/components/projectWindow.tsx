import React, { useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import GitHub from '@/img/gitHubLogo.png';
import WebIcon from '@/img/webIcon.png';
import { isMobile } from 'react-device-detect';
import '@/styles/globals.css';

interface ProjectWindowProps {
    title: string;
    subtitle: string;
    page1Content: string;
    page2Content: string;
    webLink: string;
    gitHubLink: string;
    picture: StaticImageData | null ;
}

export default function ProjectWindow({ title, subtitle, page1Content, page2Content, webLink, gitHubLink, picture }: ProjectWindowProps) {

    const [pageNumber, setPageNumber] = useState(1);

    function onGitHub() {
        window.open(gitHubLink, '_blank');
    }

    function onWeb() {
        window.open(webLink, '_blank');
    }

  return ( 
    <section id="testid" className='flex flex-col gap-4 justify-start absolute z-20 top-[calc(3vw+80px)] w-[calc(50vw+100px)] left-0 right-0 mx-auto pointer-events-none pb-32'>
            {(pageNumber == 1 || window.innerWidth < 768) && (
                <div className={`flex flex-row  blur-background-lisable ${window.innerWidth >= 768 && "p-6"} ${window.innerWidth >= 768 && "px-14"} ${pageNumber == 1 && page2Content != "" && window.innerWidth >= 768 && "pr-0"} ${pageNumber == 2 && page2Content && window.innerWidth >= 768 && "pl-0"} ${window.innerWidth < 768 && "p-4"}`}>
                    <div className='flex flex-col w-full'>
                        <h3 className="text-3xl font-bold mb-4 text-black">{title}</h3>
                        <h3 className="text-xl font-bold mb-4 text-gray-800">{subtitle}</h3>
                        <div className='flex flex-col'>
                            <div>
                                <div className='text-slate-800 text-lg' dangerouslySetInnerHTML={{ __html: page1Content }} />
                                {picture != null && (
                                    <>
                                        <Image className='w-96 float-right rounded-xl' src={picture} alt={'Project picture'}/>
                                    </>
                                )}
                            </div>
                            <div className='flex pt-4 items-center mt-auto justify-between'>
                                <div className='flex gap-4'>
                                    {gitHubLink != "" && (
                                        <>
                                            <Image onClick={onGitHub} className='w-8 pointer-events-auto hover:cursor-pointer' src={GitHub} alt={'GitHub'}/>
                                        </>
                                    )}
                                    {webLink != "" && (
                                        <>
                                            <Image onClick={onWeb} className='w-8 pointer-events-auto hover:cursor-pointer' src={WebIcon} alt={'WebIcon'}/>
                                        </>
                                    )}
                                </div>
                                <p className='font-bold text-lg'>{pageNumber}</p>
                            </div>
                        </div>
                    </div>
                    {(page2Content != "" && window.innerWidth >= 768) && (
                        <div className='flex pointer-events-auto hover:cursor-pointer m-3' onClick={() => setPageNumber(2)}>
                            <svg className={`w-8 fill-slate-700 hover:fill-slate-900 -rotate-90`} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path> </g></svg>
                        </div>
                    )}
                </div>
            )}
            {(pageNumber === 2 || window.innerWidth < 768) && (
                <div className={`flex flex-row  blur-background-lisable p-6 px-14 ${pageNumber == 1 && page2Content != "" && "pr-0"} ${pageNumber == 2 && page2Content && "pl-0"}`}>
                    {window.innerWidth >= 768 && (
                        <div className='flex pointer-events-auto hover:cursor-pointer m-3' onClick={() => setPageNumber(1)}>
                            <svg className={`w-8 fill-slate-700 hover:fill-slate-900 rotate-90`} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path> </g></svg>
                        </div>
                    )}
                    <div className='flex flex-col w-full'>
                        <h3 className="text-3xl font-bold mb-4 text-black">{title}</h3>
                        <div>
                            <div className='text-slate-800 text-lg' dangerouslySetInnerHTML={{ __html: page2Content }} />
                        </div>
                        <div className='flex pt-4 items-center mt-auto justify-between'>
                                <div className='flex gap-4'>
                                    {gitHubLink != "" && (
                                        <>
                                            <Image onClick={onGitHub} className='w-8 pointer-events-auto hover:cursor-pointer' src={GitHub} alt={'GitHub'}/>
                                        </>
                                    )}
                                    {webLink != "" && (
                                        <>
                                            <Image onClick={onWeb} className='w-8 pointer-events-auto hover:cursor-pointer' src={WebIcon} alt={'WebIcon'}/>
                                        </>
                                    )}
                                </div>
                                <p className='font-bold text-lg'>{pageNumber}</p>
                            </div>
                    </div>
                </div>
            )}
    </section> 
  )
}