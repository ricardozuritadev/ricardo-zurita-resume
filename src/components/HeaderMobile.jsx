import { useContext } from 'react';
import { themeContext } from '../utils/themeContext';
import HambMenu from './HambMenu';

const HeaderMobile = () => {
  const theme = useContext(themeContext);

  return (
    <header
      className={`navbar__mobile ${
        theme.lightMode && 'navbar__mobile--lightMode'
      }`}
    >
      <HambMenu />
    </header>
  );
};

export default HeaderMobile;
