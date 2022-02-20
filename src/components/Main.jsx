import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Studies from './Studies';
import Work from './Work';
import Contact from './Contact';

const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/studies" element={<Studies />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
};

export default Main;
