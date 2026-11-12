import { useEffect, useRef, useState } from 'react';

// Envuelve cualquier contenido y lo anima cuando entra en pantalla
const Reveal = ({ children, delay = 0, direction = 'up', fill = false, className = '' }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${direction} ${fill ? 'fill' : ''} ${visible ? 'visible' : ''} ${className}`}
      style={{ '--delay': `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;
