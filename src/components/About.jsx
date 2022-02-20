import { useContext } from 'react';
import { themeContext } from '../utils/themeContext';

const About = () => {
  const theme = useContext(themeContext);

  return (
    <section className="about">
      <div className="about__text">
        <h2
          className={`heading__primary ${
            theme.lightMode && 'heading__primary--lightMode'
          }`}
        >
          Sobre mí
        </h2>
        <p className="texts">
          Soy desarrollador web Full-Stack especializado en el stack
          <strong> MERN</strong> .
        </p>
        <p className="texts">
          Al principio, el desarrollo web era una curiosidad para mí. Ahora se
          ha convertido en una pasión y día a día estoy mejorando y en constante
          aprendizaje de nuevas tecnologías.
        </p>
        <p className="texts">
          También he hecho estudios en diseño 2D/3D, grabación y edición de
          vídeo.
        </p>
      </div>
      <div className="about__img"></div>
    </section>
  );
};

export default About;
