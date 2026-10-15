import './Banner.css';
import miFoto from '../../assets/miFoto.png';

const Banner = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="status-badge">
          <span className="status-dot"></span>
          Disponible para proyectos & prácticas
        </div>

        <div className="profile-photo-container">
          <img
            src={miFoto}
            alt="Foto de Carlos Cardenas"
            className="profile-photo"
          />
        </div>

        <h1 className="hero-title">
          Carlos <br />
          <span className="text-neon">Cardenas</span>
        </h1>

        <h2 className="hero-subtitle">
          Software Engineering & Artificial Intelligence Student | Full Stack & Embedded Systems Developer
        </h2>

        <p className="hero-description">
          Desarrollo aplicaciones web modernas, sistemas embebidos e integraciones con Inteligencia Artificial. Apasionado por la optimización de procesos, la visión artificial y el análisis de datos para crear soluciones eficientes.
        </p>

        <div className="hero-buttons">
          <a href="#proyectos" className="btn btn-primary">Ver Proyectos</a>
          <a href="#contacto" className="btn btn-secondary">Contáctame</a>
        </div>
      </div>

      <div className="scroll-indicator">
        ↓
      </div>
    </section>
  );
};

export default Banner;