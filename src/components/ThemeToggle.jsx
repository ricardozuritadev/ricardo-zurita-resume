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
    <div className="theme-switcher">
      <button onClick={handleModeChange}>Cambiar Tema</button>
    </div>
  );
};

export default ThemeToggle;
