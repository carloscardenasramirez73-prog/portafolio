import Reveal from '../Reveal/Reveal';
import SectionHeader from '../SectionHeader/SectionHeader';
import { spotlight } from '../../utils/spotlight';
import './Habilidades.css';

// Iconos distintos para cada tecnología (trazos tipo "feather")
const iconos = {
  datos: (
    <>
      <line x1="18" y1="20" x2="18" y2="10"></line>
      <line x1="12" y1="20" x2="12" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="14"></line>
    </>
  ),
  web: (
    <>
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </>
  ),
  movil: (
    <>
      <rect x="5" y="2" width="14" height="20" rx="2"></rect>
      <line x1="12" y1="18" x2="12.01" y2="18"></line>
    </>
  ),
  chip: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2"></rect>
      <rect x="9" y="9" width="6" height="6"></rect>
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"></path>
    </>
  ),
  bd: (
    <>
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </>
  ),
  form: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
    </>
  ),
  stats: (
    <>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
      <polyline points="17 6 23 6 23 12"></polyline>
    </>
  ),
  git: (
    <>
      <line x1="6" y1="3" x2="6" y2="15"></line>
      <circle cx="18" cy="6" r="3"></circle>
      <circle cx="6" cy="18" r="3"></circle>
      <path d="M18 9a9 9 0 0 1-9 9"></path>
    </>
  ),
};

const skillsData = [
  { id: 1, icono: 'datos', titulo: 'Python & Data Science', tecnologias: ['Pandas', 'NumPy', 'Scikit-Learn', 'TensorFlow', 'OpenCV', 'MediaPipe'], nivel: 'Intermedio' },
  { id: 2, icono: 'web', titulo: 'React & JavaScript', tecnologias: ['React', 'Vite', 'JSX', 'Hooks', 'CSS Grid', 'Flexbox', 'Vercel'], nivel: 'Intermedio' },
  { id: 3, icono: 'movil', titulo: 'Java & Android Native', tecnologias: ['Android Studio', 'SQLite', 'RecyclerView', 'Java', 'Git'], nivel: 'Intermedio' },
  { id: 4, icono: 'chip', titulo: 'Arduino & Electronics', tecnologias: ['C++', 'Teclados matriciales', 'Pantallas LCD', 'Sensores ultrasónicos'], nivel: 'Básico' },
  { id: 5, icono: 'bd', titulo: 'SQL & Databases', tecnologias: ['MySQL', 'PostgreSQL', 'SQLite', 'Consultas', 'Modelado de datos'], nivel: 'Intermedio' },
  { id: 6, icono: 'form', titulo: 'WordPress & Web Forms', tecnologias: ['Fluent Forms', 'CSS Personalizado', 'Lógica Condicional'], nivel: 'Intermedio' },
  { id: 7, icono: 'stats', titulo: 'R & Statistical Modeling', tecnologias: ['RStudio', 'Regresión Lineal', 'Matrices de Correlación'], nivel: 'Básico' },
  { id: 8, icono: 'git', titulo: 'Git & GitHub', tecnologias: ['Control de versiones', 'Gestión de ramas', 'Resolver conflictos'], nivel: 'Básico' },
];

const Habilidades = () => {
  return (
    <section id="tech-stack" className="habilidades-section section-alt">
      <div className="habilidades-container">
        <SectionHeader
          numero="02"
          etiqueta="Tech Stack"
          titulo="Habilidades Técnicas"
          subtitulo="Las tecnologías y herramientas con las que trabajo día a día."
        />

        <div className="habilidades-grid">
          {skillsData.map((skill, i) => (
            <Reveal key={skill.id} delay={(i % 4) * 100} fill>
              <div className="skill-card spot" onMouseMove={spotlight}>
                <div className="skill-icon">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {iconos[skill.icono]}
                  </svg>
                </div>

                <h3 className="skill-title">{skill.titulo}</h3>

                <div className="skill-chips">
                  {skill.tecnologias.map((tec) => (
                    <span key={tec} className="skill-chip">{tec}</span>
                  ))}
                </div>

                <div className="skill-footer">
                  <span className="skill-level">{skill.nivel}</span>
                  <div className="level-bar" aria-hidden="true">
                    {[0, 1, 2].map((n) => (
                      <span key={n} className={`seg ${n < (skill.nivel === 'Básico' ? 1 : 2) ? 'on' : ''}`}></span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
