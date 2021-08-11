import { useState, useEffect } from "react";

function useCarrito(productoIndividual) {
  const [total, setTotal] = useState(0);

  // cada vez que cambie la lista de productos voy a calcular un total
  useEffect(() => {
    let nuevoTotal = 0;
    productoIndividual.forEach((productoIndividual) => {
      nuevoTotal = nuevoTotal + productoIndividual.price;
    });
    setTotal(nuevoTotal);
  }, [productoIndividual]);

  return {
    total,
  };
}

export default useCarrito;