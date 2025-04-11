import { Link } from "react-router";
import LogoRosella from "@assets/logoRosella.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white py-10 mt-10 shadow-xl">
      <div className="container mx-auto flex flex-col items-center justify-between px-6 md:flex-row">
        {/* Logo y nombre */}
        <div className="flex items-center gap-4 mb-6 md:mb-0">
          <img src={LogoRosella} alt="Logo del C.B Rosella" width={60} height={60} />
          <p className="text-lg font-bold">C.B Rosella</p>
        </div>

        {/* Links de navegación */}
        <nav className="flex flex-wrap justify-center gap-5 text-sm md:text-base">
          <Link to="/qui-som" className="hover:text-red-600">
            Qui Som?
          </Link>
          <Link to="/equips" className="hover:text-red-600">
            Equips
          </Link>
          <Link to="/noticies" className="hover:text-red-600">
            Noticies
          </Link>
          <Link to="/resultats" className="hover:text-red-600">
            Resultats
          </Link>
          <Link to="/contacte" className="hover:text-red-600">
            Contacte
          </Link>
        </nav>

        {/* Redes sociales */}
        <div className="flex gap-4 mt-6 md:mt-0">
          <a href="#" className="text-xl hover:text-red-600">
            <FaFacebook />
          </a>
          <a href="#" className="text-xl hover:text-red-600">
            <FaInstagram />
          </a>
          <a href="#" className="text-xl hover:text-red-600">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Club de Bàsquet Rosella. Tots els drets reservats.
      </div>
    </footer>
  );
}
