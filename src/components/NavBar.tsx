import Dropdown from "@components/utils/dropdown"

export default function NavBar() {
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
            }
            
        ]
        
    
    return (
        
            <header className=" h-24 top-0 fixed bg-white dark:bg-zinc-900 w-full shadow-xl">   
                <ul className=" dropdown-menu">
                <Dropdown title="Qui Som?" items={quiSomItems} />
                </ul>
            </header>
        
    )
}
