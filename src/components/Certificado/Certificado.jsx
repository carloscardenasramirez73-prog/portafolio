import Reveal from '../Reveal/Reveal';
import SectionHeader from '../SectionHeader/SectionHeader';
import { spotlight } from '../../utils/spotlight';
import './Certificado.css';

const Certificado = () => {
  const base = '/certificados/';
  const certificadosData = [
    {
      id: 1,
      titulo: "Python Essentials 1",
      emisor: "Cisco Networking Academy · OpenEDG Python Institute",
      fecha: "2024",
      descripcion: "Diseño, desarrollo, depuración y ejecución de programas simples en Python 3, con pensamiento algorítmico.",
      archivo: "python-essentials-1.pdf"
    },
    {
      id: 2,
      titulo: "Introduction to Data Science",
      emisor: "Cisco Networking Academy",
      fecha: "2024",
      descripcion: "El rol de los datos en la IA y el Machine Learning, y las opciones de carrera en análisis de datos.",
      archivo: "introduction-to-data-science.pdf"
    },
    {
      id: 3,
      titulo: "Introduction to Internet of Things",
      emisor: "Cisco Networking Academy",
      fecha: "2024",
      descripcion: "IoT y transformación digital, automatización, inteligencia artificial y seguridad en un mundo digitalizado.",
      archivo: "introduction-to-iot.pdf"
    },
    {
      id: 4,
      titulo: "Introduction to Cybersecurity",
      emisor: "Cisco Networking Academy",
      fecha: "2024",
      descripcion: "Fundamentos de seguridad en línea, amenazas y ataques comunes, y cómo protegerse y proteger organizaciones.",
      archivo: "introduction-to-cybersecurity.pdf"
    },
    {
      id: 5,
      titulo: "Networking Basics",
      emisor: "Cisco Networking Academy",
      fecha: "2024",
      descripcion: "Comunicación en redes, direccionamiento IPv4/IPv6, routers, y pruebas de conectividad.",
      archivo: "networking-basics.pdf"
    },
    {
      id: 6,
      titulo: "Computer Hardware Basics",
      emisor: "Cisco Networking Academy",
      fecha: "2024",
      descripcion: "Instalación de componentes para armar, reparar o actualizar PC, y mantenimiento preventivo.",
      archivo: "computer-hardware-basics.pdf"
    },
    {
      id: 7,
      titulo: "Red Hat System Administration I (RH124)",
      emisor: "Red Hat",
      fecha: "2025",
      descripcion: "Certificado de asistencia al curso de administración de sistemas Linux, versión 9.3 (40 horas).",
      archivo: "red-hat-system-administration.pdf"
    },
    {
      id: 8,
      titulo: "English Language Program (Básico)",
      emisor: "ICPNA",
      fecha: "2026",
      descripcion: "Programa de capacitación en el idioma inglés enfocado en la comprensión y comunicación técnica fundamental.",
      archivo: null
    }
  ];

  return (
    <section id="certificados" className="certificados-section section-alt">
      <div className="certificados-container">
        <SectionHeader
          numero="04"
          etiqueta="Certificados"
          titulo="Mis Certificaciones"
          subtitulo="Formación complementaria y credenciales que respaldan mi aprendizaje."
        />
        <div className="certificados-grid">
          {certificadosData.map((cert, i) => (
            <Reveal key={cert.id} delay={i * 120} fill>
            <article className="certificado-card spot" onMouseMove={spotlight}>
              <div className="certificado-header">
                <div className="cert-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </div>
                <span className="cert-badge">{cert.fecha}</span>
              </div>
              <div className="certificado-body">
                <h3 className="cert-title">{cert.titulo}</h3>
                <span className="cert-issuer">{cert.emisor}</span>
                <p className="cert-desc">{cert.descripcion}</p>
              </div>
              <div className="certificado-footer">
                {/* El atributo 'download' fuerza la descarga directa de la imagen */}
                {!cert.archivo ? (
                  <span className="btn-cert btn-cert-disabled">Próximamente</span>
                ) : (
                <a 
                  href={base + cert.archivo} 
                  download={cert.archivo}
                  className="btn-cert"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Descargar PDF
                </a>
                )}
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificado;