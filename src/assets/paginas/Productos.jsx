import React from 'react';
import { Container, Card, Image, Info, Title, Price } from './productosStyles';
import { productos } from '../../productos'


const ProductCard = () => {
  return (
    <Container>
      {productos.map(producto => (
        <Card key={producto.id}>
          <Image src={producto.imagen} alt={producto.nombre} />
          <Info>
            <Title>{producto.nombre}</Title>
            <Price>{producto.precio}</Price>
          </Info>
        </Card>
      ))}
    </Container>
  );
};

export default ProductCard