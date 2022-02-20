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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            similique ipsa excepturi minus pariatur dolorum fuga perferendis,
            sint blanditiis! Tenetur temporibus debitis error dolorum quis iste,
            est voluptatum pariatur vitae nisi molestias, ratione eius
            laboriosam iusto a! Maxime quia repudiandae iusto voluptate, aliquam
            cumque in. Veritatis esse fugit reiciendis ea?
          </p>
          <p className="texts">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            similique ipsa excepturi minus pariatur dolorum fuga perferendis,
            sint blanditiis! Tenetur temporibus debitis error dolorum quis iste,
            est voluptatum pariatur vitae nisi molestias, ratione eius
            laboriosam iusto a! Maxime quia repudiandae iusto voluptate, aliquam
            cumque in. Veritatis esse fugit reiciendis ea?
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
