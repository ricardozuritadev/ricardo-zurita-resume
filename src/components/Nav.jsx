import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { themeContext } from '../utils/themeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Nav = () => {
  const theme = useContext(themeContext);

  return (
    <div>
      <nav className="nav">
        <NavLink
          className={`nav__links ${theme.lightMode && 'nav__links--lightMode'}`}
          to="/"
        >
          Inicio
        </NavLink>

        <NavLink
          className={`nav__links ${theme.lightMode && 'nav__links--lightMode'}`}
          to="/skills"
        >
          Habilidades
        </NavLink>

        <NavLink
          className={`nav__links ${theme.lightMode && 'nav__links--lightMode'}`}
          to="/studies"
        >
          Estudios
        </NavLink>

        <NavLink
          className={`nav__links ${theme.lightMode && 'nav__links--lightMode'}`}
          to="/work"
        >
          Proyectos
        </NavLink>

        <NavLink
          className={`nav__links ${theme.lightMode && 'nav__links--lightMode'}`}
          to="/contact"
        >
          Contacto
        </NavLink>
      </nav>

      <div className="nav__social">
        <a
          className={`nav_socialLinks ${
            theme.lightMode && 'nav__socialLinks--lightMode'
          }`}
          href="https://www.linkedin.com/in/ricardozuritab/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
        </a>

        <a
          className={`nav_socialLinks ${
            theme.lightMode && 'nav__socialLinks--lightMode'
          }`}
          href="https://github.com/ricardozurita"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
      </div>
    </div>
  );
};

export default Nav;
