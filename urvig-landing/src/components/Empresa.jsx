import React from 'react';

const Empresa = () => {
  return (
    <div className=' p-2'>
      <div className='m-6'>
        <h1 className='font-bold text-4xl md:text-7xl w-full text-center p-5'>La empresa</h1>
        <p className='text-lg md:text-xl py-3 leading-relaxed'>
          La historia de Urvig se remonta al año 1946, cuando luego de la 2da Guerra Mundial, se interrumpió el ingreso de insumos industriales al país, iniciándose de este modo un proceso de sustitución de importaciones que atendiese las necesidades locales.
          Fué así, que el señor Urvano Vignolo, fundador de esta empresa que lleva su nombre, siendo propietario de un taller mecánico de reparaciones, se aboca a la fabricación de piezas mecánicas requeridas por la actividad agrícola-ganadera de la región y el país. Las primeras piezas fabricadas fueron: molinos, máquinas de corta-trilla, bombas de riego y arados, entre otros.
          En la década del 50´, la empresa se asocia con fabricantes de cosechadoras locales, creándose "Establecimientos Industriales Urvig S.R.L.", lo que requirió la incorporación de maquinarias específicas y personal calificado. Es así que la empresa inicia la construcción y fabricación de transmisiones de velocidad y embragues para cosechadoras automotrices.
        </p>
        <hr className='p-2' />
        <div className="flex flex-col md:flex-row">
          <div className="basis-1/2">
            <img src="urvighistoria1.jpg" alt="" className='w-full md:w-11/12 mx-auto'/>
          </div>
          <div className="basis-1/2 md:ml-6">
            <p className='text-lg md:text-xl leading-relaxed'>
              En la década del 60´, en pleno auge y desarrollo de la industria nacional, la empresa realiza importantes inversiones con el aporte de nuevos capitales, transformándose en empresa proveedora de las más destacadas fábricas de cosechadoras, tales como: Juan y Emilio Senor, Metalúrgica Magnano, Daniel Alasia y Rotania, entre otros. La empresa adopta la forma jurídica de "Industrias Urvig S.A.".
            </p>
            <img src="urvighistoria2.jpg" alt="" className='w-full md:w-11/12 mx-auto mt-9'/>
          </div>
        </div>
        <hr className='m-5'/>
        <div className="flex flex-col md:flex-row">
          
          <div className="basis-1/2 mt-6 md:mt-0 md:order-1 flex justify-center items-center">
            <p className='text-lg md:text-xl leading-relaxed '>
              Esta empresa supo adaptarse a los incontrolables cambios de la economía nacional, y en el año 1996 modificó la personería a URVIG S.R.L. frente a nuevas oportunidades en el mercado argentino, superando ampliamente las expectativas de las industrias, gracias a la prolongada experiencia en el desarrollo de insumos para cosechadoras automotrices. La empresa se perfecciona cada vez más, adecuándose a las nuevas tecnologías aplicadas a la industria agrícola, desarrollando:
              <br />
              - Puentes delanteros con reductores.
              <br />
              - Embragues mecánicos, neumáticos e hidráulicos.
              <br />
              - Puentes traseros para dotar doble tracción.
              <br />
              - Cajas escuadras para la transmisión de movimientos, según la prestación requerida.
            </p>
          </div>
          <div className="basis-1/2 md:order-2">
            <img src="frenteUrvig2.jpg" alt="" className='w-full md:w-10/12 mx-auto'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empresa;
