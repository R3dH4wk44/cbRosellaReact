import React from 'react'
import { motion } from 'framer-motion'
import PortadaImg from '@assets/portada.webp'
const Portada = () => {

    return (
        <div
        className="relative w-full h-[calc(100vh-96px)] bg-cover bg-fixed bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${PortadaImg}')` }}
    >
        {/* Overlay with animation */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"
        />

        {/* Content Container */}
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-6"
        >
            {/* Glassmorphism Card */}
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="backdrop-blur-md bg-white/10 p-8 rounded-3xl flex flex-col items-center justify-center gap-4 w-4/5 md:w-2/3 lg:w-1/3"
            >
                <motion.h1
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.3,
                        ease: "easeOut",
                    }}
                    className="text-2xl md:text-5xl lg:text-6xl text-white font-extrabold text-center"
                >
                    Benvinguts al C.B Rosella
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-xl lg:text-3xl font-medium text-white font-serif text-center"
                >
                    #123 TEAM!
                </motion.p>
            </motion.div>
        </motion.div>
        </div>
    )
}


export default Portada;