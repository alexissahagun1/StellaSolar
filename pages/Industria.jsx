import React from 'react'
import HeroVideo from '../components/HeroVideo'
import Footer from '../components/Footer'
import Beneficios from '../components/Beneficios'
import IconsCarousel from '../components/IconsCarousel'
import carouselIcons from '../components/CarouselIcons'
import BeneficiosText from '../components/BeneficiosContent'
import ContactForm from '../components/ContactForm'
import Title from '../components/Title'
import PhotoCollage from '../components/PhotoCollage'


const customPhotos = [
    '/FotosIndustria/DJI_0778.JPG',
    '/FotosIndustria/DJI_0785.JPG',
    '/FotosIndustria/DJI_0834.JPG',
    '/FotosIndustria/DJI_0837.JPG',
    '/FotosIndustria/DJI_0872.JPG',
    '/FotosIndustria/DJI_0881.JPG',
    '/FotosIndustria/DJI_0890.JPG',
    '/FotosIndustria/DJI_0868.JPG',
  ];



const Industria = () => {

    return (
        <div>
            <Title/>
            <HeroVideo video="heroVideo.mp4" heading="Paneles solares para hogares, comercios e industria." message="1 Año de poliza de mantenimiento gratis" size="md:h-[789px] h-[600px]"/>

            <div className="text-center flex flex-col items-center mx-4 md:mx-0 md:mt-[90px] mt-[65px]">
                    <div className="flex flex-row items-center">
                        <img src="LineThroughHeading.png" alt="" className="mx-8 hidden md:block"/>
                        <h2 className="uppercase stella-orange font-semibold md:text-[24px] text-lg">Nuestros Clientes</h2>
                        <img src="LineThroughHeading.png" alt="" className="mx-8 hidden md:block"/>
                    </div>
                </div>

                <IconsCarousel file={carouselIcons} numberItems={5} isAutoPlay={true} bgColor=""/>

                <div className="mx-auto p-4">
                    <PhotoCollage customPhotos={customPhotos} />
                </div>

                <div id="/Soluciones#Industrias" className="text-center flex flex-col items-center xl:mx-[420px] space-y-5 mx-8 mt-10">
                    <div className="flex flex-row items-center">
                        <img src="LineThroughHeading.png" alt="" className="mx-8 hidden md:block"/>
                        <h2 className="uppercase stella-orange font-semibold md:text-[24px] text-lg">Beneficios para su industria o negocio</h2>
                        <img src="LineThroughHeading.png" alt="" className="mx-8 hidden md:block"/>
                    </div>
                    <p className="font-medium text-gray-600 md:text-[18px] text-base leading-10">Conozca algunos de los beneficios que tendrá por trabajar con paneles solares.</p>
                </div>

                <Beneficios file={BeneficiosText} headingColor="stella-orange" isUppercase={false} isHidden={true} marginQuantity={"2xl:mx-[330px] xl:mx-[150px]"}/>

        
                <div className="mb-10"></div>

                <ContactForm isOverlapped={false}/>


            <Footer/>
        </div>
    )
}

export default Industria
