import { useEffect, useState } from 'react';
import './Navbar.css';

const links = [
  { id: 'sobre-mi', texto: 'Perfil' },
  { id: 'tech-stack', texto: 'Tech Stack' },
  { id: 'proyectos', texto: 'Proyectos' },
  { id: 'certificados', texto: 'Certificados' },
  { id: 'contacto', texto: 'Contacto' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState('');

  // Barra de progreso + navbar compacta al hacer scroll
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setScrolled(h.scrollTop > 20);
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Resalta el link de la sección que se está viendo
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id === 'inicio' ? '' : entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ['inicio', ...links.map((l) => l.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#inicio" className="navbar-logo" onClick={() => setIsOpen(false)}>
        <span className="text-neon">Carlos</span> Cardenas
      </a>

      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={active === l.id ? 'active' : ''}
            onClick={() => setIsOpen(false)}
          >
            {l.texto}
          </a>
        ))}
      </div>

      <div className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <span className="scroll-progress" style={{ width: `${progress}%` }}></span>
    </nav>
  );
};

export default Navbar;
