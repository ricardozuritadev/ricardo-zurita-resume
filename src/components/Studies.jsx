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
    </section>
  );
};

export default Studies;
