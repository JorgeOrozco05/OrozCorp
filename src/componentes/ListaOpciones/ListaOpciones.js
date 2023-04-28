
import "./ListaOpciones.css";

const ListaOpciones = (props) => {
    const listaEquipos = ["Programacion",
         "Front End",
         "Data Science",
         "Devops", 
         "UX y Diseño", 
         "Móvil", 
         "Innovación y Gestión"
        ];

        const manejadorCambio = (e) => {
            props.setValor(e.target.value);
        }
    return <div className = "lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange = {manejadorCambio}>
            <option value="" disabled defaultValue="" hidden>
                Selecciona tu equipo
            </option>
            {listaEquipos.map((equipo, index) =>{
                return <option key = {index} value={equipo}>{equipo}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones;

