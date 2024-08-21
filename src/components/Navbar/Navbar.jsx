import {
  LinkContainerStyled,
  LinksContainerStyled,
  NavbarContainerStyled,
  UserNavStyled,
  UserContainerStyled,
  SpanStyled,
  MenuContainerStyled,
  HomeContainerStyled,
  ProductContainerStyled,
  InfoContainerStyled
} from './NavbarStyles';

import { FaUserAlt } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import { FaProductHunt } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from 'react-router-dom'; // Importado react-router-dom

function Navbar() {
  return (
      <div>
          <NavbarContainerStyled>
              <div>
                  <a href="#">
                      <img src="https://static.vecteezy.com/system/resources/thumbnails/023/040/393/small_2x/golden-wedding-diamond-logo-graphic-design-vector.jpg" alt="logo" />
                  </a>
              </div>

              <LinksContainerStyled>
                  <HomeContainerStyled>
                      <Link to="/">
                          <LinkContainerStyled>
                              <HiHome />
                          </LinkContainerStyled>
                          Home
                      </Link>
                  </HomeContainerStyled>

                  <ProductContainerStyled>
                      <Link to="/productos">
                          <LinkContainerStyled>
                              <FaProductHunt />
                          </LinkContainerStyled>
                          Productos
                      </Link>
                  </ProductContainerStyled>

                  <InfoContainerStyled>
                      <Link to="/nosotros">
                          <LinkContainerStyled>
                              <FaInfoCircle />
                          </LinkContainerStyled>
                          Nosotros
                      </Link>
                  </InfoContainerStyled>

                  {/* Nuevo enlace para la página de Contacto */}
                  <InfoContainerStyled>
                      <Link to="/contacto">
                          <LinkContainerStyled>
                              <FaInfoCircle />
                          </LinkContainerStyled>
                          Contacto
                      </Link>
                  </InfoContainerStyled>

                  <UserNavStyled>
                      <UserContainerStyled>
                          <SpanStyled />
                          <FaUserAlt />
                      </UserContainerStyled>
                      <Link to="/iniciar-sesion">Iniciar Sesión</Link>
                  </UserNavStyled>

                  <MenuContainerStyled>
                      <AiOutlineMenu />
                  </MenuContainerStyled>
              </LinksContainerStyled>
          </NavbarContainerStyled>
      </div>
  )
}

export default Navbar;