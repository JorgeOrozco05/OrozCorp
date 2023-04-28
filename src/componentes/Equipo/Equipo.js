
import "./Equipo.css";

const Equipo = (props) => {
    return <section className="equipo" style={{backgroundColor:props.datos.colorDestaque}}>
        <h3 style={{borderColor:props.datos.colorPrimario}}>{props.datos.titulo}</h3>
        <div className="colaboradores">Colaboradores</div>
    </section>
}

export default Equipo;