import Reveal from '../Reveal/Reveal';
import SectionHeader from '../SectionHeader/SectionHeader';
import { spotlight } from '../../utils/spotlight';
import './Perfil.css';

const Perfil = () => {
  return (
    <section id="sobre-mi" className="sobre-mi-section">
      <div className="sobre-mi-container">
        <SectionHeader
          numero="01"
          etiqueta="Sobre mí"
          titulo="Conóceme"
          subtitulo="Mi perfil profesional, formación y experiencia."
        />

        <div className="sobre-mi-grid">
          {/* TARJETA 1: PERFIL PROFESIONAL */}
          <Reveal direction="left" fill>
            <div className="perfil-card spot" onMouseMove={spotlight}>
              <div className="card-header">
                <div className="icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h3>Perfil profesional</h3>
              </div>
              <p className="card-text">
                Estudiante de Ingeniería de Software con Inteligencia Artificial en SENATI. Cuento con experiencia en desarrollo web Full Stack (React, Vite, WordPress, PHP, SQLite/MySQL), desarrollo móvil nativo en Android (Java) y prototipado de hardware embebido con Arduino.
              </p>
              <p className="card-text">
                He colaborado en el sector logístico internacional desarrollando plataformas web, cotizadores en línea con lógica condicional avanzada y automatización de flujos con Python.
              </p>
              <p className="card-text">
                Además, manejo modelos estadísticos y de análisis de datos con R/RStudio, visión artificial con OpenCV y MediaPipe, y control de versiones colaborativo utilizando Git y GitHub.
              </p>
            </div>
          </Reveal>

          {/* TARJETA 2: EDUCACIÓN */}
          <Reveal direction="right" fill delay={150}>
            <div className="perfil-card spot" onMouseMove={spotlight}>
              <div className="card-header">
                <div className="icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                </div>
                <h3>Educación & Idiomas</h3>
              </div>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-header">
                    <h4>Ingeniería de Software con IA</h4>
                    <span className="perfil-badge">En Curso</span>
                  </div>
                  <span className="timeline-date">SENATI</span>
                </div>

                <div className="timeline-item">
                  <div className="timeline-header">
                    <h4>English Language Program</h4>
                    <span className="perfil-badge">Básico</span>
                  </div>
                  <span className="timeline-date">ICPNA</span>
                </div>

                <div className="timeline-item">
                  <div className="timeline-header">
                    <h4>Desarrollo Web & Software Intern</h4>
                    <span className="perfil-badge">Experiencia Práctica</span>
                  </div>
                  <span className="timeline-date">KML LOGISTICS INTERNATIONAL</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Perfil;
