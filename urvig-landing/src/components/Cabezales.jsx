import React from 'react'
import { AiFillCaretRight } from 'react-icons/ai';
import cabezales from '../modelosCajas'  
import multiplicadores from '../modelosCajas'  


const Cabezales = () => {

  return (
    <div>
      <div className='w-fit mx-auto p-6 my-2 text-center'>
        <h1 className='font-semibold text-3xl md:text-5xl'>Cabezales de bombeo</h1>
      </div>
      <div className="md:flex md:flex-row md:justify-between">
        <div className="md:w-1/2 text-lg p-5 ml-4">
          <p className='mx-4 text-xl mb-4'>	
            Los Cabezales Cardánicos <span className='font-bold'> URVIG S.R.L.</span> para equipos de bombeo, son aplicables hasta una potencia de 200 HP.    
            Todos sus componentes han sido diseñados con un amplio margen de seguridad para garantizar una prolongada vida útil en condiciones normales de uso, y poder absorber las sobrecargas momentáneas que puedan producirse.
          </p>
          <span className='ml-4 font-semibold text-xl'>Algunas de sus caracteristicas son: </span>
          <ul className="text-xl font-medium ml-4">
            <li className="my-3 flex items-center py-1">
              <AiFillCaretRight />
              <span className="ml-2">Robustez y alta calidad de fabricación.</span>
            </li>
            <li className="my-3 flex items-center py-1">
              <AiFillCaretRight />
              <span className="ml-2">Asesoramiento profesional sin cargo.</span>
            </li>
            <li className="my-3 flex items-center py-1">
              <AiFillCaretRight />
              <span className="ml-2">Plazos de entrega inmediata.</span>
            </li>
            <li className="my-3 flex items-center py-1">
              <AiFillCaretRight />
              <span className="ml-2">Servicio Técnico.</span>
            </li>
            <li className="my-3 flex items-center py-1">
              <AiFillCaretRight />
              <span className="ml-2">Repuestos legítimos.</span>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 md:mt-0 mr-4 p-4 flex flex-col md:flex-row ">
        <div className="md:w-1/2 flex flex-col">
            <img src="CABEZAL3.jpg" alt="cabezal3" className="w-full mb-4 border border-custom1 rounded-md" />
            <img src="CABEZAL2.jpg" alt="cabezal1" className="w-full border border-custom1 rounded-md" />
          </div>
          <div className="md:w-full md:mr-4">
            <img src="CABEZAL1.jpg" alt="cabezal2" className="w-full border border-custom1 rounded-md ml-2" />
          </div>
        </div>
      </div>
        <hr className='w-11/12 mx-auto mt-5'/>
        <div>
          <p className='text-center my-3 text-3xl w-fit mx-auto'>
            Algunas de las relaciones disponibles son:
          </p>
          <div className="flex flex-col md:flex-row mb-10">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <h1 className='w-fit mx-auto my-3 font-bold text-2xl '>Cabezales Cardanicos reductores</h1>
              <div className="relative overflow-x-auto">
                <table className="w-8/12 md:w-11/12 text-lg text-white mx-auto">
                  <thead className="text-md bg-custom1 font-extrabold">
                        <tr>
                            <th scope="col" className="px-2 py-1 text-center border-r border-white">Denominación</th>
                            <th scope="col" className="px-2 py-1 text-center border-r border-white">Relaciones</th>
                        </tr>
                      </thead>
                      <tbody>
                      {cabezales.cabezales.map((cabezal, index)=>(
                        <tr key={index} className="bg-custom1/85">
                            <th scope="row" className="px-6 py-1 font-medium text-center border-r border-t border-white">{cabezal.denominacion}</th>
                            <td className="px-6 py-1 text-center border-r border-t border-white">{cabezal.relacion}</td>
                        </tr>
                      ))}
                      </tbody>
                </table>
              </div>
            </div>
            <div className="md:w-1/2">
              <h1 className='w-fit mx-auto my-3 font-bold text-2xl '>Multiplicadores</h1>
              <div className="relative overflow-x-auto">
                <table className="w-8/12 md:w-11/12 text-lg text-white mx-auto">
                  <thead className="text-md bg-custom1 font-extrabold">
                      <tr>
                          <th scope="col" className="px-2 py-1 text-center border-r border-white">Denominación</th>
                          <th scope="col" className="px-2 py-1 text-center border-r border-white">Relaciones</th>
                      </tr>
                  </thead>
                  <tbody>
                    {multiplicadores.multiplicadores.map((multiplicador, index)=>(
                      <tr key={index} className="bg-custom1/85">
                          <th scope="row" className="px-6 py-1 font-medium text-center border-r border-t border-white">{multiplicador.denominacion}</th>
                          <td className="px-6 py-1 text-center border-r border-t border-white">{multiplicador.relacion}</td>
                      </tr>
                    ))}
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>


    </div>
  )
}

export default Cabezales




