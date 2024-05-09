import React from 'react';
import embraguesMecanicos1 from '../../modelosCajas';
import embraguesMecanicos2 from '../../modelosCajas';

const TablaEmbraguesMecanicos = () => {
  return (
    <div className="flex flex-col md:flex-row w-11/12 mx-auto">
      <div className="basis-1/2 w-full mx-3 my-5">
      <div className="basis-1/2 w-full mx-3 my-5 ">
             <div className="relative overflow-x-auto">
             <div className="flex flex-row bg-custom1 text-white border-b border-white">
               <div className="basis-1/2 text-center font-extrabold text-xl py-2  border-white">Motor</div>
               <div className="basis-1/2 text-center font-extrabold text-xl py-2 border-l  border-white">Embragues industriales Urvig</div>
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
                     {embraguesMecanicos1.embraguesMecanicos1.map((embrague, index)=>(
                         <tr key={index} className="bg-custom1/85">
                             <td className={`px-6 text-center border-r ${embrague.marca === '' ? '' : 'border-t border-white'}`}>
                                 {embrague.marca === '' ? '' : embrague.marca}
                             </td>
                             <td className="px-6 py-1 text-center border-r border-t border-white">{embrague.modelo  === '' ? '' : embrague.modelo}</td>
                             <td className="px-6 py-1 text-center border-r border-t border-white">{embrague.sae  === '' ? '' : embrague.sae}</td>
                             <td className="px-6 py-1 text-center border-r border-t border-white">{embrague.discos  === '' ? '' : embrague.discos}</td>
                             <td className="px-6 py-1 text-center border-t border-white">{embrague.codigo  === '' ? '' : embrague.codigo}</td>
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
             <div className="flex flex-row bg-custom1 text-white border-b border-white">
               <div className="basis-1/2 text-center font-extrabold text-xl py-2 border-r border-white">Motor</div>
               <div className="basis-1/2 text-center font-extrabold text-xl py-2 border-r border-white">Embragues industriales Urvig</div>
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
                     {embraguesMecanicos2.embraguesMecanicos2.map((embrague, index)=>(
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
      </div>
    </div>
  );
};

export default TablaEmbraguesMecanicos;


