

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Productos from "./pages/Productos";
import Footer from "./components/Footer/Footer"; // Asegúrate de importar Footer
import NoPage from './pages/NoPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Página de inicio */}
          <Route path="/productos" element={<Productos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path='*' element={<NoPage/>}/>
          {/* Puedes agregar más rutas según sea necesario */}
        </Routes>
      </Layout>
      <Footer />
    </Router>
  );
}

export default App;