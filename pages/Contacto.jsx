import React from 'react'
import HeroVideo from '../components/HeroVideo'
import Footer from '../components/Footer'
import CardContact from '../components/CardContact'
import ContactForm from '../components/ContactForm'


const Contacto = () => {
    return (
        <div>
            <HeroVideo video="video1.mp4" heading="Escríbanos para programar una llamada de energía solar" message2="Nuestaros especialistas en energía se pondrán en contacto con usted lo antes posible para atender cualquier duda." size="h-[594px]"/>
            <CardContact/>
            <ContactForm/>
            <Footer/>
        </div>
    )
}

export default Contacto
