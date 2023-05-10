
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './componentes/header/Header.js';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg/MiOrg';
import Equipo from "./componentes/Equipo/Equipo";
import Footer from "./componentes/Footer/Footer";

function App() {

  const [mostrarForm, actForm] = useState(true);
  const [colaboradores, setColaboradores] = useState([{
      id: uuidv4(),
      equipo: "Programación",
      cargo: "Programador Junior",
      foto: "https://github.com/JorgeOrozco05.png",
      nombre: "Jorge Orozco",
      fav: true
    },
    {
      id: uuidv4(),
      equipo: "UX Diseño",
      cargo: "Aprendiz",
      foto: "/img/imprimir 2.jpg",
      nombre: "Gabriela Nuñez",
      fav: false
    },
    {
      id: uuidv4(),
      equipo: "Front End",
      cargo: "Aprendiz",
      foto: "/img/Me.jpg",
      nombre: "Sebastián Orozco",
      fav: false
    }
  ]);
  const [equipos, setEquipos] = useState([
    {
      id: uuidv4(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorDestaque: "#D9F7E9"
    },
    {
      id: uuidv4(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorDestaque: "#E8F8FF"
    },
    {
      id: uuidv4(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorDestaque: "#F0F8E2"
    },
    {
      id: uuidv4(),
      titulo: "DeVops",
      colorPrimario: "#E06B69",
      colorDestaque: "#FDE7E8"
    },
    {
      id: uuidv4(),
      titulo: "UX Diseño",
      colorPrimario: "#DB6EBF",
      colorDestaque: "#FAE9F5"
    },{
      id: uuidv4(),
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorDestaque: "#FFF5D9"
    },
    {
      id: uuidv4(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorDestaque: "#FFEEDF"
    },
  ]);
  

  const cambiarMostrar = () => {
    actForm(!mostrarForm);
  }

  //Mostrar likes

  const likes = (id) => {
    console.log("like", id)
    const likeColaborador = colaboradores.map((colaborador) =>{
      if(colaborador.id===id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador;
    })
    setColaboradores(likeColaborador);
  }

  const registrarColaborador = (colaborador) => {
    console.log("nuevo Colaborador", colaborador)
    // Spread Operator => crea una copia de los valores y luego agrega los nuevos valores
    setColaboradores([...colaboradores, colaborador]);
  }

  const registrarEquipo = (nuevoEquipo) => {
    setEquipos([...equipos, {...nuevoEquipo, id: uuidv4()}])
  }

  const eliminarColaborador = (id) => {
    //console.log("Colaborador eliminado id: ", id)
    const nuevosColaboradores = colaboradores.filter((colaborador)=>colaborador.id != id)
    setColaboradores(nuevosColaboradores);
  }

  // Funcion cambiar color del equipo

  const cambiarColor = (color, id) =>{
    // console.log("Se ha actualizado: ",color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color;
      }

      return equipo;
    })
    setEquipos(equiposActualizados);
  }



  return (
    <div>
      {/* {Header()} */}
      {/* <Header></Header> */}
      <Header />
      {mostrarForm === true ? <Formulario 
        equipos={equipos.map((equipo)=>equipo.titulo)}
        registrarColaborador = {registrarColaborador} 
        registrarEquipo = {registrarEquipo}
        />
        : <div></div>
      }
      <MiOrg  cambiarMostrar={cambiarMostrar}/>
      {
        equipos.map( (equipo) => {
          return <Equipo 
            datos={equipo} 
            key={equipo.titulo}
            colaboradores = {colaboradores.filter(colaborador => colaborador.equipo===equipo.titulo)}
            eliminar = {eliminarColaborador}
            cambiarColor = {cambiarColor}
            likes = {likes}
          />
        })
      }
      <Footer />
    </div>
  );
}

export default App;
