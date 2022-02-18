import { useContext } from 'react';
import { themeContext } from '../utils/themeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const NavBar = () => {
  const theme = useContext(themeContext);

  return (
    <header className={`header ${theme.lightMode && 'header--lightMode'}`}>
      <div className="logo">
        <img src="" alt="" className="logo__img" />
      </div>
      <nav className="nav">
        <ul className="nav__list">
          <li
            className={`nav__links ${
              theme.lightMode && 'nav__links--lightMode'
            }`}
          >
            Sobre mí
          </li>
          <li
            className={`nav__links ${
              theme.lightMode && 'nav__links--lightMode'
            }`}
          >
            Habilidades
          </li>
          <li
            className={`nav__links ${
              theme.lightMode && 'nav__links--lightMode'
            }`}
          >
            Estudios
          </li>
          <li
            className={`nav__links ${
              theme.lightMode && 'nav__links--lightMode'
            }`}
          >
            Proyectos
          </li>
          <li
            className={`nav__links ${
              theme.lightMode && 'nav__links--lightMode'
            }`}
          >
            Contacto
          </li>
        </ul>
      </nav>
      <div className="nav__social">
        <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </div>
    </header>
  );
};

export default NavBar;
