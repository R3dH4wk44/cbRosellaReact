import useTitle from "@hooks/useTitle";
import Portada from "@components/inici/portada";
import { motion } from "framer-motion";
import LogoRosella from "@assets/logoRosella.png";
import PartitDeLaJornada from "@components/inici/partitDeLaJornada";
import Presentacio from '@assets/presentacio_2024.webp'
import { Link } from "react-router-dom";
import NewsCarousel from "@components/inici/NewsCarrusel";
import Footer from "@components/Footer";
export default function Inici() {
    useTitle({ title: "Inici" });

    return (
        <>
            <main className="mt-24">            
                <Portada />
                <PartitDeLaJornada equip="Mini Masulí Vermell" visitant="Cerdanyola al día b" data="Dissabte 18 de setembre" hora="10:00" logoVisitant={LogoRosella} linkfede="https://www.basquetcatala.cat/partits/llistatpartits/34956" />
                <section className="relative flex flex-wrap lg:flex-nowrap justify-center items-center px-10 lg:px-44 py-10 bg-white dark:bg-zinc-800">
                    <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 flex flex-col gap-2">
                        <h2 className="text-4xl font-bold text-zinc-800 dark:text-white mb-6">Qui Som?</h2>
                        <p className="text-lg font-light text-zinc-600 dark:text-zinc-300 leading-relaxed">
                            L&#39;any 2015 neix el Club Bàsquet Rosella derivat de la desvinculació amb l&#39;escola Rosella. Som un petit club de poble amb el clar objectiu d&#39;ensenyar el bàsquet i tots els valors que l&#39;envolten. Estem a Viladecavalls i a Vacarisses amb equips des de Baby (P4-P5) fins a Cadet (3r-4t ESO).
                        </p>
                        <div className="flex justify-center lg:justify-start gap-5 mt-5">
                            <Link to="/qui-som" className="px-5 w-fit py-2 duration-300 text-white bg-red-600 rounded-lg hover:scale-110 hover:bg-red-700">Més informació</Link>
                            <a href="https://www.basquetcatala.cat/club/3084" target="_blank" className="px-5 w-fit py-2 duration-300 text-white bg-red-700 rounded-lg hover:scale-110 hover:bg-red-800">Pàgina de la FCBQ </a>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <div className="relative group">
                            <img 
                                src={Presentacio} 
                                alt="Presentació 2024" 
                                className="w-96 h-96 rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-50 rounded-lg transition-opacity duration-300"></div>
                        </div>
                    </div>
                </section>
                <section className="relative flex flex-col flex-wrap lg:flex-nowrap justify-center items-center px-10 lg:px-44 py-10 bg-white bg-gradient-to-br dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-800">
                    <h2 className="text-3xl ">Últimes <span className="text-red-600">Notícies</span></h2>
                    <NewsCarousel />
                </section>

            </main>
            <Footer/>
        </>
    );
}
