import './App.css';
import './stylesheets/Boton.css'
import './stylesheets/Contador.css'
import Boton from './componentes/boton';
import hellfishLogo from './imagenes/hellfish.png'
import Contador from './componentes/contador';
// Hook: Permite hacer funcionales a los estados
import { useState } from 'react';

function App() {

  // Se crea array con var. para el estado y funcion que le dira que hacer.
  // useState le dice en que estado iniciara
  const[numClics, setNumClics] = useState(0) 

  const manejarClic = () => {
    // La funcion setNumClics se le dice que valor le pasara al estado de numClics
    setNumClics(numClics + 1)
  }

  const reiniciarContador = () => {
    setNumClics(0)
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
        className='logo'
        src={hellfishLogo}
        alt='Logo de contenedor'/>
      </div>
      <div className='contador-principal'>
        <Contador numClics={numClics}/>
        <Boton
          texto='Clic'
          esBotonClic={true} 
          manejarClic={manejarClic}/>
        <Boton
          texto='Reiniciar'
          esBotonClic={false}
          manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;