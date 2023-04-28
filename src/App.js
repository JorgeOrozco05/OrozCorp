
import {useState} from "react";
import './App.css';
import Header from './componentes/header/Header.js';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg/MiOrg';
import Equipo from "./componentes/Equipo/Equipo";

function App() {

  const [mostrarForm, actForm] = useState(false);

  const cambiarMostrar = () => {
    actForm(!mostrarForm);
  }

  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorDestaque: "#D9F7E9"
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorDestaque: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorDestaque: "#F0F8E2"
    },
    {
      titulo: "DeVops",
      colorPrimario: "#E06B69",
      colorDestaque: "#FDE7E8"
    },
    {
      titulo: "UX Diseño",
      colorPrimario: "#DB6EBF",
      colorDestaque: "#FAE9F5"
    },{
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorDestaque: "#FFF5D9"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorDestaque: "#FFEEDF"
    },
  ]

  return (
    <div>
      {/* {Header()} */}
      {/* <Header></Header> */}
      <Header />
      {mostrarForm === true ? <Formulario/> : <div></div>}
      <MiOrg  cambiarMostrar={cambiarMostrar}/>
      {
        equipos.map( (equipo) => {
          return <Equipo datos={equipo} key={equipo.titulo}/>
        })
      }

    </div>
  );
}

export default App;
