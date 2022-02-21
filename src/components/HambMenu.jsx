import { slide as Menu } from 'react-burger-menu';
import { useContext } from 'react';
import { themeContext } from '../utils/themeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Nav from './Nav';

const HambMenu = () => {
  const theme = useContext(themeContext);

  const styles = {
    bmMenu: {
      background: `${theme.lightMode ? '#e6e6e6' : '#000'}`,
    },
  };

  return (
    <Menu
      right
      styles={styles}
      customBurgerIcon={<FontAwesomeIcon icon={faBars} />}
    >
      <Nav />
    </Menu>
  );
};

export default HambMenu;
