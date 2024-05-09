import React from 'react'

const ControlYMedicion = () => {
  return (
    <div>
      <div className="w-fit mx-auto p-6 my-2 text-center">
        <h1 className="font-bold text-2xl mt-6 md:text-3xl">Control y medición</h1>
      </div>
      <div className="w-11/12 mx-auto my-5 md:flex md:flex-row md:justify-between flex-col">
        <div className="basis-1/5 mx-2 my-2 md:w-auto">
            <div className="h-full bg-custom1 rounded-sm border border-black overflow-hidden hover:bg-custom1/90">
              <img className="rounded-t-sm" src="Brinell.jpg" alt="" />
              <div className="p-2 ">
                <h5 className="my-3 text-lg font-bold text-white">Brinell</h5>
              </div>
            </div>
          </div>
        <div className="basis-1/5 mx-2 my-2 md:w-auto">
            <div className="h-full bg-custom1 rounded-sm border border-black overflow-hidden hover:bg-custom1/90">
              <img className="rounded-t-sm" src="Controladora3.4.jpg" alt="" />
              <div className="p-2 ">
                <h5 className="my-3 text-lg font-bold text-white">Controladora Mahr</h5>
              </div>
            </div>
          </div>
        <div className="basis-1/5 mx-2 my-2 md:w-auto">
            <div className="h-full bg-custom1 rounded-sm border border-black overflow-hidden hover:bg-custom1/90">
              <img className="rounded-t-sm" src="Controlymedicion.jpg" alt="" />
              <div className="p-2 ">
                <h5 className="my-3 text-lg font-bold text-white">Sector de control</h5>
              </div>
            </div>
          </div>
        <div className="basis-1/5 mx-2 my-2 md:w-auto">
            <div className="h-full bg-custom1 rounded-sm border border-black overflow-hidden hover:bg-custom1/90">
              <img className="rounded-t-sm" src="Rockwell C.jpg" alt="" />
              <div className="p-2 ">
                <h5 className="my-3 text-lg font-bold text-white">Rockwell C</h5>
              </div>
            </div>
          </div>
        <div className="basis-1/5 mx-2 my-2 md:w-auto">
            <div className="h-full bg-custom1 rounded-sm border border-black overflow-hidden hover:bg-custom1/90">
              <img className="rounded-t-sm" src="Controladoraperfil3.4.jpg" alt="" />
              <div className="p-2 ">
                <h5 className="my-3 text-lg font-bold text-white">Controladora de perfil</h5>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ControlYMedicion