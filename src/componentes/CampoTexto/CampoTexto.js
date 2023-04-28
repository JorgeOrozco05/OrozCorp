
import {useState} from "react";
import "./CampoTexto.css";

const CampoTexto = (props) => {
    
    const manejarCambio = (e) => {
        props.setValor(e.target.value);
    }
    const placeModificado = `${props.placeholder}...`
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input 
            placeholder= {placeModificado} 
            required = {props.required}
            value = {props.valor}
            onChange = {manejarCambio}
        />
    </div>
}

export default CampoTexto;