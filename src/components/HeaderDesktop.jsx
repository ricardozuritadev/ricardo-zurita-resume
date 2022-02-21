import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { themeContext } from '../utils/themeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Nav from './Nav';

const HeaderDesktop = () => {
  const theme = useContext(themeContext);

  return (
    <header className={`header ${theme.lightMode && 'header--lightMode'}`}>
      <NavLink to="/">
        <div className="logo">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ricardo-zurita-resume.appspot.com/o/logos%2Frz.svg?alt=media&token=d4585da6-caf4-45a0-8e4f-4c3ecfbf3ea0"
            alt="logo"
            className="logo__img"
          />
        </div>
      </NavLink>

      <Nav />

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
    </header>
  );
};

export default HeaderDesktop;
