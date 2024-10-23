import React from 'react'
import Image from 'next/image'  // Import the Image component

const Hero = ({video, heading, message, message2, size}) => {
    return (
        <div className="flex flex-col relative">  {/* Added relative positioning */}
            <div className={`relative ${size} w-full`}>  {/* Wrapped Image with a div and applied styles */}
                {/* <Image 
                    src="/HeroImage.jpg"
                    alt="Hero Image" 
                    layout="fill" 
                    objectFit="scale-down" 
                /> */}

            <video src={video} autoPlay loop muted className={`object-cover ${size} w-full `}/>
            <img src="LogoSinBg.png" alt="" className="scale-75 md:scale-100 relative md:-top-[80px] -top-[50px] -left-[-30px]"/>
            </div>
            <div className="text-white absolute flex flex-col md:mt-[290px] mt-[130px] 2xl:mx-96 lg:mx-32 md:mx-20 mx-4 mb-56 xl:w-5/12 md:w-7/12">
                <h2 className="md:text-5xl text-2xl font-medium tracking-tight md:pb-10">{heading}</h2>
                <p className="font-bold leading-9 md:text-3xl text-xl stella-orange">{message}</p>
                <p className="leading-tight md:text-2xl text-xl">{message2}</p>
            </div>
        </div>
    )
}

export default Hero
