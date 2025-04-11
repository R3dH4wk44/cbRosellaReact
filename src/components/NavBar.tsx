import Dropdown from "@components/utils/dropdown"
import { Link } from "react-router"
import LogoRosella from '@assets/logoRosella.png'
import { useState, useRef, useEffect } from "react"

const quiSomItems = 
        [
            {
                title: "Presentacio",
                link: "/qui-som#presentacio"
            },
            {
                title: "Equip Tècnic",
                link: "/qui-som#equiptecnic"
            },
            {
                title: "Instal·lacions",
                link: "/qui-som#instalacions"
            },                        
        ]
        
    const equipsItems = [
        {
            title: "Sènior Masculí",
            link: "/equips/senior-masculi"
        }
    ]
export default function NavBar() {
    
    
    return (
        
        <header className="z-10 h-24 top-0 fixed bg-white dark:bg-zinc-900 w-full shadow-xl flex justify-between px-5 items-center">
                <Link to={'/'} className=" text-xl text-zinc-800 dark:text-white flex gap-4 items-center"><img src={LogoRosella} alt="Logo del Cb Rosella" height={75} width={75}></img><p className="text-2xl  font-bold hover:text-red-600 hidden lg:block">C.B Rosella</p></Link>
                <ul className=" dropdown-menu gap-5 justify-center items-center hidden lg:flex">
                <Dropdown href="#" Content={FlyOut} ContentProps={{items: quiSomItems}}>
                    Qui Som? &#9662;
                </Dropdown>
                <Dropdown href="#" Content={FlyOut} ContentProps={{ items: equipsItems}}>
                    Equips &#9662;
                </Dropdown>
                <Dropdown href={"/noticies"} >
                    Noticies
                </Dropdown>
                <Dropdown href={"/resultats"} >
                    Resultats
                </Dropdown>
                <Dropdown href={"/3x3"} >
                    3x3
                </Dropdown>
                <Dropdown href={"/campus"} >
                    Campus
                </Dropdown>
                <Dropdown href={"/contacte"} >
                    Contacte
                </Dropdown>
            </ul>
            <HamburgerMenu />
            <div><Link to='/tenda' className="text-lg text-white bg-red-600 px-5 py-2 rounded-lg hover:bg-red-700 hover:scale-110">Tenda</Link></div>
        </header>
        
    )
}


// Flyout Dropdown Component
export interface FlyoutProps{
    items: Array<{ title: string, link: string }>  // Array of Dropdown Items
}
    const FlyOut:React.FC<FlyoutProps> = ({ items })  =>{
    return (
        <div className=" h-fit w-40 dark:bg-zinc-800 z-50 text-zinc-800 dark:text-white bg-zinc-100 rounded-xl overflow-hidden shadow-lg">
            <ul className=" list-none flex flex-col gap-2 ">
                    {items.map((item) => (
                        <li key={item.title} className=" hover:bg-gray-200 dark:hover:bg-gray-700 p-2">
                        <Link to={item.link}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}



export const HamburgerMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // Close menu on clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Dynamically calculate classes
  const menuClasses = `fixed top-0 right-0 w-3/4 max-w-screen-sm  h-full bg-white dark:bg-zinc-900 flex flex-col gap-5 items-center justify-center transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`;

  return (
    <div className="relative lg:hidden z-5" ref={menuRef}>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="text-2xl text-zinc-800 dark:text-white focus:outline-none "
        aria-label="Toggle menu"
      >
        &#9776;
      </button>

      {/* Menu */}
      <ul className={menuClasses}>
        <Dropdown href="/qui-som">
          Qui Som? 
        </Dropdown>
        <Dropdown href="/equips" >
          Equips 
        </Dropdown>
        <Dropdown href="/noticies">Noticies</Dropdown>
        <Dropdown href="/resultats">Resultats</Dropdown>
        <Dropdown href="/3x3">3x3</Dropdown>
        <Dropdown href="/campus">Campus</Dropdown>
        <Dropdown href="/contacte">Contacte</Dropdown>
      </ul>
    </div>
  );
};