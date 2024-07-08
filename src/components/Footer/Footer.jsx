
import { FooterContainerStyled, FooterContentStyled, FooterSectionStyled, FooterLinkStyled } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterContainerStyled>
      <FooterContentStyled>
        <FooterSectionStyled>
          <h4>Nosotros</h4>
          <FooterLinkStyled href="#">Quienes somos</FooterLinkStyled>
          <FooterLinkStyled href="#">Productos</FooterLinkStyled>
        </FooterSectionStyled>
        <FooterSectionStyled>
          <h4>Preguntas frecuentes</h4>
          <FooterLinkStyled href="#">Envios</FooterLinkStyled>
          <FooterLinkStyled href="#">Devoluciones</FooterLinkStyled>
        </FooterSectionStyled>
        <FooterSectionStyled>
          <h4>Redes Sociales</h4>
          <FooterLinkStyled href="#">Facebook</FooterLinkStyled>
          <FooterLinkStyled href="#">Instagram</FooterLinkStyled>
          <FooterLinkStyled href="#">WhatsApp</FooterLinkStyled>
        </FooterSectionStyled>
      </FooterContentStyled>
    </FooterContainerStyled>
  );
};

export default Footer;