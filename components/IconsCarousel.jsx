import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const IconsCarousel = ({file, numberItems, isAutoPlay, bgColor}) => {
    return (
        <div>
            <Carousel
                 additionalTransfrom={0}
                 arrows={false}
                 autoPlay={isAutoPlay}
                 autoPlaySpeed={3000}
                 centerMode={false}
                 className="md:mx-[245px] md:h-[200px] rounded-xl md:mt-[0px] m-6"
                 containerClass="container-with-dots"
                 dotListClass=""
                 draggable
                 focusOnSelect={false}
                 infinite
                 itemClass=""
                 keyBoardControl
                 minimumTouchDrag={80}
                 pauseOnHover
                 renderArrowsWhenDisabled={false}
                 renderButtonGroupOutside={false}
                 renderDotsOutside={false}
                 responsive={{
                   desktop: {
                     breakpoint: {
                       max: 3000,
                       min: 1024
                     },
                     items: numberItems,
                     partialVisibilityGutter: 40
                   },
                   mobile: {
                     breakpoint: {
                       max: 464,
                       min: 0
                     },
                     items: 1,
                     partialVisibilityGutter: 30
                   },
                   tablet: {
                     breakpoint: {
                       max: 1024,
                       min: 464
                     },
                     items: 3,
                     partialVisibilityGutter: 30
                   }
                 }}
                 rewind={false}
                 rewindWithAnimation={false}
                 rtl={false}
                 shouldResetAutoplay
                 showDots={false}
                 sliderClass={`${bgColor} flex items-center`}
                 slidesToSlide={1}
                 swipeable
            >

                {file && file.map((item) =>
                        <div key={item.id} className="flex justify-center">
                            <a href={item.link} className=""><img src={item.icon} alt="" className="scale-[1] grow"/></a>
                           
                        </div>
                    )}
                  

            </Carousel>
            
        </div>
    )
}

export default IconsCarousel
