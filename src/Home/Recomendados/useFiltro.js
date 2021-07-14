import { useEffect, useState } from "react";
//entrada lista de productos, filtro
function useFiltro(productos = [], filtro){
    const [productoFiltrado, setNewproductoFiltrado] = useState([]);

    useEffect(()=>{
        //proceso filtro
    
        const filtrados=productos.filter((producto)=>{
            return producto.product_name.toLowerCase().includes(filtro.toLowerCase());
        });

        setNewproductoFiltrado(filtrados);
    },[productos, filtro]);
    
        //salida productoFiltrado
        return {productoFiltrado};
}

export default useFiltro;