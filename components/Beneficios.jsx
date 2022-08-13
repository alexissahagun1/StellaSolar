import React from 'react'
import BeneficiosText from '../components/BeneficiosContent'
import { isBot } from 'next/dist/server/web/spec-extension/user-agent'

const Beneficios = ({heading, subheading}) => {
    return (
       <div className="grid grid-cols-2 justify-items-center mt-10 md:mx-[348px]  align-middle">
               {BeneficiosText && BeneficiosText.map((item) =>
                <div className="flex flex-row items-center my-[39px] mx-[30px]">
                    <img src={item.icon} alt="" className="p-[27px]"/>
                    <div className="flex flex-col text-left space-y-[15px]">
                        <h6 className="font-semibold stella-orange uppercase text-base leading-[18px]">{item.heading}</h6>
                        <p className="font-medium text-[13px] tracking-normal">{item.body}</p>
                    </div>
                </div>
               )}

       </div>
    )
}

export default Beneficios
