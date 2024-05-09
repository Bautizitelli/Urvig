import React from 'react'

const TrabajosEspeciales = () => {
  return (
    <div>
      <div className="w-fit mx-auto p-6 my-3">
        <h1 className="font-semibold text-3xl md:text-5xl text-center">Diseño y fabricación de trabajos especiales</h1>
        <p className='text-lg mt-4'>
          En URVIG s.r.l., no solo nos destacamos por nuestros productos regulares, sino que también ofrecemos un servicio especializado en trabajos a medida. Contamos con un departamento de ingeniería encargado de diseñar, desarrollar y fabricar pedidos especiales que se ajusten perfectamente a las necesidades y especificaciones de nuestros clientes.
        </p>
      </div>
      <div className="w-fit mx-auto p-6 my-3">
        <h1 className="font-semibold text-3xl md:text-4xl text-center">Capacidad de producción</h1>
        <p className='text-lg mt-4'>
          Gracias a nuestra moderna planta productiva, equipada con una gran variedad de maquinaria de última generación, tenemos la capacidad de realizar una amplia gama de trabajos especiales. Ya sea que necesites piezas únicas, componentes personalizados o productos totalmente nuevos, estamos preparados para llevar tus ideas desde el concepto inicial hasta la realidad.
        </p>
      </div>
      <div className="w-fit mx-auto p-6 my-3">
        <h1 className="font-semibold text-3xl md:text-4xl text-center">Confiabilidad</h1>
        <p className='text-lg mt-4'>
          Nos enorgullece ser el socio en el que puedes confiar para tus proyectos más exigentes. Nuestro equipo de ingenieros altamente capacitados está listo para colaborar contigo en cada etapa del proceso, desde la conceptualización hasta la entrega final, para garantizar que tus necesidades sean cumplidas con precisión y eficiencia.
        </p>
      </div>
      <div className="w-fit mx-auto p-6 my-3">
        <h1 className="font-semibold text-3xl md:text-4xl text-center">Ejemplos de proyectos relevantes</h1>
        <p className='text-lg mt-4'>
          Como prueba de nuestra experiencia y habilidades en trabajos especiales, adjuntamos algunos ejemplos de pedidos que hemos realizado desde cero. Estos proyectos destacan nuestra capacidad para enfrentar desafíos únicos y entregar soluciones innovadoras que superan las expectativas de nuestros clientes.
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-11/12 mx-auto mt-3 mb-4">
        <div className="basis-full md:basis-1/2 m-2 ">
          <img src="especiales.jpg" alt="" className='border border-custom1 rounded-md'/>
        </div>
        <div className="basis-full md:basis-1/2 m-2 border border-custom1 rounded-md">
          <img src="especiales3d.jpg" alt="" className='rounded-md'/>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-11/12 mx-auto mt-3 mb-4">
        <div className="basis-full md:basis-4/6 m-2">
          <img src="especialesE.jpg" alt="" className='border border-custom1 rounded-md w-full h-full object-cover'/>
        </div>
        <div className="basis-full md:basis-2/6 m-2">
          <img src="especialesD.jpg" alt="" className='border border-custom1 rounded-md h-full w-full object-cover'/>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-11/12 mx-auto mt-3 mb-4">
        <div className="basis-full md:basis-3/12 m-2 border border-custom1 rounded-md">
          <img src="especiales000.jpg" alt="" className='h-full w-full object-cover rounded-md' />
        </div>
        <div className="basis-full md:basis-6/12 m-2 rounded-md">
          <img src="especiales3.jpg" alt="" className='h-full w-full object-cover border border-custom1 rounded-md' />
        </div>
        <div className="basis-full md:basis-3/12 m-2 border border-custom1 rounded-md">
          <img src="especiales5.jpg" alt="" className='h-full w-full object-cover rounded-md' />
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-11/12 mx-auto mt-3 mb-4">
        <div className="basis-full md:basis-2/6 m-2 border border-custom1 rounded-md">
          <img src="especialesA.jpg" alt="" className='rounded-md' />
        </div>
        <div className="basis-full md:basis-2/6 m-2 border border-custom1 rounded-md ">
          <img src="especialesB.jpg" alt="" className='rounded-md'/>
        </div>
        <div className="basis-full md:basis-2/6 m-2 border border-custom1 rounded-md ">
          <img src="especialesC.jpg" alt="" className='rounded-md'/>
        </div>
      </div>
    </div>
  )
}

export default TrabajosEspeciales