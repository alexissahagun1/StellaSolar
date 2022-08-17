import '../styles/globals.css'
import Navbar from '../components/Navbar'
import FloatingButton from '../components/FloatingButton'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Navbar/>
  <FloatingButton/>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
