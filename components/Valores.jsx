import React from 'react'
import ValoresText from './ValoresText'
import Head from 'next/head'

const Valores = ({headingColor, isUppercase, isScaled, hasMargin, isHidden}) => {
    return (
        <div>

            <div className="text-center flex flex-col items-center mx-4 md:mx-0 md:mt-[90px] mt-[100px]">
                <div className="flex flex-col space-y-4 items-center">
                    <h2 className="uppercase stella-orange font-semibold md:text-[24px] text-lg relative">Valores <br/> Corporativos</h2>
                    <img src="Layer1.png" alt="" className="mx-8 hidden md:block"/>
                </div>
            </div>

            <div className="md:grid md:grid-cols-3 md:grid-rows-3  justify-items-center md:mx-[220px] mx-8 mt-8 md:mt-[-50px] space-y-8 md:space-y-0">
            {ValoresText && ValoresText.map((item) =>
                <div key={item.id}>

                    <div className={item.id %2 === 0 ? "md:col-start-1 md:col-end-1 flex flex-col md:flex-row-reverse md:items-start items-center space-y-4" : "flex flex-col md:flex-row md:items-start items-center md:col-start-3 md:col-end-3 text-left space-y-4"}>
                        <img src={item.icon} alt="" className="md:pr-3 mt-6 max-w-sm"/>
                        <div className=" mt-10 md:mt-0 space-y-2">
                            <h2 className="uppercase text-gray-400 font-semibold md:text-[24px] text-lg md:text-left text-center">{item.heading}</h2>
                            <p className="font-base text-left md:text-[18px] text-[18px] leading-[36px] text-gray-700 tracking-tight">{item.body}</p>
                        </div>


                    </div>


                </div>

        
               )}


               
               <img className="col-start-2 col-span-1 row-start-1 row-end-4" src="/" alt=""/>

               <img className="md:grid col-start-2 col-span-1 row-start-2 row-end-4 hidden" src="/icons/Valores/IconStella.png" alt=""/>
            </div>
            
        </div>
    )
}

export default Valores
