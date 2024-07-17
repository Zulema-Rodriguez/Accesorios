import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h1>Nosotros</h1>
      <p>
        Beauty Accesorios es una empresa con 10 años de experiencia en el mercado, dedicada a ofrecer productos de alta calidad. Nos enorgullecemos de tener clientes que nos recomiendan y de la capacitación constante de nuestros trabajadores. Comenzamos como un pequeño emprendimiento y, gracias a nuestro compromiso y dedicación, hoy en día contamos con dos locales en distintas ciudades. Trabajamos con los mejores proveedores para asegurar la satisfacción de nuestros clientes.
      </p>
      <img 
        src="https://opem.b-cdn.net/wp-content/uploads/2022/04/Gestion-de-las-personas-1024x576.png" 
        alt="Fotografía de Beauty Accesorios"
        style={{ width: '100%', height: 'auto', marginTop: '20px' }}
      />
    </div>
  );
}

export default About;