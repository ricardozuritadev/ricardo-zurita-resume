import { useContext } from 'react';
import { themeContext } from '../utils/themeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const theme = useContext(themeContext);

  return (
    <section className="contact">
      <h2
        className={`heading__primary ${
          theme.lightMode && 'heading__primary--lightMode'
        }`}
      >
        Contáctame
      </h2>
      <div className="contact__grid">
        <div className="contact__text">
          <p className="texts">
            Escríbeme a
            <span>
              {' '}
              <a
                className={`mail__link ${
                  theme.lightMode && 'mail__link--lightMode'
                }`}
                href="mailto:ricardo.zurita.dev@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                ricardo.zurita.dev@gmail.com
              </a>
            </span>
          </p>

          <p className="texts">O puedes visitar mis perfiles sociales:</p>

          <div className="contact__social">
            <a
              className={`nav_socialLinks ${
                theme.lightMode && 'nav__socialLinks--lightMode'
              }`}
              href="https://www.linkedin.com/in/ricardozuritadev/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </a>

            <a
              className={`nav_socialLinks ${
                theme.lightMode && 'nav__socialLinks--lightMode'
              }`}
              href="https://github.com/ricardozuritadev"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>

          <p className="texts">¡Muchas gracias por visitar mi web!</p>
        </div>

        <div className="contact__pic">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ricardo-zurita-resume.appspot.com/o/imgs%2Ffoto-rosa.png?alt=media&token=a086e152-de04-4d3c-a43f-64a0eb3a4152"
            alt="personaje mano"
            className={`contact__img contact__img--darkMode${
              theme.lightMode ? 'Off' : 'On'
            }`}
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ricardo-zurita-resume.appspot.com/o/imgs%2Ffoto-azul.png?alt=media&token=c852fa96-740f-46dd-b148-bf93a6534c15"
            alt="personaje mano"
            className={`contact__img contact__img--lightMode${
              theme.lightMode ? 'On' : 'Off'
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
