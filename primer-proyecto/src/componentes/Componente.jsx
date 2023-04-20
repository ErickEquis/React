import React from "react";


//Componente funcional
/*
---Exportacion nombrada---
export permite exportar elementos en especifico
*/
// props ayuda a introducir argumentos a la funcion JS
export function Componente(props){
  //Funcion que regresa JSX
  return (
    //className = class de HTML. Cambia ya que class es reservada en JS
    <div className='contenedor'>
      <img className='img-contendor'
      // {} hace referencia a un valor JS
      //require importa la imagen
      src={require(`../imagenes/boxer-${props.imagen}.jpg`)}
      alt='Imagen de perro boxer' />
      <div className="texto-contenedor">
        {/* props.arg permite referenciar el valor deseado */}
        <p className="primer-texto">Perro <strong>{props.tipo}</strong></p>
        {/* Las etiquetas HTML se pueden ocupar sin problemas */}
        <p className="info-texto">{props.cargo} en <u>{props.empresa}</u></p>
        <p className="texto-info">{props.informacion}</p>
      </div>
    </div>
  )
}

/*
---Exportacion por defecto---
Permite que se exporte el elemento
Se debe especificar cuales seran exportados
export default Componente
*/