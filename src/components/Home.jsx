import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { themeContext } from '../utils/themeContext';
import { faComputerMouse } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const theme = useContext(themeContext);

  return (
    <section className="name">
      <div className="name__texts">
        <p className="name__hi">Hola, soy</p>

        <p
          className={`name__first ${
            theme.lightMode && 'name__first--lightMode'
          }`}
        >
          Ricardo
        </p>
        <p className="name__second">Zurita</p>
        <p className="name__developer">
          Desarrollador Web Fullstack Junior <strong>|</strong> MERN
        </p>
      </div>
      <div className="character">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/ricardo-zurita-resume.appspot.com/o/imgs%2Fr-home.png?alt=media&token=c1cd444a-dd62-44ce-9051-f09aae4442c1"
          alt="personaje 3D con gafas saludando"
          className="character__img"
        />
      </div>
      <div className="scroll">
        <div className="scroll__icons">
          <FontAwesomeIcon icon={faComputerMouse} size="2x" />
          <FontAwesomeIcon icon={faAngleDown} size="lg" />
        </div>
        <p className="scroll__text">Scroll</p>
      </div>
    </section>
  );
};

export default Home;
