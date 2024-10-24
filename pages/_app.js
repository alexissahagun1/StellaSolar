import Script from 'next/script'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import FloatingButton from '../components/FloatingButton'
import WhatsappButton from '../components/WhatsappButton'
import FloatingPhoneButton from '../components/FloatingPhoneButton';
import TagManager from 'react-gtm-module'
import { useEffect } from 'react'



function MyApp({ Component, pageProps }) {

  return (
    <>
      <Navbar/>
      <FloatingButton/>
      <FloatingPhoneButton />
      <WhatsappButton/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
