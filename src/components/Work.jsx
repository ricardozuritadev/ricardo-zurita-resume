import { useContext } from 'react';
import { themeContext } from '../utils/themeContext';

const Work = () => {
  const theme = useContext(themeContext);

  return (
    <section className="work">
      <h2
        className={`heading__primary ${
          theme.lightMode && 'heading__primary--lightMode'
        }`}
      >
        Proyectos
      </h2>

      <div className="work__grid">
        <a
          href="https://github.com/ricardozurita/ricardo-zurita-resume"
          target="_blank"
          rel="noreferrer"
        >
          <div className="work__img work__img--1"></div>
        </a>

        <a href="https://eiciempies.es/" target="_blank" rel="noreferrer">
          <div className="work__img work__img--2"></div>
        </a>

        <a
          href="https://github.com/ricardozurita/popclaim"
          target="_blank"
          rel="noreferrer"
        >
          <div className="work__img work__img--3"></div>
        </a>

        <a
          href="https://github.com/ricardozurita/galatours/tree/develop"
          target="_blank"
          rel="noreferrer"
        >
          <div className="work__img work__img--4"></div>
        </a>

        <a
          href="https://github.com/ricardozurita/poke-app-react"
          target="_blank"
          rel="noreferrer"
        >
          <div className="work__img work__img--5"></div>
        </a>

        <a
          href="https://github.com/ricardozurita/vet-patient-monitoring-react"
          target="_blank"
          rel="noreferrer"
        >
          <div className="work__img work__img--6"></div>
        </a>
      </div>
    </section>
  );
};

export default Work;
