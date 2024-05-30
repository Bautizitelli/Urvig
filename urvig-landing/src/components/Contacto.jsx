import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaRegEnvelope } from "react-icons/fa";
import mailgo from "mailgo";
import { useEffect } from 'react';

const Contacto = () => {
  useEffect(() => {
    mailgo({ lang: 'es' });
  }, []);
  
  return (
    <div className='mt-3'>
      <div className="flex justify-center">
        <h1 className='font-bold text-3xl md:text-5xl lg:text-7xl p-5'>Contacto</h1>
      </div>
      <div className="flex flex-col md:flex-row border-b-2">
        <div className="md:w-1/2 mx-1 p-6">
          <p className='text-lg md:text-2xl p-3 leading-relaxed font-semibold'>
            Podés escribirnos a través de los siguientes correos:
          </p>
          <hr className="md:hidden" />
          <div className="md:flex md:flex-col md:gap-2">
          <p className='text-base md:text-lg p-3 flex items-center'>
            <FaRegEnvelope className="mr-3" /> Ventas: <a href="mailto:ventasurvig@gmail.com" className='font-semibold ml-1'> ventasurvig@gmail.com</a>
          </p>
          <p className='text-base md:text-lg p-3 flex items-center'>
            <FaRegEnvelope className="mr-3" /> Ingeniería: <a href="mailto:ingenieriaurvig@gmail.com" className='font-semibold ml-1'> ingenieriaurvig@gmail.com</a>
          </p>
            <hr className="md:hidden" />
          </div>
          <hr className="md:hidden" />
          <p className='text-lg md:text-2xl p-3 leading-relaxed font-semibold'>
            Vía telefónica:
          </p>
          <hr className="md:hidden" />
          <p className='text-base md:text-lg p-3 font-semibold flex items-center'>
            <FaPhoneAlt className="mr-3" /> +54 9 342 455 4410/11/12
          </p>
          <p className='text-base md:text-lg p-3 font-semibold flex items-center'>
            <FaWhatsapp className="mr-3 h-6" />
            <a href="http://wa.link/8b2dtj" target="_blank" rel="noopener noreferrer">+54 9 342 5480961</a>
          </p>
          <hr className="md:hidden" />
          <p className='text-lg md:text-2xl p-3 leading-relaxed font-semibold'>
            Dirección:
          </p>
          <hr className="md:hidden" />
          <p className='text-base md:text-lg p-3 font-semibold'>
            Calle Sarmiento 2711 CP-3000 - Santa Fe (Capital) - Argentina. <br />
            <span>O haciendo clic en el mapa para acceder a la ubicación.</span>
          </p>
        </div>
        <div className="md:w-1/2 mx-auto">
          <a href="https://www.google.com.ar/maps/place/URVIG/@-31.6448812,-60.6971168,18z/data=!4m6!3m5!1s0x95b7aba6ed63a61b:0x4d2a2c66f1a49345!8m2!3d-31.6449303!4d-60.6955692!16s%2Fg%2F1tgfr991?entry=ttu" target="_blank" rel="noopener noreferrer">
            <img src="MapaUrvig3.png" alt="Mapa" className='w-full my-5 mx-auto'/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
