import React from 'react'

const VideoComponent = ({video, size}) => {
    return (
        <div className="md:mt-[100px] mt-[80px]">
            <video src={video} autoPlay loop muted className={`object-cover ${size} w-full `}/>
            <img src="LogoSinBg.png" alt="" className="scale-75 md:scale-100 relative md:-top-[80px] -top-[50px] md:left-[1425px] left-[190px]"/>
        </div>
    )
}

export default VideoComponent
