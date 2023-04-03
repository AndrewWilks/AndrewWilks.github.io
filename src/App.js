import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import UnderConstruction from './components/UnderConstruction';
import NotFound from './components/notFound.js';


function App() {
  return (
      <div>
        {/* Add your navigation menu here */}
        <Routes>
          <Route path="" exact element={<Home/>} />
          <Route path="about" element={<UnderConstruction/>} />
          <Route path="projects" element={<UnderConstruction/>} />
          <Route path="resume" element={<UnderConstruction/>} />
          <Route path="contact" element={<UnderConstruction/>} />
          <Route path="*"element={<NotFound/>} />
        </Routes>
      </div>
  );
}

export default App;