import React from 'react'
import { AiFillCaretRight } from 'react-icons/ai';


const AcopleBombaHidraulica = () => {
  return (
    <div>
      <div className='w-fit mx-auto p-6 my-2 text-center'>
        <h1 className='font-semibold text-3xl md:text-5xl'>Acople Bomba Hidráulica con Embrague Neumático</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-11/12 mx-auto mt-8 mb-9">
          <div className="flex flex-col items-center border border-custom1/40 rounded-md bg-white">
            <img src="Acople4H.jpg" alt="Transmisión 2" className="w-full mb-2 rounded-md" />
          </div>
          <div className="flex flex-col items-center border border-custom1/40 rounded-md bg-white">
            <img src="Acople5H.jpg" alt="Transmisión 1" className="w-full mb-2 rounded-md" />
          </div>
        </div>
      <div className="md:flex md:flex-row md:justify-between">
        <div className="md:w-1/2 text-lg p-6 ml-5">
          <p>
            Todos sus componentes han sido diseñados con un amplio margen de seguridad para garantizar una prolongada vida útil en condiciones normales de uso, y poder absorber las sobrecargas momentáneas que puedan producirse.
          </p>
          <p className='my-2 font-bold'>Algunas de sus características son:</p>
          <ul className="text-lg font-medium">
            <li className="my-3 flex items-center py-1">
              <AiFillCaretRight /> <span className="ml-2">Robustez y alta calidad de fabricación.</span> 
            </li>
            <hr />
            <li className="my-3 flex items-center py-1">
              <AiFillCaretRight /> <span className="ml-2">Asesoramiento profesional sin cargo.</span>
            </li>
            <hr />
            <li className="my-3 flex items-center py-1">
              <AiFillCaretRight /> <span className="ml-2">Plazos de entrega inmediata.</span>
            </li>
            <hr />
            <li className="my-3 flex items-center py-1">
              <AiFillCaretRight /> <span className="ml-2">Servicio Técnico.</span>
            </li>
            <hr />
            <li className="my-3 flex items-center py-1">
              <AiFillCaretRight /> <span className="ml-2">Repuestos legítimos.</span>
            </li>
            <hr />
          <p className='mt-4 font-bold'>Aplicaciones:</p>
          <li className="my-3 flex items-center py-1">
              <AiFillCaretRight /> <span className="ml-2">Máquinas agrícolas.</span>
            </li>
            <hr />
            <li className="my-3 flex items-center py-1">
              <AiFillCaretRight /> <span className="ml-2">Máquinas viales.</span>
            </li>
            <hr />
          </ul>
        </div>

        <div className="md:w-1/2 md:mt-0 p-4 flex flex-col md:flex-row ">
          <div className="md:w-1/2 flex flex-col items-center justify-center">
            <img src="Acople2C.png" alt="" className="w-7/12 mb-4 border border-custom1/40 rounded-md" />
            <img src="Acople3C.jpg" alt="" className="w-7/12 border border-custom1/40 rounded-md" />
          </div>
          <div className="md:w-1/2 flex flex-col items-center justify-center">
            <img src="Acople6C.jpg" alt="" className="w-7/12 mb-4 border border-custom1/40 rounded-md" />
            <img src="Acople7C.jpg" alt="" className="w-7/12 border border-custom1/40 rounded-md" />
          </div>
        </div>        
      </div>
      <div className='w-fit mx-auto p-6 my-3 text-center'>
        <h1 className='font-semibold text-3xl md:text-5xl'>Algunos planos relevantes</h1>
      </div>
      <div className="flex flex-col md:flex-row w-9/12 mx-auto">
        <div className="basis-full md:basis-1/2 m-3 border border-custom1 rounded-md">
          <img src="VHA912A2.png" alt="" className='rounded-md' />
        </div>
        <div className="basis-full md:basis-1/2 m-3 border border-custom1 rounded-md">
          <img src="VHA915A.png" alt="" className='rounded-md '/>
        </div>
      </div>
    </div>
  )
}

export default AcopleBombaHidraulica