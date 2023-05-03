
import "./Equipo.css";
import Colaborador from "../Colaborador/Colaborador";

const Equipo = (props) => {
    // Deconstruimos los parametros que  llegan desde el props
    const {colorDestaque, colorPrimario, titulo} = props.datos
    const {colaboradores} = props

    return <>
        {   colaboradores.length > 0 &&
            <section className="equipo" style={{backgroundColor:colorDestaque}}>
                <h3 style={{borderColor:colorPrimario}}>{titulo}</h3>
                <div className="colaboradores">
                    {props.colaboradores.map((colaborador, index) => 
                        <Colaborador 
                        datos={colaborador} 
                        key={index}
                        colorPrimario = {colorPrimario} 
                    />)}
                </div>
            </section>
        }
    </>
}

export default Equipo;