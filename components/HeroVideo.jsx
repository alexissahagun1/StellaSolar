import React from 'react'
import Image from 'next/image'  // Import the Image component

const Hero = ({image, heading, message, message2, size}) => {
    return (
        <div className="flex flex-col relative">  {/* Added relative positioning */}
            <div className={`relative ${size} w-full`}>  {/* Wrapped Image with a div and applied styles */}
                <Image 
                    src="/HeroImage.jpg "
                    alt="Hero Image" 
                    layout="fill" 
                    objectFit="cover"  
                />
            </div>
            <div className="text-white absolute flex flex-col mt-[290px] 2xl:mx-96 lg:mx-32 md:mx-20 mx-4 mb-56 xl:w-5/12 md:w-7/12">
                <h2 className="md:text-4xl text-2xl font-medium tracking-tight pb-10">{heading}</h2>
                <p className="font-bold leading-9 md:text-2xl text-xl stella-orange">{message}</p>
                <p className="leading-tight md:text-2xl text-xl">{message2}</p>
            </div>
        </div>
    )
}

export default Hero
