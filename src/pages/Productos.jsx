import React from 'react';
import { productos } from "./productos";
import Producto from './Producto';
import { ProductosContainer, ProductoCard } from './ProductosStyles';

function Productos() {
  return (
    <ProductosContainer>
      {productos.map((producto) => (
        <ProductoCard key={producto.id}>
          <Producto
            nombre={producto.nombre}
            precio={producto.precio}
            imagen={producto.imagen}
          />
        </ProductoCard>
      ))}
    </ProductosContainer>
  );
}

export default Productos;