import React from 'react'
import tomasNeumaticas from '../../modelosCajas'
import embraguesNeumaticos from '../../modelosCajas'

const TablaEmbraguesNeumaticos = () => {
  return (
    <div className="flex flex-col md:flex-row w-11/12 mx-auto">
      <div className="basis-1/2 w-full mx-3 my-5">
      <div className="basis-1/2 w-full mx-3 my-5 ">
             <div className="relative overflow-x-auto">
             <div className=' py-4 mb-2 bg-custom1 text-center font-bold text-2xl text-white'>Tomas de fuerza neumáticas Urvig</div>
             <div className="flex flex-row bg-custom1 text-white border-b border-white">
               <div className="basis-1/2 text-center font-extrabold text-xl py-2 border-r border-white">Motor</div>
               <div className="basis-1/2 text-center font-extrabold text-xl py-2 border-l border-white">Embragues neumáticos Urvig</div>
             </div>
             <div className="flex flex-row bg-custom1 text-custom1 border-b border-white">
               <div className="basis-1/2 text-center font-extrabold text-xl py-2">a</div>
               <div className="basis-1/2 text-center font-extrabold text-xl py-2"></div>
             </div>

               <table className="w-full text-lg text-white">
                 <thead className="text-md bg-custom1 font-extrabold">
                 <tr>
                     <th scope="col" className="w-2/12 py-2 text-center border-r border-white"> Marca</th>
                     <th scope="col" className="w-4/12 py-2 text-center border-r border-white">Modelo</th>
                     <th scope="col" className="w-1/12 py-2 text-center border-r border-white">SAE</th>
                     <th scope="col" className="w-2/12 py-2 text-center border-r border-white">Discos</th>
                     <th scope="col" className="w-3/12 py-2 text-center">Código</th>
                   </tr>
                 </thead>
                 <tbody className="text-md bg-custom1 ">
                     {tomasNeumaticas.tomasNeumaticas.map((embrague, index)=>(
                         <tr key={index} className="bg-custom1/85">
                             <td className={`px-6 text-center border-r ${embrague.marca === '' ? '' : 'border-t border-white'}`}>
                                 {embrague.marca === '' ? '' : embrague.marca}
                             </td>
                             <td className="px-6 py-1 text-center border-r border-t border-white">{embrague.modelo  === '' ? '' : embrague.modelo}</td>
                             <td className="px-6 py-1 text-center border-r border-t border-white">{embrague.sae  === '' ? '' : embrague.sae}</td>
                             <td className="px-6 py-1 text-center border-r border-t border-white">{embrague.discos  === '' ? '' : embrague.discos}</td>
                             <td className="px-6 py-1 text-center border-r border-t border-white">{embrague.codigo  === '' ? '' : embrague.codigo}</td>
                         </tr>
                     ))}
                 </tbody>
               </table>
             </div>
           </div>
      </div>
      <div className="basis-1/2 w-full mx-3 my-5">
      <div className="basis-1/2 w-full mx-3 my-5">
      <div className="basis-1/2 w-full mx-3 my-5 ">
             <div className="relative overflow-x-auto">
             <div className=' py-4 mb-2 bg-custom1 text-center font-bold text-2xl text-white'>Embragues neumáticos secundarios Urvig</div>
             <div className='border-b border-white py-2 bg-custom1 text-center font-extrabold text-xl text-white'>Embragues neumáticos Urvig</div>
             <div className="flex flex-row bg-custom1 text-white border-b border-white">
               <div className="basis-3/12 text-center font-extrabold text-xl py-2 border-r border-white">Código</div>
               <div className="basis-3/12 text-center font-extrabold text-xl py-2 border-l border-white">Sector</div>
               <div className="basis-6/12 text-center font-extrabold text-xl py-2 border-l border-white">Caracteristicas</div>
             </div>
               <table className="w-full text-lg text-white">
                 <thead className="text-md bg-custom1 font-extrabold">
                  <tr>
                     <th scope="col" className="w-3/12 py-2 text-center"></th>
                     <th scope="col" className="w-1.5/12 py-2 text-center border-l border-r border-white">Cant.</th>
                     <th scope="col" className="w-1.5/12 py-2 text-center">Pulg.</th>
                     <th scope="col" className="w-6/12 py-2 text-center border-l border-white"></th>
                   </tr>
                 </thead>
                 <tbody className="text-md bg-custom1 font-extrabold">
                 </tbody>
                 <tbody className="text-md bg-custom1 ">
                     {embraguesNeumaticos.embraguesNeumaticos.map((embrague, index)=>(
                         <tr key={index} className="bg-custom1/85">
                             <td className="px-6 py-1 text-center border-r border-t border-white">{embrague.codigo}</td>
                             <td className="px-6 py-1 text-center border-r border-t border-white">{embrague.cant}</td>
                             <td className="px-6 py-1 text-center border-r border-t border-white">{embrague.pulg}</td>
                             <td className="px-6 py-1 text-center border-r border-t border-white">{embrague.caracteristicas}</td>
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

export default TablaEmbraguesNeumaticos