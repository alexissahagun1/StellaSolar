import React from 'react'
import Footer from '../components/Footer'
import HeroVideo from '../components/HeroVideo'
import NosotrosBio from '../components/NosotrosBio'
import NosotrosContent from '../components/NosotrosContent'
import Valores from '../components/Valores'

const Nosotros = () => {
    return (
        <div>
            <HeroVideo video="video1.mp4" heading="Soluciones de energía solar" message2="Nuestro propósito, experiencia y valores corporativos." size="h-[594px]"/>

            <div className="text-center flex flex-col items-center mx-4 md:mx-0 md:mt-[90px] mt-[85px]">
                <div className="flex flex-col space-y-4 items-center">
                    <h2 className="uppercase stella-orange font-semibold md:text-[24px] text-lg">Nosotros</h2>
                    <img src="Layer1.png" alt="" className="mx-8 hidden md:block"/>
                </div>
            </div>

            <NosotrosBio/>
            <NosotrosContent/>
            <Valores/>


            <Footer/>
        </div>
    )
}

export default Nosotros
