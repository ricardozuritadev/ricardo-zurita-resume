import { useContext } from 'react';
import { themeContext } from '../utils/themeContext';

const Studies = () => {
  const theme = useContext(themeContext);

  return (
    <section className="studies">
      <h2
        className={`heading__primary ${
          theme.lightMode && 'heading__primary--lightMode'
        }`}
      >
        Estudios
      </h2>

      <div
        className={`studies__container ${
          theme.lightMode && 'studies__container--lightMode'
        }`}
      >
        <div>
          <h2
            className={`heading__tertiary ${
              theme.lightMode && 'heading__tertiary--lightMode'
            }`}
          >
            2022
          </h2>
          <div
            className={`studies__card ${
              theme.lightMode && 'studies__card--lightMode'
            }`}
          >
            <p
              className={`texts studies__school ${
                theme.lightMode && 'studies__school--lightMode'
              }`}
            >
              THE BRIDGE - Madrid
            </p>
            <h3 className="heading__secondary studies__title">
              Bootcamp Desarrollo Web Fullstack
            </h3>
            <p className="texts">
              Bootcamp intensivo en el que perfeccioné mis conocimientos de
              JavaScript, aprendí a desarrollar SPAs con React y a montar
              servidores con Node.js y Express. También aprendí bases de datos
              SQL y NoSQL y lo básico de DevOps.
            </p>
          </div>
        </div>

        <div>
          <h2
            className={`heading__tertiary ${
              theme.lightMode && 'heading__tertiary--lightMode'
            }`}
          >
            2021
          </h2>
          <div
            className={`studies__card ${
              theme.lightMode && 'studies__card--lightMode'
            }`}
          >
            <p
              className={`texts studies__school ${
                theme.lightMode && 'studies__school--lightMode'
              }`}
            >
              ESCUELA CEI - Madrid
            </p>
            <h3 className="heading__secondary studies__title">
              Máster en Diseño y Desarrollo Web
            </h3>
            <p className="texts">
              El máster consistió en dos módulos: en el primero aprendí a usar
              WordPress con el maquetador Elementor Pro, y en el segundo aprendí
              maquetación con HTML5 y CSS3. También aprendí las bases de
              JavaScript.
            </p>
          </div>
        </div>

        <div>
          <h2
            className={`heading__tertiary ${
              theme.lightMode && 'heading__tertiary--lightMode'
            }`}
          >
            2016
          </h2>
          <div
            className={`studies__card ${
              theme.lightMode && 'studies__card--lightMode'
            }`}
          >
            <p
              className={`texts studies__school ${
                theme.lightMode && 'studies__school--lightMode'
              }`}
            >
              ESCUELA TRAZOS - Madrid
            </p>
            <h3 className="heading__secondary studies__title">
              Máster en 3D Generalista
            </h3>
            <p className="texts">
              Con este máster perfeccioné mis habilidades en animación y
              modelado de personajes y entornos 3D. También aprendí a iluminar y
              texturizar estos modelos y a crear efectos visuales en
            </p>
          </div>
        </div>

        <div>
          <h2
            className={`heading__tertiary ${
              theme.lightMode && 'heading__tertiary--lightMode'
            }`}
          >
            2012
          </h2>
          <div
            className={`studies__card ${
              theme.lightMode && 'studies__card--lightMode'
            }`}
          >
            <p
              className={`texts studies__school ${
                theme.lightMode && 'studies__school--lightMode'
              }`}
            >
              UDLA - Ecuador
            </p>
            <h3 className="heading__secondary studies__title">
              Animación e Ilustración Digital 2D y 3D
            </h3>
            <p className="texts">
              Aprendí herramientas de diseño del paquete Adobe como Photoshop,
              Illustrator, After Effects y Premiere. También software de
              animación y modelado 3D como Autodesk Maya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studies;
