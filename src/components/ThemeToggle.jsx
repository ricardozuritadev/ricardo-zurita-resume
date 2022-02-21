import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ThemeToggle = ({ theme, setTheme }) => {
  if (JSON.parse(localStorage.getItem('LIGHT_MODE')) === true) {
    document.body.classList.add('light-mode');
  }

  const handleModeChange = () => {
    if (!theme.lightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }

    setTheme({
      lightMode: !theme.lightMode,
    });
    localStorage.setItem('LIGHT_MODE', !theme.lightMode);
  };

  return (
    <div className="theme__toggle">
      <button
        className={`theme__toggleBtn ${
          theme.lightMode && 'theme__toggleBtn--lightMode'
        }`}
        onClick={handleModeChange}
      >
        {theme.lightMode ? (
          <FontAwesomeIcon icon={faMoon} size="lg" />
        ) : (
          <FontAwesomeIcon icon={faSun} size="lg" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
