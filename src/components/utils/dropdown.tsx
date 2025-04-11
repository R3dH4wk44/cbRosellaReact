import React, { useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from 'framer-motion'
import { FlyoutProps } from "@components/NavBar";
interface DropdownProps {
  children: React.ReactNode; // Contenido del Dropdown, como elementos <li> o anidaciones.
  href: string; // Opcional: enlace para el botón del Dropdown.
  Content?: React.ElementType;
  ContentProps?: FlyoutProps; // Contenido del botón o encabezado del Dropdown.
}

const Dropdown: React.FC<DropdownProps> = ({ children, href, Content, ContentProps }) => {
  const [open, setOpen] = useState(false);
  const showFlyout = open && Content;
  return (
    <div className=" group relative h-fit w-fit z-20"
      onMouseEnter={() => { setOpen(true); }}
      onMouseLeave={() => { setOpen(false); }}
    >
      <li className="relative text-zinc-800 dark:text-white text-xl">
        <Link to={href}>
        {children}
          <span style={{ transform: open ? "scaleX(1)" : "scaleX(0)" }} className=" absolute -bottom-2 -left-2 -right-2 h-1 origin-left  rounded-full bg-red-600 transition-transform duration-300 ease-out"   ></span>
        </Link>
      </li>

      <AnimatePresence>
      {showFlyout && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{opacity: 1, y: 0}}
          exit={{ opacity: 0, y: 20 }}
            style={{ translateX: "-50%  " }}
            transition={{duration: 0.3 , ease: "easeOut"}}
        className="absolute left-1/2 top-12 z-50">
        <div className=" absolute -top-6 left-0 right-0 h-6 bg-transparent"></div>
        <div className=" absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 dark:bg-zinc-800 bg-zinc-100 mb-5"></div>
            <Content {...ContentProps} />
          </motion.div>)}
        </AnimatePresence>  
     
    </div>
  );
};

export default Dropdown;


