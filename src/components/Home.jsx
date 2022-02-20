import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { themeContext } from '../utils/themeContext';
import { faComputerMouse } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const theme = useContext(themeContext);

  return (
    <>
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
          <p
            className={`name__developer ${
              theme.lightMode && 'name__developer--lightMode'
            }`}
          >
            Desarrollador Web Full-Stack Junior <strong>|</strong>
            <span className={`mern ${theme.lightMode && 'mern--lightMode'}`}>
              {' '}
              MERN Stack
            </span>
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

      <section className="about">
        <div className="about__text">
          <h2
            className={`heading__primary ${
              theme.lightMode && 'heading__primary--lightMode'
            }`}
          >
            Sobre mí
          </h2>
          <p className="texts">
            Soy desarrollador web Full-Stack especializado en el stack
            <strong> MERN</strong> .
          </p>
          <p className="texts">
            Al principio, el desarrollo web era una curiosidad para mí. Ahora se
            ha convertido en una pasión y día a día estoy mejorando y en
            constante aprendizaje de nuevas tecnologías.
          </p>
          <p className="texts">
            También he hecho estudios en diseño 2D/3D, grabación y edición de
            vídeo.
          </p>
        </div>
        <div className="about__img"></div>
      </section>

      <section className="work">
        <h2
          className={`heading__primary ${
            theme.lightMode && 'heading__primary--lightMode'
          }`}
        >
          Proyectos
        </h2>

        <div className="work__grid">
          <a
            href="https://github.com/ricardozurita/ricardo-zurita-resume"
            target="_blank"
            rel="noreferrer"
          >
            <div className="work__img work__img--1"></div>
          </a>

          <a href="https://eiciempies.es/" target="_blank" rel="noreferrer">
            <div className="work__img work__img--2"></div>
          </a>

          <a
            href="https://github.com/ricardozurita/popclaim"
            target="_blank"
            rel="noreferrer"
          >
            <div className="work__img work__img--3"></div>
          </a>

          <a
            href="https://github.com/ricardozurita/galatours/tree/develop"
            target="_blank"
            rel="noreferrer"
          >
            <div className="work__img work__img--4"></div>
          </a>

          <a
            href="https://github.com/ricardozurita/poke-app-react"
            target="_blank"
            rel="noreferrer"
          >
            <div className="work__img work__img--5"></div>
          </a>

          <a
            href="https://github.com/ricardozurita/vet-patient-monitoring-react"
            target="_blank"
            rel="noreferrer"
          >
            <div className="work__img work__img--6"></div>
          </a>
        </div>
      </section>

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
                <a
                  className={`mail__link ${
                    theme.lightMode && 'mail__link--lightMode'
                  }`}
                  href="mailto:hola@ricardo-zurita.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  hola@ricardo-zurita.com{' '}
                </a>
              </span>
              si quieres contactar conmigo.
            </p>

            <p className="texts">O puedes visitar mis perfiles sociales:</p>

            <div className="contact__social">
              <a
                className={`nav_socialLinks ${
                  theme.lightMode && 'nav__socialLinks--lightMode'
                }`}
                href="https://www.linkedin.com/in/ricardozuritab/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              </a>

              <a
                className={`nav_socialLinks ${
                  theme.lightMode && 'nav__socialLinks--lightMode'
                }`}
                href="https://github.com/ricardozurita"
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
    </>
  );
};

export default Home;
