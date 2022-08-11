/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/Soluciones',
        permanent: true,
      },
    ]
  },

 



  
}


  


module.exports = nextConfig
