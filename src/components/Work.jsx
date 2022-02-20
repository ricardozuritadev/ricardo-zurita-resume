import { useContext } from 'react';
import { themeContext } from '../utils/themeContext';

const Work = () => {
  const theme = useContext(themeContext);

  return (
    <section className="work">
      <h2
        className={`heading__primary ${
          theme.lightMode && 'heading__primary--lightMode'
        }`}
      >
        Proyectos
      </h2>
    </section>
  );
};

export default Work;
