import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LogoRosella from "@assets/logoRosella.png";

export default function NotFound() {
    return (
        <main className="mt-24 flex flex-col items-center justify-center px-10 lg:px-44 py-10 bg-white dark:bg-zinc-800 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-5"
            >
                <img src={LogoRosella} alt="Logo Rosella" className="w-24 h-24" />
                <h1 className="text-6xl font-bold text-red-600">404</h1>
                <p className="text-lg text-zinc-600 dark:text-zinc-300">
                    Ho sentim, la pàgina que cerques no existeix.
                </p>
                <Link
                    to="/"
                    className="px-5 py-2 mt-5 text-white bg-red-600 rounded-lg hover:scale-110 hover:bg-red-700 duration-300"
                >
                    Torna a l'inici
                </Link>
            </motion.div>
        </main>
    );
}
