import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Perfil from './components/Perfil/Perfil';
import Habilidades from './components/Habilidades/Habilidades';
import Proyectos from './components/Proyectos/Proyectos';
import Certificados from './components/Certificado/Certificado';
import Contacto from './components/Contacto/Contacto';
import ScrollTop from './components/ScrollTop/ScrollTop';
import './App.css';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Perfil />
      <Habilidades />
      <Proyectos />
      <Certificados />
      <Contacto />
      <footer className="footer">
        © {new Date().getFullYear()} <span>Carlos Cardenas</span> · Hecho con React & Vite
      </footer>
      <ScrollTop />
    </>
  );
}

export default App;
