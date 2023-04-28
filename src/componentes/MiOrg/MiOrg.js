import { useState } from "react";
import "./MiOrg.css"

const MiOrg = (props) => {

    // console.log(useState());
    // const [nombre, actNombre] = useState("Jorge");
    //const [bloque, actBloque] = useState(true);

    // const mostrar = () => {
    //     console.log("Se ha añadido un nuevo miembro", bloque);
    //     actBloque(!bloque);
    // }

    return <section className="orgSeccion">
        <h3 className="orgSectTitulo">Mi Organización</h3>
        <img onClick={props.cambiarMostrar} src="/img/add.png" alt="boton agragar" />
    </section>
}

export default MiOrg;