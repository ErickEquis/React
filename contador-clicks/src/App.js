import './App.css';
import './stylesheets/Boton.css'
import './stylesheets/Contador.css'
import Boton from './componentes/boton';
import hellfishLogo from './imagenes/hellfish.png'
import Contador from './componentes/contador';

function App() {

  const manejarClic = () => {
    console.log("Clic")
  }

  const reiniciarContador = () => {
    console.log("Reiniciar")
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
        <Contador numClics={'666'}/>
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