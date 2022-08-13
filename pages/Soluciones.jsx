import React from 'react'
import HeroVideo from '../components/HeroVideo'
import Footer from '../components/Footer'
import ContentSoluciones from '../components/ContentSoluciones'
import VideoComponent from '../components/VideoComponent'
import Beneficios from '../components/Beneficios'




const Soluciones = () => {

    return (
        <div>
            <HeroVideo video="video1.mp4" heading="Comercializamos e instalamos  sistemas fotovoltaicos para el sector industrial, comercial y residencial" message="Ahorrar y cuidar del planeta nunca fue tan sencillo" size="md:h-[789px] h-[600px]"/>

            <div className="text-center mt-[104px] flex flex-col items-center md:mx-[420px] mx-8">
                <h2 className="uppercase stella-orange font-semibold text-[24px] mb-8">Soluciones llave en mano para tus necesidades</h2>
                <p className="font-base text-gray-600 text-[20px] leading-10">Nos encargamos de gestionar todo tipo de proyectos ofreciendo una solución integral para poner en marcha tu sistema.</p>
                <p className="font-medium text-gray-600 text-[20px] leading-10">Un solo punto de contacto para todo el proyecto.</p>
            </div>

            <ContentSoluciones/>

            <VideoComponent video="video2.mp4" size="md:h-[660px] h-[300px]"/>

            <div className="text-center flex flex-col items-center md:mx-[420px] space-y-5 mx-4">
                <div className="flex flex-row items-center">
                    <img src="LineThroughHeading.png" alt="" className="mx-8 hidden md:block"/>
                    <h2 className="uppercase stella-orange font-semibold md:text-[24px] text-lg">Beneficios para su industria o negocio</h2>
                    <img src="LineThroughHeading.png" alt="" className="mx-8 hidden md:block"/>
                </div>
                <p className="font-medium text-gray-600 md:text-[18px] text-base leading-10">Conozca algunos de los beneficios que tendrá por trabajar con paneles solares.</p>
            </div>

            <Beneficios/>



            <Footer/>
        </div>
    )
}

export default Soluciones
