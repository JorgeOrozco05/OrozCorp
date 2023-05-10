

import "./Colaborador.css";

import { MdDeleteForever } from "react-icons/md";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"


const Colaborador = (props)=> {
    // Destructurar los datos que vienen el el props
    const {nombre, cargo, foto, equipo, id, fav} = props.datos
    const {colorPrimario, eliminar, likes} = props
    return <div className="colaborador">
        <MdDeleteForever onClick = {() => eliminar(id)} className="eliminar" color = "red"/>
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{cargo}</h5>
            {fav === true ? < AiFillHeart color = "red" onClick={()=>likes(id)} />:< AiOutlineHeart onClick={()=>likes(id)} />}
        </div>
    </div>
}

export default Colaborador;