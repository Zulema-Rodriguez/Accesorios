import styled from 'styled-components';

// Contenedor principal de los productos
export const ProductosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columnas en pantalla grande */
  gap: 20px; /* Espacio entre las cards */
  padding: 20px;

  /* Responsividad para pantallas más pequeñas */
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr); /* 3 columnas en pantallas medianas */
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columnas en pantallas pequeñas */
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* 1 columna en pantallas muy pequeñas */
  }
`;

// Estilo para cada card de producto
export const ProductoCard = styled.div`
  border: 1px solid #ddd; /* Delimitación de la card */
  border-radius: 8px; /* Bordes redondeados */
  overflow: hidden; /* Para que las imágenes no se salgan del contenedor */
  text-align: center;
  background-color: #fff; /* Fondo blanco para la card */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra sutil */

  img {
    width: 100%;
    height: 200px; /* Ajusta la altura según lo necesario */
    object-fit: cover; /* Mantiene la proporción de la imagen */
    border-bottom: 1px solid #ddd; /* Separador entre la imagen y el contenido */
  }

  .info {
    padding: 10px;
  }

  h3 {
    margin: 10px 0;
    color: #333; /* Color del texto del precio */
  }

  button {
    background-color: #f57c00; /* Color del botón (puede ser naranja o el color que prefieras) */
    border: none;
    color: white;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    margin: 0;
  }

  button:hover {
    background-color: #e64a19; /* Color del botón al pasar el mouse (opcional) */
  }
`;