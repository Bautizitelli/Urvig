import React from 'react';
import TablaEmbragues from './Tablas/TablaEmbragues';
import TablaEmbraguesMecanicos from './Tablas/TablaEmbraguesMecanicos';
import TablaEmbraguesNeumaticos from './Tablas/TablaEmbraguesNeumaticos';
import TablaMecanicosMobile from './Tablas/TablaMecanicosMobile';
import TablaNeumaticosMobile from './Tablas/TablaNeumaticosMobile';
import { AiFillCaretRight } from 'react-icons/ai';

const Embragues = () => {

  const isMobile = window.innerWidth <= 768;

  return (
    <div>
      <div className='w-fit mx-auto p-6 my-2 text-center'>
        <h1 className='font-semibold text-3xl md:text-5xl'>Embragues industriales</h1>
      </div>
      <div className='w-11/12 mx-auto mt-4 mb-7 text-lg'>
        <p className='mb-3'>
          Diseñados para su colocación en motores industriales que tengan cubrevolante <span className='font-bold'>SAE</span> tamaños 1, 2, 3 y 4; para transmitir potencias de hasta 450 hp.
        </p>
        Los embragues <span className='font-bold'>Industriales URVIG </span> de discos múltiples son aptos para acoplar y desacoplar la potencia que recibe una gran variedad de mecanismos industriales desde un órgano motriz. <br />
        Los modelos para motores de combustión interna conforman una unidad integral con el motor. Son aplicables aún cuando el volante y cubrevolante no respondan a las normas estandar <span className='font-bold'>SAE</span>. <br />
        Consisten en un disco de fricción dentado acoplado a través de una corona anular al volante motriz que gira libremente entre los platos de fricción comandados desde una palanca a través de un sistema de levas. Durante el acoplamiento los platos ejercen sobre el disco una presión progresiva hasta anular el patinamiento y transferir así la potencia a la máquina comandada.
      </div>
      
      <div className="flex flex-col md:flex-row w-11/12 mx-auto">
        <div className="md:w-1/2 mb-5 md:mb-0">
          <p className='w-fit font-bold text-lg my-3'>Sus aplicaciones son:</p>
          <div className="flex flex-row w-full">
            <div className="basis-1/2 ">
              <ul className="text-lg font-medium flex flex-col flex-wrap nowrap">
                <li className="my-3 flex items-center py-3">
                  <AiFillCaretRight className='text-custom1'/>
                  <span className="ml-2">Equipos de bombeo AIB petróleo.</span>
                </li>
                <li className="my-3 flex items-center py-3">
                  <AiFillCaretRight className='text-custom1'/>
                  <span className="ml-2">Compresores de aire.</span>
                </li>
                <li className="my-3 flex items-center py-3">
                  <AiFillCaretRight className='text-custom1'/>
                  <span className="ml-2">Grupos electrógenos.</span>
                </li>
                <li className="my-3 flex items-center py-3">
                  <AiFillCaretRight className='text-custom1'/>
                  <span className="ml-2">Molinos trituradores.</span>
                </li>
                <li className="my-3 flex items-center py-3">
                  <AiFillCaretRight className='text-custom1'/>
                  <span className="ml-2">Agitadores.</span>
                </li>
              </ul>
            </div>
            <div className="basis-1/2">
              <ul className="text-lg font-medium ml-8 flex flex-col flex-wrap nowrap">
                <li className="my-3 flex items-center py-3">
                  <AiFillCaretRight className='text-custom1'/>
                  <span className="ml-2">Sopladores.</span>
                </li>
                <li className="my-3 flex items-center py-3">
                  <AiFillCaretRight className='text-custom1'/>
                  <span className="ml-2">Secadores de cereales.</span>
                </li>
                <li className="my-3 flex items-center py-3">
                  <AiFillCaretRight className='text-custom1'/>
                  <span className="ml-2">Máquinas agrícolas.</span>
                </li>
                <li className="my-3 flex items-center py-3">
                  <AiFillCaretRight className='text-custom1'/>
                  <span className="ml-2">Máquinas viales.</span>
                </li>
                <li className="my-3 flex items-center py-3">
                  <AiFillCaretRight className='text-custom1'/>
                  <span className="ml-2">Bombas centrífugas.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {isMobile ? ( <img src="tablaembraguesmobile.png" alt="" /> ) : ( <TablaEmbragues /> )}       
      </div>

      <div className="w-fit mx-auto p-6 my-2 text-center">
        <h1 className="font-semibold text-3xl md:text-5xl">Embrague TAE 955B</h1>
      </div>
      
      <div className="flex flex-col md:flex-row w-11/12 mx-auto">
        <div className="basis-full md:basis-1/2 m-1 border border-custom1 rounded-md">
          <img src="TAE955B.jpg" alt="" className='rounded-md' />
        </div>
        <div className="basis-full md:basis-1/2 m-1 border border-custom1 rounded-md">
          <img src="TAE955Bplano-4.3.png" alt="" className='rounded-md '/>
        </div>
      </div>
      <hr className='w-11/12 mx-auto my-4'/>

      <div className="w-fit mx-auto p-6 mt-10 text-center">
        <h1 className="font-semibold text-3xl md:text-5xl">Embrague TAE 903A</h1>
      </div>

      <div className="flex flex-col md:flex-row w-11/12 mx-auto">
        <div className="basis-full md:basis-1/2 m-1 border border-custom1 rounded-md">
          <img src="TAE903A.jpg" alt="" className='rounded-md' />
        </div>
        <div className="basis-full md:basis-1/2 m-1 border border-custom1 rounded-md">
          <img src="TAE903A4.3.png" alt="" className='rounded-md '/>
        </div>
      </div>

      <div className="w-fit mx-auto p-6 my-2 text-center">
        <h1 className="font-semibold text-3xl md:text-5xl">Otros planos relevantes:</h1>
      </div>

      <div className="flex flex-col md:flex-row w-11/12 mx-auto">
        <div className="basis-full md:basis-1/2 m-1 border border-custom1 rounded-md">
          <img src="TAE996A.jpg" alt="" className='rounded-md' />
        </div>
        <div className="basis-full md:basis-1/2 m-1 border border-custom1 rounded-md">
          <img src="TAE958A.jpg" alt="" className='rounded-md '/>
        </div>
      </div>
        <div className="w-fit mx-auto p-6 my-2 text-center">
          <h1 className="font-semibold text-3xl md:text-5xl">Embragues mecánicos:</h1>
        </div>   
        {isMobile ? ( <TablaMecanicosMobile /> ) : (<TablaEmbraguesMecanicos /> )}

        <div className="w-fit mx-auto p-6 my-2 text-center">
          <h1 className="font-semibold text-3xl md:text-5xl">Embragues neumaticos:</h1>
        </div>
        {isMobile ? ( <TablaNeumaticosMobile /> ) : ( <TablaEmbraguesNeumaticos /> )}

        <div className=''>
        <div className="w-fit mx-auto p-6 my-2 text-center">
          <h1 className="font-semibold text-3xl md:text-5xl">Plano embrague neumatico TAJ 915 C</h1>
        </div>
          <img src="TAJ915C.jpg" alt="" className='w-10/12 mx-auto border border-custom1 rounded-md my-5'/>
        </div>
    </div>
  );
}

export default Embragues;


