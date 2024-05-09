import React from 'react'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom';
import Transmisiones from './components/Transmisiones';
import AcopleBombaHidraulica from './components/AcopleBombaHidraulica';
import Barredoras from './components/Barredoras';
import Cabezales from './components/Cabezales'   
import Contacto from './components/Contacto'
import Embragues from './components/Embragues'
import Reductores from './components/Reductores' 
import Navbar from './components/NavBar';
import Empresa from './components/Empresa';
import Footer from './components/Footer';
import TrabajosEspeciales from './components/TrabajosEspeciales';
import ScrollToTopButton from './components/ScrollToTopButton';

const App = () => {
  return (
    <div className='app-container overflow-hidden'>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transmisiones" element={<Transmisiones />}/>
          <Route path='/acoples' element={<AcopleBombaHidraulica />}/>
          <Route path='/barredoras' element={<Barredoras />}/>
          <Route path='/cabezales' element={<Cabezales />}/>
          <Route path='/embragues' element={<Embragues />}/>
          <Route path='/reductores' element={<Reductores />}/>
          <Route path='/contacto' element={<Contacto />}/>
          <Route path='/empresa' element={<Empresa />}/>
          <Route path='/trabajosespeciales' element={<TrabajosEspeciales />}/>
        </Routes>
      </div>
      <ScrollToTopButton />
      <Footer />
    </div>
  )
}

export default App

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
