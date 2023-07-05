import React from 'react'
import Head from 'next/head'
import HeroVideo from '../components/HeroVideo'
import Footer from '../components/Footer'
import CardContact from '../components/CardContact'
import ContactForm from '../components/ContactForm'
import Title from '../components/Title'
import HubSpotForm from '../components/HubSpotForm'

const Contacto = () => {
    return (
        <div>
            <Title/>
            <HeroVideo video="heroVideo.mp4" heading="Escríbanos para programar una llamada de energía solar" message2="Nuestaros especialistas en energía se pondrán en contacto con usted lo antes posible para atender cualquier duda." size="h-[594px]"/>
            <ContactForm isOverlapped={false}/>
            <HubSpotForm/>
            <CardContact/>
            <Footer/>
        </div>
    )
}

export default Contacto
