import React from 'react'
import { Link } from 'react-router-dom'

const LinksInicio = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };

  return (
    <div className='mb-5'>
        <div className='w-fit mx-auto p-3 my-2 text-center'>
            <h1 className='font-semibold text-xl md:text-3xl mt-2'>Explorá nuestra empresa</h1>
            <p className='mx-9 my-3 text-lg'>Descubre nuestra amplia gama de productos, diseñados para brindar rendimiento y durabilidad, así como nuestra historia y donde encontrarnos. Desde componentes industriales hasta productos personalizados, en URVIG encontrarás la calidad y el servicio que buscas.
            </p>
        </div>
        <div className="w-11/12 mx-auto md:flex md:flex-row md:justify-between flex-col">
      <div className="basis-1.3/12 my-5 mx-1 md:w-auto">
        <Link to='/empresa'>
          <div onClick={scrollToTop} className="max-w-sm bg-custom1 rounded-sm border border-black overflow-hidden transition-transform transform-gpu hover:scale-105 hover:shadow-md hover:bg-custom1/90">
            <img className="rounded-t-sm" src="historiacard.jpg" alt="" />
            <div className="py-6 ">
              <h5 className="my-3 text-xl font-bold text-white mx-auto w-fit">Historia</h5>
            </div>
          </div>
        </Link>
      </div>

      <div className="basis-1.3/12 my-5 mx-1 md:w-auto">
          <Link to='/transmisiones'>
            <div onClick={scrollToTop} className="max-w-sm bg-custom1 rounded-sm border border-black overflow-hidden transition-transform transform-gpu hover:scale-105 hover:shadow-md hover:bg-custom1/90">
              <img className="rounded-t-sm" src="Transmisionescard.jpg" alt="" />
              <div className="py-6 ">
                <h5 className="my-3 text-xl font-bold text-white mx-auto w-fit">Transmisiones</h5>
              </div>
            </div>
          </Link>
        </div>

        <div className="basis-1.3/12 my-5 mx-1 md:w-auto">
          <Link to='/embragues'>
            <div onClick={scrollToTop} className="max-w-sm bg-custom1 rounded-sm border border-black overflow-hidden transition-transform transform-gpu hover:scale-105 hover:shadow-md hover:bg-custom1/90">
              <img className="rounded-t-sm" src="embrague3dcard.png" alt="" />
              <div className="py-6 ">
                <h5 className="my-3 text-xl font-bold text-white mx-auto w-fit">Embragues</h5>
              </div>
            </div>
          </Link>
        </div>

        <div className="basis-1.3/12 my-5 mx-1 md:w-auto">
          <Link to='/reductores'>
            <div onClick={scrollToTop} className="max-w-sm bg-custom1 rounded-sm border border-black overflow-hidden transition-transform transform-gpu hover:scale-105 hover:shadow-md hover:bg-custom1/90">
              <img className="rounded-t-sm" src="cajascard.jpg" alt="" />
              <div className="py-6">
                <h5 className="my-3 text-xl font-bold text-white mx-auto w-fit">Reductores </h5>
              </div>
            </div>
          </Link>
        </div>

        <div className="basis-1.3/12 my-5 mx-1 md:w-auto">
        <Link to='/barredoras'>
          <div onClick={scrollToTop} className="max-w-sm bg-custom1 rounded-sm border border-black overflow-hidden transition-transform transform-gpu hover:scale-105 hover:shadow-md hover:bg-custom1/90">
            <img className="rounded-t-sm" src="barredorascard.jpg" alt="" />
            <div className="py-6 ">
              <h5 className="my-3 text-xl font-bold text-white mx-auto w-fit">Barredoras</h5>
            </div>
          </div>
        </Link>
      </div>

      <div className="basis-1.3/12 my-5 mx-1 md:w-auto">
          <Link to='/acoples'>
            <div onClick={scrollToTop} className="max-w-sm bg-custom1 rounded-sm border border-black overflow-hidden transition-transform transform-gpu hover:scale-105 hover:shadow-md hover:bg-custom1/90">
              <img className="rounded-t-sm" src="acoplecard.jpg" alt="" />
              <div className="py-6 ">
                <h5 className="my-3 text-xl font-bold text-white mx-auto w-fit">Acoples</h5>
              </div>
            </div>
          </Link>
        </div>

        <div className="basis-1.3/12 my-5 mx-1 md:w-auto">
          <Link to='/cabezales'>
            <div onClick={scrollToTop} className="max-w-sm bg-custom1 rounded-sm border border-black overflow-hidden transition-transform transform-gpu hover:scale-105 hover:shadow-md hover:bg-custom1/90">
              <img className="rounded-t-sm" src="cabezalescard.jpg" alt="" />
              <div className="py-6 ">
                <h5 className="my-3 text-lg font-bold text-white mx-auto w-fit">Cabezales</h5>
              </div>
            </div>
          </Link>
        </div>

        <div className="basis-1.3/12 my-5 mx-1 md:w-auto">
          <Link to='/trabajosespeciales'>
            <div onClick={scrollToTop} className="max-w-sm bg-custom1 rounded-sm border border-black overflow-hidden transition-transform transform-gpu hover:scale-105 hover:shadow-md hover:bg-custom1/90">
              <img className="rounded-t-sm" src="especiales5.jpg" alt="" />
              <div className="py-6">
                <h5 className="my-3 text-xl font-bold text-white mx-auto w-fit">Trabajos especiales </h5>
              </div>
            </div>
          </Link>
        </div>

        <div className="basis-1.3/12 my-5 mx-1 md:w-auto">
          <Link to='/contacto'>
            <div onClick={scrollToTop} className="max-w-sm bg-custom1 rounded-sm border border-black overflow-hidden transition-transform transform-gpu hover:scale-105 hover:shadow-md hover:bg-custom1/90">
              <img className="rounded-t-sm" src="contactocard.png" alt="" />
              <div className="py-6 ">
                <h5 className="my-3 text-xl font-bold text-white mx-auto w-fit">Contacto</h5>
              </div>
            </div>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default LinksInicio