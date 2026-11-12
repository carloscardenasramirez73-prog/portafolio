import Reveal from '../Reveal/Reveal';
import './SectionHeader.css';

const SectionHeader = ({ numero, etiqueta, titulo, subtitulo }) => {
  return (
    <Reveal>
      <header className="section-header">
        <span className="section-eyebrow">
          <span className="eyebrow-num">{numero}</span>
          <span className="eyebrow-line"></span>
          {etiqueta}
        </span>
        <h2 className="section-title">{titulo}</h2>
        {subtitulo && <p className="section-subtitle">{subtitulo}</p>}
        <span className="section-underline"></span>
      </header>
    </Reveal>
  );
};

export default SectionHeader;
