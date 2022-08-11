import React from 'react'
import Hero from '../components/Hero'
import HeroVideo from '../components/HeroVideo'
import Footer from '../components/Footer'



const Soluciones = () => {

    return (
        <div>
            <HeroVideo video="video1.mp4" heading="Comercializamos e instalamos  sistemas fotovoltaicos para el sector industrial, comercial y residencial" message="Ahorrar y cuidar del planeta nunca fue tan sencillo" size="789px"/>
            {/* <Hero heading="Comercializamos e instalamos  sistemas fotovoltaicos para el sector industrial, comercial y residencial" message="Ahorrar y cuidar del planeta nunca fue tan sencillo"/> */}
            <Footer/>
        </div>
    )
}

export default Soluciones
