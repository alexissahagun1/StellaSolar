import React from 'react'
import Link from 'next/link'

const FloatingPhoneButton = () => {
    return (

            <div className="flex justify-center md:justify-start">
                <div className="fixed md:right-0 md:mr-36 md:bottom-[40px] bottom-16 flex z-10">

                    <a href="tel:3313410027" style={{backgroundColor: "rgb(255, 127, 48)"}} className="text-white  font-medium rounded-lg md:text-lg px-40 md:px-5 py-2.5 text-center inline-flex items-center scale-100">
                        Llámanos
                        <svg className='ml-3' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.516 6.068a1 1 0 01-.502 1.21l-2.257 1.189a11.042 11.042 0 005.516 5.516l1.19-2.257a1 1 0 011.208-.502l6.069 1.516a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 4 15.284 4 8V7a2 2 0 01-1-1.732V5z"></path>
                        </svg>

                    </a>
                    
                </div>
            </div>
    )
}




export default FloatingPhoneButton
