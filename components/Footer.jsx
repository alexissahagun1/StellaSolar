import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/Logo.png'

const Footer = () => {
    return (
        <div>


    
<footer className="p-4 bg-white sm:p-6 dark:bg-gray-900 mt-10 border-t-2 border-gray-300">
    <div className="md:flex  justify-center 3xl:justify-start md:space-x-24  lg:items-center">
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
                <p className="text-xs font-medium stella-orange">Teléfono: <span className="text-gray-600">33 2265 0345</span></p>
                <p className="text-xs text-gray-600 font-medium">Horario de atención: 9:00 a 18:00 hrs</p>
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
                <h2 className="mb-6 text-sm font-semibold text-gray-900 stella-orange font-bold">Compañia</h2>
                <ul className="font-medium text-xs w-36 flex flex-col space-y-2">
                    <li className="mb-4">
                    <Link href="/Nosotros">
                            <a>Nosotros</a>
                    </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="flex md:mt-4 space-x-6 sm:justify-center sm:mt-0 mt-10">
            <a href="https://linkedin.com/company/stellasolar-soluciones-energeticas-paneles-solares/" className="text-gray-900">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-gray-900">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Facebook page</span>
            </a>
            <a href="https://www.instagram.com/stellasolarmx/" className="text-gray-900">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Instagram page</span>
            </a>
        </div>
    </div>
    <div className="sm:flex md:items-center xl:mx-14  3xl:mx-0 lg:mx-2 sm:justify-end mt-14 ">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 StellaSolar. Todos los derechos reservados
        </span>
    
    </div>
</footer>
       



        </div>
    )
}

export default Footer
