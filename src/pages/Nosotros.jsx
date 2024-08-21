import React from 'react';
import { NosotrosContainer, FotoContainer, TextoContainer, Texto } from './NosotrosStyles'; // Importa los estilos

function Nosotros() {
  return (
    <NosotrosContainer>
      <FotoContainer>
        <img 
          src="https://img.freepik.com/foto-gratis/grupo-personas-trabajando-plan-negocios-oficina_1303-15788.jpg?t=st=1723602626~exp=1723606226~hmac=43123ac9d8ba722205eb4b0e132e991f54a306353c2517b8d3995316bda4fd71" 
          alt="Nuestra joyería" 
          style={{ width: '100%', height: 'auto', borderRadius: '8px' }} // Ajusta la imagen según sea necesario
        />
      </FotoContainer>
      <TextoContainer>
        <Texto>
          En Azul accesorios, contamos con más de 10 años de experiencia en el arte de la joyería. 
          Nos enorgullece ofrecer productos de la más alta calidad, seleccionados cuidadosamente para asegurar su durabilidad y belleza. 
          Nuestra amplia variedad de estilos está diseñada para satisfacer todos los gustos y edades, garantizando que cada cliente encuentre algo especial.
          Nos sentimos honrados de contar con la recomendación de nuestros clientes, quienes valoran la excelencia en nuestra atención y el trato personalizado en nuestra sucursal. 
          Cada visita es una oportunidad para brindar un servicio amable y respetuoso, porque su satisfacción es nuestra prioridad.
        </Texto>
      </TextoContainer>
    </NosotrosContainer>
  );
}

export default Nosotros;