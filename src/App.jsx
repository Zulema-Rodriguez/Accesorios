

import Categorias from "./components/Categorias/Categorias"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Layout from "./components/Layout/Layout"
import Navbar from "./components/Navbar/Navbar"
import CardsProductos from "./components/Productos/CardsProductos"
import Nosotros from "./components/Nosotros/Nosotros"

import {BrowserRouter,Routes,Route} from "react-router-dom"
import NoPage from "./assets/paginas/NoPage"
import About from "./assets/paginas/About"
import Contacto from "./assets/paginas/Contacto"
import Layout2 from "./assets/paginas/Layout2"
import Productos from "./assets/paginas/Productos"

function App() {
  

  return (
    <>
      <Navbar/>
      <Layout>
        <Hero/>
        <Categorias/>
        <CardsProductos/>
      </Layout>
      <Nosotros/>
      <Footer/>


      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout2/>}>
          <Route index element={<Productos/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contacto' element={<Contacto/>}/>
          <Route path='*' element={<NoPage/>}/>
          <Route/>
        </Route>
      </Routes>
    </BrowserRouter>

      
    </>


    

  );
}

export default App
