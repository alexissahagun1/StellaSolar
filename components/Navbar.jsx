import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from "../public/Logo.png"
import { useRouter } from 'next/router'
import {AiOutlineMenu, AiOutlineClose}  from "react-icons/ai"


const Navbar = () => {
    const [nav, setNav] = useState(false)

    const router = useRouter()
    const currentRoute = router.pathname


    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-white">
            <div className="max-w-[1240px] m-auto flex justify-between items-center p-4">
                <Link href='/Soluciones'>
                    <div className="">
                        <Image src={logo}
                        width={235}
                        height={55}
                        />
                    </div>

                </Link>
                <ul className="hidden sm:flex text-sm uppercase space-x-5 font-semibold tracking-tighter">
                    <li className="p-4">
                        <Link href="/Soluciones">
                            <a className={currentRoute === "/Soluciones" ? "text-black" : "text-gray-400"}>Soluciones</a>
                        </Link>
                    </li>
                    <li className="p-4">
                        <Link href="/Nosotros">
                            <a className={currentRoute === "/Nosotros" ? "text-black" : "text-gray-400"}>Nosotros</a>
                        </Link>
                    </li>
                    <li className="p-4">
                        <Link href="/Soluciones#Industrias">
                            <a className={currentRoute === "/Soluciones#Industrias" ? "text-black" : "text-gray-400"}>Industrias</a>
                        </Link>
                    </li>
                    <li className="p-4">
                        <Link href="/Contacto">
                            <a className={currentRoute === "/Contacto" ? "text-black" : "text-gray-400"}>Contacto</a>
                        </Link>
                    </li>
                    
                </ul>
                {/* Mobile Button Icon */}
                <div onClick={handleNav} className="block sm:hidden z-10 text-black">
                    {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                </div>
                {/* Mobile Menu */}
                <div className={nav ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center backdrop-blur bg-white/30 w-full h-screen  text-center ease-in duration-300" :  "sm:hidden opacity-100 absolute top-0 left-[100%] right-0 bottom-0 flex justify-center items-center backdrop-blur bg-white/30 w-full h-screen  text-center ease-in duration-300"}>
                    <ul className="space-y-5">
                        <li onClick={handleNav}  className="text-2xl hover:text-white">
                            <Link href="/Soluciones">Soluciones</Link>
                        </li>
                        <li onClick={handleNav}  className="text-2xl hover:text-white">
                            <Link href="/Soluciones#Industrias">Industrias</Link>
                        </li>
                        <li onClick={handleNav}  className="text-2xl hover:text-white">
                            <Link href="/Nosotros">Nosotros</Link>
                        </li>
                        <li onClick={handleNav}  className="text-2xl hover:text-white">
                            <Link href="/Contacto">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
