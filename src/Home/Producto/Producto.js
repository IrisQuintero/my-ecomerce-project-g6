
import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/Auth/Auth";
import "./Producto.css"
import {Link} from "react-router-dom";


function Producto(props){
    const { session } = useContext(AuthContext);
    
    return(
        <div className = "CardsContainer">
            <div className = "CardsContainer-Cards">
            <Link to = {`/detalle-producto/${props.producto._id}`}>
                <img src = {props.producto.image}alt = "photo"></img>
            </Link>
            <p>{props.producto.product_name} </p>
            <p>${props.producto.price}.00</p>
            {session.login ? <button>Comprar</button> : <button>Registrate</button>}
            </div>
        </div>
    );
}

export default Producto;