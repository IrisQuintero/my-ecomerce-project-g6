import React from "react";
import Recomendados from "./Recomendados/Recomendados";
import "./Home.css";
import DetalleProducto from "./DetalleProducto/DetalleProducto";
import NavBar from "../NavBar/NavBar";

function Home(){
    return(
        <section>
            <Recomendados/>
            <DetalleProducto idItem= "5fbc19a65a3f794d72471163"/>
        </section>
        
    );
}

export default Home;