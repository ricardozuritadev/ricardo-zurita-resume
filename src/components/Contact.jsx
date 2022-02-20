import { useContext } from 'react';
import { themeContext } from '../utils/themeContext';

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
    </section>
  );
};

export default Contact;
