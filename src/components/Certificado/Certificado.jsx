import './Certificado.css';
import ciscoImg from '../../assets/cisco_packet_tracer.png'; // Ajusta el nombre según lo guardaste
import redHatImg from '../../assets/red_hat.png';           // Ajusta el nombre según lo guardaste
// import dbImg from '../../assets/base_de_datos.png';      // Descomenta si agregas la de base de datos
// import icpnaImg from '../../assets/icpna_basico.png';      // Descomenta si agregas la de inglés

const Certificado = () => {
  const certificadosData = [
    {
      id: 1,
      titulo: "Introduction to Packet Tracer",
      emisor: "Cisco Networking Academy",
      fecha: "2025",
      descripcion: "Acreditación en habilidades fundamentales de redes, simulación de topologías y configuración de dispositivos de red.",
      imagenUrl: ciscoImg,
      nombreArchivo: "certificado_cisco_packet_tracer.png"
    },
    {
      id: 2,
      titulo: "Red Hat System Administration",
      emisor: "Red Hat",
      fecha: "2025",
      descripcion: "Fundamentos de administración de sistemas Linux, gestión de usuarios, permisos y servicios esenciales.",
      imagenUrl: redHatImg,
      nombreArchivo: "certificado_red_hat.png"
    },
    {
      id: 3,
      titulo: "Fundamentos de Bases de Datos",
      emisor: "Formación Profesional",
      fecha: "2026",
      descripcion: "Diseño de modelos relacionales, consultas SQL avanzadas, normalización y gestión de motores de bases de datos.",
      imagenUrl: "#", // Reemplaza con tu variable importada cuando la subas
      nombreArchivo: "certificado_bases_de_datos.png"
    },
    {
      id: 4,
      titulo: "English Language Program (Básico)",
      emisor: "ICPNA",
      fecha: "2026",
      descripcion: "Programa de capacitación en el idioma inglés enfocado en la comprensión y comunicación técnica fundamental.",
      imagenUrl: "#", // Reemplaza con tu variable importada cuando la subas
      nombreArchivo: "certificado_icpna_basico.png"
    }
  ];

  return (
    <section id="certificados" className="certificados-section">
      <div className="certificados-container">
        <h2 className="section-title text-center">Mis Certificaciones</h2>
        <div className="certificados-grid">
          {certificadosData.map((cert) => (
            <article key={cert.id} className="certificado-card">
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
                <a 
                  href={cert.imagenUrl} 
                  download={cert.nombreArchivo}
                  className="btn-cert"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Descargar Credencial
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificado;