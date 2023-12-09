import React from 'react'
import HeroVideo from '../components/HeroVideo'
import Footer from '../components/Footer'
import ContentSoluciones from '../components/ContentSoluciones'
import VideoComponent from '../components/VideoComponent'
import Beneficios from '../components/Beneficios'
import PhotoCollage from '../components/PhotoCollage'
import IconsCarousel from '../components/IconsCarousel'
import carouselIcons from '../components/CarouselIcons'
import alianzasIcons from '../components/AlianzasIcons'
import SociosIcons from '../components/SociosIcons'
import Certificaciones from '../components/Certificaciones'
import BeneficiosTextResi from '../components/BeneficiosContentResi'
import ContactForm from '../components/ContactForm'
import Title from '../components/Title'




const Residencial = () => {

    return (
        <div>
            <Title/>
            {/* <HeroVideo video="heroVideo.mp4" heading="Paneles solares para su hogar." message="1 año de mantenimiento gratis." size="md:h-[789px] h-[600px]"/> */}
            <HeroVideo video="heroVideo.mp4" heading="" message="" size="md:h-[789px] h-[350px]"/>

            <VideoComponent video="bgVideo.mp4" size="md:h-[660px] h-[300px]"/>

            <div id="/Soluciones#Industrias" className="text-center flex flex-col items-center xl:mx-[420px] space-y-5 mx-8">
                <div className="flex flex-row items-center">
                    <img src="LineThroughHeading.png" alt="" className="mx-8 hidden md:block"/>
                    <h2 className="uppercase stella-orange font-semibold md:text-[24px] text-lg">Beneficios para su hogar</h2>
                    <img src="LineThroughHeading.png" alt="" className="mx-8 hidden md:block"/>
                </div>
                <p className="font-medium text-gray-600 md:text-[18px] text-base leading-10">Conozca algunos de los beneficios que tendrá por trabajar con paneles solares.</p>
            </div>

            <Beneficios file={BeneficiosTextResi} headingColor="stella-orange" isUppercase={false} isHidden={true} marginQuantity={"2xl:mx-[330px] xl:mx-[150px]"}/>


                <div className="text-center flex flex-col items-center mx-4 md:mx-0 md:mt-[90px] mt-[85px]">
                    <div className="flex flex-row items-center">
                        <img src="LineThroughHeading.png" alt="" className="mx-8 hidden md:block"/>
                        <h2 className="uppercase stella-orange font-semibold md:text-[24px] text-lg">Proyectos destacados</h2>
                        <img src="LineThroughHeading.png" alt="" className="mx-8 hidden md:block"/>
                    </div>
                </div>


                <div className="mx-auto p-4">
                    <PhotoCollage />
                </div>


                <VideoComponent video="bgVideo.mp4" size="md:h-[660px] h-[300px]"/>

                <ContactForm isOverlapped={false}/>


            <Footer/>
        </div>
    )
}

export default Residencial
