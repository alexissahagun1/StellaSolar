import React from 'react'
import HeadingWText from './HeadingWText'


const NosotrosContent = () => {
    return (
        <div className="md:mx-[315px] md:mt-[58px] mx-8">

            {HeadingWText && HeadingWText.map((item) =>
                <div key={item.id}>
                    <div className="text-center flex flex-col items-center mx-4 md:mx-0 md:mt-[90px] mt-[85px]">
                        <div className="flex flex-col space-y-4 items-center">
                            <h2 className="uppercase stella-orange font-semibold md:text-[24px] text-lg">{item.heading}</h2>
                            <img src="Layer1.png" alt="" className="mx-8 hidden md:block"/>
                        </div>

                        <div className={item.id %2 === 0 ? "flex flex-col md:flex-row-reverse mt-[50px] md:text-left text-center" : "flex md:flex-row flex-col md:space-x-20 mt-[50px] md:text-left text-center"}>
                            <img src={item.image} className="md:max-w-md" alt="" />
                            <div className="md:mr-20 space-y-8 mt-10 md:mt-0">
                                <p className="font-base text-left md:text-[20px] text-[18px] leading-[36px] text-gray-700">{item.body}</p>
                            </div>

                        </div>
                    </div>
                </div>
            )}
           
        </div>
    )
}
 

export default NosotrosContent
