import React from 'react'
import { AiFillCaretRight } from 'react-icons/ai';
import TablaTransmisiones from './Tablas/TablaTransmisiones';

const Transmisiones = () => {
  return (
    <div>
     <div className='w-fit mx-auto p-6 my-2 text-center'>
        <h1 className='font-semibold text-3xl md:text-5xl'>Puente delantero y trasero</h1>
      </div>
      <div className='w-11/12 mx-auto mt-5 text-lg'>
        <p>
          Todos sus componentes han sido diseñados con un amplio margen de seguridad para garantizar una prolongada vida útil en condiciones normales de uso, y poder absorber las sobrecargas momentáneas que puedan producirse.
        </p>

        <div className="flex flex-row pb-5">
          <div className="basis-1/2">
           <div className='w-11/12 mx-auto mt-5 text-lg'>
            <p className='text-xl font-semibold py-1'>Algunas de sus características son:</p>
            <ul className="text-lg font-medium">
              <li className="my-1 flex items-center py-1">
                <AiFillCaretRight />
                <span className="ml-2">Robustez y alta calidad de fabricación.</span>
              </li>
              <li className="my-1 flex items-center py-1">
                <AiFillCaretRight />
                <span className="ml-2">Asesoramiento profesional sin cargo.</span>
              </li>
              <li className="my-1 flex items-center py-1">
                <AiFillCaretRight />
                <span className="ml-2">Plazos de entrega inmediata.</span>
              </li>
              <li className="my-1 flex items-center py-1">
                <AiFillCaretRight />
                <span className="ml-2">Servicio Técnico.</span>
              </li>
              <li className="my-1 flex items-center py-1">
                <AiFillCaretRight />
                <span className="ml-2">Repuestos legítimos.</span>
              </li>
            </ul>
          </div>
        
        </div>
        <div className="basis-1/2">
        <div className='w-11/12 mx-auto mt-5 text-lg'>
        <p className='text-xl font-semibold py-1'> Sus aplicaciones son: </p>
          <ul className="text-lg font-medium">
            <li className="my-1 flex items-center py-2">
              <AiFillCaretRight />
              <span className="ml-2">Máquinas Cosechadoras</span>
            </li>
            <li className="my-1 flex items-center py-2">
              <AiFillCaretRight />
              <span className="ml-2">Transmisiones Varias</span>
            </li>
            <li className="my-1 flex items-center py-2">
              <AiFillCaretRight />
              <span className="ml-2">Vehículos Multipropósitos</span>
            </li>
          </ul>

      </div>
        </div>
      </div>
      <hr />

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-10/12 mx-auto mt-8 mb-9">
        <div className="flex flex-col items-center p-6 border border-custom1/40 rounded-md bg-white">
          <p className="text-center text-lg font-bold mb-6 border-b border-gray-300 px-5 pb-2">Eje Delantero para Cosechadora</p> 
          <img src="transmision2.jpg" alt="Transmisión 2" className="w-full mb-2" />
        </div>
        <div className="flex flex-col items-center p-6 border border-custom1/40 rounded-md bg-white">
          <p className="text-center text-lg font-bold mb-6 border-b border-gray-300 px-5 pb-2">Puente Delantero</p>
          <img src="transmision1.jpg" alt="Transmisión 1" className="w-full mb-2" />
        </div>
        <div className="flex flex-col items-center p-6 border border-custom1/40 rounded-md bg-white">
          <p className="text-center text-lg font-bold mb-6 border-b border-gray-300 px-5 pb-2">Doble Tracción Mecánica para Cosechadora</p>
          <img src="transmision3.jpg" alt="Transmisión 3" className="w-full mb-2" />
        </div>
        <div className="flex flex-col items-center p-6 border border-custom1/40 rounded-md bg-white">
          <p className="text-center text-lg font-bold mb-6 border-b border-gray-300 px-5 pb-2">Transmisión JKC 900 A Hidrostática</p>
          <img src="transmision4.jpg" alt="Transmisión 4" className="w-full mb-2" />
          <p className='mt-4'>
           Diferencial con trocha de 2840 mm, para transmisión hidrostática, con brida para acoplar motor hidráulico, con mangas y palleres reforzados, con reductores finales planetarios; brazos de dirección apto para soldar rígidamente al chasis.
          </p>
        </div>
      </div>

      <div className="w-fit mx-auto p-6 my-2 text-center">
        <h1 className="font-semibold text-3xl md:text-5xl">Algunos planos relevantes:</h1>
      </div>

      <div className="flex flex-col md:flex-row w-11/12 mx-auto mt-3 mb-4">
        <div className="basis-full md:basis-2/6 m-1 border border-custom1 rounded-md duration-300">
          <img src="transmision1h.png" alt="" className='rounded-md transition-transform duration-300 md:hover:scale-125  md:hover:border border-black' />
        </div>
        <div className="basis-full md:basis-2/6 m-1 border border-custom1 rounded-md duration-300">
          <img src="transmision2h.png" alt="" className='rounded-md transition-transform duration-300 md:hover:scale-125 md:hover:border border-black'/>
        </div>
        <div className="basis-full md:basis-2/6 m-1 border border-custom1 rounded-md duration-300">
          <img src="transmision3h.png" alt="" className='rounded-md transition-transform duration-300 md:hover:scale-125 md:hover:border border-black p-2 bg-white'/>
        </div>
      </div>

      <hr className='w-11/12 mx-auto py-4'/>
      <div className="flex flex-col md:flex-row w-11/12 mx-auto mb-8">
        <div className="basis-full md:basis-2/6 m-1 border border-custom1 rounded-md">
          <img src="transmision1v.png" alt="" className='rounded-md '/>
        </div>
        <div className="basis-full md:basis-2/6 m-1 border border-custom1 rounded-md ">
          <img src="transmision2v.png" alt="" className='rounded-md'/>
        </div>
        <div className="basis-full md:basis-2/6 m-1 border border-custom1 rounded-md">
          <img src="transmision3v.jpg" alt="" className='rounded-md p-2 bg-white'/>
        </div>
      </div>

      <div className='w-fit mx-auto p-6 my-4 text-center'>
        <h1 className='font-semibold text-3xl md:text-5xl'>Caja escuadra</h1>
      </div>

      <div className="flex flex-col mb-5 md:flex-row">
  <div className="basis-1/2 border-custom1 rounded-md w-10/12 mx-auto md:w-9/12 md:mx-2 md:order-last">
    <div className="w-10/12 mx-auto py-4 mb-2 bg-custom1 text-center font-bold text-2xl text-white">
      Plano Caja escuadra
    </div>
    <img src="JHF900B2.jpg" alt="" className="w-10/12 mx-auto mt-3 border border-custom1 rounded-b-md" />
  </div>
  <div className="basis-1/2 border-custom1 rounded-md w-10/12 mx-auto md:w-9/12 md:mx-2 md:order-first">
    <TablaTransmisiones />
  </div>
</div>

      <div className="flex flex-col md:flex-row w-11/12 mx-auto my-8">
        <div className="basis-full md:basis-2/6 m-2 border border-custom1 rounded-md">
          <img src="cajaescuadra1.jpg" alt="" className='rounded-md '/>
        </div>
        <div className="basis-full md:basis-2/6 m-2 border border-custom1 rounded-md ">
          <img src="cajaescuadra2.jpg" alt="" className='rounded-md'/>
        </div>
        <div className="basis-full md:basis-2/6 m-2 border border-custom1 rounded-md">
          <img src="cajaescuadra3.jpg" alt="" className='rounded-md bg-white'/>
        </div>
      </div>

    </div>
  )
}

export default Transmisiones