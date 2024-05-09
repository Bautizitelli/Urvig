import React from 'react'

const TratamientoTermico = () => {
  return (
    <div>
      <div className="w-fit mx-auto p-6 my-2 text-center">
        <h1 className="font-bold text-2xl mt-6 md:text-3xl">Tratamiento termico C.T.R.</h1>
      </div>
      <div className="w-11/12 mx-auto my-5 md:flex md:flex-row md:justify-between flex-col">
        <div className="basis-4/5 mx-2 my-2 md:w-auto">
            <div className="h-full bg-custom1 rounded-sm border border-black overflow-hidden hover:bg-custom1/90">
              <img className="rounded-t-sm" src="HornosA.jpg" alt="" />
              <div className="p-2 ">
                <h5 className="my-3 text-lg font-bold text-white">Hornos Boehler</h5>
              </div>
            </div>
          </div>
        <div className="basis-4/5 mx-2 my-2 md:w-auto">
            <div className="h-full bg-custom1 rounded-sm border border-black overflow-hidden hover:bg-custom1/90">
              <img className="rounded-t-sm" src="Hornosc.jpg" alt="" />
              <div className="p-2 ">
                <h5 className="my-3 text-lg font-bold text-white">Hornos Boehler</h5>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default TratamientoTermico