import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { themeContext } from '../utils/themeContext';

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
          to="/about"
        >
          Sobre mí
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
    </div>
  );
};

export default Nav;
