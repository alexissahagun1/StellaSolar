import '../styles/globals.css'
import Navbar from '../components/Navbar'
import FloatingButton from '../components/FloatingButton'
import WhatsappButton from '../components/WhatsappButton'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Navbar/>
  <FloatingButton/>
  <WhatsappButton/>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
