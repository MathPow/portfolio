import React, { useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import GitHub from '@/img/gitHubLogo.png';
import WebIcon from '@/img/webIcon.png';
import '@/styles/globals.css';

interface ExperienceWindowProps {
    title: string;
    subtitle: string;
    date: string;
    page1Content: string;
    page2Content: string;
    webLink: string;
    logo: StaticImageData | null;
}

export default function ExperienceWindow({ title, subtitle, date, page1Content, page2Content, webLink, logo }: ExperienceWindowProps) {

    const [pageNumber, setPageNumber] = useState(1);

    function onWeb() {
        window.open(webLink, '_blank');
    }

  return ( 
    <section className='absolute z-20 top-[calc(2vw+130px)] w-[calc(60vw+100px)] left-[calc(10vw+10px)] mx-auto gap-12 pointer-events-none'>
        <div className={`flex flex-col blur-background ${pageNumber == 1 && page2Content != "" && "pr-0"} ${pageNumber == 2 && page2Content != "" && "pl-0"}`}>
            {pageNumber == 1 && (
                <>
                    <h3 className="flex items-center text-3xl font-bold mb-4 text-white">{title}{logo != null && (<Image className='ml-4 w-9' src={logo} alt={'Logo'}/>)}</h3>
                    {subtitle != "" && (
                        <h3 className="text-xl font-bold mb-4 text-gray-300">{subtitle}</h3>
                    )}
                    {date != "" && (
                        <h3 className="text-xl font-bold mb-4 text-gray-300">{date}</h3>
                    )}
                    <div className='text-lg text-gray-300' dangerouslySetInnerHTML={{ __html: page1Content }}/>
                    {webLink != "" && (
                        <svg className='fill-gray-300 w-8 mt-4 pointer-events-auto hover:cursor-pointer' onClick={onWeb} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" d="M8 3.517a1 1 0 011.62-.784l5.348 4.233a1 1 0 010 1.568l-5.347 4.233A1 1 0 018 11.983v-1.545c-.76-.043-1.484.003-2.254.218-.994.279-2.118.857-3.506 1.99a.993.993 0 01-1.129.096.962.962 0 01-.445-1.099c.415-1.5 1.425-3.141 2.808-4.412C4.69 6.114 6.244 5.241 8 5.042V3.517zm1.5 1.034v1.2a.75.75 0 01-.75.75c-1.586 0-3.066.738-4.261 1.835a8.996 8.996 0 00-1.635 2.014c.878-.552 1.695-.916 2.488-1.138 1.247-.35 2.377-.33 3.49-.207a.75.75 0 01.668.745v1.2l4.042-3.2L9.5 4.55z" clip-rule="evenodd"></path></g></svg>
                    )}
                    {page2Content != "" && (
                        <div className='flex pointer-events-auto hover:cursor-pointer m-3' onClick={() => setPageNumber(2)}>
                            <svg className={`w-8 fill-slate-700 hover:fill-slate-900 -rotate-90`} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path> </g></svg>
                        </div>
                    )}
                </>
            )}
            {pageNumber == 2 && (
                <>
                    <div className='flex pointer-events-auto hover:cursor-pointer m-3' onClick={() => setPageNumber(1)}>
                        <svg className={`w-8 fill-slate-700 hover:fill-slate-900 rotate-90`} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path> </g></svg>
                    </div>
                    <div className='flex flex-col w-full'>
                        <h3 className="text-3xl font-bold mb-4 text-black">{title}</h3>
                    </div>
                </>
            )}
        </div> 
    </section> 
  )
}