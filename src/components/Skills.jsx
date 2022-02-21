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
        <div className="skills__text skills__text--hide">
          <p className="texts">
            He desarrollado habilidades tanto en la parte
            <strong> Front-end</strong> como en<strong> Back-end</strong>. Soy
            especialista en el stack<strong> MERN</strong>.
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
          <div className="skills__pic">
            <img
              className="skills__img"
              src="https://firebasestorage.googleapis.com/v0/b/ricardo-zurita-resume.appspot.com/o/logos%2Fmern.png?alt=media&token=428eb923-6210-4eef-8044-38d570b50d52"
              alt="mern stack"
            />
          </div>
        </div>
        <div className="skills__bars">
          <SkillsBar />
        </div>
      </div>
    </section>
  );
};

export default Skills;
