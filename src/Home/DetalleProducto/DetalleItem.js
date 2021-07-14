import React from "react";

function DetalleItem(props) {        

        const item = {
            nombre: props.idItem.product_name,
            descripcion: props.idItem.descripcion,
            price: 0,
            category: null,
            image: null,
            isActive: false

        }

    const [producto, setProducto] = useState(item)
    

    return (
        <div>
            <h4>{nombre}</h4>
            <p>{descripcion}</p>
            <p>${price}.00</p>
            <p>{category}</p>
            <image src={image}></image>
            {isActive ? <button>Comprar</button>:<p>Agotado</p>}
        </div>
    )
}

export default DetalleItem;