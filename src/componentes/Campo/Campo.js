
import {useState} from "react";
import "./Campo.css";

const Campo = (props) => {

    const { type = "text" } = props
    
    const manejarCambio = (e) => {
        props.setValor(e.target.value);
    }
    const placeModificado = `${props.placeholder}...`
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder= {placeModificado} 
            required = {props.required}
            value = {props.valor}
            onChange = {manejarCambio}
            type = {type}
        />
    </div>
}

export default Campo;