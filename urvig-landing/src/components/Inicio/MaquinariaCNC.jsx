import React from 'react'

const MaquinariaCNC = () => {
  return (
    <div>
        <div className="w-fit mx-auto p-6 my-2 text-center">
        <h1 className="font-bold text-2xl mt-3 md:text-4xl">Maquinaria CNC</h1>
      </div>

      <div className="w-11/12 mx-auto my-5 md:flex md:flex-row md:justify-between flex-col">

        <div className="basis-1/5 mx-1 my-2 md:w-auto">
          <div className="h-full bg-custom1 rounded-sm border border-black overflow-hidden hover:bg-custom1/90">
            <img className="rounded-t-sm" src="CKE-6163.jpg" alt="" /> 
            <div className="p-2 ">
              <h5 className="my-3 text-lg font-bold text-white">Torno CNC CLEVER - CKE 6163</h5>
            </div>
          </div>
        </div>
        <div className="basis-1/5 mx-1 my-2 md:w-auto">
          <div className="h-full bg-custom1 rounded-sm border border-black overflow-hidden hover:bg-custom1/90">
              <img className="rounded-t-sm" src="GLS-260(2).jpg" alt="" />
              <div className="p-2 ">
                <h5 className="my-3 text-lg font-bold text-white">Torno CNC GOODWAY - GLS-260</h5>
              </div>
            </div>
        </div>
        <div className="basis-1/5 mx-1 my-2 md:w-auto">
          <div className="h-full bg-custom1 rounded-sm border border-black overflow-hidden hover:bg-custom1/90">
              <img className="rounded-t-sm" src="GS-3600LM.jpg" alt="" />
              <div className="p-2 ">
                <h5 className="my-3 text-lg font-bold text-white">Torno CNC GOODWAY - GS-3600LM</h5>
              </div>
            </div>
        </div>
        <div className="basis-1/5 mx-1 my-2 md:w-auto">
          <div className="h-full bg-custom1 rounded-sm border border-black overflow-hidden hover:bg-custom1/90">
              <img className="rounded-t-sm" src="GLS-260.jpg" alt="" />
              <div className="p-2 ">
                <h5 className="my-3 text-lg font-bold text-white">Torno CNC GOODWAY - GLS-260</h5>
              </div>
            </div>
        </div>
        <div className="basis-1/5 mx-1 my-2 md:w-auto">
          <div className="h-full bg-custom1 rounded-sm border border-black overflow-hidden hover:bg-custom1/90">
              <img className="rounded-t-sm" src="GA-3600.jpg" alt="" />
              <div className="p-2 ">
                <h5 className="my-3 text-lg font-bold text-white">Torno CNC GOODWAY GA-3600</h5>
              </div>
            </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto my-5 md:flex md:flex-row md:justify-between flex-col">
        <div className="basis-2/6 mx-2 my-2 md:w-auto">
            <div className="h-full bg-custom1 rounded-sm border border-black overflow-hidden hover:bg-custom1/90">
              <img className="rounded-t-sm" src="VMC-850.jpg" alt="" />

              <div className="p-2 ">
                <h5 className="my-3 text-lg font-bold text-white">Centro de mecanizado CNC MAQCHIN - VMC-850</h5>
              </div>
            </div>
          </div>
        <div className="basis-2/6 mx-2 my-2 md:w-auto">
            <div className="h-full bg-custom1 rounded-sm border border-black overflow-hidden hover:bg-custom1/90">
              <img className="rounded-t-sm" src="MCV-1450.jpg" alt="" />
              <div className="p-2 ">
                <h5 className="my-3 text-lg font-bold text-white">Centro de mecanizado CNC DAHLIH - MCV-1450</h5>
              </div>
            </div>
          </div>
        <div className="basis-2/6 mx-2 my-2 md:w-auto">
            <div className="h-full bg-custom1 rounded-sm border border-black overflow-hidden hover:bg-custom1/90">
              <img className="rounded-t-sm" src="MCB1020A.jpg" alt="" />
              <div className="p-2 ">
                <h5 className="my-3 text-lg font-bold text-white">Centro de mecanizado CNC DAHLIH -MCB1020A</h5>
              </div>
            </div>
          </div>
      </div> 
    </div>
  )
}

export default MaquinariaCNC