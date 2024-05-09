import { useState } from 'react';
import { AiFillCaretRight } from 'react-icons/ai';
import Carousel from './Carousel';
import '../App.css'
import modelos from '../modelosCajas';

const Reductores = () => {
  
  const imagenes = [
    'red1.jpg',
    'red2.jpg',
    'red3.jpg',
    'red4.jpg',
    'red5.jpg',
    'red6.jpg',
    'red7.jpg',
  ];

  const planos = [
    'redREA906A.png',
    'REA909A.png',
    'REA907A.png',
    'RMV900C.png',
    'REA901C.png'
  ]


  const [completa, setCompleta] = useState(false);
  const toggleCompleta = () => {
    setCompleta(!completa);
  }

  return (
    <div className="my-2">
      <div className="w-fit mx-auto p-6 my-2 text-center">
        <h1 className="font-semibold text-3xl md:text-5xl">Reductores epicicloidales</h1>
      </div>
      <p className='text-xl p-4 px-6'>
        Los reductores epicicloidales son dispositivos de transmisión de potencia que se utilizan para reducir la velocidad de rotación de un eje de entrada a un eje de salida.
        Se componen de un conjunto de engranajes dispuestos de manera concéntrica alrededor de un engranaje central, conocido como portasatélites, que gira alrededor de un engranaje fijo, llamado engranaje solar. Esto crea diferentes relaciones de velocidad de salida en función de la configuración y disposición de los engranajes.
      </p>
      <div className='w-11/12 mx-auto my-5 text-lg'>
        <div className="flex flex-row pb-5">
          <div className="basis-1/2">
           <div className='w-11/12 mx-auto mt-5 text-lg'>
            <p className='text-3xl font-semibold py-1 mb-4 w-fit mx-auto'>Características principales:</p>
            <ul className="text-xl font-medium">
              <li className="my-2 flex items-center py-2">
                <AiFillCaretRight />
                <span className="ml-2">Compactos: diseño compacto que permite una alta relación de reducción en un espacio reducido.</span>
              </li>
              <li className="my-2 flex items-center py-2">
                <AiFillCaretRight />
                <span className="ml-2">Eficientes: transmisión eficiente de potencia con baja pérdida de energía.</span>
              </li>
              <li className="my-2 flex items-center py-2">
                <AiFillCaretRight />
                <span className="ml-2">Versátiles: permiten configuraciones de velocidad de salida y relación de reducción variables.</span>
              </li>
              <li className="my-2 flex items-center py-2">
                <AiFillCaretRight />
                <span className="ml-2">Robustos: adecuados para aplicaciones industriales pesadas.</span>
              </li>
              <li className="my-2 flex items-center py-2">
                <AiFillCaretRight />
                <span className="ml-2">Precisos: proporcionan una precisión de velocidad y control de movimiento.</span>
              </li>
              <li className="my-2 flex items-center py-2">
                <AiFillCaretRight />
                <span className="ml-2">Silenciosos: funcionamiento suave y silencioso en comparación con otros tipos de reductores.</span>
              </li>
            </ul>
          </div>
        
        </div>
        <div className="basis-1/2">
        <div className='w-11/12 mx-auto mt-5 text-lg'>
        <p className='text-3xl font-semibold py-1 mb-4 w-fit mx-auto'>Aplicaciones generales en la industria:</p>
          <ul className="text-xl font-medium">
            <li className="my-1 flex items-center py-2">
              <AiFillCaretRight />
              <span className="ml-2">Maquinaria agrícola</span>
            </li>
            <li className="my-2 flex items-center py-2">
              <AiFillCaretRight />
              <span className="ml-2">Automotriz</span>
            </li>
            <li className="my-2 flex items-center py-2">
              <AiFillCaretRight />
              <span className="ml-2">Energías renovables</span>
            </li>
            <li className="my-2 flex items-center py-2">
              <AiFillCaretRight />
              <span className="ml-2">Industria Marítima</span>
            </li>
            <li className="my-2 flex items-center py-2">
              <AiFillCaretRight />
              <span className="ml-2">Minería</span>
            </li>
          </ul>
      </div>
        </div>
      </div>
      </div>

      <div className="md:flex md:flex-row md:justify-between py-1">
        <div className="md:w-1/2 my-2 mx-3">
          <Carousel imagenes={imagenes} />
        </div>
        <div className="md:w-1/2 my-2 mx-3 bg-white">
          <Carousel imagenes={planos} />
        </div>
      </div>



      <div className="w-fit mx-auto p-6 my-2 text-center">
        <h1 className="font-semibold text-3xl md:text-5xl">Algunos planos relevantes:</h1>
      </div>
      
      <div className="flex flex-col md:flex-row mt-5 mx-2">
        <div className="basis-full md:basis-1/5 m-1 border border-custom1 rounded-md duration-300 md:hover:translate-x-[3.5rem]">
          <img src="1redCAI901A.jpg" alt="" className='rounded-md transition-transform duration-300 md:hover:scale-125 md:hover:border border-black'/>
        </div>
        <div className="basis-full md:basis-1/5 m-1 border border-custom1 rounded-md">
          <img src="1redCAI902A.jpg" alt="" className='rounded-md transition-transform duration-300 md:hover:scale-125 md:hover:border border-black'/>
        </div>
        <div className="basis-full md:basis-1/5 m-1 border border-custom1 rounded-md">
          <img src="1redCAI903A.jpg" alt="" className='rounded-md p-3 bg-white transition-transform duration-300 md:hover:scale-125 md:hover:border border-black'/>
        </div>
        <div className="basis-full md:basis-1/5 m-1 border border-custom1 rounded-md">
          <img src="1redJHG927B.jpg" alt="" className='rounded-md p-3 bg-white transition-transform duration-300 md:hover:scale-125 md:hover:border border-black'/>
        </div>
        <div className="basis-full md:basis-1/5 m-1 border border-custom1 rounded-md duration-300 md:hover:translate-x-[-3.5rem]">
          <img src="redRAA911C.png" alt="" className='rounded-md transition-transform md:hover:scale-125 md:hover:border border-black'/>
        </div>
      </div>


      <div className="w-fit mx-auto p-6 my-2 text-center">
        <h1 className="font-semibold text-3xl md:text-5xl">Cajas de ejes paralelos</h1>
      </div>
      <div className="md:flex md:flex-row md:justify-between w-11/12 mx-auto my-5">
        <div className="md:w-1/2 text-lg p-5 mx-2">
          <p>
            Cajas Reductoras o Multiplicadores URVIG S.R.L. a engranajes cilíndricos helicoidales con potencias de 15 HP, 30 HP y 45 HP.
          </p>
          <p>
            Todos sus componentes han sido diseñados con un amplio margen de seguridad para garantizar una prolongada vida útil en condiciones normales de uso, y poder absorber las sobrecargas momentáneas que puedan producirse.
          </p>
          <p className='py-2 font-bold'>Algunas de sus características son:</p>
          <ul className="text-lg font-medium">
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
          <div>
            <img src="folletocajas.jpg" alt="" className='border border-custom1 rounded-md mt-5'/>
          </div>
        </div>

        <div className="md:w-1/2 md:mt-0 mt-4">
          <div className="relative overflow-x-auto">
            <table className="w-8/12 text-lg text-white mx-auto">
              <thead className="text-md bg-custom1 font-extrabold">
                    <tr>
                      <th scope="col" className="w-5/12 px-2 py-1 text-center border-r border-white">Denominación</th>
                      <th scope="col" className="w-4/12 px-2 py-1 text-center border-r border-white">Relaciones</th>
                      <th scope="col" className="w-3/12 px-2 py-1 text-center border-r border-white">HP</th>
                    </tr>
                </thead>
                <tbody>
                  {modelos.modelos.map((modelo, index)=>(
                    <tr key={index} className="bg-custom1/85">
                        <th scope="row" className="px-6 py-1 font-medium text-center border-r border-t border-white">{modelo.denominacion}</th>
                        <td className="px-6 py-1 text-center border-r border-t border-white">{modelo.relaciones}</td>
                        <td className="px-6 py-1 text-center border-r border-t border-white">{modelo.hp}</td>
                    </tr>
                  ))}
                </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-11/12 mx-auto">
        <div className="basis-1/2 m-2">
          <img src="caja1-5.4.jpg" alt="" className='border border-custom1 rounded-md' />
        </div>
        <div className="basis-1/2 m-2">
          <img src="caja2-5.4.jpg" alt="" className='border border-custom1 rounded-md'/>
        </div>
      </div>

      <div className="w-fit mx-auto p-6 my-2 text-center">
        <h1 className="font-semibold text-3xl md:text-5xl">Otros planos relevantes:</h1>
      </div>

      <div className="flex flex-col md:flex-row mb-16 ">
        <div className="basis-full md:basis-2/6 border border-custom1 rounded-md p-2 bg-white mx-1 mb-2 md:mb-0 duration-300 md:hover:translate-x-[4.1rem]">
          <img src="JMA906.png" alt="" className='rounded-md transition-transform duration-300 md:hover:scale-125 md:hover:border border-black'/>
        </div>
        <div className="basis-full md:basis-2/6 border border-custom1 rounded-md p-2 bg-white mx-1 mb-2 md:mb-0">
          <img src="JMA905A.jpg" alt="" className='rounded-md transition-transform duration-300 md:hover:scale-125 md:hover:border border-black'/>
        </div>
        <div className="basis-full md:basis-2/6 border border-custom1 rounded-md p-2 bg-white mx-1 mb-2 md:mb-0 duration-300 md:hover:translate-x-[-4.1rem]">
          <img src="JMA907A.png" alt="" className='rounded-md transition-transform duration-300 md:hover:scale-125 md:hover:border border-black'/>
        </div>
      </div>

    </div>
  );
};

export default Reductores;