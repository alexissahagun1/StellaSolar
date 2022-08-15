import React from 'react'
import Image from 'next/image'
import logo from '../public/Logo.png'

const Footer = () => {
    return (
        <div>


    
<footer className="p-4 bg-white sm:p-6 dark:bg-gray-900 mt-10 border-t-2 border-gray-300">
    <div className="md:flex  justify-center  mx-2 md:space-x-24  lg:items-center">
        <div className="flex flex-col mb-6 md:mb-0 space-y-4 md:items-center">
            <a href="https://stellasolar.mx" className="flex items-center">
            <div className="">
                        <Image src={logo}
                        width={235}
                        height={55}
                        />
                    </div>
            </a>
            <div className="w-56 space-y-4">
                <p className="text-xs font-medium">Comercializamos e instalamos sistemas fotovoltaicos para el sector industrial, comercial y residencial</p>
                <p className="text-xs font-bold stella-orange">Ahorrar y cuidar del planeta nunca fue tan sencillo como hasta ahora.</p>
            </div>
            
        </div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-2 gap-4 lg:gap-40 md:gap-6  mt-6">
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 stella-orange font-bold">Soluciones</h2>
                <ul className="font-medium text-xs w-36 flex flex-col space-y-2">
                    <li>
                        Paneles solares para industrias
                    </li>
                    <li>
                        Sistemas de almacenamiento de energía
                    </li>
                    <li>
                        O&M
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 stella-orange font-bold">Industrias</h2>
                <ul className="font-medium text-xs w-36 flex flex-col space-y-2">
                    <li className="mb-4">
                        Manufactura Automotriz
                    </li>
                    <li>
                        Otras Industrias
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 stella-orange font-bold">Compañia</h2>
                <ul className="font-medium text-xs w-36 flex flex-col space-y-2">
                    <li className="mb-4">
                        <a href="#">Nosotros</a>
                    </li>
                    <li>
                        <a href="#">Cobertura</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="flex md:mt-4 space-x-6 sm:justify-center sm:mt-0 mt-10">
            <a href="#" className="text-gray-900">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Facebook page</span>
            </a>
            <a href="https://www.instagram.com/stellasolarmx/" className="text-gray-900">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Instagram page</span>
            </a>
            <a href="#" className="text-gray-900">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                <span className="sr-only">Twitter page</span>
            </a>
        </div>
    </div>
    <div className="sm:flex md:items-center xl:mx-20 lg:mx-2 sm:justify-between mt-14 ">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 StellaSolar. Todos los derechos reservados
        </span>
    
    </div>
</footer>
       
{/*            
<footer className="p-4 bg-white sm:p-6  mt-16">
    <div className="md:flex md:justify-start mx-56 space-x-32 items-center">
        <div className="flex mb-6 md:mb-0 flex-col space-y-4">
            <a href="https://flowbite.com/" className="flex items-center">
               
                <div className="">
                        <Image src={logo}
                        width={235}
                        height={55}
                        />
                    </div>
            </a>
            <div className="w-56 space-y-4">
                <p className="text-xs font-medium">Comercializamos e instalamos sistemas fotovoltaicos para el sector industrial, comercial y residencial</p>
                <p className="text-xs font-bold stella-orange">Ahorrar y cuidar del planeta nunca fue tan sencillo como hasta ahora.</p>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-10 sm:gap-6 sm:grid-cols-3">
            <div>
                <h2 className="mb-6 text-sm font-bold text-gray-900 stella-orange">Soluciones</h2>
                <ul className="font-medium text-xs w-36 flex flex-col space-y-2">
                    <li>
                        <a href="https://flowbite.com/">Paneleres solares para industrias</a>
                    </li>
                    <li>
                        <a href="https://tailwindcss.com/">Sistemas de almacenamiento de energía</a>
                    </li>
                    <li>
                        <a href="https://tailwindcss.com/">O&M</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-bold text-gray-900 stella-orange">Industrias</h2>
                <ul className="font-medium text-xs w-36 flex flex-col space-y-2">
                    <li className="mb-4">
                        <a href="https://github.com/themesberg/flowbite">Github</a>
                    </li>
                    <li>
                        <a href="https://discord.gg/4eeurUVvTy">Discord</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-bold text-gray-900 stella-orange">Compañia</h2>
                <ul className="font-medium text-xs w-36 flex flex-col space-y-2">
                    <li className="mb-4">
                        <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#">Terms &amp; Conditions</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div className="sm:flex sm:items-center sm:justify-between mx-56 mt-16">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://stellasolar.mx">StellaSolar</a>. Todos los derechos reservados.
        </span>
       
    </div>
</footer> */}


        </div>
    )
}

export default Footer
