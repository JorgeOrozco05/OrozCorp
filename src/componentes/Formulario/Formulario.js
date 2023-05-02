
import {useState} from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";


/*
const Formulario = () => {
    return <section className="formulario">
        <form>
            <h2>Crea un colaborador</h2>
            <label>Nombre</label><br/>
            <input className="input" placeholder="Ingresar nombre"></input><br/>
            <label>Puesto</label><br/>
            <input className="input" placeholder="Ingresar cargo"></input><br/>
            <label>Foto</label><br/>
            <input className="input" placeholder="Ingresar enlace de foto"></input><br/>
            <label>Equipo</label><br/>
            <input className="input" placeholder="Seleccionar equipo"></input>
            <br/>
            <button>Crear</button>
            
        </form>
    </section>
}
*/

const Formulario = (props) => {

    const [nombre, setNombre] = useState("");
    const [cargo, setCargo] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    

    const enviar = (evento)=>{
        evento.preventDefault();
        console.log("Datos enviados");
        let datosXEnviar = {
            nombre: nombre,
            cargo: cargo,
            foto: foto,
            equipo // Cuando la llave y el valor tienen el mismo nombre se puede indicar de esta forma.
        }
        props.registrarColaborador(datosXEnviar);
    }

    return <section className="formulario">
        <form onSubmit = {enviar}>
            <h2>Crea un colaborador y añadelo a un equipo</h2>
            <CampoTexto 
                titulo = "Nombre" 
                placeholder = "Ingresar nombre" 
                required = {true}
                valor = {nombre}
                setValor = {setNombre}
            />
            <CampoTexto 
                titulo = "Cargo" 
                placeholder = "Ingresar cargo" 
                required
                valor = {cargo}
                setValor = {setCargo}
            />
            <CampoTexto 
                titulo = "Foto" 
                placeholder = "Ingresar ruta de foto" 
                required
                valor = {foto}
                setValor = {setFoto}
            />
            <ListaOpciones
                valor = {equipo}
                setValor = {setEquipo}
                equipos = {props.equipos}
            />
            <Boton texto = "Crear Colaborador"/>
        </form>
    </section>
}
export default Formulario;