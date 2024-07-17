import { Outlet, Link } from "react-router-dom"

function Layout2() {
  return (
    <>
       <nav>
          <ul>
             <li>
                <Link to="/">Productos</Link>
             </li>
             <li>
                <Link to="contacto">Contacto</Link> 
             </li>
             <li>
                <Link to="about">About</Link>
             </li>
          </ul>
       </nav>

    </>
  )
}

export default Layout2