import './App.css';
import './stylesheets/Componente.css'

/*
---Exportacion por defecto---
Importar modulo con script especificado
import Componente from './componentes/Componente'
*/


/*
---Exportacion nombrada---
{} referencian al modulo que se debera exportar
*/
import { Componente } from './componentes/Componente'


function App() {
  return (
    <div className="App">
      
      <h1>Tipos de terriblitos</h1>

      <div className='contenedor-principal'>
        {/*Para renderizar se importa el modulo como etiqueta*/}
        <Componente
        // <Componente/> renderiza y este debe pasar valores a promps de Componentes.jsx
        tipo='Terriblero'
        cargo='CEO'
        empresa='Croquetas S.A. de C.V.'
        informacion='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en.'
        imagen='1'
        />
        {/* Se puede reutilizar el objeto*/}
        <Componente
        tipo='Terriblito'
        cargo='Terriblear'
        empresa='Croquetas S.A. de C.V.'
        informacion='Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí".'
        imagen='2'
        />
        <Componente
        tipo='Terribleoso'
        cargo='Testeo de corquetas'
        empresa='Croquetas S.A. de C.V.'
        informacion='Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad.'
        imagen='3'
        />
      </div>
    </div>
  );
}

export default App;