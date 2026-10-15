import './Habilidades.css';

const Habilidades = () => {
  const skillsData = [
    { id: 1, titulo: "Python & Data Science", descripcion: "Pandas, NumPy, Scikit-Learn, TensorFlow, OpenCV, MediaPipe.", nivel: "Avanzado", botonTexto: "VER PROYECTO", estado: "completado" },
    { id: 2, titulo: "React & JavaScript", descripcion: "React, Vite, JSX, Hooks, CSS Grid, Flexbox, Vercel.", nivel: "Avanzado", botonTexto: "VER PROYECTO", estado: "completado" },
    { id: 3, titulo: "Java & Android Native", descripcion: "Android Studio, SQLite, RecyclerView, Java, Git.", nivel: "Intermedio", botonTexto: "VER PROYECTO", estado: "completado" },
    { id: 4, titulo: "Arduino & Electronics", descripcion: "C++, Teclados matriciales, Pantallas LCD, Sensores ultrasónicos.", nivel: "Intermedio", botonTexto: "VER PROYECTO", estado: "completado" },
    { id: 5, titulo: "SQL & Databases", descripcion: "MySQL, PostgreSQL, SQLite, Consultas y Modelado de datos.", nivel: "Avanzado", botonTexto: "VER PROYECTO", estado: "completado" },
    { id: 6, titulo: "WordPress & Web Forms", descripcion: "Fluent Forms, CSS Personalizado, Lógica Condicional.", nivel: "Experto", botonTexto: "VER PROYECTO", estado: "completado" },
    { id: 7, titulo: "R & Statistical Modeling", descripcion: "RStudio, Regresión Lineal, Matrices de Correlación.", nivel: "Intermedio", botonTexto: "VER PROYECTO", estado: "completado" },
    { id: 8, titulo: "Git & GitHub", descripcion: "Control de versiones, Gestión de ramas, Resolver conflictos.", nivel: "Avanzado", botonTexto: "VER PROYECTO", estado: "completado" }
  ];

  return (
    <section id="tech-stack" className="habilidades-section">
      <div className="habilidades-container">
        <div className="habilidades-grid">
          {skillsData.map((skill) => (
            <div key={skill.id} className="skill-card">
              <div className="skill-header">
                <div className="skill-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon">
                    <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                </div>
                <span className="skill-badge badge-green">
                  {skill.botonTexto}
                </span>
              </div>
              <div className="skill-body">
                <h3 className="skill-title">{skill.titulo}</h3>
                <p className="skill-desc">{skill.descripcion}</p>
                <span className="skill-level">{skill.nivel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;