import Script from 'next/script'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import FloatingButton from '../components/FloatingButton'
import WhatsappButton from '../components/WhatsappButton'
import FloatingPhoneButton from '../components/FloatingPhoneButton';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Google Tag Manager */}
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-W4R2RVBR');`,
        }}
      />
      {/* End Google Tag Manager */}
      <Navbar/>
      <FloatingButton/>
      <FloatingPhoneButton />
      <WhatsappButton/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
