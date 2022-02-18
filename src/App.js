import { useState } from 'react';
import { themeContext } from './utils/themeContext';
import Main from './components/Main';
import NavBar from './components/NavBar';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  const [theme, setTheme] = useState({
    lightMode: JSON.parse(localStorage.getItem('LIGHT_MODE')),
  });

  return (
    <div className="container">
      <themeContext.Provider value={theme}>
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <NavBar />
        <Main />
      </themeContext.Provider>
    </div>
  );
};

export default App;
