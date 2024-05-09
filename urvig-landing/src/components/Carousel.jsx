import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Carousel = ({imagenes}) => {

    let [actual, setActual] = useState(0)

    let imagenAnterior = ()=>{
        if (actual === 0) setActual(imagenes.length -1)
        else setActual(actual - 1)
    }
    let imagenSiguiente = ()=>{
        if (actual === imagenes.length -1) setActual(0)
        else setActual(actual + 1)
    }

  return (
    <div className="overflow-hidden relative rounded-t-md z-0 border border-custom1 rounded-md">
        <div
        className={`flex transition ease-out duration-400`}
        style={{transform: `translateX(-${actual * 100}%)`,}}>
                {imagenes.map((i)=>{
            return (<img src={i} alt="" key={i + 1}/>)})}
        </div>
        <div className="absolute top-0 h-full w-full justify-between items-center flex text-custom1 px-5 text-lg">
            <button className="bg-slate-400 rounded-full p-1.5 text-sm" onClick={imagenAnterior}>
                <FaArrowLeft />
            </button>
            <button className="bg-slate-400 rounded-full p-1.5 text-sm"  onClick={imagenSiguiente}>
                <FaArrowRight />
            </button>
        </div>
        <div className="absolute bottom-0 py-0.5 flex justify-center gap-3 w-full">
            {imagenes.map((c, i)=>{
                return(
                    <div onClick={()=> setActual(i)}
                         key={'indicador' + i}
                         className={`rounded-full w-3 h-3 cursor-pointer ${i == actual ? 'bg-custom1/85' : 'bg-slate-400 '} `}
                         ></div>
                )
            })}
        </div>
    </div>

  )
}

export default Carousel
