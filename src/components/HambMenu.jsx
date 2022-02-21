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
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
  };

  const showSettings = event => {
    event.preventDefault();
  };

  return (
    <Menu
      right
      styles={styles}
      customBurgerIcon={<FontAwesomeIcon icon={faBars} />}
    >
      <Nav />

      <a onClick={showSettings} className="menu-item--small" href="button">
        Settings
      </a>
    </Menu>
  );
};

export default HambMenu;
