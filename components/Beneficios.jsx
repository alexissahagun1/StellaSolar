import React from 'react'
import BeneficiosText from '../components/BeneficiosContent'
import { isBot } from 'next/dist/server/web/spec-extension/user-agent'

const Beneficios = () => {
    return (
       <div className="grid md:grid-cols-2 grid-cols-1 justify-items-center mt-10 md:mx-[348px] align-middle">
               {BeneficiosText && BeneficiosText.map((item) =>
                <div className="flex flex-row items-center md:my-[39px] my-[30px] md:mx-[30px] mx-6" key={item.id}>
                    <img src={item.icon} alt="" className="md:p-[27px] pr-2 md:pr-0"/>
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
