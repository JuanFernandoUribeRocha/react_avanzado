import React from "react";
import lista from "./lista.json";

function ListaDeCompras() {
  return (
    <div>
      <h1>Lista de compras</h1>
      <ul>
        {lista.map((producto) => (
          <li key={producto.id}>
            {producto.item} - Cantidad: {producto.cantidad}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeCompras;
