import { useEffect, useState } from 'react';
import './Banner.css';
import miFoto from '../../assets/miFoto.png';

const ROLES = [
  'Full Stack Developer',
  'Embedded Systems Developer',
  'AI & Computer Vision Enthusiast',
  'Software Engineering Student',
];

// Efecto de escritura que cambia de rol
const useTyping = (words) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    let timer;
    if (!deleting && text === word) {
      timer = setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && text === '') {
      timer = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }, 300);
    } else {
      timer = setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? 35 : 70
      );
    }
    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return text;
};

const Banner = () => {
  const rol = useTyping(ROLES);

  return (
    <section id="inicio" className="hero-section">
      <div className="hero-orb orb-1"></div>
      <div className="hero-orb orb-2"></div>
      <div className="hero-grid"></div>

      <div className="hero-content">
        <div className="status-badge anim" style={{ '--d': '0ms' }}>
          <span className="status-dot"></span>
          Disponible para proyectos & prácticas
        </div>

        <div className="profile-photo-container anim" style={{ '--d': '120ms' }}>
          <div className="photo-ring"></div>
          <img src={miFoto} alt="Foto de Carlos Cardenas" className="profile-photo" />
        </div>

        <h1 className="hero-title anim" style={{ '--d': '240ms' }}>
          Carlos <br />
          <span className="text-neon glitch">Cardenas</span>
        </h1>

        <p className="hero-typing anim" style={{ '--d': '360ms' }}>
          <span className="typing-prefix">&gt;</span> {rol}
          <span className="typing-cursor">|</span>
        </p>

        <h2 className="hero-subtitle anim" style={{ '--d': '480ms' }}>
          Estudiante de Ingeniería de Software e Inteligencia Artificial
        </h2>

        <p className="hero-description anim" style={{ '--d': '600ms' }}>
          Desarrollo aplicaciones web modernas, sistemas embebidos e integraciones con Inteligencia Artificial. Apasionado por la optimización de procesos, la visión artificial y el análisis de datos para crear soluciones eficientes.
        </p>

        <div className="hero-buttons anim" style={{ '--d': '720ms' }}>
          <a href="#proyectos" className="btn btn-primary">Ver Proyectos</a>
          <a href="#contacto" className="btn btn-secondary">Contáctame</a>
        </div>
      </div>

      <a href="#sobre-mi" className="scroll-indicator" aria-label="Bajar">
        <span className="mouse"><span className="wheel"></span></span>
      </a>
    </section>
  );
};

export default Banner;
