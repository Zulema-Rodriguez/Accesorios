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

  import {FaUserAlt} from "react-icons/fa";
  import {HiHome} from "react-icons/hi";
  import {AiOutlineMenu} from "react-icons/ai";
  import {FaProductHunt} from "react-icons/fa";
  import {FaInfoCircle} from "react-icons/fa"

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
                  <a href="#">
                    <LinkContainerStyled>
                       <HiHome/>
                    </LinkContainerStyled>
                    Home
                  </a>
               </HomeContainerStyled>

               <ProductContainerStyled>
                 <a href="#">
                  <LinkContainerStyled>
                   <FaProductHunt/>
                  </LinkContainerStyled>
                    Productos
                 </a>
               </ProductContainerStyled>

               <InfoContainerStyled>
                 <a href="#">
                   <LinkContainerStyled>
                    <FaInfoCircle/>
                   </LinkContainerStyled>
                     Nosotros
                 </a>
               </InfoContainerStyled>

               <UserNavStyled>
                <UserContainerStyled>
                  <SpanStyled/>
                  <FaUserAlt/>
                </UserContainerStyled>
                Iniciar Sesión
               </UserNavStyled>
          
               
                 
                  
                  
                
                  
                 
            

               <MenuContainerStyled>
                 <AiOutlineMenu/>
               </MenuContainerStyled>
           </LinksContainerStyled>
        </NavbarContainerStyled>
    </div>
    
  )
}

export default Navbar