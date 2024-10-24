import React from 'react'

const VideoComponent = ({video, heading, message, message2, size}) => {
    return (
        <div className="md:mt-[100px] mt-[80px]">
            <video src={video} autoPlay loop muted className={`object-cover ${size} w-full `}/>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white"> {/* Absolute positioning for the text */}
                <h1 className="text-4xl font-bold md:text-5xl">{heading}</h1>
                <p className="text-xl md:text-2xl mt-4">{message}</p>
                <p className="text-lg md:text-xl mt-2">{message2}</p>
            </div>
            <img src="LogoSinBg.png" alt="" className="scale-75 md:scale-100 relative md:-top-[80px] -top-[50px] -left-[-30px]"/>
        </div>
    )
}

export default VideoComponent
