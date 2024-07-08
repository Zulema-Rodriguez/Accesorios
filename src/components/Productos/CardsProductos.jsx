import React from 'react';
import {
  Container,
  CardGrid,
  Card,
  Image,
  Description,
  Button
} from './CardsProductosStyles';



const productos = [
  { id: 1, description: '$ 2000', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl0yzY1nK9suYVjFvBC6YGH-6Y9UWvlL65Qw&s"  },
  { id: 2, description: '$ 2000', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWgK7J0Hm7lACB2KBZhE27dUYNX-iwAtLjmg&s" },
  { id: 3, description: '$ 2000', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5d6eIZRpPG3JnxGdXKW6lwDpX-zDS0Z177w&s" },
  { id: 4, description: '$ 2000', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwoj1YzNdKCdT0_s2uxZsGLcNvRZ5B0g4LFA&s" },
  { id: 5, description: '$ 3000', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJzWZHEc2oT9lwmBYnqFp1kRztwr4uPicWLA&s" },
  { id: 6, description: '$ 3000', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSc6f6YJqiqeQM64T7-RuG9Z3bDzWPN_l9qg&s" },
  { id: 7, description: '$ 3000', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ9T2F3h7IkYOsDWzraC--BBu68gu0NCGJPg&s" },
  { id: 8, description: '$ 3000', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnYAFBnX6pcZBVTK3hnmp63sAXvms9SBATUQ&s" },
  { id: 9, description: '$ 4000', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-B11bue-pRoenltZkHkj4GF2YMj2BaX8Agw&s"},
  { id: 10, description: '$ 4000', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKW-2ULXW1toIDEXzLjgByNCJvYadl3ddM2Q&s" },
  { id: 11, description: '$ 4000', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHCu2d8zgw2kNcArsOooJMuwe9f7uLOgOcEw&s" },
  { id: 12, description: '$ 4000', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9phS4aqsbSF9CDDfwtMqgkQoxUCx8xp7Q1g&s" },
];

const CardsProductos = () => {
  return (
    <Container>
      <CardGrid>
        {productos.map((producto) => (
          <Card key={producto.id}>
            <Image>
                <img src={producto.image} alt={`Producto ${producto.id}`} />
            </Image>
            <Description>{producto.description}</Description>
            <Button>Comprar</Button>
          </Card>
        ))}
      </CardGrid>
    </Container>
  );
};

export default CardsProductos;