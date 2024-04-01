import React from 'react';
import ExperienceWindow from './experienceWindow';
import '@/styles/globals.css';

interface TrainingProps {
    trainingNumber: number;
    togglePage: () => void;
}

export default function Training({trainingNumber, togglePage} : TrainingProps) {
  //&apos;

  return ( 
    <>
    <div className='absolute z-20 top-[calc(2vw+70px)] left-[calc(10vw+10px)] flex flex-row blur-background-min rounded-full' onClick={togglePage}>
        <div className='hover:cursor-pointer p-2 px-4 rounded-full text-gray-300'>
            Expériences
        </div>
        <div className='bg-slate-800 hover:cursor-pointer p-2 px-4 rounded-full text-gray-300'>
            Formations
        </div>
    </div>   
    {trainingNumber == 0 && (
        <section className=' absolute z-20 top-[calc(2vw+130px)] left-[calc(10vw+10px)] mx-auto gap-12 pointer-events-none'>
            <div className='flex flex-col blur-background items-center h-40'>
                <h3 className="text-2xl font-bold mb-4 text-gray-300">Appuyer sur un astéroide</h3>
                <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-300 w-16"  viewBox="0 0 24 24" stroke-width="2" fill='none' stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <line x1="3" y1="12" x2="6" y2="12" /> <line x1="12" y1="3" x2="12" y2="6" /> <line x1="7.8" y1="7.8" x2="5.6" y2="5.6" /> <line x1="16.2" y1="7.8" x2="18.4" y2="5.6" /> <line x1="7.8" y1="16.2" x2="5.6" y2="18.4" /> <path d="M12 12l9 3l-4 2l-2 4l-3 -9" /> </svg>
            </div> 
        </section>

    )}
    { trainingNumber == 1 && (
        <ExperienceWindow title={'Étude collégiale au Cégep de Sainte-Foy'} subtitle={''} date={'En cours...'} page1Content={'Technique en informatique'} page2Content={''} webLink={'https://www.csfoy.ca/programmes/tous-les-programmes/programmes-techniques/techniques-de-linformatique-programmation-web-mobile-et-jeux-video/'} logo={null}/>
    )}
    { trainingNumber == 2 && (
        <ExperienceWindow title={"Diplôme d’études secondaires"} subtitle={''} date={'2021'} page1Content={"L’École secondaire les Etchemins, Lévis"} page2Content={''} webLink={''} logo={null}/>
    )}
    { trainingNumber == 3 && (
        <ExperienceWindow title={"Entrain d'aquérir des formations"} subtitle={''} date={''} page1Content={""} page2Content={''} webLink={''} logo={null}/>
    )}
    { trainingNumber == 4 && (
        <ExperienceWindow title={"Entrain d'aquérir des formations"} subtitle={''} date={''} page1Content={""} page2Content={''} webLink={''} logo={null}/>
    )}
    { trainingNumber == 5 && (
        <ExperienceWindow title={"Entrain d'aquérir des formations"} subtitle={''} date={''} page1Content={""} page2Content={''} webLink={''} logo={null}/>
    )}
    { trainingNumber == 6 && (
        <ExperienceWindow title={"Entrain d'aquérir des formations"} subtitle={''} date={''} page1Content={""} page2Content={''} webLink={''} logo={null}/>
    )}
    { trainingNumber == 7 && (
        <ExperienceWindow title={"Entrain d'aquérir des formations"} subtitle={''} date={''} page1Content={""} page2Content={''} webLink={''} logo={null}/>
    )}
    </>
  )
}