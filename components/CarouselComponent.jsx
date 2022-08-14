import React from 'react'
import carouselImages from './CarouselImages'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const CarouselComponent = ({height}) => {
    return (
        <div className="flex flex-col items-center md:mt-[40px] md:mx-[500px] m-6 ">
           <Carousel showThumbs={false} autoPlay interval={7000} infiniteLoop>
                {carouselImages && carouselImages.map((item) =>
                        <div key={item.id}>
                            <img src={item.image} alt="" className={`object-cover ${height} rounded-xl md:rounded-none `}/>
                        </div>
                    )}
           </Carousel>
            
        </div>
    )
}

export default CarouselComponent
