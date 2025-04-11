import LogoRosella from '@assets/logoRosella.png';
import React from 'react';

export interface PartitDeLaJornadaProps {
    equip: string;
    visitant: string;
    data: string;
    hora: string;
    logoVisitant: string;
    linkfede: string;
}

const PartitDeLaJornada:React.FC<PartitDeLaJornadaProps> = ({equip, visitant, data, hora, logoVisitant, linkfede}) => {

    return (
        <section className="relative h-fit py-5 flex justify-center items-center bg-zinc-800 dark:bg-zinc-200 gap-10 text-white dark:text-zinc-800 align-center px-2">
            <div className="text-lg flex flex-col items-center gap-2 justify-center text-center">
                <img src={LogoRosella} alt="Logo del cb Rosella" height={75} width={75} />
                {equip}
            </div>
                <div className="flex flex-col items-center gap-2 justify-center text-center">
                    <a href={linkfede} target='_blank'><h2 className="text-xl font-bold hover:text-red-600 scale-110 duration-300">Partit de la Jornada</h2></a>
                    <p className="text-md font-light">{data}</p>
                    <p className="text-red-600">{hora}</p>
                    <p>vs.</p>
                </div>
                <div className="text-lg flex flex-col items-center gap-2 justify-center text-center">
                    <img src={logoVisitant} alt="Logo del cb Rosella" height={75} width={75} />
                    {visitant}

                </div>
        </section>
    )
}

export default PartitDeLaJornada;