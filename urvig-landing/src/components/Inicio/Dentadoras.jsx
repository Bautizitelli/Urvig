import React from 'react'

const Dentadoras = () => {
  return (
    <div>
      <div className="w-fit mx-auto p-6 my-2 text-center">
        <h1 className="font-bold text-2xl mt-6 md:text-3xl">Maquinas dentadoras</h1>
      </div>

      <div className="w-11/12 mx-auto my-5 md:flex md:flex-row md:justify-between flex-col">

        <div className="basis-1/4 mx-2 my-2 md:w-auto">
            <div className="h-full bg-custom1 rounded-sm border border-black overflow-hidden hover:bg-custom1/90">
              <img className="rounded-t-sm" src="CHURCHILL-PH1612.jpeg" alt="" />
              <div className="p-2 ">
                <h5 className="my-3 text-lg font-bold text-white">Dentadora  Churchill - PH1612</h5>
              </div>
            </div>
          </div>

        <div className="basis-1/4 mx-2 my-2 md:w-auto">
            <div className="h-full bg-custom1 rounded-sm border border-black overflow-hidden hover:bg-custom1/90">
              <img className="rounded-t-sm" src="DEMN-400.jpg" alt="" />
              <div className="p-2 ">
                <h5 className="my-3 text-lg font-bold text-white">Dentadora DEMN - 400</h5>
              </div>
            </div>
          </div>

        <div className="basis-1/4 mx-2 my-2 md:w-auto">
            <div className="h-full bg-custom1 rounded-sm border border-black overflow-hidden hover:bg-custom1/90">
              <img className="rounded-t-sm" src="GLEASON WORK-NO.104.jpeg" alt="" />
              <div className="p-2 ">
                <h5 className="my-3 text-lg font-bold text-white">Dentadora Gleason Works - NO.104 STRAIGHT BEVEL CONIFLEX GENERATOR</h5>
              </div>
            </div>
          </div>

        <div className="basis-1/4 mx-2 my-2 md:w-auto">
            <div className="h-full bg-custom1 rounded-sm border border-black overflow-hidden hover:bg-custom1/90">
              <img className="rounded-t-sm" src="dentadoralf600-3.jpg" alt="" />
              <div className="p-2 ">
                <h5 className="my-3 text-lg font-bold text-white">Dentadora LORENZ - F600</h5>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Dentadoras