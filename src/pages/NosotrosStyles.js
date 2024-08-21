import styled from 'styled-components';

// Contenedor principal
export const NosotrosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #ffffff; 
`;

// Contenedor para la imagen
export const FotoContainer = styled.div`
  width: 100%;
  max-width: 600px; /* Ajusta según el tamaño de la imagen */
  margin-bottom: 20px;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px; /* Esquinas redondeadas */
    object-fit: cover; /* Mantiene la relación de aspecto de la imagen */
  }
`;

// Contenedor para el texto
export const TextoContainer = styled.div`
  width: 90%;
  max-width: 800px; /* Ajusta el ancho máximo del contenedor del texto */
  text-align: center;
  margin-top: 20px;
`;

// Estilo para el texto
export const Texto = styled.p`
  font-size: 1.1em;
  color: #5a3e36; /* Marrón oscuro */
  line-height: 1.6;
  padding: 10px;
  background-color: #ffffff; /* Fondo blanco para el texto */
  border-radius: 8px; /* Esquinas redondeadas para el fondo del texto */

  @media (max-width: 768px) {
    font-size: 1em; /* Ajuste del tamaño de la fuente en pantallas más pequeñas */
  }
`;