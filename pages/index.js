import Head from 'next/head'
import Image from 'next/image'
import Hero from '/components/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Stella Solar</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>  
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>

    
    </div>
  )
}
