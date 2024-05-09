import React from 'react'

const Rectificadoras = () => {
  return (
    <div>
      <div className="w-fit mx-auto p-6 my-2 text-center">
        <h1 className="font-bold text-2xl mt-6 md:text-3xl">Rectificadoras</h1>
      </div>
      <div className="w-11/12 mx-auto my-5 md:flex md:flex-row md:justify-between flex-col">
        <div className="basis-1/2 mx-2 my-2 md:w-auto">
            <div className="h-full bg-custom1 rounded-sm border border-black overflow-hidden hover:bg-custom1/90">
              <img className="rounded-t-sm" src="Rectificadora1.jpg" alt="" />
              <div className="p-2 ">
                <h5 className="my-3 text-lg font-bold text-white">Rectificadora interior SCHAUDT</h5>
              </div>
            </div>
          </div>
        <div className="basis-1/2 mx-2 my-2 md:w-auto">
            <div className="h-full bg-custom1 rounded-sm border border-black overflow-hidden hover:bg-custom1/90">
              <img className="rounded-t-sm" src="Rectificadora2.jpg" alt="" />
              <div className="p-2 ">
                <h5 className="my-3 text-lg font-bold text-white">Rectificadora exterior FORTUNA</h5>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Rectificadoras