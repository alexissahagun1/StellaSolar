import React from 'react'

const CardContact = () => {
    return (
            <div className="lg:mx-72 md:mx-64 mx-8 bg-white rounded-md border border-gray-300 mt-10 mb-4 shadow-xl relative -top-24 lg:py-16 py-12">
                <dl className="grid max-w-screen-md gap-32 mx-auto text-gray-900 sm:grid-cols-3 flex">
                    <div className="flex flex-col md:text-left justify-center text-center">
                        <dt className="mb-6 text-base md:text-base font-bold stella-orange">Contacto</dt>
                        <dd className="text-gray-900">T: 33 2265 0346</dd>
                        <dd className="text-gray-900">contacto@stellasolar.mx</dd>
                    </div>
                    <div className="flex flex-col md:text-left justify-center text-center">
                        <dt className="mb-6 text-base md:text-base font-bold stella-orange">Oficinas Corporativas</dt>
                        <dd className="text-gray-900 leading-6">Av. Novelistas 5567, Jardines Vallarta, 45110 Zapopan, Jal.</dd>
                    </div>
                    <div className="flex flex-col md:text-left justify-center text-center">
                        <dt className="mb-6 text-base md:text-base font-bold stella-orange">Horario de atención</dt>
                        <dd className="text-gray-900">Lunes - Viernes 9:00 a 17:00 hrs.</dd>
                    </div>
                </dl>
            </div>
    )
}

export default CardContact
