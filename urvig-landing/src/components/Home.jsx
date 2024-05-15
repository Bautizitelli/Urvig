import React from 'react';
import MaquinariaCNC from './Inicio/MaquinariaCNC';
import Dentadoras from './Inicio/Dentadoras';
import Rectificadoras from './Inicio/Rectificadoras';
import TratamientoTermico from './Inicio/TratamientoTermico';
import ControlYMedicion from './Inicio/ControlYMedicion';
import OtrasMaquinas from './Inicio/OtrasMaquinas';
import ReactPlayer from 'react-player';
import LinksInicio from './Inicio/LinksInicio';


const Home = () => {
  return (
    <div>
      <picture>
        <source media="(max-width: 768px)" srcSet="bannerMobile2.jpg" />
        <source media="(min-width: 769px)" srcSet="bannerc.jpg" />
        <img src="bannerc.jpg" alt="" className='w-full' />
      </picture>
      <div className='w-fit mx-auto p-6 my-2 text-center'>
        <h1 className='font-semibold text-3xl md:text-5xl mb-5 mx-auto w-fit'>URVIG - Santa Fe</h1>
        <p className='mx-9 my-3 text-lg'>
          ¡Bienvenidos a URVIG! Somos una empresa metalúrgica con sede en Santa Fe, comprometida con la excelencia en la fabricación de productos de alta calidad. Nuestra pasión por la metalurgia nos impulsa a ofrecer soluciones innovadoras y confiables para satisfacer las necesidades de nuestros clientes.
        </p>
      </div>

      <LinksInicio />

      <div className='w-11/12 mx-auto p-1 my-2' style={{ height: '700px',width: '1400px', maxWidth: '100%', overflow: 'hidden' }}>
        <ReactPlayer
          url='https://vimeo.com/942136590?share=copy'
          width='100%'
          height='100%'
          playing
          controls
          volume={0.15}
          loop
          style={{ height: '100%', margin: 'auto' }}
        />
      </div>

      <div className="w-fit mx-auto p-6  text-center">
        <h1 className="font-bold text-3xl md:text-4xl">Nuestra maquinaria</h1>
        <h1 className=" text-2xl mt-3 md:text-2xl">Entre los equipos que disponemos, podemos destacar como más relevantes:</h1>
      </div>

      <MaquinariaCNC />
      <Dentadoras />
      <Rectificadoras />
      <TratamientoTermico />
      <ControlYMedicion />
      <OtrasMaquinas />
    </div>
  );
};

export default Home;

