import React, { useState } from 'react';
import Image from 'next/image';
import LavageMR from '@/img/LavageMR.JPG';
import Portfolio from '@/img/Portfolio.JPG';
import ZombieTsunami from '@/img/ZombieTsunami.png';
import GitHub from '@/img/gitHubLogo.png';
import WebIcon from '@/img/webIcon.png';
import ProjectWindow from './projectWindow';
import { isMobile } from 'react-device-detect';
import '@/styles/globals.css';
import { RedirectEnum } from './redirectEnum';

interface ProjectsProps {
    projectNumber: number;
    redirect: (redirect: RedirectEnum, number: Number | null) => void;
}

export default function Projects({ projectNumber, redirect }: ProjectsProps) {
    const [projectSequence, setProjectSequence] = useState(0);

    function onWebPortfolio() {
        window.open('https://portfolio-5b1a2.web.app/', '_blank');
    }
    function onGitHubPortfolio() {
        window.open('https://github.com/MathPow/portfolio', '_blank');
    }

    function onWebZombieTsunami() {
        window.open('https://mathpow.itch.io/zombie-tsunami', '_blank');
    }
    function onGitHubZombieTsunami() {
        window.open('https://github.com/MathPow/ZombieTsunami', '_blank');
    }

    function onWebLavageMR() {
        window.open('https://lavagemr.com/', '_blank');
    }

    function onWebChercheEtResous() {
        window.open('https://www.linkedin.com/in/mathys-deshaies/', '_blank');
    }
    
    let page1Portfolio = "<div>"
    page1Portfolio += "<p>Ce portfolio sert d'endroit reflètant ma personnalité à travers un projet afin de mettre de l'avant mon style de travail et ainsi susciter l'intérêts. Ensuite, ce projet me permet d'afficher mes projets et mes futures réalisations pour montrer une progression au fil du temps. Finalement, j'espère aussi que ceci m'aide dans la recherche d'opportunités professionnelles.</p>"
    page1Portfolio += "</div>"

    let page2Portfolio = "<div>"
    page2Portfolio += "<h4>Objectif du projet  :</h4>"
    page2Portfolio += "<p>De présenter de manière professionnelle et organisée mes compétences, réalisations, et expériences. Il était dans mes intérêts de créer un image professielle afin d'afficher mon amour pour la création d'expérience utilisateur original et de montrer que je prends au sérieux ma carrière professionnel.</p>"
    page2Portfolio += "<h4>Technologies utilisées :</h4>"
    page2Portfolio += "<p></p>"
    page2Portfolio += "<h4>Apprentissages :</h4>"
    page2Portfolio += "<p>• Spline</p>"
    page2Portfolio += "</div>"
    const descriptionZombieTsunami = "<div><p className='text-lg text-gray-800'>Je souhaite avoir un endroit qui reflète ma personnalité afin d'afficher mes projets et mes futures réalisations...</p></div>";
    const descriptionLavageMR = "<div><p className='text-lg text-gray-800'>Je souhaite avoir un endroit qui reflète ma personnalité afin d'afficher mes projets et mes futures réalisations...</p></div>";
    const descriptionChercheEtResous= "<div><p className='text-lg text-gray-800'>Je souhaite avoir un endroit qui reflète ma personnalité afin d'afficher mes projets et mes futures réalisations...</p></div>";

    function onBack(){
        redirect(RedirectEnum.PROJETS, 1);
        setProjectSequence(projectSequence - 1);
    }

    function onForward(){
        redirect(RedirectEnum.PROJETS, 1);
        setProjectSequence(projectSequence + 1);
    }

    return ( 
    <>
    {/* {isMobile && ( */}
        <>
            <svg className='fixed w-14 z-50 top-[calc(50%+100px)] left-0 sm:left-[calc(5vw-13px)] hover:cursor-pointer pointer-events-auto' onClick={onForward} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/>
                <path d="M13.293 7.293 8.586 12l4.707 4.707 1.414-1.414L11.414 12l3.293-3.293-1.414-1.414z"/>
            </svg>
            <svg className='fixed w-14 z-50 top-[calc(50%+100px)] right-0 sm:right-[calc(5vw-13px)] hover:cursor-pointer pointer-events-auto rotate-180' onClick={onBack} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/>
                <path d="M13.293 7.293 8.586 12l4.707 4.707 1.414-1.414L11.414 12l3.293-3.293-1.414-1.414z"/>
            </svg>
        </>
    {/* )} */}
    {projectNumber == 1 && (
        <ProjectWindow title={'Portfolio'} subtitle={'Date de déploiement : Janvier 2024'} webLink={'https://portfolio-5b1a2.web.app/'} gitHubLink={'https://github.com/MathPow/portfolio'} picture={Portfolio} page1Content={page1Portfolio} page2Content={page2Portfolio}/>
    )}
    {projectNumber == 2 && (
        <ProjectWindow title={'Zombie Tsunami'} subtitle={'Date de livraison : Décembre 2023'} webLink={'https://portfolio-5b1a2.web.app/'} gitHubLink={'https://github.com/MathPow/portfolio'} picture={ZombieTsunami} page1Content={page1Portfolio} page2Content={""}/>
    )}
    {projectNumber == 3 && (
        <section className='flex flex-col justify-start absolute z-20 top-[15vh] w-[60vw] left-0 right-0 mx-auto gap-12 pointer-events-none'>
            <div className='flex flex-col blur-background-lisable'>
                <h3 className="text-3xl font-bold mb-4 text-black">LavageMR</h3>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Date de livraison : Juin 2023</h3>
                <div>
                    <p className='text-lg text-gray-800'>Je suis un passionné par toutes les facettes de l&apos;informatique et
                    de la gestion. J&apos;aime surtout innover dans le secteur du web et
                    créer des expériences utilisateur fluides et fascinantes. Je me
                    tiens à jour avec les nouvelles technologies et je n&apos;hésite pas à
                    explorer de nouveaux concepts. wqqqqqqqqqqqqqqqqqqqqqqqqq qwqw qwqwqw q wqw qw qw qw qw qw qw qw qw qw qw qw qw qwqw qw qw</p>
                    <Image className='w-96 float-right rounded-xl' src={LavageMR} alt={'LavageMR'}/>
                </div>
            </div> 
        </section> 
    )}
    {projectNumber == 4 && (
        <section className='flex flex-col justify-start absolute z-20 top-[15vh] w-[60vw] left-0 right-0 mx-auto gap-12 pointer-events-none'>
            <div className='flex flex-col blur-background-lisable'>
                <h3 className="text-3xl font-bold mb-4 text-black">Cherche et résous</h3>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Date de livraison : </h3>
                
            </div> 
        </section> 
    )}
    {projectNumber == 5 && (
        <section className='flex flex-col justify-start absolute z-20 top-[15vh] w-[60vw] left-0 right-0 mx-auto gap-12 pointer-events-none'>
            <div className='flex flex-col blur-background-lisable'>
                <h3 className="text-3xl font-bold mb-4 text-black">bla bla 5</h3>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Date de livraison : </h3>    
            </div> 
        </section> 
    )}
    </>
  )
}