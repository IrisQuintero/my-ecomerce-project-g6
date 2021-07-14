import React, { useState, useEffect } from "react";
import "./Recomendados.css";
import Producto from "../Producto/Producto";
//import Producto from "../../Producto/Producto";
import usefiltro from "./useFiltro";

function Recomendados() {
  //salida//
  const [productos, setProductos] = useState([]);
  const [formulario, setValores] = useState({ filtro: "" });
  const { productoFiltrado } = usefiltro(productos, formulario.filtro);
  //useEffect ejecuta código escuchando a las dependencias ([])
  //las dependencias son el arreglo y dentro se le mandan valores
  //si algún valor de la dependencia cambia se vuelve a ejecutar el código.
  useEffect(() => {
    fetch("https://ecomerce-master.herokuapp.com/api/v1/item")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
      });
  }, []);

  const handleInputchange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setValores({ ...formulario, [name]: value });
  };

  // const onSubmit = (event)=>{
  // event.preventDefault();
  //};

  return (
    <div className="Recomendados">
      <form className="Recomendados-Busqueda">
        <div>
          <input
            name="filtro"
            placeholder=" ¿Que estás buscando?"
            onChange={handleInputchange}
          />
        </div>
      </form>
      <ul className="Recomendados-Busqueda-ListaProductos">
        {productoFiltrado.map((productoIndividual) => {
          return (
            <li key={productoIndividual._id}>
              <Producto producto={productoIndividual} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Recomendados;
