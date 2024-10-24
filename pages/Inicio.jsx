import React from 'react'
import Head from 'next/head'
import HeroVideo from '../components/HeroVideo'
import Footer from '../components/Footer'
import VideoComponent from '../components/VideoComponent'
import IconsCarousel from '../components/IconsCarousel'
import carouselIcons from '../components/CarouselIcons'
import alianzasIcons from '../components/AlianzasIcons'
import SociosIcons from '../components/SociosIcons'
import Certificaciones from '../components/Certificaciones'
import ContactForm from '../components/ContactForm'
import Title from '../components/Title'




const Inicio = () => {

    return (
        <div>
            <Title/>
            {/* <HeroVideo heading="Paneles solares para hogares, comercios e industria." message="1 Año de poliza de mantenimiento gratis" size="md:h-[789px] h-[600px]"/> */}
            <HeroVideo
                video="heroVideo.mp4"
                heading="Paneles solares para hogares, comercios e industria." 
                message="1 Año de poliza de mantenimiento gratis" 
                size="md:h-[789px] h-[350px]"/>
                
            <div className="text-center flex flex-col items-center mx-4 md:mx-0 md:mt-[90px] mt-[85px]">
                    <div className="flex flex-row items-center md:space-x-20 space-x-4">
                        <div className="flex flex-col items-center">
                            <h2 className='font-semibold md:text-6xl text-sm stella-orange'>+15000</h2>
                            <h2 className='font-medium md:text-lg text-xs'>Paneles Instalados</h2>
                        </div>
                        <div className="flex flex-col items-center">
                            <h2 className='font-semibold md:text-6xl text-sm stella-orange'>+10</h2>
                            <h2 className='font-medium md:text-lg text-xs'>Años de experiencia</h2>
                        </div>
                        <div className="flex flex-col items-center">
                            <h2 className='font-semibold md:text-6xl text-sm stella-orange'>+156 kWh</h2>
                            <h2 className='font-medium md:text-lg text-xs'>Generados con energía solar</h2>
                        </div>
                        <div className="flex flex-col items-center">
                            <h2 className='font-semibold md:text-6xl text-sm stella-orange'>+100</h2>
                            <h2 className='font-medium md:text-lg text-xs'>Empresas han confiado en nosotros</h2>
                        </div>
                    </div>
                </div>
                <div className="text-center flex flex-col items-center mx-4 md:mx-0 md:mt-[90px] mt-[65px]">
                    <div className="flex flex-row items-center">
                        <img src="LineThroughHeading.png" alt="" className="mx-8 hidden md:block"/>
                        <h2 className="uppercase stella-orange font-semibold md:text-[24px] text-lg">Nuestros Clientes</h2>
                        <img src="LineThroughHeading.png" alt="" className="mx-8 hidden md:block"/>
                    </div>
                </div>

                <IconsCarousel file={carouselIcons} numberItems={5} isAutoPlay={true} bgColor=""/>

                <Certificaciones/>
                <VideoComponent video="bgVideo.mp4" size="md:h-[660px] h-[300px]"/>

                <div className="text-center flex flex-col items-center mx-4 md:mx-0 md:mt-[90px] mt-[85px]">
                    <div className="flex flex-row items-center">
                        <img src="LineThroughHeading.png" alt="" className="mx-8 hidden md:block"/>
                        <h2 className="uppercase stella-orange font-semibold md:text-[24px] text-lg">Alianzas</h2>
                        <img src="LineThroughHeading.png" alt="" className="mx-8 hidden md:block"/>
                    </div>
                </div>

                <IconsCarousel file={alianzasIcons} numberItems={3} isAutoPlay={true}/>

                

                <div className="text-center flex flex-col items-center mx-4 md:mx-0 md:mt-[90px] mt-[85px]">
                    <div className="flex flex-row items-center">
                        <img src="LineThroughHeading.png" alt="" className="mx-8 hidden md:block"/>
                        <h2 className="uppercase stella-orange font-semibold md:text-[24px] text-lg">Socios Comerciales</h2>
                        <img src="LineThroughHeading.png" alt="" className="mx-8 hidden md:block"/>
                    </div>
                </div>

                <IconsCarousel file={SociosIcons} numberItems={4} isAutoPlay={true} bgColor="bg-white"/>
                

                <div className="mb-10"></div>

                <ContactForm isOverlapped={false}/>


            <Footer/>
        </div>
    )
}

export default Inicio
