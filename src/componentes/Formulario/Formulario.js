
import {useState} from "react";
import "./Formulario.css";
import Campo from "../Campo/Campo";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";


const Formulario = (props) => {

    const [nombre, setNombre] = useState("");
    const [cargo, setCargo] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");
    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("");

    

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

    const enviar2 = (evento)=>{
        evento.preventDefault();
        console.log("Datos enviados");
        let datosXEnviar2 = {
            titulo, // Cuando la llave y el valor tienen el mismo nombre se puede indicar de esta forma.
            colorPrimario: color 
        }
        props.registrarEquipo(datosXEnviar2);
        // props.registrarEquipo({titulo, colorPrimario: color}); si no funciona el de arriba usa este otra forma
    }

    return <section className="formulario">
        <form onSubmit = {enviar}>
            <h2>Crea un colaborador</h2>
            <Campo 
                titulo = "Nombre" 
                placeholder = "Ingresar nombre" 
                required = {true}
                valor = {nombre}
                setValor = {setNombre}
            />
            <Campo 
                titulo = "Cargo" 
                placeholder = "Ingresar cargo" 
                required
                valor = {cargo}
                setValor = {setCargo}
            />
            <Campo 
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
        <form onSubmit = {enviar2}>
            <h2>Crea un equipo nuevo</h2>
            <Campo 
                titulo = "Titulo" 
                placeholder = "Ingresar titulo del equipo" 
                required = {true}
                valor = {titulo}
                setValor = {setTitulo}
            />
            <Campo 
                titulo = "Color" 
                placeholder = "Ingresar un color en formato Hex" 
                required
                valor = {color}
                setValor = {setColor}
                type = "color"
            />
            <Boton texto = "Crear Equipo"/>
        </form>
    </section>
}
export default Formulario;