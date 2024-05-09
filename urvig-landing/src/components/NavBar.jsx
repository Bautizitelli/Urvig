import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiFillCaretRight, AiOutlineEye } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(false);
  };
  const location = useLocation()

  return (
    <div className='bg-custom1 flex justify-between items-center h-24  w-screen px-4 text-white'>
      <img src="logoUrvig.png" className='h-20' alt="" />

      <ul className='hidden md:flex'>
   
        {location.pathname !== '/empresa' && (
        <Link to='/empresa'>
            <li className='p-4 flex items-center hover:bg-custom5 rounded-sm m-2 cursor-pointer duration-300 hover:text-black'>
            <span>Historia</span>
            </li>
        </Link>
        )}

        {location.pathname !== '/transmisiones' && (
        <Link to='/transmisiones'>
            <li className='p-4 flex items-center hover:bg-custom5 rounded-sm m-2 cursor-pointer duration-300 hover:text-black'>
            <span>Transmisiones</span>
            </li>
        </Link>
        )}

         {location.pathname !== '/embragues' && (
        <Link to='/embragues'>
            <li className='p-4 flex items-center hover:bg-custom5 rounded-sm m-2 cursor-pointer duration-300 hover:text-black'>
            <span>Embragues</span>
            </li>
        </Link>
        )}

         {location.pathname !== '/reductores' && (
        <Link to='/reductores'>
            <li className='p-4 flex items-center hover:bg-custom5 rounded-sm m-2 cursor-pointer duration-300 hover:text-black'>
            <span>Reductores</span>
            </li>
        </Link>
        )}

         {location.pathname !== '/barredoras' && (
        <Link to='/barredoras'>
            <li className='p-4 flex items-center hover:bg-custom5 rounded-sm m-2 cursor-pointer duration-300 hover:text-black'>
            <span>Barredoras</span>
            </li>
        </Link>
        )}


         {location.pathname !== '/acoples' && (
        <Link to='/acoples'>
            <li className='p-4 flex items-center hover:bg-custom5 rounded-sm m-2 cursor-pointer duration-300 hover:text-black'>
            <span>Acoples</span>
            </li>
        </Link>
        )}


         {location.pathname !== '/cabezales' && (
        <Link to='/cabezales'>
            <li className='p-4 flex items-center hover:bg-custom5 rounded-sm m-2 cursor-pointer duration-300 hover:text-black'>
            <span>Cabezales de bombeo</span>
            </li>
        </Link>
        )}

         {location.pathname !== '/trabajosespeciales' && (
        <Link to='/trabajosespeciales'>
            <li className='p-4 flex items-center hover:bg-custom5 rounded-sm m-2 cursor-pointer duration-300 hover:text-black'>
            <span>Trabajos especiales</span>
            </li>
        </Link>
        )}

        {location.pathname !== '/contacto' && (
        <Link to='/contacto'>
            <li className='p-4 flex items-center hover:bg-custom5 rounded-sm m-2 cursor-pointer duration-300 hover:text-black'>
            <span>Contacto</span>
            </li>
        </Link>
        )}

         {location.pathname !== '/' && (
        <Link to='/'>
            <li className='p-4 flex items-center hover:bg-custom5 rounded-sm m-2 cursor-pointer duration-300 hover:text-black'>
            <span>Inicio</span>
            </li>
        </Link>
        )}
      </ul>

      <div onClick={handleNav} className='absolute top-0 right-0 mx-6 my-10 md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 md:hidden ${nav ? 'block backdrop-blur-sm' : 'hidden'}`}
        onClick={handleNav}
        ></div>

      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-black bg-custom1 ease-in-out duration-500 z-10'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        <img src="logoUrvig.png" className='h-20 mx-auto my-2' alt="" />
        <Link to='/empresa' onClick={closeNav}>
            <li className='p-4 border-b hover:bg-custom5 duration-300 hover:text-black cursor-pointer border-custom5'>
                Historia
            </li>
        </Link>      
        <Link to='/transmisiones' onClick={closeNav}>
            <li className='p-4 border-b hover:bg-custom5 duration-300 hover:text-black cursor-pointer border-custom5'>
                Transmisiones
            </li>
        </Link>     
        <Link to='/embragues' onClick={closeNav}>
            <li className='p-4 border-b hover:bg-custom5 duration-300 hover:text-black cursor-pointer border-custom5'>
                Embragues
            </li>
        </Link> 
        <Link to='/reductores' onClick={closeNav}>
            <li className='p-4 border-b hover:bg-custom5 duration-300 hover:text-black cursor-pointer border-custom5'>
                Reductores
            </li>
        </Link>
        <Link to='/barredoras' onClick={closeNav}>
            <li className='p-4 border-b hover:bg-custom5 duration-300 hover:text-black cursor-pointer border-custom5'>
                Barredoras
            </li>
        </Link>
        <Link to='/acoples' onClick={closeNav}>
            <li className='p-4 border-b hover:bg-custom5 duration-300 hover:text-black cursor-pointer border-custom5'>
                Acople hidrostático
            </li>
        </Link>
        <Link to='/cabezales' onClick={closeNav}>
            <li className='p-4 border-b hover:bg-custom5 duration-300 hover:text-black cursor-pointer border-custom5'>
                Cabezales de bombeo
            </li>
        </Link>
        <Link to='/trabajosespeciales' onClick={closeNav}>
            <li className='p-4 border-b hover:bg-custom5 duration-300 hover:text-black cursor-pointer border-custom5'>
                Trabajos especiales
            </li>
        </Link>
        <Link to='/contacto' onClick={closeNav}>
            <li className='p-4 border-b hover:bg-custom5 duration-300 hover:text-black cursor-pointer border-custom5'>
                Contacto
            </li>
        </Link>
        <Link to='/' onClick={closeNav}>
            <li className='p-4 border-b hover:bg-custom5 duration-300 hover:text-black cursor-pointer border-custom5'>
                Inicio
            </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;