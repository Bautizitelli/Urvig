import React from 'react'
import embraguesIndustriales from '../../modelosCajas'

const TablaEmbragues = () => {
  return (
    <div className=' mx-auto'>
      <div className=" overflow-x-auto">
        <div className="flex flex-row bg-custom1 text-white border-white text-center font-extrabold text-lg">
            <div className="basis-2/12 p-2 border-r flex items-center justify-center">Cantidad de discos - tamaño</div>
            <div className="basis-2/12 p-2 border-r flex items-center justify-center">Cubrevolante SAE N°</div>
            <div className="basis-2/12 p-2 flex items-center border-r justify-center">Maxima cupla recomendada mKg</div>
            <div className="basis-4/12 p-2 border-r border-b flex items-center justify-center">Máxima potencia motriz recomendada hp servicio</div>
            <div className="basis-2/12 p-2 border-r flex items-center justify-center">Máxima velocidad de operacion R.P.M.</div>
        </div>
          <table className="w-full text-lg text-white">
              <thead className="text-md bg-custom1 font-extrabold">
                <tr>
                    <th scope="col" className="w-2/12 py-2 text-center"></th>
                    <th scope="col" className="w-2/12 py-2 text-center border-l border-r border-white"></th>
                    <th scope="col" className="w-2/12 py-2 text-center"></th>
                    <th scope="col" className="w-1.4/12 py-2 text-center border-l border-white">Liviano</th>
                    <th scope="col" className="w-1.3/12 py-2 text-center border-l border-white">Normal</th>
                    <th scope="col" className="w-1.3/12 py-2 text-center border-l border-white">Pesado</th>
                    <th scope="col" className="w-2/12 py-2 text-center border-l border-white"></th>
                </tr>
              </thead>
              <tbody>
              {embraguesIndustriales.embraguesIndustriales.map((embrague, index)=>(
                         <tr key={index} className="bg-custom1/85 border-white text-center">
                             <td className="px-6 py-2 border-r border-t">{embrague.cantidad}</td>
                             <td className="px-6 py-2 border-r border-t">{embrague.cubrevolante}</td>
                             <td className="px-6 py-2 border-r border-t">{embrague.cupla}</td>
                             <td className="px-6 py-2 border-r border-t">{embrague.liviano}</td>
                             <td className="px-6 py-2 border-r border-t">{embrague.normal}</td>
                             <td className="px-6 py-2 border-r border-t">{embrague.pesado}</td>
                             <td className="px-6 py-2 border-r border-t">{embrague.rpm}</td>
                         </tr>
                     ))}
              </tbody>
          </table>
      </div>
    </div>
  )
}

export default TablaEmbragues



