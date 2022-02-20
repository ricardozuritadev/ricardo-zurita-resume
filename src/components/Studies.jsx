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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              iusto ipsa odio officia, suscipit, dolores ipsam facilis cum
              expedita perferendis quaerat minus harum doloribus.
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              voluptate cumque tempora, obcaecati unde nam, facilis dolor
              molestiae consequuntur id delectus. Minus, laudantium aliquam!
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nisi
              officiis molestiae placeat, vitae nobis, ad dicta amet sapiente
              similique natus ullam, autem quibusdam!
            </p>
          </div>
        </div>

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              autem dolorem, eligendi dolor est cum ea. Qui, quo ullam nemo quas
              mollitia placeat eaque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studies;
