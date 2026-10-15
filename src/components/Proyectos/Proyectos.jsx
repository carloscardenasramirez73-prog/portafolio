import './Proyectos.css';

const Proyectos = () => {
  const proyectosData = [
    {
      id: 1,
      imagen: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      titulo: "Cotizador Web Internacional - KML Logistics",
      descripcion: "Sistema web interativo para cotización de fletes internacionales y exportaciones con lógica condicional en WordPress y Fluent Forms.",
      tecnologias: ["WordPress", "Fluent Forms", "JavaScript", "CSS3", "PHP"],
      linkDemo: "#",
      linkCodigo: "#"
    },
    {
      id: 2,
      imagen: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      titulo: "Control Multimedia por Gestos con IA",
      descripcion: "Aplicación en Python que detecta gestos con la mano a través de la cámara web para controlar la reproducción de video en tiempo real.",
      tecnologias: ["Python", "OpenCV", "MediaPipe", "NumPy"],
      linkDemo: "#",
      linkCodigo: "#"
    },
    {
      id: 3,
      imagen: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      titulo: "Task Manager Android App",
      descripcion: "Aplicación móvil nativa para la gestión de tareas con almacenamiento local SQLite, RecyclerView y workflows en Git.",
      tecnologias: ["Java", "Android Studio", "SQLite", "Git"],
      linkDemo: "#",
      linkCodigo: "#"
    },
    {
      id: 4,
      imagen: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      titulo: "Sistema de Seguridad Arduino con Keypad & LCD",
      descripcion: "Prototipo de cerradura electrónica codificada en C++ con teclado matricial, pantalla LCD, sensor de distancia y zumbador.",
      tecnologias: ["Arduino", "C++", "Tinkercad", "Electronics"],
      linkDemo: "#",
      linkCodigo: "#"
    }
  ];

  return (
    <section id="proyectos" className="proyectos-section">
      <div className="proyectos-container">
        <h2 className="section-title text-center">Proyectos Destacados</h2>
        <div className="proyectos-grid">
          {proyectosData.map((proyecto) => (
            <article key={proyecto.id} className="proyecto-card">
              <div className="proyecto-imagen">
                <img src={proyecto.imagen} alt={`Captura de ${proyecto.titulo}`} />
              </div>
              <div className="proyecto-contenido">
                <h3 className="proyecto-titulo">{proyecto.titulo}</h3>
                <p className="proyecto-desc">{proyecto.descripcion}</p>
                <div className="proyecto-tags">
                  {proyecto.tecnologias.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="proyecto-links">
                  <a href={proyecto.linkDemo} target="_blank" rel="noopener noreferrer" className="btn-proyecto btn-demo">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Demo en Vivo
                  </a>
                  <a href={proyecto.linkCodigo} target="_blank" rel="noopener noreferrer" className="btn-proyecto btn-codigo">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Ver Código
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;