import { useContext } from 'react';
import { themeContext } from '../utils/themeContext';
import SkillsBar from './SkillsBar';

const Skills = () => {
  const theme = useContext(themeContext);

  return (
    <section className="skills">
      <h2
        className={`heading__primary ${
          theme.lightMode && 'heading__primary--lightMode'
        }`}
      >
        Habilidades
      </h2>
      <div className="skills__grid">
        <div className="skills__text">
          <p className="texts">
            He desarrollado habilidades tanto en la parte
            <strong> Front-end</strong> como en<strong> Back-end</strong>.
          </p>
          <p className="texts">
            Considero que mis puntos fuertes son la maquetación con
            <strong> React</strong>,<strong> CSS</strong> y
            <strong> Sass</strong> en la parte Front-end, y
            <strong> Node.js</strong> con<strong> express</strong> en la parte
            Back-end
          </p>
          <p className="texts">
            Tengo conocimientos sólidos en la base de datos NoSQL
            <strong> MongoDB</strong> con<strong> mongoose</strong>.
          </p>
          <p className="texts">
            También he hecho un poco de testing con<strong> Jest</strong>, y he
            empezado a aprender<strong> Docker</strong>.
          </p>
        </div>
        <div className="skills__bars">
          <SkillsBar />
        </div>
      </div>
    </section>
  );
};

export default Skills;
