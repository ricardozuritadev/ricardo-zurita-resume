import { useState } from 'react';
import { themeContext } from './utils/themeContext';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import ThemeToggle from './components/ThemeToggle';
import HeaderMobile from './components/HeaderMobile';
import HeaderDesktop from './components/HeaderDesktop';

const App = () => {
  const [theme, setTheme] = useState({
    lightMode: JSON.parse(localStorage.getItem('LIGHT_MODE')),
  });

  return (
    <div className="container">
      <themeContext.Provider value={theme}>
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <BrowserRouter>
          <HeaderMobile />
          <HeaderDesktop />
          <Main />
        </BrowserRouter>
      </themeContext.Provider>
    </div>
  );
};

export default App;
