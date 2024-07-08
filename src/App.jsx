import Categorias from "./components/Categorias/Categorias"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Layout from "./components/Layout/Layout"
import Navbar from "./components/Navbar/Navbar"
import CardsProductos from "./components/Productos/CardsProductos"
import Nosotros from "./components/Nosotros/Nosotros"

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
      
    </>
  )
}

export default App
