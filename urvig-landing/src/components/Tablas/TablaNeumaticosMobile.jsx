import React from 'react'
import tomasNeumaticas from '../../modelosCajas'
import embraguesNeumaticos from '../../modelosCajas'

const TablaNeumaticosMobile = () => {
  return (
    <div>
        <div className="flex flex-row bg-custom1 text-white border-b border-white w-11/12 mx-auto">
            <div className="w-fit mx-auto font-extrabold text-lg py-2 ">Tomas de fuerza neumáticas URVIG</div>
        </div>
        <div className="flex flex-row bg-custom1 text-white border-b border-white w-11/12 mx-auto">
            <div className="basis-1/2 text-center font-extrabold text-lg py-2 border-r border-white">Motor</div>
            <div className="basis-1/2 text-center font-extrabold text-lg py-2 border-l border-r border-white">Embragues neumáticos URIVG</div>
        </div>
        <table className='w-11/12 mx-auto text-white mt-1 mb-5'>
            <thead className="text-md bg-custom1 font-extrabold">
                <tr>
                    <th scope="col" className="w-2/12 py-2 text-center border-r border-white"> Marca</th>
                    <th scope="col" className="w-4/12 py-2 text-center border-r border-white">Modelo</th>
                    <th scope="col" className="w-1/12 py-2 text-center border-r border-white">SAE</th>
                    <th scope="col" className="w-2/12 py-2 text-center border-r border-white">Discos</th>
                    <th scope="col" className="w-3/12 py-2 text-center">Código</th>
               </tr>
            </thead>
            <tbody className="text-md bg-custom1 w-11/12 mx-auto">
                {tomasNeumaticas.tomasNeumaticas.map((embrague, index)=>(
                    <tr key={index} className="bg-custom1/85">
                        <td className={`px-1 py-2 text-center border-r ${embrague.marca === '' ? '' : 'border-t border-white'}`}>
                           {embrague.marca === '' ? '' : embrague.marca}
                        </td>
                        <td className="px-1 py-2 text-center border-r border-t border-white">{embrague.modelo  === '' ? '' : embrague.modelo}</td>
                        <td className="px-1 py-2 text-center border-r border-t border-white">{embrague.sae  === '' ? '' : embrague.sae}</td>
                        <td className="px-1 py-2 text-center border-r border-t border-white">{embrague.discos  === '' ? '' : embrague.discos}</td>
                        <td className="px-1 py-2 text-center border-r border-t border-white">{embrague.codigo  === '' ? '' : embrague.codigo}</td>
                    </tr>
                     ))}
            </tbody>
        </table>
        <div className="flex flex-row bg-custom1 text-white border-b border-white w-11/12 mx-auto">
            <div className="w-fit mx-auto font-extrabold text-lg py-2 ">Embragues neumáticos secundarios URVIG</div>
        </div>
        <div className="flex flex-row bg-custom1 text-white border-b border-white w-11/12 mx-auto mt-1">
            <div className="basis-3/12 text-center font-extrabold text-lg py-2 border-r border-white">Código</div>
            <div className="basis-4/12 text-center font-extrabold text-lg py-2 border-l border-r border-white">Sector</div>
            <div className="basis-5/12 text-center font-extrabold text-lg py-2 border-l border-r border-white">Caracteristicas</div>
        </div>
        <table className='w-11/12 mx-auto text-white'>
            <thead className="text-md bg-custom1 font-extrabold">
                <tr>
                    <th scope="col" className="w-3/12 py-2 text-center"></th>
                    <th scope="col" className="w-2/12 py-2 text-center border-l border-r border-white">Cant.</th>
                    <th scope="col" className="w-2/12 py-2 text-center">Pulg.</th>
                    <th scope="col" className="w-6/12 py-2 text-center border-l border-white"></th>
                </tr>
            </thead>
            <tbody className="text-md bg-custom1 w-11/12 mx-auto">
                {embraguesNeumaticos.embraguesNeumaticos.map((embrague, index)=>(
                    <tr key={index} className="bg-custom1/85">
                        <td className="px-1 py-2 text-center border-r border-t border-white">{embrague.codigo}</td>
                        <td className="px-1 py-2 text-center border-r border-t border-white">{embrague.cant}</td>
                        <td className="px-1 py-2 text-center border-r border-t border-white">{embrague.pulg}</td>
                        <td className="px-1 py-2 text-center border-r border-t border-white">{embrague.caracteristicas}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default TablaNeumaticosMobile