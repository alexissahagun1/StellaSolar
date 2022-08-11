import React from 'react'

const Hero = ({heading, message, message2}) => {
    return (
        <div className="flex items-center h-screen w-screen custom-img">
            <div className="p-5 text-white z-[2] mt-64 md:ml-36 mb-56 md:w-5/12 ">
                <h2 className="text-4xl font-medium tracking-tight pb-10">{heading}</h2>
                <p className="font-bold leading-9 text-2xl stella-orange">{message}</p>
                <p className="leading-tight text-2xl">{message2}</p>
            </div>
        </div>
    )
}

export default Hero
