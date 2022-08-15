import React from 'react'
import HeadingWText from './HeadingWText'


const NosotrosContent = () => {
    return (
        <div className="xl:mx-[175px] lg:mx-[75px] lg:mt-[58px] mx-10">

            {HeadingWText && HeadingWText.map((item) =>
                <div key={item.id}>
                    <div className="text-center flex flex-col items-center mx-4 lg:mx-0 lg:mt-[90px] mt-[85px]">
                        <div className="flex flex-col space-y-4 items-center">
                            <h2 className="uppercase stella-orange font-semibold text-[24px] ">{item.heading}</h2>
                            <img src="Layer1.png" alt="" className="mx-8 hidden lg:block"/>
                        </div>

                        <div className={item.id %2 === 0 ? "flex flex-col lg:flex-row-reverse mt-[50px] lg:text-left text-center items-start " : "flex lg:flex-row flex-col lg:space-x-20 mt-[50px] lg:text-left text-center items-start"}>
                            <img src={item.image} className="lg:max-w-md md:max-w-sm object-contain" alt="" />
                            <div className="lg:mr-20 space-y-8 mt-4 lg:mt-0 mx-4 md:mx-0">
                                <p className="font-base text-left  xl:text-[20px] lg:text-[18px] text-[14px] leading-[36px] text-gray-700">{item.body}</p>
                            </div>

                        </div>
                    </div>
                </div>
            )}
           
        </div>
    )
}
 

export default NosotrosContent
