import React from 'react'
import relacionesJHF from '../../modelosCajas'

const TablaTransmisiones = () => {
  return (
    <div className="relative overflow-x-auto w-10/12 mx-auto">
             <div className=' py-4 mb-2 bg-custom1 text-center font-bold text-2xl text-white'>Relaciones JHF</div>
               <table className="w-full text-lg text-white">
                 <thead className="text-md bg-custom1 font-extrabold">
                 <tr>
                     <th scope="col" className="w-4/12 py-4 text-center border-r border-white">Denominación</th>
                     <th scope="col" className="w-4/12 py-4 text-center border-r border-white">Cantidad dientes</th>
                     <th scope="col" className="w-4/12 py-4 text-center border-r border-white">Relación en decimal</th>
                   </tr>
                 </thead>
                 <tbody className="text-md bg-custom1 ">
                     {relacionesJHF.relacionesJHF.map((transmision, index)=>(
                         <tr key={index} className="bg-custom1/85">
                             <td className="px-6 py-3 text-center border-r border-t border-white">{transmision.denominacion}</td>
                             <td className="px-6 py-3 text-center border-r border-t border-white">{transmision.dientes}</td>
                             <td className="px-6 py-3 text-center border-r border-t border-white">{transmision.decimal}</td>
                         </tr>
                     ))}
                 </tbody>
               </table>
             </div>
  )
}

export default TablaTransmisiones