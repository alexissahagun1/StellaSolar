import React from 'react'


const Beneficios = ({file, headingColor, isUppercase, isScaled, hasMargin, isHidden}) => {
    return (
       <div className={`grid md:grid-cols-2 grid-cols-1 justify-items-center md:mt-10 xl:mx-[158px] lg:mx-[50px] align-middle ${isHidden ? "hidden md:grid" : "md:hidden"}`}>
               {file && file.map((item) =>
                <div className={`flex flex-row items-center md:my-[20px] my-[30px] md:mx-[30px] ${hasMargin ? "mx-6" : "mx-0"}`} key={item.id}>
                    <img src={item.icon} alt="" className={`md:p-[27px] pr-4  md:scale-100 ${isScaled ? "scale-75" : "scale-100"}`}/>
                    <div className="flex flex-col text-left space-y-[15px]">
                        <h6 className={`font-semibold ${headingColor} ${isUppercase ? "uppercase" : ""} text-base leading-[18px]`}>{item.heading}</h6>
                        <p className="font-medium text-[13px] tracking-normal">{item.body}</p>
                    </div>
                </div>
               )}

       </div>
    )
}

export default Beneficios
