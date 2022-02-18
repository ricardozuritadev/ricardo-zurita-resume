import { useContext } from 'react';
import { themeContext } from '../utils/themeContext';

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
          src="https://firebasestorage.googleapis.com/v0/b/ricardo-zurita-resume.appspot.com/o/imgs%2Fr-home.png?alt=media&token=b31f9487-a000-482b-b2ad-656c5427c85f"
          alt="personaje 3D con gafas saludando"
          className="character__img"
        />
      </div>
      <div className="scroll">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/ricardo-zurita-resume.appspot.com/o/icons%2Fscroll.svg?alt=media&token=e0543fd8-dae7-4e37-aa6d-304f7501eb0a"
          alt="icono scroll"
          className="scroll__icon"
        />
        <p className="scroll__text">Scroll</p>
      </div>
    </section>
  );
};

export default Home;
