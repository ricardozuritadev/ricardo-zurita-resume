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
        <div className="work__img work__img--1"></div>
        <div className="work__img work__img--2"></div>
        <div className="work__img work__img--3"></div>
        <div className="work__img work__img--4"></div>
        <div className="work__img work__img--5"></div>
        <div className="work__img work__img--6"></div>
      </div>
    </section>
  );
};

export default Work;
