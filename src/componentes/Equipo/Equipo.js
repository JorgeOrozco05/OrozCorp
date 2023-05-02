
import "./Equipo.css";
import Colaborador from "../Colaborador/Colaborador";

const Equipo = (props) => {
    return <section className="equipo" style={{backgroundColor:props.datos.colorDestaque}}>
        <h3 style={{borderColor:props.datos.colorPrimario}}>{props.datos.titulo}</h3>
        <div className="colaboradores">
            <Colaborador />
            <Colaborador />

        </div>
    </section>
}

export default Equipo;