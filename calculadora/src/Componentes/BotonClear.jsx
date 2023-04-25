import React from "react";
import '../Stylesheets/BotonClear.css'

const BotonClear = (props) => (
    <div className="boton-clear">
        {props.children}
    </div>
)

export default BotonClear