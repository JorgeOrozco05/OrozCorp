
import "./Equipo.css";
import Colaborador from "../Colaborador/Colaborador";
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    // Deconstruimos los parametros que  llegan desde el props
    const {colorDestaque, colorPrimario, titulo, id} = props.datos
    const {colaboradores, cambiarColor, eliminar, likes} = props

    return <>
        {   colaboradores.length > 0 &&
            <section className="equipo" style={{backgroundColor:hexToRgba(colorPrimario, 0.6)}}>
                <input 
                    type="color"
                    className = "input-color"
                    value = {colorPrimario}
                    onChange = {(evento) =>{
                        cambiarColor(evento.target.value, id); 
                    }}
                />
                <h3 style={{borderColor:colorPrimario}}>{titulo}</h3>
                <div className="colaboradores">
                    {props.colaboradores.map((colaborador, index) => 
                        <Colaborador 
                        datos={colaborador} 
                        key={index}
                        colorPrimario = {colorPrimario} 
                        eliminar = {eliminar}
                        likes = {likes}
                    />)}
                </div>
            </section>
        }
    </>
}

export default Equipo;