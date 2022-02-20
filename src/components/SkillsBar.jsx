import { useContext } from 'react';
import { themeContext } from '../utils/themeContext';

const SkillsBar = () => {
  const theme = useContext(themeContext);

  return (
    <section className="skillsbar">
      <div className="skillsbar__frontend">
        <h3 className="heading__secondary">Front-End</h3>

        <p className="skillsbar__title">HTML5</p>
        <div
          className={`bar expert ${theme.lightMode && 'bar--lightMode'}`}
        ></div>

        <p className="skillsbar__title">CSS3 y Sass</p>
        <div
          className={`bar expert ${theme.lightMode && 'bar--lightMode'}`}
        ></div>

        <p className="skillsbar__title">JavaScript ES6</p>
        <div
          className={`bar advanced ${
            theme.lightMode ? 'bar--lightMode front' : 'back'
          }`}
        ></div>

        <p className="skillsbar__title">React</p>
        <div
          className={`bar front intermediate ${
            theme.lightMode && 'bar--lightMode'
          }`}
        ></div>
      </div>

      <div className="skillsbar__backend">
        <h3 className="heading__secondary">Back-End</h3>

        <p className="skillsbar__title">Node.js</p>
        <div
          className={`bar intermediate ${theme.lightMode && 'bar--lightMode'}`}
        ></div>

        <p className="skillsbar__title">Express</p>
        <div
          className={`bar intermediate ${theme.lightMode && 'bar--lightMode'}`}
        ></div>

        <p className="skillsbar__title">MongoDB</p>
        <div
          className={`bar intermediate ${
            theme.lightMode ? 'bar--lightMode front' : 'back'
          }`}
        ></div>

        <p className="skillsbar__title">PostgreSQL - MySQL</p>
        <div
          className={`bar front learning ${
            theme.lightMode && 'bar--lightMode'
          }`}
        ></div>
      </div>
    </section>
  );
};

export default SkillsBar;
