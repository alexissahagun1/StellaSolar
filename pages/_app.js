import { GoogleTagManager } from '@next/third-parties/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import FloatingButton from '../components/FloatingButton'
import WhatsappButton from '../components/WhatsappButton'
import FloatingPhoneButton from '../components/FloatingPhoneButton';




function MyApp({ Component, pageProps }) {

  return (
    <>
      <Navbar/>
      <FloatingButton/>
      <FloatingPhoneButton />
      <WhatsappButton/>
      <Component {...pageProps} />
      <GoogleTagManager gtmId='GTM-M6C544B8'/>
      <GoogleAnalytics gaId='G-80SHFQDWLS'/>
    </>
  )
}

export default MyApp
