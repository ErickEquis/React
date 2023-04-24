import React from "react";

// Sintaxis de desestructuracion, evita escribir 'props' y se refiere al argumento de manera mas conciso
function Boton({texto, esBotonClic, manejarClic}){
  return(
    <button
      // Se condiciona el tipo de clase desde los argumentos (operador ternario)
      className={esBotonClic ? 'boton-clic' : 'boton-reinicio'}
      // EventListener
      onClick={manejarClic}>
      {/* desestructuracion */}
      {texto}
    </button>
  )
}

export default Boton