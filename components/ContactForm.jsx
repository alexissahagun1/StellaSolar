import React from 'react'

const ContactForm = () => {
    return (
        <div className="bg-gray-200 rounded-md border border-gray-300 relative md:-top-16 -top-8 md:mx-56 pb-20">
            <div className="flex md:flex-row flex-col md:space-x-12 mx-9 my-14">
                <div className="md:w-5/12 w-full">
                    <h6 className="uppercase font-bold text-2xl text-gray-700">Solicita una asesoría sin compromiso</h6>
                    <p className="mt-9 text-base font-medium leading-7 tracking-tight">Agenda una llamada con uno de nuestros consultores energéticos para aclarar cualquier duda y obtener una cotización personalizada y completamente gratuita.</p>
                </div>
                <div className="grow">
                    <h6 className="text-lg font-medium mb-7 mt-6 md:mt-0">¡Contáctanos!</h6>
                    <form action="" className="space-y-8">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-6 ">
                            <div>
                                <input type="text" id="email" className="shadow-md bg-gray-50 border border-gray-300 font-bold text-gray-900 text-sm rounded-sm p-3 w-full" placeholder="Nombre*" required/>
                            </div>
                            <div>
                                <input type="text" id="subject" className="block p-3 w-full text-sm font-bold text-gray-900 bg-gray-50 rounded-sm border border-gray-300 shadow-md" placeholder="Apellido*" required/>
                            </div>
                            <div className="sm:col-span-2">
                                <input type="email" id="subject" className="block p-3 w-full text-sm font-bold text-gray-900 bg-gray-50 rounded-sm border border-gray-300 shadow-md" placeholder="Email Corporativo*" required/>
                            </div>
                            <div className="sm:col-span-2">
                                <input type="text" id="subject" className="block p-3 w-full text-sm font-bold text-gray-900 bg-gray-50 rounded-sm border border-gray-300 shadow-md" placeholder="Empresa*" required/>
                            </div>
                            <div>
                                <input type="text" id="subject" className="block p-3 w-full text-sm font-bold text-gray-900 bg-gray-50 rounded-sm border border-gray-300 shadow-md" placeholder="Empresa*" required/>
                            </div>
                            <div>
                                <input type="text" id="subject" className="block p-3 w-full text-sm font-bold text-gray-900 bg-gray-50 rounded-sm border border-gray-300 shadow-md" placeholder="Área*" required/>
                            </div>
                        </div>

                        <div className="flex flex-row items-center">
                            <input id="link-checkbox" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300"/>
                            <label htmlFor="link-checkbox" className="ml-2 text-xs font-medium text-gray-900">He leído y acepto los términos establecidos en el Aviso de Privacidad. <br/>Tu información está protegida. Conoce nuestro <a href="#" className="stella-orange underline">aviso de privacidad</a>.</label>
                        </div>

                        <div className="flex justify-center relative top-10">
                            <button className="px-16 py-2.5 text-white font-semibold rounded-md shadow-md border border-gray-400 " style={{backgroundColor: "rgb(255, 127, 48)"}}>Contacta con uno de nuestros asesores</button>
                        </div>
        
                    </form>
                    
                </div>
                
        </div>
    </div>
    )
}

export default ContactForm
